import * as React from 'react';
import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useSyncExternalStore,
} from 'react';
import { useAnimationState } from '../../contexts/AnimationContext';

import { cn } from '../../lib/utils';

const defaultTypingSpeed = 10;
const defaultLineDelay = 50;

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'rounded-lg border bg-card text-card-foreground shadow-sm',
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...props}
    />
  );
}

function CardTitle({
  className,
  children,
  ...props
}: React.ComponentProps<'h3'>) {
  return (
    <h3
      className={cn(
        'text-2xl font-semibold leading-none tracking-tight',
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p className={cn('text-sm text-muted-foreground', className)} {...props} />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('p-6 pt-0', className)} {...props} />;
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('flex items-center p-6 pt-0', className)} {...props} />
  );
}

// React 19 types element props as `unknown`; the typing animation only reads
// `children`, so narrow elements to that shape.
type ChildrenProps = { children?: React.ReactNode };

const isElementWithChildren = (
  node: React.ReactNode
): node is React.ReactElement<ChildrenProps> =>
  React.isValidElement<ChildrenProps>(node);

// Convert ReactNode to string for character-by-character typing
const getTextContent = (node: React.ReactNode): string => {
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return node.toString();
  if (isElementWithChildren(node)) {
    return React.Children.toArray(node.props.children)
      .map(getTextContent)
      .join('');
  }
  if (Array.isArray(node)) {
    return node.map(getTextContent).join('');
  }
  return '';
};

const reducedMotionQuery = '(prefers-reduced-motion: reduce)';

const subscribeToReducedMotion = (onChange: () => void) => {
  if (typeof window.matchMedia !== 'function') return () => {};
  const mediaQuery = window.matchMedia(reducedMotionQuery);
  mediaQuery.addEventListener('change', onChange);
  return () => mediaQuery.removeEventListener('change', onChange);
};

const getPrefersReducedMotion = () =>
  typeof window.matchMedia === 'function' &&
  window.matchMedia(reducedMotionQuery).matches;

// Tracks the OS "reduce motion" setting so code blocks can skip typing.
const usePrefersReducedMotion = () =>
  useSyncExternalStore(
    subscribeToReducedMotion,
    getPrefersReducedMotion,
    () => false
  );

