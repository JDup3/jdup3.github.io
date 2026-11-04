import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TerminalPromptProps {
  /** The command after the `$` prompt. */
  command: string;
  /** What the command printed. */
  children: React.ReactNode;
  outputClassName?: string;
}

/**
 * A terminal card in the colours of VS Code's integrated terminal: one
 * command, its output, and a waiting prompt.
 */
export function TerminalPrompt({
  command,
  children,
  outputClassName,
}: TerminalPromptProps) {
  return (
    <Card className="rounded-md border-border bg-terminal shadow-none">
      <CardContent className="px-4 py-4 sm:px-5">
        <div className="space-y-1 font-mono text-sm">
          <div className="flex gap-2">
            <span className="text-success">$</span>
            <span className="min-w-0 text-muted-foreground">{command}</span>
          </div>
          <div className={cn('ml-4', outputClassName)}>{children}</div>
          <div className="flex items-center space-x-2 pt-2">
            <span className="text-success">$</span>
            <span className="h-4 w-2 animate-pulse bg-cursor"></span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
