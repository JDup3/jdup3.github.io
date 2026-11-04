/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath, URL } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
// Installed TypeScript version, shown in the Home page status bar.
const { version: typescriptVersion } = require('typescript/package.json') as {
  version: string;
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    // `@/*` alias, mirrored in tsconfig.json and tsconfig.app.json
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
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
