# JDup3 Portfolio Website

A modern React portfolio website built with Vite and TypeScript, deployed automatically to GitHub Pages.

## Features

- **Modern React Stack**: Built with React 19, TypeScript, and Vite for fast development and builds
- **Responsive Design**: Mobile-first design
- **React Router**: Client-side routing for a smooth single-page application experience
- **Automated CI/CD**: GitHub Actions workflows for CI (format, lint, typecheck, test, build) and deployment
- **Code Quality**: ESLint, Prettier, TypeScript, and Vitest for maintaining high code standards
- **GitHub Pages**: Automatically deployed to GitHub Pages on every push to main

## Tech Stack

- **Frontend**: React 19, TypeScript, React Router
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui-style components
- **Testing**: Vitest, React Testing Library
- **Code Quality**: ESLint, Prettier
- **CI/CD**: GitHub Actions
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

**Option 1: Local Development**

- Node.js >=22.12 (Node 24 recommended, see `.nvmrc`)
- npm (the repository uses `package-lock.json`)

**Option 2: Docker Development**

- Docker
- Make (for using the Makefile commands)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JDup3/jdup3.github.io.git
   cd jdup3.github.io
   ```

#### Local Development (without Docker)

2. Install dependencies from the lockfile:

   ```bash
   npm ci
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

#### Docker Development

2. Start the development server using Docker:

   ```bash
   make run-react-local
   ```

3. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The Docker setup automatically:

- Uses Node.js 24.21.0 in an Alpine Linux container
- Installs the exact dependencies pinned in `package-lock.json` with `npm ci`
- Mounts your local project directory for live reloading
- Exposes the development server on port 5173

## Docker Development

This project includes Docker support for a containerized development environment. The Docker setup provides:

- **Consistent Environment**: Same Node.js version (24.21.0) across all development machines
- **No Local Node Installation**: Run the project without installing Node.js locally
- **Isolated Dependencies**: Project dependencies are contained within the Docker container
- **Live Reloading**: Changes to your local files are automatically reflected in the container

### Docker Commands

- `make run-react-local` - Start React development server in Docker container
- `make run-shell` - Open a bash shell in the container
- `make fmt` - Format the project with Prettier (`npm run format`)
- `make lint` - Lint the project with ESLint (`npm run lint`)
- `make test` - Run unit tests once (`npm run test -- --run`)
- `make build` - Build the Docker image (every command above runs this first)
- `make build-no-cache` - Rebuild the Docker image without the layer cache

### Docker Architecture

The Dockerfile:

- Uses `node:24.21.0-alpine3.24` as the base image (keep it in sync with `.nvmrc`)
- Installs bash for better script compatibility
- Sets up the working directory at `/app` and runs as the unprivileged `node` user
- Installs project dependencies with `npm ci`, using `package.json` and `package-lock.json`
- Copies the project files, minus everything listed in `.dockerignore`
- Exposes port 5173 for the Vite development server

The Makefile provides convenient commands that:

- Build the Docker image automatically
- Copy the image's `node_modules` back to the host for editor tooling (`package-lock.json` is never copied back)
- Mount your project directory for live reloading
- Handle port mapping and container cleanup

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (`tsc -b && vite build`)
- `npm run typecheck` - Typecheck with TypeScript (`tsc -b`)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage report
- `npm run check` - Run the format check, lint, typecheck, tests and build in one go

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch. Two workflows are involved:

- **CI** (`.github/workflows/ci.yml`, on pull requests and pushes to `main`): `npm ci`, Prettier format check, ESLint, typecheck, tests and a production build
- **Deploy** (`.github/workflows/deploy.yml`, on pushes to `main` or manual workflow dispatch): `npm ci`, ESLint, tests, a production build (`tsc -b && vite build`), then upload and deploy to GitHub Pages

## Project Structure

```
src/
├── components/     # Reusable React components
│   ├── Navigation.tsx
│   └── ui/         # UI component library
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── card-examples.md
│       └── separator.tsx
├── contexts/       # React context providers
│   └── AnimationContext.tsx
├── lib/            # Utility functions and helpers
│   └── utils.ts
├── pages/          # React page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── Experience.tsx
├── test/           # Test utilities and setup
│   ├── Accessibility.test.tsx
│   ├── App.test.tsx
│   ├── Home.test.tsx
│   └── setup.ts
├── App.tsx         # Main app component with routing
├── main.tsx        # Application entry point
├── index.css       # Global styles
└── vite-env.d.ts   # Vite environment type declarations

public/             # Static assets (favicon, 404.html redirect for GitHub Pages)
.github/workflows/  # CI and deploy workflows
```

## License

The source code of this project is available under the [MIT License](LICENSE).

The personal content of the site (text, biography, experience and CV details, contact details and images) is not covered by that licence. It is Copyright (c) 2025 Jonathan Dupe, all rights reserved. See [LICENSE](LICENSE) for details.

## Links

- **Live Site**: [https://jdup3.github.io/](https://jdup3.github.io/)
- **Repository**: [https://github.com/JDup3/jdup3.github.io](https://github.com/JDup3/jdup3.github.io)

---

Built with ❤️ using React, Vite, and GitHub Pages
