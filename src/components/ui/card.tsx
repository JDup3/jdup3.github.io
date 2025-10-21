import * as React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useAnimationState } from '../../contexts/AnimationContext';

import { cn } from '../../lib/utils';

const defaultTypingSpeed = 10;
const defaultLineDelay = 50;

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-lg border bg-card text-card-foreground shadow-sm',
      className
    )}
    {...props}
  />
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

// Custom hook for intersection observer with React context animation tracking
const useIntersectionObserver = (
  options: { threshold?: number; rootMargin?: string; cardId?: string } = {}
): [React.RefObject<HTMLDivElement>, boolean] => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { hasAnimated, markAsAnimated } = useAnimationState();

  const { threshold = 0.1, rootMargin = '0px', cardId } = options;

  // Generate a unique card ID if not provided
  const uniqueCardId =
    cardId || `card-${Math.random().toString(36).substr(2, 9)}`;

  useEffect(() => {
    // Check if this card has already been animated
    const hasBeenAnimated = hasAnimated(uniqueCardId);

    console.log(`📍 Intersection Observer for ${uniqueCardId}:`, {
      hasBeenAnimated,
      element: ref.current ? 'exists' : 'null',
    });

    // If already animated, show content immediately without animation
    if (hasBeenAnimated) {
      console.log(`✅ Card ${uniqueCardId} already animated, setting visible`);
      setIsIntersecting(true);
      return;
    }

    const element = ref.current;
    if (!element || typeof IntersectionObserver === 'undefined') {
      // Fallback for environments without IntersectionObserver (like tests)
      console.log(`🔄 Fallback for ${uniqueCardId}, setting visible`);
      setIsIntersecting(true);
      // Don't mark as animated here either - let the animation complete
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log(
            `👁️ Card ${uniqueCardId} came into view, setting visible`
          );
          setIsIntersecting(true);
          // Don't mark as animated here - let the animation finish first
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, uniqueCardId, hasAnimated, markAsAnimated]);

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
      console.log('🚀 Skipping animation, showing all content');
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
      console.log('🎯 Starting animation');
      setDisplayedLines([]);
      setCurrentLineIndex(0);
      setCurrentCharIndex(0);
      setIsTypingComplete(false);
    }
  }, [shouldStart, skipAnimation]);

  useEffect(() => {
    if (!shouldStart || skipAnimation) return;

    console.log('⚡ Animation effect triggered:', {
      shouldStart,
      skipAnimation,
      currentLineIndex,
      totalLines: lines.length,
    });

    if (currentLineIndex >= lines.length) {
      setIsTypingComplete(true);
      // Mark as animated when typing is actually complete
      if (cardId && !skipAnimation) {
        console.log(`✅ Animation complete for ${cardId}, marking as animated`);
        markAsAnimated(cardId);
      }
      return;
    }

    const currentLine = lines[currentLineIndex];

    // Convert ReactNode to string for character-by-character typing
    const getTextContent = (node: React.ReactNode): string => {
      if (typeof node === 'string') return node;
      if (typeof node === 'number') return node.toString();
      if (React.isValidElement(node)) {
        return React.Children.toArray(node.props.children)
          .map(getTextContent)
          .join('');
      }
      if (Array.isArray(node)) {
        return node.map(getTextContent).join('');
      }
      return '';
    };

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

    if (React.isValidElement(line)) {
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
        } else if (React.isValidElement(child)) {
          const childText = React.Children.toArray(child.props.children).join(
            ''
          );
          if (remainingChars >= childText.length) {
            partialChildren.push(child);
            remainingChars -= childText.length;
          } else {
            // Create partial child element
            partialChildren.push(
              React.cloneElement(child, {
                ...child.props,
                children: childText.substring(0, remainingChars),
              })
            );
            remainingChars = 0;
          }
        }
      }

      return React.cloneElement(line, {
        ...line.props,
        children: partialChildren,
      });
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

interface CodeLineProps extends React.HTMLAttributes<HTMLDivElement> {
  lineNumber?: number;
  showLineNumber?: boolean;
  lineNumberClassName?: string;
}

const CodeLine = React.forwardRef<HTMLDivElement, CodeLineProps>(
  (
    {
      className,
      children,
      lineNumber,
      showLineNumber = true,
      lineNumberClassName,
      ...props
    },
    ref
  ) => (
    <div ref={ref} className={cn('flex', className)} {...props}>
      {showLineNumber && lineNumber !== undefined && (
        <span
          className={cn(
            'text-muted-foreground mr-2 flex-shrink-0 w-6 text-right',
            lineNumberClassName
          )}
        >
          {lineNumber}
        </span>
      )}
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  )
);
CodeLine.displayName = 'CodeLine';

// Animated code line with cursor
interface AnimatedCodeLineProps extends React.HTMLAttributes<HTMLDivElement> {
  lineNumber?: number;
  showLineNumber?: boolean;
  lineNumberClassName?: string;
  showCursor?: boolean;
}

const AnimatedCodeLine = React.forwardRef<
  HTMLDivElement,
  AnimatedCodeLineProps
>(
  (
    {
      className,
      children,
      lineNumber,
      showLineNumber = true,
      lineNumberClassName,
      showCursor = false,
      ...props
    },
    ref
  ) => (
    <div ref={ref} className={cn('flex', className)} {...props}>
      {showLineNumber && lineNumber !== undefined && (
        <span
          className={cn(
            'text-muted-foreground mr-2 flex-shrink-0 w-6 text-right',
            lineNumberClassName
          )}
        >
          {lineNumber}
        </span>
      )}
      <div className="flex-1 min-w-0 flex items-center">
        <span>{children}</span>
        {showCursor && (
          <span className="w-2 h-4 bg-primary animate-pulse ml-1"></span>
        )}
      </div>
    </div>
  )
);
AnimatedCodeLine.displayName = 'AnimatedCodeLine';

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  startLine?: number;
  showLineNumbers?: boolean;
  lineNumberClassName?: string;
  lines: React.ReactNode[];
}

