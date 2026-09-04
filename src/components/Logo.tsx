import Link from "next/link";
import { clsx } from "clsx";

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
 * Símbolo da Byotti: os dois "T" (Transformação + Tecnologia) entrelaçados,
 * traço vazado, cantos arredondados e leve inclinação (movimento/agilidade).
 */
export function ByottiMark({
  variant = "gradient",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <defs>
        <linearGradient
          id="byottiGrad"
          x1="6"
          y1="42"
          x2="42"
          y2="6"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0C2340" />
          <stop offset="1" stopColor="#034AFE" />
        </linearGradient>
        <mask id="byottiMark">
          <g transform="rotate(10 24 24)">
            {/* união das 3 barras (branco = visível) */}
            <rect x="19.6" y="6" width="9" height="37" rx="4.5" fill="#fff" />
            <rect x="3.5" y="13.5" width="40" height="9" rx="4.5" fill="#fff" />
            <rect x="13" y="27.5" width="30.5" height="8.6" rx="4.3" fill="#fff" />
            {/* miolo vazado (preto = recorte) */}
            <rect x="21.75" y="8.1" width="4.7" height="32.8" rx="2.35" fill="#000" />
            <rect x="5.65" y="15.65" width="35.7" height="4.7" rx="2.35" fill="#000" />
            <rect x="15.1" y="29.6" width="26.3" height="4.4" rx="2.2" fill="#000" />
          </g>
        </mask>
      </defs>
      <rect
        x="0"
        y="0"
        width="48"
        height="48"
        fill={fillFor[variant]}
        mask="url(#byottiMark)"
      />
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
