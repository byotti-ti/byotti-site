import type { Metadata } from "next";
import Script from "next/script";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsappFloat } from "@/components/WhatsappFloat";
import { SymbolPattern } from "@/components/SymbolPattern";
import { Reveal } from "@/components/Reveal";
import { ProcessFlow } from "@/components/ProcessFlow";
import { Contato } from "@/components/Contato";
import { CtaFinal } from "@/components/CtaFinal";
import { etapas, exemplos, faq } from "@/lib/automacao";
import { automacaoWhatsappUrl, site } from "@/lib/site";

const title = "Inteligência Artificial e Automação";
const description =
  "A Byotti desenvolve soluções personalizadas com Inteligência Artificial, automação e integrações para resolver problemas reais da operação das empresas.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${site.url}/ia-automacao` },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: `${site.url}/ia-automacao`,
    siteName: "Byotti",
    title: `${title} | Byotti`,
    description,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const jaConhecemos = ["Infraestrutura", "Redes", "Servidores", "Segurança", "Ambientes corporativos"];
const agoraTambem = ["Software", "Automação", "Integrações", "Inteligência Artificial"];

export default function IaAutomacaoPage() {
  return (
    <>
      <Script
        id="ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main>
        {/* Abertura */}
        <section className="relative overflow-hidden bg-navy-950 text-white">
          <SymbolPattern opacity={0.06} />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-brand-500/25 blur-[120px]"
          />
          <div className="container-x relative grid gap-12 pb-20 pt-36 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-28 lg:pt-44">
            <div>
              <Reveal>
                <span className="eyebrow text-brand-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                  {title}
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-5 text-4xl font-bold text-white sm:text-5xl">
                  Transforme processos manuais em processos inteligentes.
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-ice-200">
                  A Byotti desenvolve soluções personalizadas utilizando
                  Inteligência Artificial, automação e integrações para resolver
                  problemas reais da operação das empresas.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={automacaoWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-bold text-white shadow-glow transition-transform hover:-translate-y-0.5"
                  >
                    Quero automatizar um processo
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="#exemplos"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
                  >
                    Ver exemplos
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-8">
                <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-ice-300">
                  Do processo ao resultado
                </p>
                <ProcessFlow showHints />
              </div>
            </Reveal>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </section>

        {/* Exemplos */}
        <section id="exemplos" className="scroll-mt-20 bg-white py-24 lg:py-32">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <span className="eyebrow">O que dá para automatizar</span>
              <h2 className="mt-4 text-3xl sm:text-4xl">
                Se existe um processo repetitivo, existe a possibilidade de
                automatizá-lo
              </h2>
              <p className="mt-4 text-lg text-navy-700">
                Alguns exemplos de processos que a Byotti pode automatizar na
                sua empresa. Não é uma lista fechada: cada solução parte do seu
                caso.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {exemplos.map((e, i) => {
                const Icon = e.icon;
                return (
                  <Reveal key={e.title} delay={(i % 4) * 0.05} className="group h-full">
                    <article className="flex h-full flex-col rounded-2xl border border-ice-200 bg-ice-50/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400 hover:bg-white hover:shadow-card">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-white transition-colors group-hover:bg-brand-500">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <h3 className="mt-4 text-base">{e.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-navy-700">
                        {e.description}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section className="relative overflow-hidden bg-navy-950 py-24 text-white lg:py-32">
          <SymbolPattern opacity={0.05} />
          <div className="container-x relative">
            <Reveal className="max-w-2xl">
              <span className="eyebrow text-brand-300">Como funciona</span>
              <h2 className="mt-4 text-3xl text-white sm:text-4xl">
                Você conta o processo. A Byotti cuida do resto.
              </h2>
              <p className="mt-4 text-lg text-ice-200">
                Mesmo sem saber qual tecnologia precisa, você consegue começar:
                basta descrever como a tarefa é feita hoje.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {etapas.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.06}>
                  <div className="border-t border-white/15 pt-5">
                    <div className="font-display text-3xl font-bold text-brand-400">
                      {s.n}
                    </div>
                    <h3 className="mt-3 text-base text-white">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ice-200">
                      {s.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Por que a Byotti */}
        <section className="bg-ice-50 py-24 lg:py-28">
          <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
            <Reveal>
              <span className="eyebrow">Por que a Byotti</span>
              <h2 className="mt-4 text-3xl sm:text-4xl">
                Uma empresa que entende o ambiente onde a solução vai funcionar
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-navy-700">
                Você não está contratando apenas alguém para desenvolver uma
                aplicação. Está contratando uma empresa que entende o ambiente
                tecnológico onde essa solução vai funcionar.
              </p>
              <div className="mt-8 rounded-2xl bg-navy-900 px-6 py-7 text-white sm:px-8">
                <p className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Não vendemos IA.
                  <br />
                  <span className="text-brand-300">Resolvemos processos com IA.</span>
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-ice-200 bg-white p-6 shadow-card">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-navy-600">
                  Já conhecemos por dentro
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {jaConhecemos.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-ice-200 px-3 py-1.5 text-sm text-navy-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-brand-500">
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
        </section>

        {/* FAQ */}
        <section className="bg-white py-24 lg:py-28">
          <div className="container-x max-w-3xl">
            <Reveal>
              <span className="eyebrow">Perguntas frequentes</span>
              <h2 className="mt-4 text-3xl sm:text-4xl">
                Dúvidas comuns de quem está começando
              </h2>
            </Reveal>

            <div className="mt-10 divide-y divide-ice-200 rounded-2xl border border-ice-200">
              {faq.map((f) => (
                <details key={f.q} className="group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold text-navy-900 [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <ChevronDown className="h-5 w-5 shrink-0 text-brand-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-navy-700">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <Contato
          title="Vamos conversar sobre o seu processo"
          text="Conte como a tarefa é feita hoje e o que você gostaria de resolver. Retornamos com uma primeira avaliação e os próximos passos."
        />
        <CtaFinal
          title="Se existe um processo manual, vale a conversa"
          text="Conte para a Byotti como a tarefa é feita hoje. A gente avalia se dá para automatizar e indica o caminho."
          primaryLabel="Quero automatizar um processo"
          primaryHref={automacaoWhatsappUrl}
          showAutomacao={false}
        />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
