import { pageUrl, type Page } from '@/content/site';

/**
 * Point the document's title and per-page head tags at `page` after a
 * client-side navigation. The build writes the same tags into each page's
 * HTML (vite.config.ts), so crawlers that don't run scripts see them too;
 * this only keeps them current while the app routes.
 */
export function applyPageMeta(page: Page, doc: Document = document) {
  const url = pageUrl(page);
  doc.title = page.title;

  const set = (selector: string, attribute: string, value: string) => {
    doc.head.querySelector(selector)?.setAttribute(attribute, value);
  };
  set('link[rel="canonical"]', 'href', url);
  set('meta[name="description"]', 'content', page.description);
  set('meta[property="og:url"]', 'content', url);
  set('meta[property="og:title"]', 'content', page.title);
  set('meta[property="og:description"]', 'content', page.description);
  set('meta[name="twitter:title"]', 'content', page.title);
  set('meta[name="twitter:description"]', 'content', page.description);
}
