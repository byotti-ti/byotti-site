# Site Byotti

Landing page institucional da **Byotti — Soluções em TI**.

- **Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4
- **Deploy alvo:** Vercel
- **Fontes:** Nexa (títulos, auto-hospedada em `src/fonts/`) · Open Sans (texto, Google Fonts)

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em http://localhost:3000

Outros scripts: `npm run build` (build de produção) · `npm run start` · `npm run lint`

## Estrutura

```
src/
  app/
    layout.tsx          # fontes, metadados/SEO, Analytics
    page.tsx            # monta as seções + JSON-LD (Organization)
    globals.css         # tokens da identidade visual (cores, tipografia)
    api/contato/route.ts# recebe o formulário e envia e-mail via Resend
    sitemap.ts / robots.ts
  components/            # Header, Hero, Servicos, ComoTrabalhamos,
                         # Clientes, Depoimentos, Contato, CtaFinal,
                         # Footer, WhatsappFloat, Logo, SymbolPattern, Reveal
  lib/
    site.ts             # dados da empresa (telefone, e-mail, redes) — AJUSTAR
    servicos.ts         # lista de serviços
    depoimentos.ts      # depoimentos + logos de clientes
public/
  clientes/             # logos dos clientes
  depoimentos/          # fotos recortadas dos depoimentos
```

## O que ainda precisa ser definido (`src/lib/site.ts`)

- [x] Nome: **byotti Soluções em TI** · Cidade: **Teutônia/RS**
- [x] Instagram: **@byotti.ti**
- [x] Domínio **byotti.com.br** registrado no Registro.br
- [ ] CNPJ no rodapé (opcional)
- [ ] Confirmar telefone/WhatsApp: hoje `+55 (51) 9 9607-3922`
- [ ] Facebook/LinkedIn, se existirem

## Formulário de contato (Resend)

O endpoint `POST /api/contato` valida os dados e envia um e-mail.
Enquanto `RESEND_API_KEY` não estiver configurada, o formulário responde
pedindo para usar o WhatsApp (o botão flutuante e os links já funcionam).

1. Criar conta em https://resend.com (plano free: 3.000 e-mails/mês).
2. Verificar o domínio `byotti.com.br` (adiciona uns registros DNS).
3. Gerar uma API Key.
4. Definir as variáveis de ambiente (local: arquivo `.env.local`; produção:
   painel da Vercel):

```
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_FROM="Site Byotti <site@byotti.com.br>"
CONTACT_TO=contato@byotti.com.br
```

Ver `.env.example`.

## Deploy na Vercel

1. Subir este repositório para o GitHub.
2. Em https://vercel.com/new, importar o repositório (framework detectado
   automaticamente como Next.js).
3. Adicionar as variáveis de ambiente do Resend em *Settings → Environment
   Variables*.
4. Deploy. Cada `git push` na branch principal publica automaticamente.
5. Em *Settings → Domains*, adicionar `byotti.com.br` e `www.byotti.com.br`.
   No painel do **Registro.br** (DNS), criar os registros que a Vercel indicar
   — normalmente um `A` de `byotti.com.br` para `76.76.21.21` e um `CNAME` de
   `www` para `cname.vercel-dns.com`.

## Notas de identidade visual

Cores (de `Byotti_Manual_Identidade-visual.pdf`):

| Papel | Hex |
|---|---|
| Azul luminoso (destaque) | `#034AFE` |
| Azul-marinho (base/texto) | `#0C2340` |
| Azul-marinho profundo | `#061C3D` |
| Azul médio | `#98B6E4` |
| Azul gelo | `#C8D8EB` |

O símbolo (dois "T" = Transformação + Tecnologia) está recriado em SVG em
`src/components/Logo.tsx`. Se houver um arquivo vetorial oficial (SVG/AI),
dá para substituir por ele.
