import Link from "next/link";
import { clsx } from "clsx";

type Variant = "gradient" | "light" | "dark";

const strokeFor: Record<Variant, string> = {
  gradient: "url(#byottiGrad)",
  light: "#e6eefb",
  dark: "#0c2340",
};

const wordFor: Record<Variant, string> = {
  gradient: "text-navy-900",
  light: "text-white",
  dark: "text-navy-900",
};

export function ByottiMark({
  variant = "gradient",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="byottiGrad" x1="4" y1="44" x2="44" y2="4" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0C2340" />
          <stop offset="1" stopColor="#034AFE" />
        </linearGradient>
      </defs>
      <g
        stroke={strokeFor[variant]}
        strokeWidth="5"
        strokeLinecap="round"
        transform="rotate(-8 24 24)"
      >
        <line x1="20" y1="3" x2="16" y2="45" />
        <line x1="32" y1="3" x2="28" y2="45" />
        <line x1="4" y1="17.5" x2="43" y2="15" />
        <line x1="5" y1="32.5" x2="44" y2="30" />
      </g>
    </svg>
  );
}

export function Logo({
  variant = "gradient",
  className,
  href = "/",
}: {
  variant?: Variant;
  className?: string;
  href?: string | null;
}) {
  const content = (
    <span className={clsx("inline-flex items-center gap-2.5", className)}>
      <ByottiMark variant={variant} className="h-8 w-8 shrink-0" />
      <span
        className={clsx(
          "font-display text-2xl font-bold lowercase tracking-tight",
          wordFor[variant],
        )}
      >
        byotti
      </span>
    </span>
  );

  if (href === null) return content;

  return (
    <Link href={href} aria-label="Byotti — página inicial" className="inline-flex">
      {content}
    </Link>
  );
}
