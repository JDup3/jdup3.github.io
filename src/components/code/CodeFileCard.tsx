import type { CodeCard } from '@/content/types';
import { CodeCardContent } from './CodeCardContent';
import { CodeWindow } from './CodeWindow';

interface CodeFileCardProps {
  card: CodeCard;
  typingSpeed?: number;
  lineDelay?: number;
}

/** An editor window whose code is typed out when it scrolls into view. */
export function CodeFileCard({
  card,
  typingSpeed,
  lineDelay,
}: CodeFileCardProps) {
  return (
    <CodeWindow file={card.file} dot={card.dot}>
      <CodeCardContent
        className="space-y-3"
        id={card.id}
        lines={card.lines}
        typingSpeed={typingSpeed}
        lineDelay={lineDelay}
      />
    </CodeWindow>
  );
}
