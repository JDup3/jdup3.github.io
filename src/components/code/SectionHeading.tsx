/** A section title styled as a `//` code comment. */
export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-xl font-semibold text-primary">
      <span className="text-muted-foreground">//</span> {children}
    </h2>
  );
}
