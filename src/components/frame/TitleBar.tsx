import { site, type Page } from '@/content/site';

/** The window title, as VS Code writes it: `file — folder`. */
export function TitleBar({ page }: { page: Page }) {
  return (
    <header className="flex h-8 shrink-0 items-center justify-center bg-titlebar px-4 text-label text-titlebar-foreground">
      <p className="truncate">
        {page.file}
        <span aria-hidden="true"> — </span>
        <span className="font-bold text-primary">~/</span>
        {site.brand}
      </p>
    </header>
  );
}
