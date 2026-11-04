import type { CodeCard, CommandLinkContent } from './types';
import { kw, line, nm, p, str } from './tokens';

export const header = {
  eyebrow: [nm('# Personal Portfolio')],
  title: [
    kw('class'),
    p(' '),
    nm('JonathanDupe'),
    p('('),
    nm('SoftwareArchitect'),
    p('):'),
  ],
  intro:
    '""" Lead Software Developer with 7+ years of experience architecting and developing scalable systems with AWS, Python, modern web technologies, and Machine Learning & AI. Passionate about building efficient, data-driven solutions, while learning as much as possible along the way. """',
};

export const aboutMe: CodeCard = {
  id: 'home-about-me',
  file: 'about_me.ts',
  dot: 'success',
  lines: [
    line(0, kw('interface'), nm(' Developer '), p('{')),
    line(1, nm('name'), p(': '), str("'Jonathan Dupe'")),
    line(1, nm('role'), p(': '), str("'Lead Software Developer'")),
    line(
      1,
      nm('stack'),
      p(': ['),
      str("'Python'"),
      p(', '),
      str("'AWS'"),
      p(', '),
      str("'TypeScript'"),
      p(']')
    ),
    line(1, nm('topSkills'), p(': [')),
    line(2, str("'System Design'"), p(',')),
    line(2, str("'Technical Product Management'"), p(',')),
    line(2, str("'MLOps'"), p(',')),
    line(1, p(']')),
    line(0, p('}')),
  ],
};

export const currentProject = {
  file: 'current_project.md',
  heading: 'Current Experience',
  company: 'Pendulum Intel',
  role: 'Lead Software Developer',
  bullets: [
    'Architecting and developing a Big Data Social Media Listening Platform and Analytics Tools in AWS',
    'Providing mentorship and technical leadership to a team of developers',
    'Collaborating with cross-functional teams to align on product vision and technical requirements',
  ],
  link: {
    href: 'https://github.com/JDup3',
    command: 'git clone profile',
  } satisfies CommandLinkContent,
};

// The React and TypeScript versions are read from the build, not written here.
export const statusBar = {
  left: ['WSL: Ubuntu 22.04', 'portfolio-deployment*'],
  right: ['Python 3.13'],
};
