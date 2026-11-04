/**
 * Shapes for the site's content. Pages render these; the words live in the
 * other files in this folder.
 */

/** Syntax role of a piece of code text; each maps to one colour. */
export type TokenKind =
  'keyword' | 'name' | 'string' | 'number' | 'plain' | 'text';

export interface Token {
  kind: TokenKind;
  text: string;
}

/** One line of a code card: an indent level and its tokens. */
export interface CodeLine {
  indent: 0 | 1 | 2;
  tokens: readonly Token[];
}

/** Colour of the dot in a code window's title bar. */
export type WindowDot = 'success' | 'warning' | 'yellow' | 'purple' | 'blue';

/** An editor-window card whose body is typed-out code. */
export interface CodeCard {
  /** Remembers that this card has been typed during this visit. */
  id: string;
  file: string;
  dot: WindowDot;
  lines: readonly CodeLine[];
}

/** A link styled as a shell command, such as `$ git clone`. */
export interface CommandLinkContent {
  href: string;
  command: string;
}

export interface Project {
  file: string;
  dot: WindowDot;
  link: CommandLinkContent;
  title: string;
  description: string;
  tags: readonly string[];
}
