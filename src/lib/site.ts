/**
 * Configuração central do site da Byotti.
 * Ajuste os campos marcados com TODO com os dados oficiais.
 */

export const site = {
  name: "byotti",
  legalName: "byotti Soluções em TI", // TODO: acrescentar CNPJ no rodapé se desejar
  tagline: "Buy Your Own Transformation",
  description:
    "Consultoria e soluções em TI para empresas: infraestrutura, redes, segurança, backup e nuvem — e também automação de processos e soluções personalizadas com Inteligência Artificial.",
  url: "https://byotti.com.br",
  locale: "pt-BR",

  contact: {
    email: "contato@byotti.com.br",
    phoneDisplay: "+55 (51) 99866-3850",
    phoneE164: "5551998663850", // usado no link do WhatsApp
    street: "Rua Carlos Jacob Kieling, 363 — Sala 106",
    district: "Bairro Florestal",
    city: "Lajeado",
    state: "RS",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Rua+Carlos+Jacob+Kieling+363+Sala+106+Florestal+Lajeado+RS",
  },

  whatsapp: {
    number: "5551998663850",
    message:
      "Olá! Vim pelo site da Byotti e gostaria de falar sobre soluções em TI para a minha empresa.",
    automacaoMessage:
      "Olá! Tenho um processo manual na minha empresa e gostaria de saber se a Byotti consegue automatizar.",
  },

  social: {
    instagram: "https://instagram.com/byotti.ti",
    facebook: "", // sem página informada
    linkedin: "", // sem página informada
  },
} as const;

export const whatsappUrl = `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(
  site.whatsapp.message,
)}`;

/** CTA da frente de IA e automação: conversa já começa falando do processo. */
export const automacaoWhatsappUrl = `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(
  site.whatsapp.automacaoMessage,
)}`;

/** Página dedicada à frente de IA e automação. */
export const iaPageHref = "/ia-automacao";

// hrefs com "/#" funcionam tanto na home quanto nas páginas internas
export const navLinks = [
  { href: "/#servicos", label: "Serviços" },
  { href: "/#ia-automacao", label: "IA e Automação" },
  { href: "/#como-trabalhamos", label: "Como trabalhamos" },
  { href: "/#clientes", label: "Clientes" },
  { href: "/#depoimentos", label: "Depoimentos" },
  { href: "/#contato", label: "Contato" },
] as const;
