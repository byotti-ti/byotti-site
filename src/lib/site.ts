/**
 * Configuração central do site da Byotti.
 * Ajuste os campos marcados com TODO com os dados oficiais.
 */

export const site = {
  name: "Byotti",
  legalName: "Byotti — Soluções em TI", // TODO: razão social + CNPJ para o rodapé
  tagline: "Buy Your Own Transformation",
  description:
    "Consultoria e soluções em Tecnologia da Informação para empresas: suporte, redes, segurança, servidores, backup e nuvem. Invista em tecnologia e transforme o seu jeito de trabalhar.",
  url: "https://byotti.com.br",
  locale: "pt-BR",

  contact: {
    email: "contato@byotti.com.br",
    phoneDisplay: "+55 (51) 9 9607-3922",
    phoneE164: "5551996073922", // usado no link do WhatsApp
    city: "Porto Alegre", // TODO: confirmar cidade
    state: "RS",
  },

  whatsapp: {
    number: "5551996073922",
    message:
      "Olá! Vim pelo site da Byotti e gostaria de falar sobre soluções em TI para a minha empresa.",
  },

  social: {
    instagram: "https://instagram.com/byotti", // TODO: confirmar @
    facebook: "https://facebook.com/byotti", // TODO: confirmar
    linkedin: "", // TODO: se houver
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
