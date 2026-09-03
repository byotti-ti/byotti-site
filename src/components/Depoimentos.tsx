import Image from "next/image";
import { Quote } from "lucide-react";
import { SymbolPattern } from "./SymbolPattern";
import { Reveal } from "./Reveal";
import { depoimentos } from "@/lib/depoimentos";

export function Depoimentos() {
  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden bg-navy-900 py-24 text-white lg:py-32"
    >
      <SymbolPattern opacity={0.05} />
      <div className="container-x relative">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-brand-300">Depoimentos</span>
          <h2 className="mt-4 text-3xl text-white sm:text-4xl">
            O que dizem quem já trabalha com a Byotti
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {depoimentos.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur">
                <Quote className="h-7 w-7 text-brand-400" />
                <blockquote className="mt-4 grow text-sm leading-relaxed text-ice-100">
                  {d.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <Image
                    src={d.avatar}
                    alt={d.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-display text-sm font-bold text-white">
                      {d.name}
                    </div>
                    <div className="text-xs text-ice-200">{d.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
