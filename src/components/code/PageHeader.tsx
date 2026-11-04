import { cn } from '@/lib/utils';
import type { Token } from '@/content/types';
import { CodeTokens } from './CodeTokens';

interface PageHeaderProps {
  /** Small code line above the title. */
  eyebrow: readonly Token[];
  /** The page's h1, written as code. */
  title: readonly Token[];
  titleClassName?: string;
  children?: React.ReactNode;
}

export function PageHeader({
  eyebrow,
  title,
  titleClassName = 'text-3xl',
  children,
}: PageHeaderProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2 font-mono text-sm text-muted-foreground">
        <CodeTokens tokens={eyebrow} />
      </div>
      <h1 className={cn('font-mono font-bold text-foreground', titleClassName)}>
        <CodeTokens tokens={title} />
      </h1>
      {children}
    </div>
  );
}
