import { useEffect, useState } from 'react';

export interface TypingOptions {
  /** Typing only advances while this is true. */
  active: boolean;
  /** Milliseconds per character. */
  typingSpeed: number;
  /** Milliseconds to pause at the end of each line. */
  lineDelay: number;
  /** Called once, when the last line has been typed. */
  onComplete?: () => void;
}

export interface TypingPosition {
  /** Index of the line being typed; equals the line count when done. */
  line: number;
  /** Characters of that line typed so far. */
  char: number;
}

/**
 * Steps through `lineLengths` one character at a time, pausing between
 * lines. It only tracks the position; rendering decides what to show.
 */
export function useTypingAnimation(
  lineLengths: readonly number[],
  { active, typingSpeed, lineDelay, onComplete }: TypingOptions
): TypingPosition {
  const [position, setPosition] = useState<TypingPosition>({
    line: 0,
    char: 0,
  });
  const { line, char } = position;
  const lineCount = lineLengths.length;
  const lineLength = lineLengths[line] ?? 0;

  useEffect(() => {
    if (!active || line >= lineCount) return;

    if (char < lineLength) {
      const timer = setTimeout(
        () => setPosition({ line, char: char + 1 }),
        typingSpeed
      );
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setPosition({ line: line + 1, char: 0 });
      if (line + 1 >= lineCount) onComplete?.();
    }, lineDelay);
    return () => clearTimeout(timer);
  }, [
    active,
    line,
    char,
    lineCount,
    lineLength,
    typingSpeed,
    lineDelay,
    onComplete,
  ]);

  return position;
}
