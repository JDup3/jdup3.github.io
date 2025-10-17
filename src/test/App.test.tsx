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

    expect(screen.getByText('home.tsx')).toBeInTheDocument();
    expect(screen.getByText('about.tsx')).toBeInTheDocument();
    expect(screen.getByText('contact.tsx')).toBeInTheDocument();
  });
});
