import { CardContent } from '@/components/ui/card';
import { CodeBlock } from './CodeBlock';

type CodeCardContentProps = React.ComponentProps<typeof CodeBlock>;

/** A card body holding a typed code block. */
export function CodeCardContent({ className, ...props }: CodeCardContentProps) {
  return (
    <CardContent className={className}>
      <div className="font-mono text-sm animated-code-content">
        <CodeBlock {...props} />
      </div>
    </CardContent>
  );
}
