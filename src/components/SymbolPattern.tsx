import { clsx } from "clsx";
import { SYMBOL_PATH, SYMBOL_SIZE } from "@/lib/symbol-path";

const TILE = 96;
const MARK = 44;
const SCALE = MARK / SYMBOL_SIZE;

/**
 * Textura da marca: símbolo oficial da Byotti repetido em grade alternada
 * (como na textura do manual de identidade), em baixo contraste.
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
            width={TILE}
            height={TILE}
            patternUnits="userSpaceOnUse"
          >
            <g fill={stroke} fillRule="evenodd">
              <path
                d={SYMBOL_PATH}
                transform={`translate(4 4) scale(${SCALE})`}
              />
              <path
                d={SYMBOL_PATH}
                transform={`translate(${TILE / 2 + 4} ${TILE / 2 + 4}) scale(${SCALE})`}
              />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#byottiTexture)" />
      </svg>
    </div>
  );
}
