// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.MODE ?? process.env.NODE_ENV ?? 'production', process.cwd(), 'PUBLIC');

/** @param {string | undefined} v */
function basePath(v) {
  if (!v || v === '/') return '/';
  return v.startsWith('/') ? (v.endsWith('/') ? v : `${v}/`) : `/${v.endsWith('/') ? v : `${v}/`}`;
}

export default defineConfig({
  site: env.PUBLIC_SITE_URL || 'https://calcicloud.com',
  base: basePath(env.PUBLIC_BASE_PATH),
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
