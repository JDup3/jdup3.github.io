import { Card, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { WindowDot } from '@/content/types';

const dotClass: Record<WindowDot, string> = {
  success: 'bg-success',
  warning: 'bg-warning',
  yellow: 'bg-yellow-500',
  purple: 'bg-purple-500',
  blue: 'bg-blue-500',
};

interface CodeWindowProps {
  /** File name shown in the title bar. */
  file: string;
  dot: WindowDot;
  /** Optional control on the right of the title bar, such as a link. */
  action?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

/**
 * A card styled as an editor group: a tab strip holding one open tab (the
 * coloured dot and file name), an optional control on the right, and the
 * file's contents below. Children are usually a `CardContent`.
 */
export function CodeWindow({
  file,
  dot,
  action,
  className,
  children,
}: CodeWindowProps) {
  const title = (
    <div className="relative -mb-px flex h-9 w-fit max-w-full min-w-0 items-center gap-2 border-r border-border bg-card px-3 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-tab-active-border">
      <span
        className={cn('size-2.5 shrink-0 rounded-full', dotClass[dot])}
      ></span>
      <span className="truncate text-label text-foreground">{file}</span>
    </div>
  );

  return (
    <Card
      className={cn(
        'overflow-hidden rounded-md border-border bg-card shadow-none',
        // The body's padding, set here so every window matches.
        '*:data-[slot=card-content]:px-4 *:data-[slot=card-content]:pt-4 *:data-[slot=card-content]:pb-5 sm:*:data-[slot=card-content]:px-5',
        className
      )}
    >
      <CardHeader className="space-y-0 border-b border-border bg-tabbar p-0">
        {action ? (
          <div className="flex flex-wrap items-center justify-between gap-x-2 pr-2">
            {title}
            {action}
          </div>
        ) : (
          title
        )}
      </CardHeader>
      {children}
    </Card>
  );
}
