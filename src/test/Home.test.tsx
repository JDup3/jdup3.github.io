import { version as reactVersion } from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('Home status bar', () => {
  it('shows the React and TypeScript versions the site is built with', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(`React ${reactVersion}`)).toBeInTheDocument();
    expect(
      screen.getByText(`TypeScript ${__TYPESCRIPT_VERSION__}`)
    ).toBeInTheDocument();
    expect(__TYPESCRIPT_VERSION__).toMatch(/^\d+\.\d+\.\d+/);
  });
});
