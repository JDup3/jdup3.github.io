import '@testing-library/jest-dom/vitest';
import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

// jsdom does not implement window.scrollTo; stub it so route changes stay quiet.
Object.defineProperty(window, 'scrollTo', { value: vi.fn(), writable: true });

afterEach(() => {
  cleanup();
});
