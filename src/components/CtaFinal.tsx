import { ArrowRight } from "lucide-react";
import { SymbolPattern } from "./SymbolPattern";
import { Reveal } from "./Reveal";
import { automacaoWhatsappUrl, whatsappUrl } from "@/lib/site";

type Props = {
  title?: string;
  text?: string;
  /** mostra o botão de automação ao lado do botão principal */
  showAutomacao?: boolean;
  primaryLabel?: string;
  primaryHref?: string;
};

export function CtaFinal({
  title = "Seja qual for o porte da sua empresa, a transformação começa pela TI",
  text = "Converse com a Byotti e descubra o que dá para melhorar já no próximo mês — na infraestrutura, na segurança ou nos processos que ainda são manuais.",
  showAutomacao = true,
  primaryLabel = "Entrar em contato agora",
  primaryHref = whatsappUrl,
}: Props) {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-brand-500 px-8 py-14 text-center text-white sm:px-14 lg:py-20">
            <SymbolPattern opacity={0.12} stroke="#ffffff" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl text-white sm:text-4xl">{title}</h2>
              <p className="mt-4 text-base text-white/85">{text}</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={primaryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-brand-600 transition-transform hover:-translate-y-0.5"
                >
                  {primaryLabel}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                {showAutomacao && (
                  <a
                    href={automacaoWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/50 px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
                  >
                    Quero automatizar um processo
                  </a>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
