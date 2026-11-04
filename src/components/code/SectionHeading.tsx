/** A section title styled as a `//` code comment. */
export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-lg font-semibold text-balance text-foreground sm:text-xl">
      <span className="text-syntax-comment">//</span> {children}
    </h2>
  );
}
