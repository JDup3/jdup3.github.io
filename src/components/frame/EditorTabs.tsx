import { NavLink } from 'react-router';
import { cn } from '@/lib/utils';
import { pages } from '@/content/site';
import { ReactFileIcon } from './icons';

/**
 * The site navigation, drawn as the editor's open tabs. The current page is
 * the active tab: editor-coloured, with a blue top edge, and marked
 * `aria-current="page"` by NavLink. Phones wrap the tabs onto a second row
 * (VS Code's "wrap tabs" setting) so every page stays one tap away.
 */
export function EditorTabs() {
  return (
    <nav
      aria-label="Pages"
      className="sticky top-0 z-40 shrink-0 bg-tabbar md:static"
    >
      <ul className="flex flex-wrap">
        {pages.map((page) => (
          <li key={page.path} className="flex">
            <NavLink
              to={page.path}
              end
              className={({ isActive }) =>
                cn(
                  'relative flex h-9 items-center gap-1.5 border-r border-tabbar px-3 text-label whitespace-nowrap',
                  'transition-[color,background-color] duration-150 focus-visible:-outline-offset-2',
                  'before:absolute before:inset-x-0 before:top-0 before:h-px',
                  isActive
                    ? 'bg-background text-white before:bg-tab-active-border'
                    : 'bg-secondary text-muted-foreground hover:text-foreground'
                )
              }
            >
              <ReactFileIcon className="size-3.5 shrink-0 text-file-icon" />
              {page.file}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
