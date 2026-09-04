import { clsx } from "clsx";

/**
 * Textura da marca: símbolo da Byotti (dois "T") repetido em baixo contraste.
 * Camada de fundo para seções escuras.
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
            width="88"
            height="88"
            patternUnits="userSpaceOnUse"
          >
            <g transform="translate(20 20) rotate(10 24 24) scale(0.9)" fill={stroke}>
              <rect x="19.6" y="6" width="9" height="37" rx="4.5" />
              <rect x="3.5" y="13.5" width="40" height="9" rx="4.5" />
              <rect x="13" y="27.5" width="30.5" height="8.6" rx="4.3" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#byottiTexture)" />
      </svg>
    </div>
  );
}
