import { Reveal } from "./Reveal";
import { servicos } from "@/lib/servicos";
import { whatsappUrl } from "@/lib/site";
import { ArrowRight } from "lucide-react";

export function Servicos() {
  return (
    <section id="servicos" className="bg-white py-24 lg:py-32">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">O que fazemos</span>
          <h2 className="mt-4 text-3xl sm:text-4xl">
            Uma estrutura de TI completa, sem você precisar montar um time
            interno
          </h2>
          <p className="mt-4 text-lg text-navy-700">
            Da mesa do usuário ao data center. A Byotti assume a operação,
            organiza o ambiente e mantém tudo funcionando com previsibilidade.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal
                key={s.title}
                delay={(i % 3) * 0.06}
                className="group h-full"
              >
                <article className="flex h-full flex-col rounded-2xl border border-ice-200 bg-ice-50/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400 hover:bg-white hover:shadow-card">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-white transition-colors group-hover:bg-brand-500">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-700">
                    {s.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
          >
            Solicitar um orçamento
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
