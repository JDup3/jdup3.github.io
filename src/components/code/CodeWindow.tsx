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

/** A card styled as an editor window: coloured dot and file name on top. */
export function CodeWindow({
  file,
  dot,
  action,
  className,
  children,
}: CodeWindowProps) {
  const title = (
    <div className="flex items-center space-x-2">
      <span className={cn('h-3 w-3 rounded-full', dotClass[dot])}></span>
      <span className="font-mono text-xs text-muted-foreground">{file}</span>
    </div>
  );

  return (
    <Card className={cn('border-border/50 bg-card/50', className)}>
      <CardHeader className="pb-3">
        {action ? (
          <div className="flex items-center justify-between">
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
