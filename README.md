# JDup3 Portfolio Website

A modern React portfolio website built with Vite and TypeScript, deployed automatically to GitHub Pages.

## 🚀 Features

- **Modern React Stack**: Built with React 18, TypeScript, and Vite for fast development and builds
- **Responsive Design**: Mobile-first design
- **React Router**: Client-side routing for a smooth single-page application experience
- **Automated CI/CD**: GitHub Actions workflow for formatting, linting, testing, and deployment
- **Code Quality**: ESLint, Prettier, and Vitest for maintaining high code standards
- **GitHub Pages**: Automatically deployed to GitHub Pages on every push to main

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, React Router
- **Build Tool**: Vite
- **Styling**: CSS3 with custom properties
- **Testing**: Vitest, React Testing Library
- **Code Quality**: ESLint, Prettier
- **CI/CD**: GitHub Actions
- **Deployment**: GitHub Pages

## 📦 Getting Started

### Prerequisites

**Option 1: Local Development**

- Node.js 18 or higher
- npm or yarn

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

2. Install dependencies:

   ```bash
   npm install
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

- Uses Node.js 18.20.4 in an Alpine Linux container
- Installs all dependencies
- Mounts your local project directory for live reloading
- Exposes the development server on port 5173

## 🐳 Docker Development

This project includes Docker support for a containerized development environment. The Docker setup provides:

- **Consistent Environment**: Same Node.js version (18.20.4) across all development machines
- **No Local Node Installation**: Run the project without installing Node.js locally
- **Isolated Dependencies**: Project dependencies are contained within the Docker container
- **Live Reloading**: Changes to your local files are automatically reflected in the container

### Docker Commands

- `make run-react-local` - Start React development server in Docker container
- `make fmt` - Format the src code with Prettier
- `make lint` - Lint the src code with ESLint
- `make test` - Run unit tests

### Docker Architecture

The Dockerfile:

- Uses `node:18.20.4-alpine3.20` as the base image
- Installs bash for better script compatibility
- Sets up the working directory at `/app`
- Installs project dependencies
- Exposes port 5173 for the Vite development server

The Makefile provides convenient commands that:

- Build the Docker image automatically
- Mount your project directory for live reloading
- Handle port mapping and container cleanup

## 🧪 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage report

## 🚀 Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment process includes:

1. **Code Quality Checks**: Prettier formatting and ESLint linting
2. **Testing**: Automated test suite with Vitest
3. **Build**: Production build with Vite
4. **Deploy**: Automatic deployment to GitHub Pages

## 📁 Project Structure

```
src/
├── pages/          # React page components
│   ├── Home.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── test/           # Test utilities and setup
├── App.tsx         # Main app component with routing
├── main.tsx        # Application entry point
└── index.css       # Global styles
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Live Site**: [https://jdup3.github.io/jdup3.github.io/](https://jdup3.github.io/jdup3.github.io/)
- **Repository**: [https://github.com/JDup3/jdup3.github.io](https://github.com/JDup3/jdup3.github.io)

---

Built with ❤️ using React, Vite, and GitHub Pages
