import Link from "next/link";
import { clsx } from "clsx";
import { SYMBOL_PATH, SYMBOL_SIZE } from "@/lib/symbol-path";

type Variant = "gradient" | "light" | "dark";

const fillFor: Record<Variant, string> = {
  gradient: "url(#byottiGrad)",
  light: "#e6eefb",
  dark: "#0c2340",
};

const wordFor: Record<Variant, string> = {
  gradient: "text-navy-900",
  light: "text-white",
  dark: "text-navy-900",
};

/**
 * Símbolo oficial da Byotti: os dois "T" (Transformação + Tecnologia)
 * entrelaçados, traço vazado e leve inclinação. Vetorizado do arquivo original.
 */
export function ByottiMark({
  variant = "gradient",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  return (
    <svg
      viewBox={`0 0 ${SYMBOL_SIZE} ${SYMBOL_SIZE}`}
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient
          id="byottiGrad"
          x1="0"
          y1={SYMBOL_SIZE}
          x2={SYMBOL_SIZE}
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0C2340" />
          <stop offset="1" stopColor="#034AFE" />
        </linearGradient>
      </defs>
      <path d={SYMBOL_PATH} fill={fillFor[variant]} fillRule="evenodd" />
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
