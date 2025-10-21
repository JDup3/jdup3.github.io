import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
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
});
