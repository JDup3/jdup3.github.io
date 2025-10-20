import * as React from 'react';

import { cn } from '../../lib/utils';

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
    <div ref={ref} className={className} {...props}>
      {showLineNumber && lineNumber !== undefined && (
        <span
          className={cn(
            'text-muted-foreground mr-2 inline-block w-6 text-right',
            lineNumberClassName
          )}
        >
          {lineNumber}
        </span>
      )}
      {children}
    </div>
  )
);
CodeLine.displayName = 'CodeLine';

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

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardContentWithCode,
  CodeBlock,
  CodeLine,
};
