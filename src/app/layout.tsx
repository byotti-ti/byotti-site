import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/lib/site";
import "./globals.css";

const nexa = localFont({
  variable: "--font-nexa",
  display: "swap",
  src: [
    { path: "../fonts/NexaLight.otf", weight: "300", style: "normal" },
    { path: "../fonts/NexaBold.otf", weight: "700", style: "normal" },
  ],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Byotti — Soluções em TI para empresas",
    template: "%s | Byotti",
  },
  description: site.description,
  keywords: [
    "empresa de TI",
    "suporte técnico",
    "outsourcing de TI",
    "infraestrutura de redes",
    "backup em nuvem",
    "segurança da informação",
    "servidores",
    "Microsoft 365",
    "Porto Alegre",
  ],
  authors: [{ name: "Byotti" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: "Byotti",
    title: "Byotti — Soluções em TI para empresas",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Byotti — Soluções em TI para empresas",
    description: site.description,
  },
  alternates: { canonical: site.url },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0c2340",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${nexa.variable} ${openSans.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
