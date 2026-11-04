// Small inline icons for the editor frame, drawn after VS Code's codicons.
// All are decorative: the text next to them carries the meaning.

type IconProps = { className?: string };

/** React file icon, as VS Code shows next to .tsx files. */
export function ReactFileIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <ellipse cx="8" cy="8" rx="7" ry="2.75" />
      <ellipse cx="8" cy="8" rx="7" ry="2.75" transform="rotate(60 8 8)" />
      <ellipse cx="8" cy="8" rx="7" ry="2.75" transform="rotate(120 8 8)" />
      <circle cx="8" cy="8" r="1.25" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** The `><` remote indicator at the left of the status bar. */
export function RemoteIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 4.5 5.5 8 2 11.5M14 4.5 10.5 8l3.5 3.5" />
    </svg>
  );
}

/** Source control branch. */
export function BranchIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
    >
      <circle cx="4.5" cy="3.5" r="1.5" />
      <circle cx="4.5" cy="12.5" r="1.5" />
      <circle cx="11.5" cy="5.5" r="1.5" />
      <path d="M4.5 5v6M11.5 7c0 3-7 2-7 4" />
    </svg>
  );
}

/** Breadcrumb separator. */
export function ChevronIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
    >
      <path d="m6 4 4 4-4 4" />
    </svg>
  );
}
