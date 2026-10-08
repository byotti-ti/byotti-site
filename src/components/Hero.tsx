import { ArrowRight } from "lucide-react";
import { SymbolPattern } from "./SymbolPattern";
import { Reveal } from "./Reveal";
import { ProcessFlow } from "./ProcessFlow";
import { automacaoWhatsappUrl, iaPageHref, whatsappUrl } from "@/lib/site";

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

      <div className="container-x relative grid gap-16 pb-14 pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-16 lg:pt-44">
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
              A Byotti cuida da TI da sua empresa de ponta a ponta —
              infraestrutura, redes, segurança, backup e nuvem — e também
              desenvolve soluções com automação e Inteligência Artificial para
              tirar o trabalho manual da sua equipe.
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
            <p className="mt-5 text-sm text-ice-200">
              Tem um processo manual na sua empresa?{" "}
              <a
                href={automacaoWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 font-bold text-white underline decoration-brand-400 decoration-2 underline-offset-4 transition-colors hover:text-brand-300"
              >
                Quero automatizar um processo
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </p>
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

      {/* Nova frente: a tecnologia que a empresa já usa passa a trabalhar por ela */}
      <div className="container-x relative pb-20 lg:pb-24">
        <Reveal delay={0.15}>
          <div className="grid gap-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12">
            <div>
              <p className="font-display text-xl font-bold leading-snug text-white sm:text-2xl">
                Sua empresa já usa tecnologia.{" "}
                <span className="text-brand-300">
                  Agora faça a tecnologia trabalhar por você.
                </span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ice-200 sm:text-base">
                A Byotti desenvolve soluções personalizadas com Inteligência
                Artificial para automatizar processos, conectar sistemas e
                facilitar o trabalho dentro das empresas.
              </p>
              <a
                href={iaPageHref}
                className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-brand-300"
              >
                Conhecer nossas soluções
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
            <ProcessFlow className="lg:justify-self-end" />
          </div>
        </Reveal>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </section>
  );
}
