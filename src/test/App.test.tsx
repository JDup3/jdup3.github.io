import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App', () => {
  it('renders VS Code-style navigation with file extensions', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Check that navigation items appear (should have both desktop and mobile versions)
    expect(screen.getAllByText('home.tsx')).toHaveLength(2);
    expect(screen.getAllByText('about.tsx')).toHaveLength(2);
    expect(screen.getAllByText('experience.tsx')).toHaveLength(2);
    expect(screen.getAllByText('contact.tsx')).toHaveLength(2);
  });

  it('navigates routes and invokes window.scrollTo stub', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const aboutLinks = screen.getAllByText('about.tsx');
    expect(aboutLinks.length).toBeGreaterThan(0);
    fireEvent.click(aboutLinks[0]);

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(window.scrollTo).toHaveBeenCalled();
  });
});
