function About() {
  return (
    <div className="page-content">
      <h1>About Me</h1>
      <div className="card">
        <h2>Background</h2>
        <p>
          I'm a passionate developer with experience in modern web technologies.
          I enjoy creating efficient, scalable, and user-friendly applications.
        </p>
      </div>

      <div className="card">
        <h2>Skills & Technologies</h2>
        <h3>Frontend</h3>
        <ul>
          <li>React & TypeScript</li>
          <li>Vite & Modern Build Tools</li>
          <li>HTML5, CSS3, JavaScript ES6+</li>
          <li>Responsive Web Design</li>
        </ul>

        <h3>Development Tools</h3>
        <ul>
          <li>Git & GitHub</li>
          <li>VS Code</li>
          <li>ESLint & Prettier</li>
          <li>Vitest for Testing</li>
        </ul>

        <h3>DevOps & Deployment</h3>
        <ul>
          <li>GitHub Actions CI/CD</li>
          <li>GitHub Pages Deployment</li>
          <li>Automated Testing & Linting</li>
        </ul>
      </div>

      <div className="card">
        <h2>Experience</h2>
        <p>
          I focus on writing clean, maintainable code and following best
          practices for modern web development. I believe in continuous learning
          and staying up-to-date with the latest technologies and industry
          trends.
        </p>
      </div>
    </div>
  );
}

export default About;
