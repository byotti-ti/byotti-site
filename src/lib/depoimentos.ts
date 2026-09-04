export type Depoimento = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

/**
 * Depoimentos reais divulgados pela Byotti nas redes sociais.
 */
export const depoimentos: Depoimento[] = [
  {
    quote:
      "A Byotti nos auxiliou na reestruturação e manutenção do nosso parque tecnológico, contribuindo com novidades de mercado, melhorias e informações importantes sobre segurança virtual — e sempre à disposição. Podemos sempre contar com a Byotti, o que é essencial para o nosso negócio.",
    name: "Bruna Zart",
    role: "Sócia-proprietária — Rede de supermercados Super Zart",
    avatar: "/depoimentos/bruna-zart.png",
  },
  {
    quote:
      "O Luiz é um parceiro que nos representa em sua região, principalmente pelo seu nível de conhecimento, competência e profissionalismo na condução de projetos na área de TI.",
    name: "Norberto Fraga Ginar",
    role: "Diretor Comercial — PowerSolutions Informática",
    avatar: "/depoimentos/norberto-ginar.png",
  },
  {
    quote:
      "O Luiz Strate é um profissional qualificado e dedicado a encontrar a melhor solução e experiência para o cliente, sempre focado em apoiar as empresas a aumentar sua maturidade e a torná-las mais resilientes e seguras na jornada digital.",
    name: "Everton Weissheimer",
    role: "Customer Experience Director — PBI Informática",
    avatar: "/depoimentos/everton-weissheimer.png",
  },
];

export type Cliente = { name: string; file: string };

export const clientes: Cliente[] = [
  { name: "Super Zart", file: "/clientes/zart.png" },
  { name: "American Nutrients", file: "/clientes/american.png" },
  { name: "Mercado 3 Guris", file: "/clientes/3guris.jpeg" },
  { name: "Super Cascata", file: "/clientes/supercascata.jpeg" },
  { name: "Super Esquinão", file: "/clientes/super-esquinao.png" },
  { name: "Casa Santo Nono", file: "/clientes/santonono.jpeg" },
  { name: "Degasperi", file: "/clientes/degasperi.jpeg" },
  { name: "Degasperi Florestal", file: "/clientes/degasperi-florestal.jpeg" },
  { name: "APDL — Assoc. Pró Desenvolvimento de Languiru", file: "/clientes/apdl.png" },
  { name: "Milkparts", file: "/clientes/milkparts.png" },
  { name: "NZ-TEC", file: "/clientes/nztec.png" },
  { name: "Seja Momento GYM", file: "/clientes/seja-momento.png" },
];
