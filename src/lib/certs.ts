// 자격증 기출 공통 로더
// src/data/certs/{cert}/config.json 이 있는 시험만 /learn/certs/[cert]/ 공통 페이지로 생성된다.
// (security 는 전용 페이지를 쓰므로 config.json 을 두지 않는다)

import fs from 'node:fs';
import path from 'node:path';

export type CertSubject = { slug: string; label: string; desc: string; questions: number };
export type CertConfig = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  passScore: number;
  subjects: CertSubject[];
};
export type CertChapter = {
  subject: string;
  chapter: string;
  chapterLabel: string;
  content: string;
  keywords: string[];
};
export type CertQuestion = {
  id: string;
  year: number;
  session: number;
  number: number;
  subject: string;
  topic?: string;
  question: string;
  options: string[];
  answer?: number;
  answers?: number[];
  explanation?: string;
  hasImage?: boolean;
  tags?: string[];
  examSlug: string;
};

const DATA_ROOT = path.resolve(process.cwd(), 'src/data/certs');
const IMAGE_ROOT = path.resolve(process.cwd(), 'public/images/certs');
const IMAGE_EXTENSIONS = ['webp', 'png', 'jpg', 'jpeg'];
const chapterModules = import.meta.glob<{ CHAPTERS: CertChapter[] }>('../data/certs/*/chapters.ts', { eager: true });

export function listCerts(): CertConfig[] {
  return fs.readdirSync(DATA_ROOT, { withFileTypes: true })
    .filter(d => d.isDirectory() && fs.existsSync(path.join(DATA_ROOT, d.name, 'config.json')))
    .map(d => JSON.parse(fs.readFileSync(path.join(DATA_ROOT, d.name, 'config.json'), 'utf-8')));
}

export function getChapters(cert: string): CertChapter[] {
  return chapterModules[`../data/certs/${cert}/chapters.ts`]?.CHAPTERS ?? [];
}

export function listExamSlugs(cert: string): string[] {
  const dir = path.join(DATA_ROOT, cert, 'questions');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => f.endsWith('.json')).map(f => f.replace('.json', '')).sort();
}

export function loadExam(cert: string, slug: string): CertQuestion[] {
  const raw = fs.readFileSync(path.join(DATA_ROOT, cert, 'questions', `${slug}.json`), 'utf-8');
  return JSON.parse(raw).map((q: any) => ({ ...q, examSlug: slug }));
}

export function loadAllQuestions(cert: string): CertQuestion[] {
  return listExamSlugs(cert).flatMap(slug => loadExam(cert, slug));
}

// 파일명 = 문제 id 규칙으로 이미지를 찾는다 ({id}, {id}_2, {id}-{k})
export function createImageResolver(cert: string) {
  const dir = path.join(IMAGE_ROOT, cert, 'questions');
  const byStem = new Map<string, { file: string; priority: number }>();
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach(file => {
      const priority = IMAGE_EXTENSIONS.indexOf(path.extname(file).slice(1).toLowerCase());
      if (priority === -1) return;
      const stem = path.basename(file, path.extname(file));
      const current = byStem.get(stem);
      if (!current || priority < current.priority) byStem.set(stem, { file, priority });
    });
  }

  function series(prefix: string) {
    return Array.from(byStem.entries())
      .filter(([stem]) => stem === prefix || (stem.startsWith(`${prefix}_`) && /^\d+$/.test(stem.slice(prefix.length + 1))))
      .sort(([a], [b]) => {
        const order = (s: string) => (s === prefix ? 0 : Number(s.slice(prefix.length + 1)));
        return order(a) - order(b);
      })
      .map(([, image]) => `/images/certs/${cert}/questions/${image.file}`);
  }

  return {
    question: (q: CertQuestion) => series(q.id),
    option: (q: CertQuestion, optionNumber: number) => series(`${q.id}-${optionNumber}`),
  };
}

const OPTION_SYMBOLS = ['①', '②', '③', '④', '⑤'];

export function getAnswers(q: CertQuestion): number[] {
  return Array.isArray(q.answers) ? q.answers : [q.answer as number];
}

export function getAnswerText(q: CertQuestion): string {
  return getAnswers(q)
    .map(answer => `${OPTION_SYMBOLS[answer - 1]} ${q.options[answer - 1]?.replace(/^[①②③④⑤]\s*/, '')}`)
    .join(', ');
}

export function escapeHtml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function scoreQuestion(q: CertQuestion, chapter: CertChapter, subjectLabel: string) {
  const questionText = q.question.toLowerCase();
  const optionText = q.options.join(' ').toLowerCase();
  const explanationText = (q.explanation ?? '').toLowerCase();
  const metaText = `${q.topic ?? ''} ${(q.tags ?? []).join(' ')}`.toLowerCase();
  const matched: string[] = [];
  let score = 0;
  chapter.keywords.forEach(kw => {
    const keyword = kw.toLowerCase();
    if (questionText.includes(keyword) || metaText.includes(keyword)) {
      matched.push(kw);
      score += 2;
    } else if (optionText.includes(keyword) || explanationText.includes(keyword)) {
      matched.push(kw);
      score += 1;
    }
  });
  if (score > 0 && q.subject === subjectLabel) score += 1;
  return { score, matched };
}

export function getRelatedChapters(config: CertConfig, chapters: CertChapter[], q: CertQuestion) {
  return chapters
    .map(ch => {
      const subjectLabel = config.subjects.find(s => s.slug === ch.subject)?.label ?? '';
      return { ...ch, _score: scoreQuestion(q, ch, subjectLabel).score };
    })
    .filter(ch => ch._score >= 3)
    .sort((a, b) => b._score - a._score)
    .slice(0, 3);
}

export function getRelatedQuestions(config: CertConfig, chapter: CertChapter, questions: CertQuestion[]) {
  const subjectLabel = config.subjects.find(s => s.slug === chapter.subject)?.label ?? '';
  const scored = questions
    .map(q => {
      const { score, matched } = scoreQuestion(q, chapter, subjectLabel);
      return { ...q, _score: score, _matchedKeywords: matched };
    })
    .filter(q => q._score > 0)
    .sort((a, b) => b._score - a._score);
  const primary = scored.filter(q => q._score >= 3).slice(0, 8);
  return primary.length >= 2 ? primary : scored.slice(0, 3);
}
