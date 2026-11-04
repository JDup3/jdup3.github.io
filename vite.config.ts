/// <reference types="vitest/config" />
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath, URL } from 'node:url';
import { createRequire } from 'node:module';
import { pages, pageUrl, site, type Page } from './src/content/site.ts';

const require = createRequire(import.meta.url);
// Installed TypeScript version, shown in the Home page status bar.
const { version: typescriptVersion } = require('typescript/package.json') as {
  version: string;
};

const escapeHtml = (text: string) =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/** The `<head>` tags for one page: title, description, canonical, social cards. */
function pageMetaTags(page: Page): string {
  const url = pageUrl(page);
  const image = site.url + site.image.path;
  const meta = (key: 'name' | 'property', name: string, value: string) =>
    `<meta ${key}="${name}" content="${escapeHtml(value)}" />`;
  return [
    `<title>${escapeHtml(page.title)}</title>`,
    meta('name', 'description', page.description),
    `<link rel="canonical" href="${url}" />`,
    meta('name', 'theme-color', site.themeColor),
    meta('property', 'og:type', 'website'),
    meta('property', 'og:site_name', site.name),
    meta('property', 'og:title', page.title),
    meta('property', 'og:description', page.description),
    meta('property', 'og:url', url),
    meta('property', 'og:image', image),
    meta('property', 'og:image:width', String(site.image.width)),
    meta('property', 'og:image:height', String(site.image.height)),
    meta('property', 'og:image:alt', site.image.alt),
    meta('name', 'twitter:card', 'summary_large_image'),
    meta('name', 'twitter:title', page.title),
    meta('name', 'twitter:description', page.description),
    meta('name', 'twitter:image', image),
    meta('name', 'twitter:image:alt', site.image.alt),
  ]
    .map((tag) => `    ${tag}`)
    .join('\n');
}

const META_START = '<!-- page-meta:start -->';
const META_END = '<!-- page-meta:end -->';
const metaBlock = (page: Page) =>
  `${META_START}\n${pageMetaTags(page)}\n    ${META_END}`;

/**
 * Per-page HTML for GitHub Pages. index.html gets Home's head tags; the build
 * also writes about.html, experience.html and contact.html with their own, so
 * /about etc. answer 200 with the right title and social card (Pages serves
 * `/about` from `about.html`) instead of going through the 404.html redirect.
 * It also writes sitemap.xml from the same page list.
 */
function pageMeta(): Plugin {
  return {
    name: 'page-meta',
    transformIndexHtml(html) {
      if (!html.includes('<!-- page-meta -->')) {
        throw new Error('index.html is missing the <!-- page-meta --> marker');
      }
      return html.replace('<!-- page-meta -->', metaBlock(pages[0]));
    },
    generateBundle: {
      order: 'post',
      handler(_options, bundle) {
        const index = bundle['index.html'];
        if (index?.type !== 'asset' || typeof index.source !== 'string') {
          throw new Error('page-meta: no index.html in the bundle');
        }
        const html = index.source;
        const start = html.indexOf(META_START);
        const end = html.indexOf(META_END) + META_END.length;
        for (const page of pages.slice(1)) {
          this.emitFile({
            type: 'asset',
            fileName: `${page.path.slice(1)}.html`,
            source: html.slice(0, start) + metaBlock(page) + html.slice(end),
          });
        }
        const urls = pages
          .map((page) => `  <url><loc>${pageUrl(page)}</loc></url>`)
          .join('\n');
        this.emitFile({
          type: 'asset',
          fileName: 'sitemap.xml',
          source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
        });
      },
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), pageMeta()],
  resolve: {
    // `@/*` alias, mirrored in tsconfig.json and tsconfig.app.json
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  base: '/',
  define: {
    __TYPESCRIPT_VERSION__: JSON.stringify(typescriptVersion),
  },
  build: {
    outDir: 'dist',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    include: ['src/test/**/*.test.tsx'],
  },
});
