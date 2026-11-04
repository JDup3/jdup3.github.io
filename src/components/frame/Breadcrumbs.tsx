import { Fragment } from 'react';
import type { Page } from '@/content/site';
import { ChevronIcon, ReactFileIcon } from './icons';

/**
 * The editor's breadcrumb path for the open file. It repeats the active tab,
 * so it is hidden from screen readers.
 */
export function Breadcrumbs({ page }: { page: Page }) {
  const folders = ['src', 'pages'];
  return (
    <div
      aria-hidden="true"
      className="flex h-6 shrink-0 items-center gap-0.5 bg-background px-4 text-label text-muted-foreground sm:px-6"
    >
      {folders.map((folder) => (
        <Fragment key={folder}>
          <span>{folder}</span>
          <ChevronIcon className="size-3.5 shrink-0" />
        </Fragment>
      ))}
      <ReactFileIcon className="mr-1 size-3.5 shrink-0 text-file-icon" />
      <span className="text-foreground">{page.file}</span>
    </div>
  );
}
