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

describe('tab bar', () => {
  const tab = (name: string) =>
    within(screen.getByRole('navigation', { name: 'Pages' })).getByRole(
      'link',
      { name }
    );

  it.each([
    ['/', 'home.tsx'],
    ['/about', 'about.tsx'],
    ['/experience', 'experience.tsx'],
    ['/contact', 'contact.tsx'],
  ])('marks the %s tab as the current page', (path, file) => {
    renderApp(path);
    const current = screen
      .getAllByRole('link')
      .filter((link) => link.getAttribute('aria-current') === 'page');
    expect(current).toEqual([tab(file)]);
  });

  it('opens a page from its tab and moves the current marker', async () => {
    const user = userEvent.setup();
    renderApp('/');

    await user.click(tab('experience.tsx'));
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'const professionalJourney = await getExperience()'
    );
    expect(tab('experience.tsx')).toHaveAttribute('aria-current', 'page');
    expect(tab('home.tsx')).not.toHaveAttribute('aria-current');
  });

  it('can be used from the keyboard', async () => {
    const user = userEvent.setup();
    renderApp('/');

    await user.tab(); // skip link
    await user.tab();
    expect(tab('home.tsx')).toHaveFocus();
    await user.tab();
    expect(tab('about.tsx')).toHaveFocus();
    await user.keyboard('{Enter}');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'class JonathanDupe extends SoftwareArchitect'
    );
  });

  it.each([
    ['/', 'Jonathan Dupe · Lead Software Developer'],
    ['/about', 'About me · Jonathan Dupe'],
    ['/experience', 'Work Experience · Jonathan Dupe'],
    ['/contact', 'Contact · Jonathan Dupe'],
  ])('gives %s its own document title', (path, title) => {
    renderApp(path);
    expect(document.title).toBe(title);
  });
});
