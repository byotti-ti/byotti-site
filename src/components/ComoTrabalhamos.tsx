import { Cpu, Repeat, ShieldCheck } from "lucide-react";
import { SymbolPattern } from "./SymbolPattern";
import { Reveal } from "./Reveal";

const pilares = [
  {
    icon: Cpu,
    title: "Tecnologia",
    text: "Ferramentas atuais e boas práticas de mercado, aplicadas ao contexto real da sua empresa — nem a mais, nem a menos.",
  },
  {
    icon: Repeat,
    title: "Transformação",
    text: "Não entregamos só um serviço: revisamos processos, organizamos o ambiente e deixamos a operação mais eficiente.",
  },
  {
    icon: ShieldCheck,
    title: "Confiança",
    text: "Atendimento próximo, transparência no que é feito e um parceiro que responde quando você precisa.",
  },
];

const passos = [
  { n: "01", title: "Diagnóstico", text: "Levantamos o ambiente atual, riscos e prioridades." },
  { n: "02", title: "Plano de trabalho", text: "Definimos escopo, prazos e o que será feito primeiro." },
  { n: "03", title: "Execução", text: "Implantamos as soluções com o mínimo de impacto na rotina." },
  { n: "04", title: "Gestão contínua", text: "Monitoramos, damos suporte e evoluímos o ambiente." },
];

export function ComoTrabalhamos() {
  return (
    <section
      id="como-trabalhamos"
      className="relative overflow-hidden bg-navy-950 py-24 text-white lg:py-32"
    >
      <SymbolPattern opacity={0.05} />
      <div className="container-x relative">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-brand-300">Como trabalhamos</span>
          <h2 className="mt-4 text-3xl text-white sm:text-4xl">
            Três pilares que guiam cada projeto da Byotti
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pilares.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 text-xl text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ice-200">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {passos.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <div className="border-t border-white/15 pt-5">
                <div className="font-display text-3xl font-bold text-brand-400">
                  {s.n}
                </div>
                <h4 className="mt-3 text-base text-white">{s.title}</h4>
                <p className="mt-1.5 text-sm text-ice-200">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
