import { z } from "zod";

export const contatoSchema = z.object({
  nome: z.string().min(2, "Informe o seu nome").max(120),
  email: z.string().email("E-mail inválido").max(160),
  telefone: z
    .string()
    .min(8, "Telefone inválido")
    .max(30)
    .regex(/^[0-9()+\-\s]+$/, "Telefone inválido"),
  empresa: z.string().max(160).optional().or(z.literal("")),
  mensagem: z.string().min(10, "Conte um pouco mais (mín. 10 caracteres)").max(3000),
  // honeypot anti-spam: deve chegar vazio
  site: z.string().max(0).optional().or(z.literal("")),
});

export type ContatoInput = z.infer<typeof contatoSchema>;
