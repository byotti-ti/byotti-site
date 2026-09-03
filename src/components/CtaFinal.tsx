import { ArrowRight } from "lucide-react";
import { SymbolPattern } from "./SymbolPattern";
import { Reveal } from "./Reveal";
import { whatsappUrl } from "@/lib/site";

export function CtaFinal() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-brand-500 px-8 py-14 text-center text-white sm:px-14 lg:py-20">
            <SymbolPattern opacity={0.12} stroke="#ffffff" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl text-white sm:text-4xl">
                Seja qual for o porte da sua empresa, a transformação começa pela
                TI
              </h2>
              <p className="mt-4 text-base text-white/85">
                Converse com a Byotti e descubra o que dá para melhorar já no
                próximo mês.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-brand-600 transition-transform hover:-translate-y-0.5"
              >
                Entrar em contato agora
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
