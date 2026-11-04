import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { describe, expect, it } from 'vitest';
import App from '@/App';

const renderApp = (path = '/') =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );

describe('routes', () => {
  it.each([
    ['/', 'class JonathanDupe(SoftwareArchitect):'],
    ['/about', 'class JonathanDupe extends SoftwareArchitect'],
    ['/experience', 'const professionalJourney = await getExperience()'],
    ['/contact', 'async function getInTouch()'],
  ])('%s has one h1: %s', (path, heading) => {
    renderApp(path);
    const headings = screen.getAllByRole('heading', { level: 1 });
    expect(headings).toHaveLength(1);
    expect(headings[0]).toHaveTextContent(heading);
  });

  it.each(['/', '/about', '/experience', '/contact'])(
    'opens external links on %s in a new tab without an opener',
    (path) => {
      renderApp(path);
      const external = screen
        .getAllByRole('link')
        .filter((link) => link.getAttribute('href')?.startsWith('http'));
      expect(external.length).toBeGreaterThan(0);
      for (const link of external) {
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      }
    }
  );
});

describe('mobile menu', () => {
  it('opens, navigates and closes again', async () => {
    const user = userEvent.setup();
    renderApp('/');

    const toggle = screen.getByRole('button', { name: 'Toggle menu' });
    const menu = document.getElementById(
      toggle.getAttribute('aria-controls')!
    )!;
    expect(toggle).toHaveAttribute('aria-expanded', 'false');

    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');

    await user.click(within(menu).getByRole('link', { name: 'about.tsx' }));
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(menu).toHaveAttribute('inert');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'class JonathanDupe extends SoftwareArchitect'
    );
  });

  it('closes when the toggle is pressed again', async () => {
    const user = userEvent.setup();
    renderApp('/');
    const toggle = screen.getByRole('button', { name: 'Toggle menu' });

    await user.click(toggle);
    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });
});
