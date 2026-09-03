"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { clsx } from "clsx";
import { Check, Loader2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contatoSchema, type ContatoInput } from "@/lib/contato-schema";
import { site, whatsappUrl } from "@/lib/site";

type Status = "idle" | "sending" | "ok" | "error";

export function Contato() {
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContatoInput>({ resolver: zodResolver(contatoSchema) });

  async function onSubmit(data: ContatoInput) {
    setStatus("sending");
    setServerError(null);
    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const j = (await res.json().catch(() => null)) as { error?: string } | null;
        setServerError(j?.error ?? "Não foi possível enviar. Tente novamente.");
        setStatus("error");
        return;
      }
      reset();
      setStatus("ok");
    } catch {
      setServerError("Falha de conexão. Tente novamente.");
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-xl border border-ice-200 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors placeholder:text-navy-600/50 focus:border-brand-500";

  return (
    <section id="contato" className="bg-ice-50 py-24 lg:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <span className="eyebrow">Contato</span>
          <h2 className="mt-4 text-3xl sm:text-4xl">
            Vamos conversar sobre a TI da sua empresa
          </h2>
          <p className="mt-4 text-lg text-navy-700">
            Conte o seu cenário e o que você precisa resolver. Retornamos com um
            diagnóstico inicial e os próximos passos.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${site.contact.email}`}
              className="flex items-center gap-3 text-sm font-semibold text-navy-900 hover:text-brand-600"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-white">
                <Mail className="h-5 w-5" />
              </span>
              {site.contact.email}
            </a>
            <a
              href={`tel:+${site.contact.phoneE164}`}
              className="flex items-center gap-3 text-sm font-semibold text-navy-900 hover:text-brand-600"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-white">
                <Phone className="h-5 w-5" />
              </span>
              {site.contact.phoneDisplay}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-semibold text-navy-900 hover:text-brand-600"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366] text-white">
                <MessageCircle className="h-5 w-5" />
              </span>
              Chamar no WhatsApp
            </a>
            <p className="flex items-center gap-3 text-sm text-navy-700">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-ice-200 text-navy-900">
                <MapPin className="h-5 w-5" />
              </span>
              {site.contact.city} / {site.contact.state}
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-ice-200 bg-white p-6 shadow-card sm:p-8">
          {status === "ok" ? (
            <div className="flex h-full min-h-[20rem] flex-col items-center justify-center text-center">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]/15 text-[#1a9c4b]">
                <Check className="h-7 w-7" />
              </span>
              <h3 className="mt-4 text-xl">Mensagem enviada!</h3>
              <p className="mt-2 max-w-sm text-sm text-navy-700">
                Recebemos o seu contato e retornamos em breve. Se preferir uma
                resposta mais rápida, chame no WhatsApp.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm font-bold text-brand-600 hover:underline"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="nome" className="mb-1.5 block text-xs font-bold text-navy-800">
                    Nome *
                  </label>
                  <input id="nome" autoComplete="name" className={field} {...register("nome")} />
                  {errors.nome && (
                    <p className="mt-1 text-xs text-red-600">{errors.nome.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="empresa" className="mb-1.5 block text-xs font-bold text-navy-800">
                    Empresa
                  </label>
                  <input id="empresa" autoComplete="organization" className={field} {...register("empresa")} />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-bold text-navy-800">
                    E-mail *
                  </label>
                  <input id="email" type="email" autoComplete="email" className={field} {...register("email")} />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="telefone" className="mb-1.5 block text-xs font-bold text-navy-800">
                    Telefone / WhatsApp *
                  </label>
                  <input id="telefone" type="tel" autoComplete="tel" className={field} {...register("telefone")} />
                  {errors.telefone && (
                    <p className="mt-1 text-xs text-red-600">{errors.telefone.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="mensagem" className="mb-1.5 block text-xs font-bold text-navy-800">
                  Como podemos ajudar? *
                </label>
                <textarea
                  id="mensagem"
                  rows={5}
                  className={clsx(field, "resize-y")}
                  {...register("mensagem")}
                />
                {errors.mensagem && (
                  <p className="mt-1 text-xs text-red-600">{errors.mensagem.message}</p>
                )}
              </div>

              {/* honeypot: escondido de humanos */}
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
                {...register("site")}
              />

              {status === "error" && serverError && (
                <p className="rounded-lg bg-red-50 px-3 py-2 text-xs font-semibold text-red-700">
                  {serverError}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-bold text-white shadow-glow transition-transform hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-70"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Enviando…
                  </>
                ) : (
                  "Enviar mensagem"
                )}
              </button>
              <p className="text-center text-xs text-navy-600">
                Ao enviar, você concorda em ser contatado pela Byotti sobre a sua
                solicitação.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
