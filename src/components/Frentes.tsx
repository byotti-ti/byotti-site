import { ArrowRight, Plus, Server, ShieldCheck, Workflow } from "lucide-react";
import { clsx } from "clsx";
import { Reveal } from "./Reveal";

const frentes = [
  {
    icon: Server,
    label: "Infraestrutura",
    text: "A tecnologia que mantém a empresa funcionando.",
    items: ["Redes e Wi-Fi", "Servidores", "Cloud e backup", "Suporte ao usuário"],
  },
  {
    icon: ShieldCheck,
    label: "Segurança",
    text: "A proteção que reduz riscos.",
    items: ["Firewall", "Antivírus e endpoint", "Controle de acessos", "Continuidade"],
  },
  {
    icon: Workflow,
    label: "IA e Automação",
    text: "A tecnologia que ajuda a empresa a trabalhar melhor.",
    items: [
      "Automação de processos",
      "Integração entre sistemas",
      "Soluções com IA",
      "Software sob medida",
    ],
    highlight: true,
  },
];

export function Frentes() {
  return (
    <section className="bg-ice-50 py-20 lg:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Uma só Byotti</span>
          <h2 className="mt-4 text-3xl sm:text-4xl">
            Infraestrutura, segurança e automação na mesma empresa de tecnologia
          </h2>
          <p className="mt-4 text-lg text-navy-700">
            Você não precisa de um fornecedor para cada área. A Byotti conhece o
            ambiente da sua empresa por dentro — e por isso desenvolve soluções
            que funcionam nele.
          </p>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:gap-3">
          {frentes.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={f.label} className="contents">
                <Reveal delay={i * 0.08} className="h-full">
                  <article
                    className={clsx(
                      "flex h-full flex-col rounded-2xl border p-7",
                      f.highlight
                        ? "border-navy-900 bg-navy-900 text-white shadow-card"
                        : "border-ice-200 bg-white",
                    )}
                  >
                    <span
                      className={clsx(
                        "inline-flex h-12 w-12 items-center justify-center rounded-xl",
                        f.highlight ? "bg-brand-500 text-white" : "bg-navy-900 text-white",
                      )}
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </span>
                    <h3
                      className={clsx(
                        "mt-5 text-xs font-bold uppercase tracking-[0.16em]",
                        f.highlight ? "text-brand-300" : "text-brand-500",
                      )}
                    >
                      {f.label}
                    </h3>
                    <p
                      className={clsx(
                        "mt-2 font-display text-lg font-bold leading-snug",
                        f.highlight ? "text-white" : "text-navy-900",
                      )}
                    >
                      {f.text}
                    </p>
                    <ul
                      className={clsx(
                        "mt-5 space-y-2 border-t pt-5 text-sm",
                        f.highlight
                          ? "border-white/15 text-ice-200"
                          : "border-ice-200 text-navy-700",
                      )}
                    >
                      {f.items.map((it) => (
                        <li key={it} className="flex items-center gap-2">
                          <span
                            className={clsx(
                              "h-1.5 w-1.5 shrink-0 rounded-full",
                              f.highlight ? "bg-brand-400" : "bg-brand-500",
                            )}
                          />
                          {it}
                        </li>
                      ))}
                    </ul>
                    {f.highlight && (
                      <a
                        href="#ia-automacao"
                        className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-brand-300"
                      >
                        Ver IA e Automação
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </a>
                    )}
                  </article>
                </Reveal>
                {i < frentes.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="flex items-center justify-center"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ice-200 bg-white text-brand-500">
                      <Plus className="h-4 w-4" strokeWidth={2.25} />
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
