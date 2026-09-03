import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contatoSchema } from "@/lib/contato-schema";
import { site } from "@/lib/site";

export const runtime = "nodejs";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
// Remetente verificado no Resend (ex.: "Site Byotti <site@byotti.com.br>")
const CONTACT_FROM = process.env.CONTACT_FROM ?? "Site Byotti <onboarding@resend.dev>";
// Para onde os leads devem chegar
const CONTACT_TO = process.env.CONTACT_TO ?? site.contact.email;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }

  const parsed = contatoSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos.", issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  const { nome, email, telefone, empresa, mensagem, site: honeypot } = parsed.data;

  // Bot preencheu o honeypot — responde OK e ignora.
  if (honeypot) return NextResponse.json({ ok: true });

  if (!RESEND_API_KEY) {
    console.warn(
      "[contato] RESEND_API_KEY ausente. Lead recebido mas não enviado:",
      { nome, email, telefone, empresa },
    );
    return NextResponse.json(
      {
        error:
          "O envio de e-mail ainda não está configurado. Fale com a gente pelo WhatsApp por enquanto.",
      },
      { status: 503 },
    );
  }

  const resend = new Resend(RESEND_API_KEY);
  const linhas = [
    `Nome: ${nome}`,
    `E-mail: ${email}`,
    `Telefone: ${telefone}`,
    empresa ? `Empresa: ${empresa}` : null,
    "",
    "Mensagem:",
    mensagem,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const { error } = await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      replyTo: email,
      subject: `Novo contato pelo site — ${nome}`,
      text: linhas,
    });

    if (error) {
      console.error("[contato] Resend error:", error);
      return NextResponse.json(
        { error: "Não foi possível enviar agora. Tente novamente em instantes." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contato] erro inesperado:", err);
    return NextResponse.json(
      { error: "Erro inesperado ao enviar. Tente novamente." },
      { status: 500 },
    );
  }
}
