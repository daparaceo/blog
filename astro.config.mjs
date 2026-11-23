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

  // 정보보안기사 요점 정리를 출제기준 과목에 맞춰 옮긴 챕터 (2026-11)
  redirects: {
    '/learn/certs/security/general/social-engineering': '/learn/certs/security/system/social-engineering/',
    '/learn/certs/security/application/cloud-security': '/learn/certs/security/system/cloud-security/',
    '/learn/certs/security/network/email-security': '/learn/certs/security/application/email-security/',
    '/learn/certs/security/application/auth-sso': '/learn/certs/security/general/auth-sso/',
    '/learn/certs/security/system/access-control': '/learn/certs/security/general/access-control/',
    '/learn/certs/security/system/security-model': '/learn/certs/security/general/security-model/',
    '/learn/certs/security/system/symmetric-crypto': '/learn/certs/security/general/symmetric-crypto/',
    '/learn/certs/security/system/asymmetric-crypto': '/learn/certs/security/general/asymmetric-crypto/',
    '/learn/certs/security/system/hash-mac': '/learn/certs/security/general/hash-mac/',
    '/learn/certs/security/system/pki-signature': '/learn/certs/security/general/pki-signature/',
    '/learn/certs/security/general/security-concepts': '/learn/certs/security/law/security-concepts/',
    '/learn/certs/security/general/security-management': '/learn/certs/security/law/security-management/',
    '/learn/certs/security/general/risk-management': '/learn/certs/security/law/risk-management/',
    '/learn/certs/security/general/risk-analysis': '/learn/certs/security/law/risk-analysis/',
    '/learn/certs/security/general/risk-treatment': '/learn/certs/security/law/risk-treatment/',
    '/learn/certs/security/general/security-audit': '/learn/certs/security/law/security-audit/',
    '/learn/certs/security/general/bcp-drp': '/learn/certs/security/law/bcp-drp/',
    '/learn/certs/security/general/physical-security': '/learn/certs/security/law/physical-security/',
    '/learn/certs/security/general/forensics': '/learn/certs/security/law/forensics/',
  },

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
