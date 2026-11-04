import type { Token, TokenKind } from '@/content/types';

// VS Code Dark+ token colours (index.css).
const kindClass: Record<TokenKind, string | undefined> = {
  keyword: 'text-syntax-keyword',
  name: 'text-syntax-name',
  string: 'text-syntax-string',
  number: 'text-syntax-number',
  plain: 'text-syntax-plain',
  text: undefined,
};

/** Renders tokens as coloured spans. */
export function CodeTokens({ tokens }: { tokens: readonly Token[] }) {
  return tokens.map((token, index) => (
    <span key={index} className={kindClass[token.kind]}>
      {token.text}
    </span>
  ));
}