const CodeBlock = React.forwardRef<HTMLDivElement, CodeBlockProps>(
  (
    {
      className,
      startLine = 1,
      showLineNumbers = true,
      lineNumberClassName,
      lines,
      ...props
    },
    ref
  ) => (
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
  )
);
CodeBlock.displayName = 'CodeBlock';

// Animated code block with typing effect
interface AnimatedCodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  startLine?: number;
  showLineNumbers?: boolean;
  lineNumberClassName?: string;
  lines: React.ReactNode[];
  typingSpeed?: number;
  lineDelay?: number;
  enableAnimation?: boolean;
  cardId?: string; // Optional unique identifier for global animation tracking
}

const AnimatedCodeBlock = React.forwardRef<
  HTMLDivElement,
  AnimatedCodeBlockProps
>(
  (
    {
      className,
      startLine = 1,
      showLineNumbers = true,
      lineNumberClassName,
      lines,
      typingSpeed = defaultTypingSpeed,
      lineDelay = defaultLineDelay,
      enableAnimation = true,
      cardId,
      ...props
    },
    ref
  ) => {
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

    const { displayedLines, currentLine, isTypingComplete, showCursor } =
      useTypingAnimation(
        lines,
        typingSpeed,
        lineDelay,
        isVisible,
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
    if (!enableAnimation) {
      return (
        <div
          ref={combinedRef}
          className={cn('space-y-1', className)}
          {...props}
        >
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
            <span className="w-2 h-4 bg-primary animate-pulse"></span>
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
            <span className="w-2 h-4 bg-primary animate-pulse"></span>
          </div>
        )}
      </div>
    );
  }
);
AnimatedCodeBlock.displayName = 'AnimatedCodeBlock';

interface CardContentWithCodeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  startLine?: number;
  showLineNumbers?: boolean;
  lineNumberClassName?: string;
  lines: React.ReactNode[];
}

const CardContentWithCode = React.forwardRef<
  HTMLDivElement,
  CardContentWithCodeProps
>(
  (
    {
      className,
      startLine = 1,
      showLineNumbers = true,
      lineNumberClassName,
      lines,
      ...props
    },
    ref
  ) => (
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
  )
);
CardContentWithCode.displayName = 'CardContentWithCode';

// Animated version of CardContentWithCode
interface AnimatedCardContentWithCodeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  startLine?: number;
  showLineNumbers?: boolean;
  lineNumberClassName?: string;
  lines: React.ReactNode[];
  typingSpeed?: number;
  lineDelay?: number;
  enableAnimation?: boolean;
  cardId?: string; // Optional unique identifier for global animation tracking
}

const AnimatedCardContentWithCode = React.forwardRef<
  HTMLDivElement,
  AnimatedCardContentWithCodeProps
>(
  (
    {
      className,
      startLine = 1,
      showLineNumbers = true,
      lineNumberClassName,
      lines,
      typingSpeed = defaultTypingSpeed,
      lineDelay = defaultLineDelay,
      enableAnimation = true,
      cardId,
      ...props
    },
    ref
  ) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props}>
      <div className="font-mono text-sm">
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
  )
);
AnimatedCardContentWithCode.displayName = 'AnimatedCardContentWithCode';

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
