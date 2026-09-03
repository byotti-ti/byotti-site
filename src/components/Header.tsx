"use client";

import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks, whatsappUrl } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "bg-navy-950/95 backdrop-blur supports-[backdrop-filter]:bg-navy-950/80 shadow-[0_1px_0_0_rgba(255,255,255,0.06)]"
          : "bg-transparent",
      )}
    >
      <div className="container-x flex h-20 items-center justify-between py-3">
        <Logo variant="light" />

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-ice-200 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-bold text-white shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Fale com a Byotti
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-white lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy-950 lg:hidden">
          <nav className="container-x flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-semibold text-ice-200 hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-brand-500 px-5 py-3 text-center text-sm font-bold text-white"
            >
              Fale com a Byotti
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
