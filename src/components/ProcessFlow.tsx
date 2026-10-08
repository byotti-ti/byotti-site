import { CheckCircle2, FileText, Sparkles, Workflow } from "lucide-react";
import { clsx } from "clsx";

const nodes = [
  { icon: FileText, label: "Processo", hint: "como é feito hoje" },
  { icon: Sparkles, label: "IA", hint: "entende e decide", highlight: true },
  { icon: Workflow, label: "Automação", hint: "executa e conecta" },
  { icon: CheckCircle2, label: "Resultado", hint: "menos trabalho manual" },
];

/**
 * Representação do fluxo Processo → IA → Automação → Resultado.
 * Cards e linhas de conexão no mesmo estilo do restante do site (sem robôs,
 * cérebros ou circuitos). Fundo escuro.
 */
export function ProcessFlow({
  showHints = false,
  className,
}: {
  showHints?: boolean;
  className?: string;
}) {
  return (
    <div
      className={clsx("flex w-full items-start", className)}
      role="img"
      aria-label="Fluxo: processo, inteligência artificial, automação, resultado"
    >
      {nodes.map((n, i) => {
        const Icon = n.icon;
        return (
          <div key={n.label} className="flex flex-1 items-start last:flex-none">
            <div className="flex w-[3.75rem] shrink-0 flex-col items-center text-center min-[400px]:w-[4.5rem] sm:w-20">
              <span
                className={clsx(
                  "inline-flex h-11 w-11 items-center justify-center rounded-xl border",
                  n.highlight
                    ? "border-brand-400 bg-brand-500 text-white shadow-glow"
                    : "border-white/15 bg-white/[0.06] text-ice-100",
                )}
              >
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="mt-2 text-[0.6rem] font-bold uppercase tracking-[0.06em] text-white min-[400px]:text-[0.65rem] min-[400px]:tracking-[0.1em]">
                {n.label}
              </span>
              {showHints && (
                <span className="mt-0.5 text-[0.7rem] leading-tight text-ice-300">
                  {n.hint}
                </span>
              )}
            </div>
            {i < nodes.length - 1 && (
              <div className="flow-line mt-[22px] min-w-2 flex-1" aria-hidden="true" />
            )}
          </div>
        );
      })}
    </div>
  );
}
