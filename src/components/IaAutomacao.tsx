import Link from "next/link";
import { ArrowRight, CheckCircle2, Repeat, Sparkles, Workflow } from "lucide-react";
import { clsx } from "clsx";
import { SymbolPattern } from "./SymbolPattern";
import { Reveal } from "./Reveal";
import { exemplos } from "@/lib/automacao";
import { automacaoWhatsappUrl, iaPageHref } from "@/lib/site";

const antes = ["Copiar", "Digitar", "Conferir", "Revisar", "Corrigir"];

const depois = [
  { icon: Workflow, label: "Automação", text: "executa a tarefa e conecta os sistemas" },
  { icon: Sparkles, label: "IA", text: "lê, entende e decide o que for preciso" },
  { icon: CheckCircle2, label: "Resultado", text: "pronto para a equipe usar", final: true },
];

const jaConhecemos = ["Infraestrutura", "Redes", "Servidores", "Segurança", "Ambientes corporativos"];
const agoraTambem = ["Software", "Automação", "Integrações", "Inteligência Artificial"];

export function IaAutomacao() {
  return (
    <section
      id="ia-automacao"
      className="relative scroll-mt-20 overflow-hidden bg-navy-950 py-24 text-white lg:py-32"
    >
      <SymbolPattern opacity={0.05} />
      <div className="container-x relative">
        {/* Abertura */}
        <Reveal className="max-w-3xl">
          <span className="eyebrow text-brand-300">IA e Automação</span>
          <h2 className="mt-4 text-3xl text-white sm:text-4xl">
            Inteligência Artificial aplicada ao seu negócio
          </h2>
          <p className="mt-6 font-display text-xl font-bold leading-snug text-white sm:text-2xl">
            Nem toda empresa precisa da mesma solução.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ice-200">
            A Byotti desenvolve automações personalizadas para processos reais do
            seu negócio, utilizando Inteligência Artificial, integrações e
            software sob medida. Não é uma ferramenta genérica: a gente entende o
            processo da sua empresa e desenvolve a solução adequada.
          </p>
        </Reveal>

        {/* Mensagem de maior impacto */}
        <Reveal className="mt-12">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-8 backdrop-blur sm:px-10 sm:py-10">
            <p className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.6rem]">
              Não vendemos IA.
              <br />
              <span className="text-brand-300">Resolvemos processos com IA.</span>
            </p>
          </div>
        </Reveal>

        {/* Exemplos */}
        <div className="mt-20">
          <Reveal>
            <h3 className="text-xl text-white sm:text-2xl">
              Se existe um processo repetitivo, existe a possibilidade de
              automatizá-lo
            </h3>
            <p className="mt-2 text-ice-200">
              Alguns exemplos do que a Byotti pode automatizar na sua empresa:
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {exemplos.map((e, i) => {
              const Icon = e.icon;
              return (
                <Reveal key={e.title} delay={(i % 4) * 0.05} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500 text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <h4 className="mt-4 text-base text-white">{e.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-ice-200">
                      {e.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Antes / Depois */}
        <div className="mt-20">
          <Reveal className="max-w-2xl">
            <h3 className="text-2xl text-white sm:text-3xl">
              Menos trabalho manual.
              <br />
              <span className="text-brand-300">Mais inteligência no processo.</span>
            </h3>
          </Reveal>

          <div className="mt-8 grid gap-4 lg:grid-cols-2 lg:gap-6">
            <Reveal className="h-full">
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-ice-300">
                  Antes
                </span>
                <ol className="mt-5 space-y-2.5">
                  {antes.map((a, i) => (
                    <li
                      key={a}
                      className="flex items-center gap-3 rounded-xl border border-dashed border-white/15 px-4 py-3 text-ice-200"
                    >
                      <span className="font-display text-sm font-bold text-ice-300">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {a}
                    </li>
                  ))}
                </ol>
                <p className="mt-4 flex items-center gap-2 text-sm text-ice-300">
                  <Repeat className="h-4 w-4" /> E de novo, no dia seguinte.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="h-full">
              <div className="h-full rounded-2xl border border-brand-500/60 bg-brand-500/[0.08] p-6 sm:p-8">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-300">
                  Depois
                </span>
                <div className="mt-5">
                  {depois.map((d, i) => {
                    const Icon = d.icon;
                    return (
                      <div key={d.label}>
                        <div
                          className={clsx(
                            "flex items-center gap-4 rounded-xl border px-4 py-3",
                            d.final
                              ? "border-brand-400 bg-brand-500 text-white"
                              : "border-white/15 bg-white/[0.06] text-white",
                          )}
                        >
                          <Icon className="h-5 w-5 shrink-0" strokeWidth={1.75} />
                          <div>
                            <div className="text-sm font-bold uppercase tracking-[0.14em]">
                              {d.label}
                            </div>
                            <div
                              className={clsx(
                                "text-sm",
                                d.final ? "text-white/85" : "text-ice-200",
                              )}
                            >
                              {d.text}
                            </div>
                          </div>
                        </div>
                        {i < depois.length - 1 && (
                          <div className="flex justify-center py-1" aria-hidden="true">
                            <div className="flow-line-v h-6" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                <p className="mt-6 border-t border-white/10 pt-5 text-sm leading-relaxed text-ice-200">
                  A equipe deixa de produzir a informação e passa a usar o
                  resultado.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Diferencial: conhece o ambiente onde a solução vai funcionar */}
        <div className="mt-20 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
          <Reveal>
            <h3 className="text-2xl text-white sm:text-3xl">
              Uma empresa que entende o ambiente onde a solução vai funcionar
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-ice-200">
              Você não está contratando apenas alguém para desenvolver uma
              aplicação. Está contratando uma empresa que entende o ambiente
              tecnológico onde essa solução vai funcionar.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-ice-300">
                Já conhecemos por dentro
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {jaConhecemos.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/15 px-3 py-1.5 text-sm text-ice-100"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-brand-300">
                E agora também
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {agoraTambem.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-brand-500 px-3 py-1.5 text-sm font-semibold text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* CTA */}
        <Reveal className="mt-16">
          <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl lg:max-w-lg">
              <p className="font-display text-xl font-bold text-white sm:text-2xl">
                Não sabe qual tecnologia a sua empresa precisa?
              </p>
              <p className="mt-2 text-ice-200">
                Sem problema. Conte como o processo funciona hoje e a Byotti
                indica o caminho.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:shrink-0 lg:flex-col lg:items-stretch">
              <a
                href={automacaoWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand-500 px-7 py-3.5 text-sm font-bold text-white shadow-glow transition-transform hover:-translate-y-0.5"
              >
                Quero automatizar um processo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <Link
                href={iaPageHref}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                Conhecer nossas soluções
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
