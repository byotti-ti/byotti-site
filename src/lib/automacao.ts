import {
  Combine,
  FileSearch,
  FileBarChart,
  Files,
  Inbox,
  Link2,
  Repeat,
  ScanText,
  type LucideIcon,
} from "lucide-react";

export type Exemplo = {
  icon: LucideIcon;
  title: string;
  description: string;
};

/**
 * Exemplos de processos que podem ser automatizados.
 * Linguagem de empresário: o que acontece no dia a dia, sem jargão técnico.
 */
export const exemplos: Exemplo[] = [
  {
    icon: Combine,
    title: "Conciliação de informações",
    description:
      "Cruzar dados de planilhas, sistemas e extratos sem conferir linha por linha.",
  },
  {
    icon: FileSearch,
    title: "Conferência de documentos",
    description:
      "Notas, contratos e comprovantes verificados sem alguém abrir um por um.",
  },
  {
    icon: ScanText,
    title: "Extração de dados",
    description:
      "Informações que chegam em PDF, e-mail ou imagem indo direto para o sistema.",
  },
  {
    icon: FileBarChart,
    title: "Geração de relatórios",
    description:
      "Relatórios prontos, sem juntar dados na mão toda semana ou todo mês.",
  },
  {
    icon: Repeat,
    title: "Tarefas repetitivas",
    description:
      "O que a equipe faz todo dia do mesmo jeito passa a ser feito pela tecnologia.",
  },
  {
    icon: Link2,
    title: "Integração entre sistemas",
    description:
      "Sistemas que hoje não conversam passam a trocar informações sozinhos.",
  },
  {
    icon: Inbox,
    title: "Organização de informações",
    description:
      "Dados espalhados em pastas, e-mails e planilhas reunidos em um só lugar.",
  },
  {
    icon: Files,
    title: "Processos administrativos",
    description:
      "Rotinas de escritório, financeiro e atendimento com menos retrabalho.",
  },
];

export const etapas = [
  {
    n: "01",
    title: "Entendemos o processo",
    text: "Você conta como a tarefa é feita hoje e onde está o gargalo. Não precisa saber qual tecnologia usar.",
  },
  {
    n: "02",
    title: "Desenhamos a solução",
    text: "Definimos o que será automatizado, o que precisa de IA e como isso se encaixa nos sistemas que você já usa.",
  },
  {
    n: "03",
    title: "Desenvolvemos e integramos",
    text: "Construímos a solução sob medida e conectamos ao seu ambiente, com a infraestrutura e a segurança em mente.",
  },
  {
    n: "04",
    title: "Acompanhamos",
    text: "A Byotti segue por perto para ajustar o que for preciso depois que o processo entra em operação.",
  },
];

export const faq = [
  {
    q: "Preciso saber qual tecnologia usar?",
    a: "Não. Você conta como o processo funciona hoje e onde ele trava. A Byotti analisa e indica o caminho — que pode ou não envolver Inteligência Artificial.",
  },
  {
    q: "A solução é pronta ou feita sob medida?",
    a: "Sob medida. Cada empresa tem processos diferentes, então a solução é desenvolvida a partir do seu processo, e não adaptada de uma ferramenta genérica.",
  },
  {
    q: "Preciso trocar os sistemas que já uso?",
    a: "Sempre que possível, aproveitamos os sistemas que a sua empresa já usa e criamos as integrações entre eles.",
  },
  {
    q: "E a segurança das informações da empresa?",
    a: "Como a Byotti também cuida de infraestrutura e segurança, a solução é pensada considerando o ambiente onde ela vai funcionar: acessos, backup e proteção dos dados.",
  },
  {
    q: "Como eu começo?",
    a: "Chame a Byotti pelo WhatsApp ou pelo formulário e descreva o processo que hoje é manual. A partir daí fazemos uma conversa inicial para entender o cenário.",
  },
];
