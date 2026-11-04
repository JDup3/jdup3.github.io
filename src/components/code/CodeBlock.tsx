import { useCallback, useId } from 'react';
import { cn } from '@/lib/utils';
import type { CodeLine } from '@/content/types';
import { useAnimationState } from '@/contexts/AnimationContext';
import { useInView } from '@/hooks/useInView';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';
import { CodeTokens } from './CodeTokens';

const lineLength = (line: CodeLine) =>
  line.tokens.reduce((total, token) => total + token.text.length, 0);

// The first `chars` characters of a line, keeping each token's colour.
function typedPart(line: CodeLine, chars: number): CodeLine {
  const tokens = [];
  let remaining = chars;
  for (const token of line.tokens) {
    if (remaining <= 0) break;
    tokens.push({ ...token, text: token.text.slice(0, remaining) });
    remaining -= token.text.length;
  }
  return { ...line, tokens };
}

function Cursor({ className }: { className?: string }) {
  return (
    <span className={cn('h-4 w-2 animate-pulse bg-cursor', className)}></span>
  );
}

// Hanging indent: the line starts at its indent level (2ch per level) and a
// line that wraps on a narrow screen continues 2ch further in, so wrapped
// code still reads as one indented statement.
const indentClass: Record<CodeLine['indent'], string> = {
  0: 'pl-[2ch] indent-[-2ch]',
  1: 'pl-[4ch] indent-[-2ch]',
  2: 'pl-[6ch] indent-[-2ch]',
};

interface CodeLineRowProps {
  number: number;
  indent: CodeLine['indent'];
  className?: string;
  contentClassName?: string;
  children: React.ReactNode;
}

function CodeLineRow({
  number,
  indent,
  className,
  contentClassName,
  children,
}: CodeLineRowProps) {
  return (
    <div className={cn('flex', className)}>
      <span className="mr-3 w-6 shrink-0 text-right text-muted-foreground tabular-nums select-none">
        {number}
      </span>
      <div
        className={cn('min-w-0 flex-1', indentClass[indent], contentClassName)}
      >
        {children}
      </div>
    </div>
  );
}

interface CodeBlockProps {
  lines: readonly CodeLine[];
  /** Key for remembering that this block has been typed this visit. */
  id?: string;
  startLine?: number;
  /** Milliseconds per character. */
  typingSpeed?: number;
  /** Milliseconds to pause at the end of each line. */
  lineDelay?: number;
  /** Set false to show the code without typing it. */
  animate?: boolean;
  className?: string;
}

/**
 * Numbered code lines, typed out once when the block scrolls into view.
 *
 * Every line is in the DOM from the first render, so the block keeps its final
 * height (no layout shift) and screen readers get the full text while it
 * types. Lines not yet typed are transparent; the line being typed shows its
 * typed part over a transparent copy of the whole line. Reduced motion, a
 * repeat visit, or `animate={false}` show everything at once.
 */
export function CodeBlock({
  lines,
  id,
  startLine = 1,
  typingSpeed = 10,
  lineDelay = 50,
  animate = true,
  className,
}: CodeBlockProps) {
  const fallbackId = useId();
  const blockId = id ?? fallbackId;
  const { hasAnimated, markAsAnimated } = useAnimationState();
  const prefersReducedMotion = usePrefersReducedMotion();
  const skipTyping = !animate || prefersReducedMotion || hasAnimated(blockId);

  const [ref, inView] = useInView<HTMLDivElement>();
  const onComplete = useCallback(
    () => markAsAnimated(blockId),
    [markAsAnimated, blockId]
  );
  const position = useTypingAnimation(lines.map(lineLength), {
    active: !skipTyping && inView,
    typingSpeed,
    lineDelay,
    onComplete,
  });
  const typing = !skipTyping && position.line < lines.length;

  return (
    <div ref={ref} className={cn('space-y-1', className)}>
      {lines.map((line, index) => {
        const number = startLine + index;
        if (!typing || index < position.line) {
          return (
            <CodeLineRow key={number} number={number} indent={line.indent}>
              <CodeTokens tokens={line.tokens} />
            </CodeLineRow>
          );
        }
        if (index > position.line) {
          return (
            <CodeLineRow
              key={number}
              number={number}
              indent={line.indent}
              className="opacity-0"
            >
              <CodeTokens tokens={line.tokens} />
            </CodeLineRow>
          );
        }
        const typed = typedPart(line, position.char);
        return (
          <CodeLineRow
            key={number}
            number={number}
            indent={line.indent}
            contentClassName="relative"
          >
            <span className="opacity-0">
              <CodeTokens tokens={line.tokens} />
            </span>
            {/* Same padding as the row, so the overlay's text sits exactly
                on the transparent copy, wrapped lines included. */}
            <span
              aria-hidden="true"
              className={cn('absolute inset-0', indentClass[line.indent])}
            >
              <CodeTokens tokens={typed.tokens} />
              <Cursor className="ml-1 inline-block align-middle" />
            </span>
          </CodeLineRow>
        );
      })}

      {/* Terminal prompt shown once the code has been typed */}
      <div
        className={cn(
          'flex items-center space-x-2 pt-1',
          typing && 'opacity-0'
        )}
        aria-hidden={typing || undefined}
      >
        <span className="text-primary">$</span>
        <Cursor />
      </div>
    </div>
  );
}
