import { ArrowRight } from "lucide-react";
import { SymbolPattern } from "./SymbolPattern";
import { Reveal } from "./Reveal";
import { whatsappUrl } from "@/lib/site";

const stats = [
  { value: "+15 anos", label: "de experiência em TI" },
  { value: "SLA", label: "atendimento com prazo garantido" },
  { value: "24/7", label: "monitoramento de ambiente" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <SymbolPattern opacity={0.06} />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-brand-500/25 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-12rem] left-[-8rem] h-[28rem] w-[28rem] rounded-full bg-brand-600/20 blur-[120px]"
      />

      <div className="container-x relative grid gap-16 pb-24 pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-32 lg:pt-44">
        <div>
          <Reveal>
            <span className="eyebrow text-brand-300">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              Soluções em TI
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-5 text-4xl font-bold text-white sm:text-5xl lg:text-[3.4rem]">
              Invista em tecnologia e transforme o seu jeito de trabalhar
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ice-200">
              A Byotti cuida da TI da sua empresa de ponta a ponta — suporte,
              redes, servidores, segurança, backup e nuvem — com atendimento
              personalizado e um plano de trabalho planejado para o seu
              ambiente.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-bold text-white shadow-glow transition-transform hover:-translate-y-0.5"
              >
                Fale com a Byotti agora
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                Conhecer os serviços
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:justify-self-end">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
              >
                <div className="font-display text-2xl font-bold text-white">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-ice-200">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </section>
  );
}
