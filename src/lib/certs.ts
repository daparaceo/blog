// 자격증 기출 공통 로더
// src/data/certs/{cert}/config.json 이 있는 시험만 /learn/certs/[cert]/ 공통 페이지로 생성된다.
// (security 는 전용 페이지를 쓰므로 config.json 을 두지 않는다)

import fs from 'node:fs';
import path from 'node:path';

// aliases: 과목 구성이 바뀌기 전 과목명. 구 기출 문항도 관련 개념 매칭에서 같은 과목 가산점을 받는다
export type CertSubject = { slug: string; label: string; desc: string; questions: number; aliases?: string[] };
export type CertConfig = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  passScore: number;
  subjectPassScore?: number;   // 과목별 과락 기준 (없으면 과락 없음)
  subjects: CertSubject[];
  sourceNote?: string;          // 기출 회차 페이지 상단 출처 안내
  examSummary?: string;         // 학습 홈 상단 요약 (없으면 "N과목 · 총 N문제")
  subjectHeading?: string;      // 학습 홈 요점 정리 섹션 제목
  writtenHeading?: string;      // 학습 홈 기출 섹션 제목
  writtenNote?: string;         // 학습 홈 기출 섹션 안내
  predictedNote?: string;       // 예상문제 페이지·섹션 안내
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
  imageMissing?: boolean;
  tags?: string[];
  examSlug: string;
  examKind: ExamKind;
};
// written: 공단 공개 기출 (questions/) / predicted: 출제기준을 바탕으로 자체 제작한 예상문제 (predicted/)
export type ExamKind = 'written' | 'predicted';

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

const EXAM_DIRS: Record<ExamKind, string> = { written: 'questions', predicted: 'predicted' };

export function listExamSlugs(cert: string, kind: ExamKind = 'written'): string[] {
  const dir = path.join(DATA_ROOT, cert, EXAM_DIRS[kind]);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => f.endsWith('.json')).map(f => f.replace('.json', '')).sort();
}

export function loadExam(cert: string, slug: string, kind: ExamKind = 'written'): CertQuestion[] {
  const raw = fs.readFileSync(path.join(DATA_ROOT, cert, EXAM_DIRS[kind], `${slug}.json`), 'utf-8');
  return JSON.parse(raw).map((q: any) => ({ ...q, examSlug: slug, examKind: kind }));
}

export function loadAllQuestions(cert: string): CertQuestion[] {
  return (['written', 'predicted'] as ExamKind[])
    .flatMap(kind => listExamSlugs(cert, kind).flatMap(slug => loadExam(cert, slug, kind)));
}

// 회차 표시: 기출은 "2010년 1회", 예상문제는 "예상문제 1회" (예상문제 파일명은 01, 02 ...)
export function examTitle(kind: ExamKind, slug: string): string {
  if (kind === 'predicted') return `예상문제 ${Number(slug)}회`;
  const [year, session] = slug.split('-');
  return `${year}년 ${session}회`;
}

export function examHref(cert: string, kind: ExamKind, slug: string): string {
  return `/learn/certs/${cert}/exam/${kind}/${slug}/`;
}

export function questionLabel(q: CertQuestion): string {
  return `${examTitle(q.examKind, q.examSlug)} ${q.number}번`;
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

// 2글자 이하 키워드는 다른 단어의 일부로 걸리기 쉽다 ('컬' ⊂ '컬러링').
// 앞뒤가 단어 경계일 때만 인정하고, 뒤에는 조사가 붙는 것까지 허용한다.
const SHORT_KEYWORD_MAX = 2;
const PARTICLES = '은는이가을를의에와과도로만';

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function containsKeyword(text: string, keyword: string) {
  if (keyword.length > SHORT_KEYWORD_MAX) return text.includes(keyword);
  const word = '[0-9a-z가-힣]';
  const pattern = new RegExp(`(?<!${word})${escapeRegExp(keyword)}(?:[${PARTICLES}](?!${word})|(?!${word}))`);
  return pattern.test(text);
}

function scoreQuestion(q: CertQuestion, chapter: CertChapter, subjectLabels: string[]) {
  const questionText = q.question.toLowerCase();
  const optionText = q.options.join(' ').toLowerCase();
  const explanationText = (q.explanation ?? '').toLowerCase();
  const metaText = `${q.topic ?? ''} ${(q.tags ?? []).join(' ')}`.toLowerCase();
  const matched: string[] = [];
  let score = 0;
  chapter.keywords.forEach(kw => {
    const keyword = kw.toLowerCase();
    if (containsKeyword(questionText, keyword) || containsKeyword(metaText, keyword)) {
      matched.push(kw);
      score += 2;
    } else if (containsKeyword(optionText, keyword) || containsKeyword(explanationText, keyword)) {
      matched.push(kw);
      score += 1;
    }
  });
  if (score > 0 && subjectLabels.includes(q.subject)) score += 1;
  return { score, matched };
}

function subjectLabels(config: CertConfig, slug: string): string[] {
  const subject = config.subjects.find(s => s.slug === slug);
  return subject ? [subject.label, ...(subject.aliases ?? [])] : [];
}

export function getRelatedChapters(config: CertConfig, chapters: CertChapter[], q: CertQuestion) {
  return chapters
    .map(ch => ({ ...ch, _score: scoreQuestion(q, ch, subjectLabels(config, ch.subject)).score }))
    .filter(ch => ch._score >= 3)
    .sort((a, b) => b._score - a._score)
    .slice(0, 3);
}

export function getRelatedQuestions(config: CertConfig, chapter: CertChapter, questions: CertQuestion[]) {
  const labels = subjectLabels(config, chapter.subject);
  const scored = questions
    .map(q => {
      const { score, matched } = scoreQuestion(q, chapter, labels);
      return { ...q, _score: score, _matchedKeywords: matched };
    })
    .filter(q => q._score > 0)
    .sort((a, b) => b._score - a._score);
  const primary = scored.filter(q => q._score >= 3).slice(0, 8);
  return primary.length >= 2 ? primary : scored.slice(0, 3);
}
