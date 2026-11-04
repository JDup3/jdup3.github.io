import { describe, expect, it } from 'vitest';
import { whoami } from '@/content/about';
import { header as homeHeader } from '@/content/home';
import { pageFor, pages, pageUrl } from '@/content/site';
import { applyPageMeta } from '@/lib/pageMeta';

describe('site metadata', () => {
  it('reuses page wording for the descriptions', () => {
    const intro = homeHeader.intro.replace(/^"""\s*|\s*"""$/g, '');
    expect(intro.startsWith(pageFor('/').description)).toBe(true);
    expect(pageFor('/about').description).toBe(whoami.output);
  });

  it('keeps descriptions and titles within search-result lengths', () => {
    for (const page of pages) {
      expect(page.title.length).toBeLessThanOrEqual(60);
      expect(page.description.length).toBeLessThanOrEqual(200);
    }
  });

  it('finds a page by path, ignoring a trailing slash', () => {
    expect(pageFor('/about/').file).toBe('about.tsx');
    expect(pageFor('/nope').file).toBe('home.tsx');
    expect(pageUrl(pageFor('/'))).toBe('https://jdup3.github.io/');
    expect(pageUrl(pageFor('/contact'))).toBe(
      'https://jdup3.github.io/contact'
    );
  });

  it('points the head tags at the current page', () => {
    const doc = document.implementation.createHTMLDocument();
    doc.head.innerHTML = `
      <link rel="canonical" href="https://jdup3.github.io/" />
      <meta name="description" content="" />
      <meta property="og:url" content="" />
      <meta property="og:title" content="" />
      <meta property="og:description" content="" />
      <meta name="twitter:title" content="" />
      <meta name="twitter:description" content="" />`;
    const page = pageFor('/experience');

    applyPageMeta(page, doc);

    const attr = (selector: string, name: string) =>
      doc.head.querySelector(selector)?.getAttribute(name);
    expect(doc.title).toBe('Work Experience · Jonathan Dupe');
    expect(attr('link[rel="canonical"]', 'href')).toBe(
      'https://jdup3.github.io/experience'
    );
    expect(attr('meta[property="og:url"]', 'content')).toBe(
      'https://jdup3.github.io/experience'
    );
    expect(attr('meta[property="og:title"]', 'content')).toBe(page.title);
    expect(attr('meta[name="twitter:description"]', 'content')).toBe(
      page.description
    );
  });
});
