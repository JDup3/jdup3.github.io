import { Button } from '@/components/ui/button';

interface CommandLinkProps {
  href: string;
  /** Shell command shown after the `$` prompt. */
  command: string;
  variant?: 'outline' | 'ghost';
}

/** An external link that reads as a shell command, opening in a new tab. */
export function CommandLink({
  href,
  command,
  variant = 'ghost',
}: CommandLinkProps) {
  return (
    <Button
      variant={variant}
      size="sm"
      asChild
      className="font-mono text-label"
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <span className="whitespace-pre text-success">$ </span>
        {command}
      </a>
    </Button>
  );
}
