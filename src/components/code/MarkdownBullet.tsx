import { cn } from '@/lib/utils';

/** One `- item` line of a markdown list, with a hanging indent. */
export function MarkdownBullet({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn('flex', className)}>
      <span className="mr-2 text-syntax-keyword">-</span>
      <span className="min-w-0 flex-1">{children}</span>
    </div>
  );
}
