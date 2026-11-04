import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TerminalPromptProps {
  /** The command after the `$` prompt. */
  command: string;
  /** What the command printed. */
  children: React.ReactNode;
  outputClassName?: string;
}

/** A terminal card: one command, its output, and a waiting prompt. */
export function TerminalPrompt({
  command,
  children,
  outputClassName,
}: TerminalPromptProps) {
  return (
    <Card className="border-border/50 bg-card/50">
      <CardContent className="py-4">
        <div className="space-y-1 font-mono text-sm">
          <div className="flex items-center space-x-2">
            <span className="text-primary">$</span>
            <span className="text-muted-foreground">{command}</span>
          </div>
          <div className={cn('ml-4', outputClassName)}>{children}</div>
          <div className="flex items-center space-x-2 pt-2">
            <span className="text-primary">$</span>
            <span className="h-4 w-2 animate-pulse bg-primary"></span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
