import type { Token } from '@/content/types';
import { CodeTokens } from './CodeTokens';

interface PageHeaderProps {
  /** Small code line above the title. */
  eyebrow: readonly Token[];
  /** The page's h1, written as code. */
  title: readonly Token[];
  children?: React.ReactNode;
}

/** A page's code-styled h1, sized fluidly from phone to desktop. */
export function PageHeader({ eyebrow, title, children }: PageHeaderProps) {
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-center space-x-2 font-mono text-sm text-muted-foreground">
        <CodeTokens tokens={eyebrow} />
      </div>
      <h1 className="font-mono text-title font-bold text-balance wrap-anywhere text-foreground">
        <CodeTokens tokens={title} />
      </h1>
      {children}
    </div>
  );
}
