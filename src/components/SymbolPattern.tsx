import { clsx } from "clsx";

/**
 * Textura da marca: símbolo da Byotti repetido em baixo contraste.
 * Usar como camada de fundo em seções escuras.
 */
export function SymbolPattern({
  className,
  stroke = "#ffffff",
  opacity = 0.05,
}: {
  className?: string;
  stroke?: string;
  opacity?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className={clsx("pointer-events-none absolute inset-0", className)}
      style={{ opacity }}
    >
      <svg width="100%" height="100%">
        <defs>
          <pattern
            id="byottiTexture"
            width="72"
            height="72"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(-8)"
          >
            <g stroke={stroke} strokeWidth="3" strokeLinecap="round" fill="none">
              <line x1="28" y1="14" x2="24" y2="58" />
              <line x1="40" y1="14" x2="36" y2="58" />
              <line x1="16" y1="26" x2="52" y2="23" />
              <line x1="17" y1="40" x2="53" y2="37" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#byottiTexture)" />
      </svg>
    </div>
  );
}