// Custom hook for intersection observer with React context animation tracking
const useIntersectionObserver = (
  options: { threshold?: number; rootMargin?: string; cardId?: string } = {}
): [React.RefObject<HTMLDivElement | null>, boolean] => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasStartedAnimation, setHasStartedAnimation] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const { hasAnimated, markAsAnimated } = useAnimationState();

  const { threshold = 0.1, rootMargin = '0px', cardId } = options;

  // Generate a unique card ID if not provided
  const uniqueCardId =
    cardId || `card-${Math.random().toString(36).substr(2, 9)}`;

  useEffect(() => {
    // Check if this card has already been animated
    const hasBeenAnimated = hasAnimated(uniqueCardId);

    console.log(`Intersection Observer for ${uniqueCardId}:`, {
      hasBeenAnimated,
      hasStartedAnimation,
      element: ref.current ? 'exists' : 'null',
    });

    // If already animated, show content immediately without animation
    if (hasBeenAnimated) {
      console.log(`Card ${uniqueCardId} already animated, setting visible`);
      setIsIntersecting(true);
      setHasStartedAnimation(true);
      return;
    }

    const element = ref.current;
    if (!element || typeof IntersectionObserver === 'undefined') {
      // Fallback for environments without IntersectionObserver (like tests)
      console.log(`Fallback for ${uniqueCardId}, setting visible`);
      setIsIntersecting(true);
      setHasStartedAnimation(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStartedAnimation) {
          console.log(
            `Card ${uniqueCardId} came into view, starting animation`
          );
          setIsIntersecting(true);
          setHasStartedAnimation(true);
        } else if (!entry.isIntersecting && hasStartedAnimation) {
          console.log(
            `Card ${uniqueCardId} left view but animation started, continuing`
          );
          // Keep isIntersecting true to continue animation even when out of view
          // This prevents the card from becoming empty during animation
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [
    threshold,
    rootMargin,
    uniqueCardId,
    hasAnimated,
    markAsAnimated,
    hasStartedAnimation,
  ]);

  return [ref, isIntersecting];
};

// Custom hook for typing animation
const useTypingAnimation = (
  lines: React.ReactNode[],
  typingSpeed: number = defaultTypingSpeed,
  lineDelay: number = defaultLineDelay,
  shouldStart: boolean = true,
  skipAnimation: boolean = false,
  cardId?: string
) => {
  const [displayedLines, setDisplayedLines] = useState<React.ReactNode[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const { markAsAnimated } = useAnimationState();

  // If animation should be skipped, show all content immediately
  useEffect(() => {
    if (skipAnimation) {
      console.log('Skipping animation, showing all content');
      setDisplayedLines(lines);
      setCurrentLineIndex(lines.length);
      setCurrentCharIndex(0);
      setIsTypingComplete(true);
      return;
    }
  }, [skipAnimation, lines]);

  // Reset animation when shouldStart changes
  useEffect(() => {
    if (shouldStart && !skipAnimation) {
      console.log('Starting animation');
      setDisplayedLines([]);
      setCurrentLineIndex(0);
      setCurrentCharIndex(0);
      setIsTypingComplete(false);
    }
  }, [shouldStart, skipAnimation]);

  useEffect(() => {
    if (!shouldStart || skipAnimation) return;

    console.log('Animation effect triggered:', {
      shouldStart,
      skipAnimation,
      currentLineIndex,
      totalLines: lines.length,
    });

    if (currentLineIndex >= lines.length) {
      setIsTypingComplete(true);
      // Mark as animated when typing is actually complete
      if (cardId && !skipAnimation) {
        console.log(`Animation complete for ${cardId}, marking as animated`);
        markAsAnimated(cardId);
      }
      return;
    }

    const currentLine = lines[currentLineIndex];

    const lineText = getTextContent(currentLine);

    if (currentCharIndex < lineText.length) {
      const timer = setTimeout(() => {
        setCurrentCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else {
      // Line complete, move to next line after delay
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, currentLine]);
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, lineDelay);
      return () => clearTimeout(timer);
    }
  }, [
    currentLineIndex,
    currentCharIndex,
    lines,
    typingSpeed,
    lineDelay,
    shouldStart,
    skipAnimation,
    cardId,
    markAsAnimated,
  ]);

  // Create partially typed current line
  const createPartialLine = (
    line: React.ReactNode,
    charCount: number
  ): React.ReactNode => {
    if (typeof line === 'string') {
      return line.substring(0, charCount);
    }

    if (isElementWithChildren(line)) {
      // For React elements, we need to handle the typing more carefully
      const children = React.Children.toArray(line.props.children);
      let remainingChars = charCount;
      const partialChildren: React.ReactNode[] = [];

      for (const child of children) {
        if (remainingChars <= 0) break;

        if (typeof child === 'string') {
          if (remainingChars >= child.length) {
            partialChildren.push(child);
            remainingChars -= child.length;
          } else {
            partialChildren.push(child.substring(0, remainingChars));
            remainingChars = 0;
          }
        } else if (isElementWithChildren(child)) {
          const childText = getTextContent(child.props.children);
          if (remainingChars >= childText.length) {
            partialChildren.push(child);
            remainingChars -= childText.length;
          } else {
            // Create partial child element
            partialChildren.push(
              React.cloneElement(child, {
                children: childText.substring(0, remainingChars),
              })
            );
            remainingChars = 0;
          }
        }
      }

      return React.cloneElement(line, { children: partialChildren });
    }

    return line;
  };

  const currentLine =
    currentLineIndex < lines.length
      ? createPartialLine(lines[currentLineIndex], currentCharIndex)
      : null;

  return {
    displayedLines,
    currentLine,
    isTypingComplete,
    showCursor: !isTypingComplete || currentCharIndex > 0,
  };
};

interface CodeLineProps extends React.ComponentProps<'div'> {
  lineNumber?: number;
  showLineNumber?: boolean;
  lineNumberClassName?: string;
}

function CodeLine({
  className,
  children,
  lineNumber,
  showLineNumber = true,
  lineNumberClassName,
  ref,
  ...props
}: CodeLineProps) {
  return (
    <div ref={ref} className={cn('flex', className)} {...props}>
      {showLineNumber && lineNumber !== undefined && (
        <span
          className={cn(
            'mr-2 w-6 flex-shrink-0 text-right text-muted-foreground',
            lineNumberClassName
          )}
        >
          {lineNumber}
        </span>
      )}
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}

// Animated code line with cursor
interface AnimatedCodeLineProps extends React.ComponentProps<'div'> {
  lineNumber?: number;
  showLineNumber?: boolean;
  lineNumberClassName?: string;
  showCursor?: boolean;
}

function AnimatedCodeLine({
  className,
  children,
  lineNumber,
  showLineNumber = true,
  lineNumberClassName,
  showCursor = false,
  ref,
  ...props
}: AnimatedCodeLineProps) {
  return (
    <div ref={ref} className={cn('flex', className)} {...props}>
      {showLineNumber && lineNumber !== undefined && (
        <span
          className={cn(
            'mr-2 w-6 flex-shrink-0 text-right text-muted-foreground',
            lineNumberClassName
          )}
        >
          {lineNumber}
        </span>
      )}
      <div className="flex min-w-0 flex-1 items-center">
        <span>{children}</span>
        {showCursor && (
          <span className="ml-1 h-4 w-2 animate-pulse bg-primary"></span>
        )}
      </div>
    </div>
  );
}

interface CodeBlockProps extends React.ComponentProps<'div'> {
  startLine?: number;
  showLineNumbers?: boolean;
  lineNumberClassName?: string;
  lines: React.ReactNode[];
}

function CodeBlock({
  className,
  startLine = 1,
  showLineNumbers = true,
  lineNumberClassName,
  lines,
  ref,
  ...props
}: CodeBlockProps) {
  return (
    <div ref={ref} className={cn('space-y-1', className)} {...props}>
      {lines.map((line, index) => (
        <CodeLine
          key={startLine + index}
          lineNumber={startLine + index}
          showLineNumber={showLineNumbers}
          lineNumberClassName={lineNumberClassName}
        >
          {line}
        </CodeLine>
      ))}
    </div>
  );
}

// Animated code block with typing effect
interface AnimatedCodeBlockProps extends React.ComponentProps<'div'> {
  startLine?: number;
  showLineNumbers?: boolean;
  lineNumberClassName?: string;
  lines: React.ReactNode[];
  typingSpeed?: number;
  lineDelay?: number;
  enableAnimation?: boolean;
  cardId?: string; // Optional unique identifier for global animation tracking
}

function AnimatedCodeBlock({
  className,
  startLine = 1,
  showLineNumbers = true,
  lineNumberClassName,
  lines,
  typingSpeed = defaultTypingSpeed,
  lineDelay = defaultLineDelay,
  enableAnimation = true,
  cardId,
  ref,
  ...props
}: AnimatedCodeBlockProps) {
  // Generate a unique card ID if not provided - do this once at the top
  const uniqueCardId =
    cardId || `card-${Math.random().toString(36).substr(2, 9)}`;

  const [intersectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px',
    cardId: uniqueCardId, // Use the same ID
  });

  // Check if this card has already been animated using context
  const { hasAnimated } = useAnimationState();
  const hasBeenAnimated = hasAnimated(uniqueCardId);

  // Debug logging
  console.log(`🔍 Animation Debug for ${uniqueCardId}:`, {
    isVisible,
    hasBeenAnimated,
    enableAnimation,
  });

  // Reduced motion takes the same path as enableAnimation={false}: every line
  // renders at once and the typing timers never start.
  const prefersReducedMotion = usePrefersReducedMotion();
  const shouldAnimate = enableAnimation && !prefersReducedMotion;

  const { displayedLines, currentLine, isTypingComplete, showCursor } =
    useTypingAnimation(
      lines,
      typingSpeed,
      lineDelay,
      shouldAnimate && isVisible,
      hasBeenAnimated,
      uniqueCardId
    );

  // Combine refs
  const combinedRef = useCallback(
    (node: HTMLDivElement | null) => {
      // Set intersection observer ref
      if (intersectionRef.current !== node) {
        intersectionRef.current = node;
      }

      // Set forwarded ref
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    },
    [intersectionRef, ref]
  );

  // If animation is disabled, show all lines immediately
  if (!shouldAnimate) {
    return (
      <div ref={combinedRef} className={cn('space-y-1', className)} {...props}>
        {lines.map((line, index) => (
          <CodeLine
            key={startLine + index}
            lineNumber={startLine + index}
            showLineNumber={showLineNumbers}
            lineNumberClassName={lineNumberClassName}
          >
            {line}
          </CodeLine>
        ))}
        <div className="flex items-center space-x-2 pt-1">
          <span className="text-primary">$</span>
          <span className="h-4 w-2 animate-pulse bg-primary"></span>
        </div>
      </div>
    );
  }

  return (
    <div ref={combinedRef} className={cn('space-y-1', className)} {...props}>
      {/* Render completed lines */}
      {displayedLines.map((line, index) => (
        <CodeLine
          key={startLine + index}
          lineNumber={startLine + index}
          showLineNumber={showLineNumbers}
          lineNumberClassName={lineNumberClassName}
        >
          {line}
        </CodeLine>
      ))}

      {/* Render current typing line */}
      {currentLine && (
        <AnimatedCodeLine
          lineNumber={startLine + displayedLines.length}
          showLineNumber={showLineNumbers}
          lineNumberClassName={lineNumberClassName}
          showCursor={showCursor}
        >
          {currentLine}
        </AnimatedCodeLine>
      )}

      {/* Show persistent cursor after typing is complete */}
      {isTypingComplete && (
        <div className="flex items-center space-x-2 pt-1">
          <span className="text-primary">$</span>
          <span className="h-4 w-2 animate-pulse bg-primary"></span>
        </div>
      )}
    </div>
  );
}

interface CardContentWithCodeProps extends React.ComponentProps<'div'> {
  startLine?: number;
  showLineNumbers?: boolean;
  lineNumberClassName?: string;
  lines: React.ReactNode[];
}

function CardContentWithCode({
  className,
  startLine = 1,
  showLineNumbers = true,
  lineNumberClassName,
  lines,
  ref,
  ...props
}: CardContentWithCodeProps) {
  return (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props}>
      <div className="font-mono text-sm">
        <CodeBlock
          startLine={startLine}
          showLineNumbers={showLineNumbers}
          lineNumberClassName={lineNumberClassName}
          lines={lines}
        />
      </div>
    </div>
  );
}

// Animated version of CardContentWithCode
interface AnimatedCardContentWithCodeProps extends React.ComponentProps<'div'> {
  startLine?: number;
  showLineNumbers?: boolean;
  lineNumberClassName?: string;
  lines: React.ReactNode[];
  typingSpeed?: number;
  lineDelay?: number;
  enableAnimation?: boolean;
  cardId?: string; // Optional unique identifier for global animation tracking
}

function AnimatedCardContentWithCode({
  className,
  startLine = 1,
  showLineNumbers = true,
  lineNumberClassName,
  lines,
  typingSpeed = defaultTypingSpeed,
  lineDelay = defaultLineDelay,
  enableAnimation = true,
  cardId,
  ref,
  ...props
}: AnimatedCardContentWithCodeProps) {
  // Determine card size class based on number of lines to prevent mobile layout shifts
  const getCardSizeClass = () => {
    const lineCount = lines.length;
    if (lineCount <= 6) return 'card-content-small';
    if (lineCount <= 10) return 'card-content-medium';
    return 'card-content-large';
  };

  const sizeClass = enableAnimation ? getCardSizeClass() : '';

  return (
    <div ref={ref} className={cn('p-6 pt-0', sizeClass, className)} {...props}>
      <div className="animated-code-content font-mono text-sm">
        <AnimatedCodeBlock
          startLine={startLine}
          showLineNumbers={showLineNumbers}
          lineNumberClassName={lineNumberClassName}
          lines={lines}
          typingSpeed={typingSpeed}
          lineDelay={lineDelay}
          enableAnimation={enableAnimation}
          cardId={cardId}
        />
      </div>
    </div>
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardContentWithCode,
  AnimatedCardContentWithCode,
  CodeBlock,
  AnimatedCodeBlock,
  CodeLine,
  AnimatedCodeLine,
};
