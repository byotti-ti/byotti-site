import {
  Headset,
  Network,
  ShieldCheck,
  Server,
  Mail,
  DatabaseBackup,
  Cloud,
  MonitorSmartphone,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export type Servico = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const servicos: Servico[] = [
  {
    icon: Headset,
    title: "Suporte ao usuário",
    description:
      "Helpdesk e suporte técnico remoto e presencial, com atendimento humano e acordo de nível de serviço (SLA).",
  },
  {
    icon: Network,
    title: "Redes e Wi-Fi",
    description:
      "Projeto, instalação e gestão de redes cabeadas e wireless corporativas, com desempenho e cobertura garantidos.",
  },
  {
    icon: ShieldCheck,
    title: "Firewall e segurança",
    description:
      "Proteção de perímetro, políticas de acesso, antivírus e boas práticas de segurança da informação.",
  },
  {
    icon: Server,
    title: "Servidores físicos e virtuais",
    description:
      "Dimensionamento, virtualização e administração de servidores para manter a operação sempre disponível.",
  },
  {
    icon: Mail,
    title: "E-mail corporativo e Microsoft 365",
    description:
      "Migração e gestão de e-mail profissional, Exchange e todo o ecossistema Microsoft 365.",
  },
  {
    icon: DatabaseBackup,
    title: "Backup e continuidade",
    description:
      "Rotinas de backup monitoradas, testes de restauração e plano de recuperação de desastres.",
  },
  {
    icon: Cloud,
    title: "Cloud e Data Center",
    description:
      "Infraestrutura em nuvem, colocation e hospedagem gerenciada com escalabilidade sob demanda.",
  },
  {
    icon: MonitorSmartphone,
    title: "Venda e manutenção de equipamentos",
    description:
      "Fornecimento, instalação e manutenção de computadores, servidores e periféricos.",
  },
  {
    icon: Rocket,
    title: "Projetos pontuais",
    description:
      "Consultoria e execução de projetos sob demanda: migrações, expansões e modernização de ambiente.",
  },
];
