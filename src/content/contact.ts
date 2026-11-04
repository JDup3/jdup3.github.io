import { kw, nm, p, str } from './tokens';

export const header = {
  eyebrow: [
    nm('import'),
    p('{'),
    kw('contact'),
    p('}'),
    nm('from'),
    str("'./jdup3'"),
  ],
  title: [kw('async function'), p(' '), nm('getInTouch'), p('()')],
};

export const links = {
  file: 'links.ts',
  items: [
    {
      key: 'github',
      label: 'JDup3',
      href: 'https://github.com/JDup3',
      external: true,
    },
    {
      key: 'email',
      label: 'dupjon277@gmail.com',
      href: 'mailto:dupjon277@gmail.com',
      external: false,
    },
    {
      key: 'website',
      label: 'jdup3.github.io',
      href: 'https://jdup3.github.io',
      external: true,
    },
  ],
};

export const readme = {
  file: 'README.md',
  heading: "# Let's Build Something Together",
  intro: 'Always excited to discuss:',
  topics: [
    'Software architecture and scalable systems',
    'AWS cloud solutions and infrastructure',
    'Technical leadership opportunities',
    'Hardware tinkering and game development',
  ],
};

export const signOff = {
  command: 'echo "Looking forward to hearing from you!"',
  output: 'Looking forward to hearing from you!',
};
