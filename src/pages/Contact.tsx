function Contact() {
  return (
    <div className="page-content">
      <h1>Contact Me</h1>
      <div className="card">
        <h2>Get In Touch</h2>
        <p>
          I'm always interested in discussing new opportunities, interesting
          projects, or just connecting with fellow developers.
        </p>
      </div>

      <div className="card">
        <h2>Ways to Connect</h2>
        <div style={{ textAlign: 'center' }}>
          <p>
            <strong>GitHub:</strong>{' '}
            <a
              href="https://github.com/JDup3"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/JDup3
            </a>
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:contact@jdup3.dev">contact@jdup3.dev</a>
          </p>
          <p>
            <strong>Website:</strong>{' '}
            <a
              href="https://jdup3.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              jdup3.github.io
            </a>
          </p>
        </div>
      </div>

      <div className="card">
        <h2>Project Collaboration</h2>
        <p>
          I'm open to collaborating on interesting projects, especially those
          involving:
        </p>
        <ul>
          <li>Modern React applications</li>
          <li>TypeScript development</li>
          <li>Web performance optimization</li>
          <li>Developer tooling and automation</li>
          <li>Open source contributions</li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
