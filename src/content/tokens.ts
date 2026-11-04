import type { CodeLine, Token } from './types';

// Short constructors so the content files read like the code they show.
export const kw = (text: string): Token => ({ kind: 'keyword', text });
export const nm = (text: string): Token => ({ kind: 'name', text });
export const str = (text: string): Token => ({ kind: 'string', text });
export const num = (text: string): Token => ({ kind: 'number', text });
export const p = (text: string): Token => ({ kind: 'plain', text });
export const txt = (text: string): Token => ({ kind: 'text', text });

export const line = (
  indent: CodeLine['indent'],
  ...tokens: Token[]
): CodeLine => ({ indent, tokens });
