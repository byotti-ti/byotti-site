/**
 * Configuração central do site da Byotti.
 * Ajuste os campos marcados com TODO com os dados oficiais.
 */

export const site = {
  name: "byotti",
  legalName: "byotti Soluções em TI", // TODO: acrescentar CNPJ no rodapé se desejar
  tagline: "Buy Your Own Transformation",
  description:
    "Consultoria e soluções em Tecnologia da Informação para empresas: suporte, redes, segurança, servidores, backup e nuvem. Invista em tecnologia e transforme o seu jeito de trabalhar.",
  url: "https://byotti.com.br",
  locale: "pt-BR",

  contact: {
    email: "contato@byotti.com.br",
    phoneDisplay: "+55 (51) 9 9607-3922",
    phoneE164: "5551996073922", // usado no link do WhatsApp
    city: "Teutônia",
    state: "RS",
  },

  whatsapp: {
    number: "5551996073922",
    message:
      "Olá! Vim pelo site da Byotti e gostaria de falar sobre soluções em TI para a minha empresa.",
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

export const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#como-trabalhamos", label: "Como trabalhamos" },
  { href: "#clientes", label: "Clientes" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
] as const;
