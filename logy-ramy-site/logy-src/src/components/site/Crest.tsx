/** A custom Egypt mark, used until licensed federation artwork is supplied. */
export function Crest({
  variant,
  className,
}: {
  variant: "national";
  className?: string;
}) {
  const stroke = "var(--color-bone)";

  return (
    <svg viewBox="0 0 96 108" className={className} role="img" aria-label="Egypt national team emblem">
      <path
        d="M48 3 91 17v44c0 22-19 36-43 44C24 97 5 83 5 61V17L48 3Z"
        fill="none"
        stroke={stroke}
        strokeWidth="1.6"
        opacity="0.9"
      />
      <path
        d="M48 12 82 23v37c0 18-15 30-34 37-19-7-34-19-34-37V23L48 12Z"
        fill="none"
        stroke="var(--color-hairline)"
        strokeWidth="1"
      />
      <path d="M48 36c6 6 9 11 9 16s-4 9-9 9-9-4-9-9 3-10 9-16Z" fill="none" stroke={stroke} strokeWidth="1.4" />
      <path d="M34 68h28" stroke={stroke} strokeWidth="1.2" />
      <path d="M38 74h20" stroke="var(--color-hairline)" strokeWidth="1.2" />
    </svg>
  );
}
