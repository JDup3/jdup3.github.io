import { version as reactVersion } from 'react';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, it, expect } from 'vitest';
import App from '@/App';

describe('status bar', () => {
  it.each(['/', '/about', '/experience', '/contact'])(
    'shows on %s, below the page, with the versions the site is built with',
    (path) => {
      render(
        <MemoryRouter initialEntries={[path]}>
          <App />
        </MemoryRouter>
      );

      const statusBar = screen.getByRole('contentinfo');
      expect(screen.getByRole('main')).not.toContainElement(statusBar);
      const bar = within(statusBar);
      for (const item of [
        'WSL: Ubuntu 22.04',
        'portfolio-deployment*',
        'Python 3.13',
        `React ${reactVersion}`,
        `TypeScript ${__TYPESCRIPT_VERSION__}`,
      ]) {
        expect(bar.getByText(item)).toBeInTheDocument();
      }
      expect(__TYPESCRIPT_VERSION__).toMatch(/^\d+\.\d+\.\d+/);
    }
  );
});
