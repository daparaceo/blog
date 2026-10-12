import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { readFileSync } from 'fs';

try {
  const raw = readFileSync('.private/.env', 'utf8');
  raw.split('\n').forEach((line) => {
    const m = line.match(/^\s*([^#=\s][^=]*?)\s*=\s*(.*?)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^['"]|['"]$/g, '');
  });
} catch {}

export default defineConfig({
  site: 'https://daparapara.com',
  trailingSlash: 'always',

  integrations: [
    tailwind(),
  ],

  vite: {
    define: {
      'import.meta.env.KAKAO_JAVASCRIPT_KEY': JSON.stringify(process.env.KAKAO_JAVASCRIPT_KEY ?? ''),
    },
  },

  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
