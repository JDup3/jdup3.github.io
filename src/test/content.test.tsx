import { version as reactVersion } from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import App from '@/App';

// Elements that start a new line of rendered text. Inline elements (span, a)
// join their text onto the current line, as a browser lays them out.
const BLOCK_TAGS = new Set([
  'DIV',
  'P',
  'H1',
  'H2',
  'H3',
  'H4',
  'UL',
  'LI',
  'MAIN',
  'SECTION',
]);

// The page's visible text, one entry per rendered line, with whitespace
// collapsed the way the browser does. Links are suffixed with their target so
// a changed URL also shows up in the snapshot. The Home status bar's React and
// TypeScript versions are masked so dependency bumps don't break the snapshot.
function renderedLines(root: Element): string[] {
  const lines: string[] = [];
  let current = '';
  const flush = () => {
    const line = current
      .replace(/\s+/g, ' ')
      .trim()
      .replace(`React ${reactVersion}`, 'React <version>')
      .replace(`TypeScript ${__TYPESCRIPT_VERSION__}`, 'TypeScript <version>');
    if (line) lines.push(line);
    current = '';
  };
  const walk = (node: Node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      current += node.textContent ?? '';
      return;
    }
    if (!(node instanceof Element)) return;
    const isBlock = BLOCK_TAGS.has(node.tagName);
    if (isBlock) flush();
    node.childNodes.forEach(walk);
    if (node instanceof HTMLAnchorElement) {
      current += ` <${node.getAttribute('href')}>`;
    }
    if (isBlock) flush();
  };
  walk(root);
  flush();
  return lines;
}

describe('page content', () => {
  beforeEach(() => {
    // Reduced motion renders every code block in full, without typing.
    vi.stubGlobal(
      'matchMedia',
      vi.fn((query: string) => ({
        matches: query === '(prefers-reduced-motion: reduce)',
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }))
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it.each(['/', '/about', '/experience', '/contact'])(
    'renders the same text on %s',
    (path) => {
      render(
        <MemoryRouter initialEntries={[path]}>
          <App />
        </MemoryRouter>
      );
      expect(renderedLines(screen.getByRole('main'))).toMatchSnapshot();
    }
  );
});
