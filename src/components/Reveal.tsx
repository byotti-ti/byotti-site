import type { CSSProperties, ReactNode } from "react";
import { clsx } from "clsx";

/**
 * Fade + subida sutil, 100% CSS (sem JS / rAF), disparado por scroll via
 * `animation-timeline: view()` quando suportado. Sem suporte, o conteúdo
 * simplesmente aparece — nunca fica preso invisível.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={clsx("reveal", className)}
      style={{ "--reveal-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}
