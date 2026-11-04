/**
 * Site-wide facts and one entry per page. The tab bar, the browser title,
 * the build's per-page HTML (meta tags, canonical URL, Open Graph/Twitter
 * cards) and the sitemap are all generated from this list.
 *
 * vite.config.ts imports this file, so it imports nothing itself. The
 * descriptions reuse page wording; src/test/site.test.tsx keeps them in step.
 */
export const site = {
  url: 'https://jdup3.github.io',
  name: 'Jonathan Dupe',
  /** Title bar text, after `~/`. */
  brand: 'jdup3.dev',
  /** 1200x630 social card in public/. */
  image: {
    path: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'class JonathanDupe(SoftwareArchitect): in a VS Code style editor window',
  },
  /** The browser UI colour: the title bar. */
  themeColor: '#3c3c3c',
};

// The first sentence of the Home intro.
const homeDescription =
  'Lead Software Developer with 7+ years of experience architecting and developing scalable systems with AWS, Python, modern web technologies, and Machine Learning & AI.';
// The About page's `whoami` output.
const aboutDescription =
  'Computer Scientist & Software Developer/Architect with expertise in building scalable platforms and data pipelines using AWS and Python while promoting a culture of learning, growth, and innovation.';

export interface Page {
  path: string;
  /** Tab label, written as the page's source file. */
  file: string;
  /** Browser and social title. */
  title: string;
  description: string;
}

export const pages: readonly Page[] = [
  {
    path: '/',
    file: 'home.tsx',
    title: `${site.name} · Lead Software Developer`,
    description: homeDescription,
  },
  {
    path: '/about',
    file: 'about.tsx',
    title: `About me · ${site.name}`,
    description: aboutDescription,
  },
  {
    path: '/experience',
    file: 'experience.tsx',
    title: `Work Experience · ${site.name}`,
    description: homeDescription,
  },
  {
    path: '/contact',
    file: 'contact.tsx',
    title: `Contact · ${site.name}`,
    description: homeDescription,
  },
];

/** The page for a router path; unknown paths get Home's details. */
export function pageFor(pathname: string): Page {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return pages.find((page) => page.path === path) ?? pages[0];
}

/** Absolute URL of a page, as used for canonical and og:url. */
export const pageUrl = (page: Page) =>
  page.path === '/' ? `${site.url}/` : `${site.url}${page.path}`;
