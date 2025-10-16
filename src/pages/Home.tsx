function Home() {
  return (
    <div className="page-content">
      <h1>Welcome to My Portfolio</h1>
      <div className="card">
        <h2>Hello, I'm JDup3!</h2>
        <p>
          Welcome to my personal website and portfolio. This site showcases my
          projects, skills, and experiences as a developer.
        </p>
        <p>
          Built with React, Vite, and TypeScript, and deployed automatically to
          GitHub Pages using GitHub Actions.
        </p>
      </div>

      <div className="card">
        <h3>Featured Projects</h3>
        <ul>
          <li>React Portfolio Website (This site!)</li>
          <li>Coming soon: More projects will be featured here</li>
        </ul>
      </div>

      <div className="card">
        <h3>Latest Updates</h3>
        <p>🚀 Website launched with automated CI/CD pipeline</p>
        <p>⚡ Built with modern React and Vite for optimal performance</p>
        <p>🎨 Responsive design with dark/light theme support</p>
      </div>
    </div>
  );
}

export default Home;
