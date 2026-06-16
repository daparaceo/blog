// 수동 sitemap 생성 엔드포인트
// @astrojs/sitemap 라이브러리 버그 우회용

import { getCollection } from 'astro:content';
import { CHAPTERS } from '../data/certs/security/chapters';
import fs from 'node:fs';
import path from 'node:path';

export async function GET() {
  const siteUrl = 'https://daparapara.com';

  const posts = await getCollection('learn', ({ data }) => !data.draft);

  const staticPages = [
    { url: '/',                   priority: '1.0', changefreq: 'daily' },
    { url: '/about/',             priority: '0.8', changefreq: 'monthly' },
    { url: '/privacy/',           priority: '0.5', changefreq: 'yearly' },
    { url: '/search/',            priority: '0.7', changefreq: 'monthly' },
    { url: '/search/library/',    priority: '0.7', changefreq: 'monthly' },
    { url: '/tools/isbn-scan/',   priority: '0.6', changefreq: 'monthly' },
    { url: '/learn/english/books/', priority: '0.8', changefreq: 'weekly' },
  ];

  // 영어원서 포스트 (learn 컬렉션)
  const englishPosts = posts
    .map((post) => ({
      url: `/learn/english/books/${post.slug.split('/').pop()}/`,
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: post.data.publishedAt.toISOString().split('T')[0],
    }));

  // 보안기사 섹션 (새 URL)
  const questionsDir = path.resolve(process.cwd(), 'src/data/certs/security/questions');
  const examSlugs = fs.readdirSync(questionsDir)
    .filter((f: string) => f.endsWith('.json'))
    .map((f: string) => f.replace('.json', ''));

  const subjectSlugs = ['system', 'network', 'application', 'general', 'law'];

  const securityEntries = [
    { url: '/learn/certs/security/', priority: '0.8', changefreq: 'weekly' },
    ...subjectSlugs.map(slug => ({
      url: `/learn/certs/security/${slug}/`,
      priority: '0.7',
      changefreq: 'monthly',
    })),
    ...CHAPTERS.map(ch => ({
      url: `/learn/certs/security/${ch.subject}/${ch.chapter}/`,
      priority: '0.7',
      changefreq: 'monthly',
    })),
    ...examSlugs.map((slug: string) => ({
      url: `/learn/certs/security/exam/written/${slug}/`,
      priority: '0.7',
      changefreq: 'monthly',
    })),
  ];

  const allEntries = [...staticPages, ...englishPosts, ...securityEntries];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allEntries
  .map(
    (entry) => `  <url>
    <loc>${siteUrl}${entry.url}</loc>
    ${'lastmod' in entry ? `<lastmod>${entry.lastmod}</lastmod>` : ''}
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
