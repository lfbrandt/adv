import {
  getPublishedRouteSlug,
  publishedRoutes,
} from "@/data/publishedRoutes";

export type PracticeAreaService = Readonly<{
  title: string;
  description?: string;
}>;

export type PracticeAreaDetail = Readonly<{
  slug: string;
  title: string;
  eyebrow: string;
  heroDescription: string;
  introductionTitle: string;
  introduction: string;
  services: readonly PracticeAreaService[];
  audience: readonly string[];
  seoTitle: string;
  seoDescription: string;
}>;

export const practiceAreaDetails = [
  {
    slug: getPublishedRouteSlug(publishedRoutes.practiceAreas["01"]),
    title: "Direito Trabalhista",
    eyebrow: "Área de atuação",
    heroDescription:
      "Atuação consultiva, preventiva e contenciosa nas relações de trabalho.",
    introductionTitle: "Atuação trabalhista",
    introduction:
      "A atuação trabalhista do escritório abrange consultoria, prevenção e contencioso, atendendo trabalhadores e empresas em questões relacionadas às relações de trabalho, estruturação jurídica e solução de conflitos.",
    services: [
      {
        title: "Reclamatórias Trabalhistas",
        description: "Representação de funcionários em demandas judiciais.",
      },
      {
        title: "Contencioso Trabalhista",
        description: "Representação em demandas judiciais.",
      },
      {
        title: "Consultoria, assessoria e preventivo trabalhista",
      },
      {
        title: "Litígios de acidentes de trabalho e doenças ocupacionais",
      },
      {
        title: "Estruturação trabalhista de startups e negócios inovadores",
      },
    ],
    audience: [
      "A atuação atende trabalhadores urbanos, rurais e domésticos, autônomos dependentes, profissionais sem registro e empregados que sofreram violações de direitos, incluindo verbas não pagas, assédio, irregularidades contratuais, jornadas abusivas, acidentes ou doenças ocupacionais.",
      "Também abrange empresas de pequeno, médio e grande porte, especialmente startups e negócios inovadores que necessitam de consultoria preventiva, estruturação trabalhista, defesa em litígios e redução de passivo.",
    ],
    seoTitle:
      "Direito Trabalhista | Vidolin & Goetzke Advogados Associados",
    seoDescription:
      "Atuação em Direito Trabalhista para trabalhadores e empresas, com consultoria, prevenção, estruturação jurídica e representação em demandas judiciais.",
  },
  {
    slug: getPublishedRouteSlug(publishedRoutes.practiceAreas["02"]),
    title: "Direito Previdenciário",
    eyebrow: "Área de atuação",
    heroDescription:
      "Orientação, planejamento e representação administrativa e judicial em questões previdenciárias.",
    introductionTitle: "Atuação previdenciária",
    introduction:
      "A atuação previdenciária do escritório abrange orientação, planejamento e representação administrativa e judicial em questões relacionadas a benefícios, incapacidade e organização previdenciária.",
    services: [
      {
        title: "Atuação Administrativa e Judicial Previdenciária",
        description:
          "Atuação em litígios previdenciários nas esferas administrativa e judicial.",
      },
      { title: "Planejamento Previdenciário Estratégico" },
      { title: "Concessão e Revisão de Benefícios Previdenciários" },
      { title: "Benefícios Assistenciais — LOAS/BPC" },
      { title: "Acidentes do Trabalho e Benefícios por Incapacidade" },
    ],
    audience: [
      "A atuação atende segurados do INSS em geral, incluindo empregados, contribuintes individuais, MEIs, facultativos e empresários que buscam obter, revisar ou restabelecer benefícios previdenciários e assistenciais, bem como segurados incapacitados por doença ou acidente.",
      "Também abrange idosos e pessoas com deficiência em situação de vulnerabilidade social, além de clientes interessados em planejamento previdenciário estratégico para aposentadoria.",
    ],
    seoTitle:
      "Direito Previdenciário | Vidolin & Goetzke Advogados Associados",
    seoDescription:
      "Atuação em Direito Previdenciário com planejamento, benefícios, incapacidade e representação administrativa e judicial.",
  },
  {
    slug: getPublishedRouteSlug(publishedRoutes.practiceAreas["03"]),
    title: "Direito Cível",
    eyebrow: "Área de atuação",
    heroDescription:
      "Assessoria preventiva e suporte jurídico em questões patrimoniais, familiares, sucessórias e consumeristas.",
    introductionTitle: "Atuação cível",
    introduction:
      "A atuação cível reúne assessoria preventiva e suporte jurídico em questões patrimoniais, familiares, sucessórias, consumeristas e relacionadas à responsabilidade civil, posse e propriedade.",
    services: [
      { title: "Assessoria Jurídica Preventiva" },
      { title: "Inventários e Sucessões" },
      { title: "Planejamento Patrimonial e Sucessório" },
      { title: "Holding Familiar" },
      { title: "Direito de Família" },
      { title: "Responsabilidade Civil" },
      { title: "Direito do Consumidor" },
      {
        title: "Propriedade e Posse",
        description: "Usucapião e ações possessórias.",
      },
    ],
    audience: [
      "A atuação atende pessoas físicas, famílias e empresas que necessitam de assessoria preventiva, solução de conflitos, regularização patrimonial, planejamento sucessório, estruturação de holdings familiares, atuação em inventários e demandas de família, responsabilidade civil, consumo, posse e propriedade.",
      "Também abrange consumidores e cidadãos em geral que buscam proteção e reparação de direitos.",
    ],
    seoTitle: "Direito Cível | Vidolin & Goetzke Advogados Associados",
    seoDescription:
      "Atuação em Direito Cível com assessoria preventiva, família, sucessões, planejamento patrimonial, responsabilidade civil, consumo, posse e propriedade.",
  },
  {
    slug: getPublishedRouteSlug(publishedRoutes.practiceAreas["04"]),
    title: "Direito Empresarial e Startups",
    eyebrow: "Área de atuação",
    heroDescription:
      "Suporte jurídico para estruturação, governança, contratos e inovação em startups e negócios inovadores.",
    introductionTitle: "Atuação empresarial",
    introduction:
      "A atuação empresarial é voltada especialmente a startups e negócios inovadores, reunindo suporte jurídico para estruturação, governança, contratos, inovação, captação de recursos e relações empresariais.",
    services: [
      { title: "Constituição, Reestruturação e Governança de Startups" },
      {
        title: "Consultoria Jurídica Empresarial Contínua",
        description: "Com base no modelo de negócio da startup.",
      },
      {
        title: "Consultoria Jurídica e Estratégica",
        description:
          "Captação de recursos de fomento à inovação, com suporte e proteção ao investidor.",
      },
      {
        title: "Revisão Legal de Projetos de Inovação",
        description: "Para captação de recursos de fomento público.",
      },
      {
        title: "Contratos Empresariais",
        description:
          "Memorandos de Entendimento, contratos de parceria e Vesting.",
      },
      { title: "Relações Empresariais com o Poder Público" },
    ],
    audience: [
      "A atuação atende startups em estágios de ideação, tração e scale-up, founders, empresas inovadoras, investidores, aceleradoras, PMEs e organizações que demandam apoio jurídico em governança, estrutura societária, contratos empresariais e relações com o poder público.",
      "Também abrange demandas relacionadas à captação de recursos e à adequação regulatória para editais de fomento à inovação.",
    ],
    seoTitle:
      "Direito Empresarial e Startups | Vidolin & Goetzke Advogados Associados",
    seoDescription:
      "Atuação jurídica para startups e negócios inovadores em estruturação, governança, contratos, inovação, captação de recursos e relações empresariais.",
  },
  {
    slug: getPublishedRouteSlug(publishedRoutes.practiceAreas["05"]),
    title: "Direito Desportivo",
    eyebrow: "Área de atuação",
    heroDescription:
      "Suporte jurídico às relações profissionais, contratuais, societárias e de governança no esporte.",
    introductionTitle: "Atuação desportiva",
    introduction:
      "A atuação em Direito Desportivo envolve suporte jurídico às relações profissionais, contratuais, societárias e de governança no ambiente esportivo.",
    services: [
      { title: "Assessoria Trabalhista Desportiva" },
      { title: "Contratos e Governança Desportiva" },
      { title: "Clubes-Empresa e Modelos Societários" },
    ],
    audience: [
      "A atuação atende atletas profissionais, clubes, entidades desportivas, empresários do esporte, clubes-empresa (SAF), gestores esportivos e organizações que necessitam de assessoria trabalhista desportiva, negociação e elaboração de contratos, governança esportiva, estrutura societária e suporte jurídico nas relações profissionais do esporte.",
    ],
    seoTitle:
      "Direito Desportivo | Vidolin & Goetzke Advogados Associados",
    seoDescription:
      "Atuação em Direito Desportivo com assessoria trabalhista, contratos, governança, clubes-empresa e modelos societários no esporte.",
  },
  {
    slug: getPublishedRouteSlug(publishedRoutes.practiceAreas["06"]),
    title: "Direito Eleitoral e Partidário",
    eyebrow: "Área de atuação",
    heroDescription:
      "Consultoria preventiva, assessoria eleitoral e representação perante a Justiça Eleitoral.",
    introductionTitle: "Atuação eleitoral e partidária",
    introduction:
      "A atuação em Direito Eleitoral e Partidário reúne consultoria preventiva, assessoria durante o processo eleitoral e representação jurídica perante a Justiça Eleitoral.",
    services: [
      { title: "Consultoria e Assessoria Jurídica em Direito Eleitoral" },
      {
        title: "Registro de Candidaturas e Acompanhamento do Processo Eleitoral",
      },
      {
        title: "Prestação de Contas Eleitorais",
        description: "Para candidatos, partidos políticos e federações.",
      },
      { title: "Assessoria Jurídica em Campanhas Eleitorais" },
      { title: "Propaganda Eleitoral e Partidária" },
      { title: "Ações e Representações Eleitorais" },
      {
        title: "Defesa em Processos e Recursos Eleitorais",
        description:
          "Investigação judicial eleitoral, ações de impugnação de mandato eletivo e recursos eleitorais.",
      },
      { title: "Inelegibilidades, Desincompatibilização e Elegibilidade" },
      {
        title: "Assessoria Jurídica a Partidos, Federações e Agentes Políticos",
        description:
          "Para candidatos, agentes públicos e detentores de mandato eletivo.",
      },
      { title: "Compliance Eleitoral e Planejamento Jurídico-Eleitoral" },
    ],
    audience: [
      "A atuação atende candidatos, pré-candidatos, partidos políticos, federações partidárias, detentores de mandato eletivo, agentes públicos, assessores parlamentares, coordenadores de campanha e profissionais da comunicação política.",
      "Também abrange pessoas físicas ou jurídicas que necessitam de consultoria preventiva, assessoria durante o processo eleitoral, atuação perante a Justiça Eleitoral, prestação de contas, defesa em ações eleitorais e orientação sobre legislação eleitoral e partidária.",
    ],
    seoTitle:
      "Direito Eleitoral e Partidário | Vidolin & Goetzke Advogados Associados",
    seoDescription:
      "Atuação em Direito Eleitoral e Partidário com consultoria preventiva, candidaturas, prestação de contas, campanhas e representação perante a Justiça Eleitoral.",
  },
] as const satisfies readonly PracticeAreaDetail[];

export function getPracticeAreaDetail(
  slug: string,
): PracticeAreaDetail | undefined {
  return practiceAreaDetails.find((area) => area.slug === slug);
}