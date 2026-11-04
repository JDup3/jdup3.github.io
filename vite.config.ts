/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
// Installed TypeScript version, shown in the Home page status bar.
const { version: typescriptVersion } = require('typescript/package.json') as {
  version: string;
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  define: {
    __TYPESCRIPT_VERSION__: JSON.stringify(typescriptVersion),
  },
  build: {
    outDir: 'dist',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    include: ['src/test/**/*.test.tsx'],
  },
});
