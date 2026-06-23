// RSS 2.0 피드 자동 생성 엔드포인트
// 네이버 서치어드바이저 RSS 등록용

import { getCollection } from 'astro:content';

export async function GET() {
  const siteUrl = 'https://daparapara.com';
  const blogName = 'daparapara';
  const blogDescription = '생활정보, IT, 재테크, 캠핑, 영어원서 등 다양한 주제의 블로그';

  const learnPosts = await getCollection('learn', ({ data }) => !data.draft);

  const allWithUrl = [
    ...learnPosts.map(p => ({ data: p.data, url: `/learn/english/books/${p.slug.split('/').pop()}/` })),
  ];
  const sorted = allWithUrl.sort(
    (a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf()
  );

  const items = sorted.map(({ data, url }) => `
    <item>
      <title><![CDATA[${data.title}]]></title>
      <link>${siteUrl}${url}</link>
      <guid>${siteUrl}${url}</guid>
      <description><![CDATA[${data.description ?? ''}]]></description>
      <pubDate>${data.publishedAt.toUTCString()}</pubDate>
    </item>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${blogName}]]></title>
    <link>${siteUrl}/</link>
    <description><![CDATA[${blogDescription}]]></description>
    <language>ko</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
