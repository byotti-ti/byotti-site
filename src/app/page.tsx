import Script from "next/script";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Servicos } from "@/components/Servicos";
import { ComoTrabalhamos } from "@/components/ComoTrabalhamos";
import { Clientes } from "@/components/Clientes";
import { Depoimentos } from "@/components/Depoimentos";
import { Contato } from "@/components/Contato";
import { CtaFinal } from "@/components/CtaFinal";
import { Footer } from "@/components/Footer";
import { WhatsappFloat } from "@/components/WhatsappFloat";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Byotti",
  alternateName: "Byotti — Soluções em TI",
  url: site.url,
  email: site.contact.email,
  telephone: `+${site.contact.phoneE164}`,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.contact.city,
    addressRegion: site.contact.state,
    addressCountry: "BR",
  },
  areaServed: "BR",
  knowsAbout: [
    "Suporte de TI",
    "Infraestrutura de redes",
    "Segurança da informação",
    "Servidores",
    "Backup",
    "Computação em nuvem",
    "Microsoft 365",
  ],
};

export default function Home() {
  return (
    <>
      <Script
        id="ld-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Servicos />
        <ComoTrabalhamos />
        <Clientes />
        <Depoimentos />
        <Contato />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
