import { cn } from '@/lib/utils';
import type { CodeLine, Token, TokenKind } from '@/content/types';

const kindClass: Record<TokenKind, string | undefined> = {
  keyword: 'text-accent',
  name: 'text-primary',
  string: 'text-syntax-string',
  number: 'text-red-400',
  plain: 'text-foreground',
  text: undefined,
};

const indentClass: Record<CodeLine['indent'], string> = {
  0: 'ml-2',
  1: 'ml-6',
  2: 'ml-10',
};

interface CodeTokensProps {
  tokens: readonly Token[];
  /** Indent applied to the first token, as in a code card line. */
  indent?: CodeLine['indent'];
}

/** Renders tokens as coloured spans. */
export function CodeTokens({ tokens, indent }: CodeTokensProps) {
  return tokens.map((token, index) => (
    <span
      key={index}
      className={
        cn(
          index === 0 && indent !== undefined && indentClass[indent],
          kindClass[token.kind]
        ) || undefined
      }
    >
      {token.text}
    </span>
  ));
}
