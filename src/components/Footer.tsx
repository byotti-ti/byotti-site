import { Mail, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { InstagramIcon, FacebookIcon, LinkedinIcon } from "./SocialIcons";
import { site, navLinks, whatsappUrl } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-x grid gap-10 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo variant="light" href={null} />
          <p className="mt-4 max-w-xs text-sm text-ice-200">
            Consultoria e soluções em TI. Invista em tecnologia e transforme o
            seu jeito de trabalhar.
          </p>
          <div className="mt-5 flex gap-3">
            {site.social.instagram && (
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Byotti"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-ice-200 hover:border-brand-400 hover:text-white"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            )}
            {site.social.facebook && (
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da Byotti"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-ice-200 hover:border-brand-400 hover:text-white"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            )}
            {site.social.linkedin && (
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da Byotti"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-ice-200 hover:border-brand-400 hover:text-white"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        <nav aria-label="Navegação do rodapé">
          <h3 className="text-sm font-bold text-white">Navegação</h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-ice-200 hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-bold text-white">Contato</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-ice-200">
            <li>
              <a href={`mailto:${site.contact.email}`} className="inline-flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4" /> {site.contact.email}
              </a>
            </li>
            <li>
              <a href={`tel:+${site.contact.phoneE164}`} className="inline-flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4" /> {site.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                WhatsApp
              </a>
            </li>
            <li className="pt-1 text-ice-200/80">
              {site.contact.street}
              <br />
              {site.contact.district} — {site.contact.city}/{site.contact.state}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-ice-200/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. Todos os direitos reservados.
          </p>
          <p>Feito com tecnologia — e um pouco de transformação.</p>
        </div>
      </div>
    </footer>
  );
}
