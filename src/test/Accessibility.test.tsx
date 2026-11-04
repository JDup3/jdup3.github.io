import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { afterEach, describe, it, expect, vi } from 'vitest';
import App from '@/App';

const renderApp = (path = '/') =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );

describe('accessibility', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('provides a skip link to the main landmark and a footer', () => {
    renderApp();

    const skip = screen.getByRole('link', { name: 'Skip to main content' });
    expect(skip).toHaveAttribute('href', '#main-content');
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main-content');
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('renders external buttons as links, not links nested in buttons', () => {
    renderApp('/experience');

    for (const link of screen.getAllByRole('link')) {
      expect(link.closest('button')).toBeNull();
    }
    const clone = screen.getByRole('link', { name: /git clone/ });
    expect(clone).toHaveAttribute(
      'href',
      'https://github.com/JDup3/jdup3.github.io'
    );
    // The prompt keeps its trailing space even inside an inline-flex link.
    expect(clone.textContent).toBe('$ git clone');
  });

  const stubMotionPreference = (reduce: boolean) => {
    vi.stubGlobal(
      'matchMedia',
      vi.fn((query: string) => ({
        matches: reduce && query === '(prefers-reduced-motion: reduce)',
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }))
    );
    // An observer that never fires: typing would never start on its own.
    vi.stubGlobal(
      'IntersectionObserver',
      class {
        observe = vi.fn();
        unobserve = vi.fn();
        disconnect = vi.fn();
      }
    );
  };

  it('keeps untyped code readable by screen readers until it scrolls into view', () => {
    stubMotionPreference(false);
    renderApp('/');
    // The text is in the DOM (and the accessibility tree) but not yet shown.
    const text = screen.getByText("'Jonathan Dupe'");
    expect(text.closest('.opacity-0')).not.toBeNull();
    expect(text.closest('[aria-hidden="true"]')).toBeNull();
  });

  it('shows code blocks in full when the user prefers reduced motion', () => {
    stubMotionPreference(true);
    renderApp('/');
    expect(
      screen.getByText("'Jonathan Dupe'").closest('.opacity-0')
    ).toBeNull();
  });
});
