import { act, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { CodeBlock } from '@/components/code/CodeBlock';
import { AnimationProvider } from '@/contexts/AnimationContext';
import { line, nm, p, str } from '@/content/tokens';

const lines = [
  line(0, nm('name'), p(': '), str("'Ada'")),
  line(1, nm('role'), p(': '), str("'Dev'")),
];

// Each timer step re-renders and schedules the next one, so advance in steps.
const advance = (ms: number, steps = 1) => {
  for (let i = 0; i < steps; i++) {
    act(() => {
      vi.advanceTimersByTime(ms);
    });
  }
};
// Enough steps to type both lines (22 characters and 2 line pauses).
const typeEverything = () => advance(50, 40);

const rows = (container: HTMLElement) =>
  Array.from(container.querySelectorAll(':scope > div > div.flex')).filter(
    (row) => !row.textContent?.startsWith('$')
  );

const isShown = (element: Element) => element.closest('.opacity-0') === null;

describe('CodeBlock', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it('renders every line from the start so the block never changes height', () => {
    const { container } = render(
      <AnimationProvider>
        <CodeBlock lines={lines} />
      </AnimationProvider>
    );

    expect(rows(container)).toHaveLength(2);
    // Line 2 is in the DOM, readable by screen readers, but not yet shown.
    const role = screen.getByText("'Dev'");
    expect(isShown(role)).toBe(false);
    expect(role.closest('[aria-hidden="true"]')).toBeNull();
  });

  it('types the lines out, then shows the prompt', () => {
    const { container } = render(
      <AnimationProvider>
        <CodeBlock lines={lines} typingSpeed={10} lineDelay={50} />
      </AnimationProvider>
    );
    const prompt = screen.getByText('$').parentElement!;
    expect(prompt).toHaveAttribute('aria-hidden', 'true');

    // Halfway through line 1 the typed overlay holds a prefix of the line.
    advance(10, 3);
    const overlay = container.querySelector('[aria-hidden="true"].absolute');
    expect(overlay?.textContent).toBe('nam');

    typeEverything();

    expect(rows(container)).toHaveLength(2);
    expect(isShown(screen.getByText("'Ada'"))).toBe(true);
    expect(isShown(screen.getByText("'Dev'"))).toBe(true);
    expect(container.querySelector('.absolute')).toBeNull();
    expect(prompt).not.toHaveAttribute('aria-hidden');
    expect(isShown(prompt)).toBe(true);
  });

  it('types a block only once per visit', () => {
    const { rerender } = render(
      <AnimationProvider>
        <CodeBlock key="first" id="card" lines={lines} />
      </AnimationProvider>
    );
    typeEverything();

    // A remount (such as returning to the page) shows the code straight away.
    rerender(
      <AnimationProvider>
        <CodeBlock key="second" id="card" lines={lines} />
      </AnimationProvider>
    );
    expect(isShown(screen.getByText("'Dev'"))).toBe(true);
  });

  it('shows everything at once when the user prefers reduced motion', () => {
    vi.stubGlobal(
      'matchMedia',
      vi.fn((query: string) => ({
        matches: query === '(prefers-reduced-motion: reduce)',
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }))
    );
    const { container } = render(
      <AnimationProvider>
        <CodeBlock lines={lines} />
      </AnimationProvider>
    );

    expect(isShown(screen.getByText("'Dev'"))).toBe(true);
    expect(container.querySelector('.opacity-0')).toBeNull();
  });

  it('does not log to the console while typing', () => {
    const log = vi.spyOn(console, 'log').mockImplementation(() => {});
    render(
      <AnimationProvider>
        <CodeBlock lines={lines} />
      </AnimationProvider>
    );
    typeEverything();

    expect(log).not.toHaveBeenCalled();
    log.mockRestore();
  });
});
