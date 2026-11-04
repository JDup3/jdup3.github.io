import { version } from 'react';
import { statusBar } from '@/content/home';
import { BranchIcon, RemoteIcon } from './icons';

const item = 'flex min-h-6 items-center gap-1.5 px-2.5';

/**
 * The editor's blue status bar, along the bottom of every page: the remote
 * and branch on the left; the languages and the React and TypeScript versions
 * the site is built with on the right. Items wrap onto more rows on phones.
 */
export function StatusBar() {
  const [remote, branch] = statusBar.left;
  return (
    <footer className="flex shrink-0 flex-wrap justify-between bg-statusbar text-label text-statusbar-foreground">
      <div className="flex flex-wrap">
        <span className={`${item} bg-statusbar-remote`}>
          <RemoteIcon className="size-3.5 shrink-0" />
          <span>{remote}</span>
        </span>
        <span className={item}>
          <BranchIcon className="size-3.5 shrink-0" />
          <span>{branch}</span>
        </span>
      </div>
      <div className="flex flex-wrap">
        {statusBar.right.map((text) => (
          <span key={text} className={item}>
            {text}
          </span>
        ))}
        <span className={item}>React {version}</span>
        <span className={item}>TypeScript {__TYPESCRIPT_VERSION__}</span>
        <a
          href="https://github.com/JDup3"
          target="_blank"
          rel="noopener noreferrer"
          className={`${item} transition-[background-color] duration-150 hover:bg-white/12 focus-visible:-outline-offset-2 focus-visible:outline-white`}
        >
          github.com/JDup3
        </a>
      </div>
    </footer>
  );
}
