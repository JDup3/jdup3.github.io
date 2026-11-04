import { render, screen, fireEvent, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import { describe, it, expect } from 'vitest';
import App from '@/App';

describe('App', () => {
  it('renders the navigation as editor tabs named after source files', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const tabs = within(screen.getByRole('navigation', { name: 'Pages' }));
    expect(tabs.getAllByRole('link').map((link) => link.textContent)).toEqual([
      'home.tsx',
      'about.tsx',
      'experience.tsx',
      'contact.tsx',
    ]);
  });

  it('navigates routes and invokes window.scrollTo stub', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByRole('link', { name: 'about.tsx' }));

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(window.scrollTo).toHaveBeenCalled();
  });
});
