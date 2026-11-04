# Code components

The site's code-styled cards are built from small components in `src/components/code/`, fed by data in `src/content/`. `src/components/ui/` holds only shadcn/ui components, which the shadcn CLI owns.

## Where things live

| Path                    | What it holds                                                                                                                 |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `src/content/*.ts`      | All page text and code samples, one file per page. Edit wording here.                                                         |
| `src/content/types.ts`  | Content shapes: `Token`, `CodeLine`, `CodeCard`, `Project`.                                                                   |
| `src/content/tokens.ts` | Helpers for writing code lines: `kw`, `nm`, `str`, `num`, `p`, `txt`, `line`.                                                 |
| `src/components/code/`  | `CodeWindow`, `CodeFileCard`, `CodeBlock`, `PageHeader`, `SectionHeading`, `TerminalPrompt`, `CommandLink`, `MarkdownBullet`. |
| `src/hooks/`            | `usePrefersReducedMotion`, `useInView`, `useTypingAnimation`.                                                                 |
| `src/content/site.ts`   | The page list (tab label, title, description) used by the tab bar, the head tags and the sitemap.                             |
| `src/components/frame/` | The VS Code window around every page: `TitleBar`, `EditorTabs` (the navigation), `Breadcrumbs`, `StatusBar`.                  |

## Writing a code card

A code line is an indent level (0, 1 or 2) and a list of tokens. A line too long for the card wraps with a hanging indent. Each token kind has one VS Code Dark+ colour: `kw` keyword, `nm` name, `str` string, `num` number, `p` plain text, `txt` inherited colour.

```ts
// src/content/about.ts
export const interests: CodeCard = {
  id: 'about-interests', // remembers the card was typed during this visit
  file: 'interests.js',
  dot: 'warning',
  lines: [
    line(0, kw('const'), nm(' interests '), p('= [')),
    line(1, str("'Software development'"), p(',')),
    line(0, p(']')),
  ],
};
```

```tsx
// src/pages/About.tsx
<CodeFileCard card={interests} />
```

`CodeFileCard` takes optional `typingSpeed` (ms per character, default 10) and `lineDelay` (ms pause per line, default 50).

## Typing animation

`CodeBlock` types its lines out once, when the block first scrolls into view (`useInView`, 10% threshold).

- Every line is rendered from the first paint. Lines not yet typed are transparent, so the card has its final height from the start and the page does not shift while it types.
- The line being typed shows its typed part over a transparent copy of the whole line. The copy stays in the accessibility tree, so screen readers get the full text at any point; the typed overlay is `aria-hidden`.
- Each block types once per visit: `AnimationContext` remembers finished block IDs until the page is reloaded. A block without an `id` gets a stable one from `useId`.
- With `prefers-reduced-motion: reduce`, or `animate={false}`, the code is shown in full straight away, and `index.css` stops the cursor pulse.

## Tests

- `src/test/content.test.tsx` snapshots each route's rendered text. A wording change shows up as a snapshot diff; update the snapshot (`npx vitest run -u`) only when the change is intended.
- `src/test/CodeBlock.test.tsx` covers typing, height reservation, screen-reader text, the once-per-visit rule and reduced motion.
