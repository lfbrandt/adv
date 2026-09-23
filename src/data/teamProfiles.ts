import { teamMembers } from "@/data/team";
import {
  getPublishedRouteSlug,
  publishedRoutes,
} from "@/data/publishedRoutes";

export type EducationItem = Readonly<{
  year: string;
  description: string;
}>;

export type TeamProfile = Readonly<{
  slug: string;
  name: string;
  role: string;
  oab: string;
  phone?: string;
  phoneHref?: `tel:${string}`;
  areas: readonly string[];
  biography: readonly string[];
  education: readonly EducationItem[];
  experience: readonly string[];
  seoTitle: string;
  seoDescription: string;
}>;

type TeamProfileDetail = Readonly<{
  memberNumber: string;
  slug: string;
  phone?: string;
  phoneHref?: `tel:${string}`;
  areas?: readonly string[];
  biography: readonly string[];
  education: readonly EducationItem[];
  experience: readonly string[];
  seoTitle: string;
  seoDescription: string;
}>;

const teamProfileDetails: readonly TeamProfileDetail[] = [
  {
    memberNumber: "01",
    slug: getPublishedRouteSlug(publishedRoutes.teamMembers["01"]),
    biography: [
      "Luis Guilherme Brandt Goetzke é advogado e Sócio Gestor da Vidolin & Goetzke Advogados Associados. Com mais de 10 anos de atuação, desenvolve trabalho nas áreas de Direito Civil, Direito Empresarial, com ênfase em startups, e Direito Desportivo.",
      "Sua trajetória profissional é marcada pela integração entre Direito, gestão estratégica e inovação. É responsável pela gestão estratégica do escritório.",
    ],
    education: [
      {
        year: "2012",
        description:
          "Graduação em Direito pela Faculdade de Educação Superior do Paraná — FESP.",
      },
      {
        year: "2014",
        description:
          "Participação em seminários de inovação pela Universidade de Tecnologia de Compiègne — UTC, França.",
      },
      {
        year: "2016",
        description:
          "MBA em Gestão Estratégica da Inovação pela Pontifícia Universidade Católica do Paraná — PUCPR.",
      },
      {
        year: "2022",
        description:
          "Especialização em Gestão Pública pela Universidade Estadual de Ponta Grossa — UEPG.",
      },
    ],
    experience: [
      "Experiência em gestão, planejamento estratégico, estruturação de processos e inovação aplicada ao ambiente jurídico.",
      "Integração da Comissão de Inovação e Gestão da OAB/PR entre 2016 e 2022 e atuação como coordenador adjunto do Manual de Gestão Jurídica da Seccional, na área de Gestão de Recursos Humanos.",
      "Atuação como membro dos Conselhos Fiscal e Deliberativo do Paraná Clube entre 2023 e 2026, nos processos internos de fiscalização e de implantação da SAF junto aos conselhos.",
      "Experiência no setor público relacionada à gestão de Políticas Públicas de Ciência, Tecnologia e Inovação, com publicações de artigos em congressos na área.",
      "Responsabilidade pela gestão estratégica do escritório, com visão pautada em organização, planejamento e inovação.",
    ],
    seoTitle:
      "Luis Guilherme Brandt Goetzke | Vidolin & Goetzke Advogados Associados",
    seoDescription:
      "Perfil profissional de Luis Guilherme Brandt Goetzke, advogado e Sócio Gestor, com atuação em Direito Civil, Empresarial, Startups e Direito Desportivo.",
  },
  {
    memberNumber: "02",
    slug: getPublishedRouteSlug(publishedRoutes.teamMembers["02"]),
    biography: [
      "Ana Carolina de Almeida Goetzke é advogada e Sócia Administradora da Vidolin & Goetzke Advogados Associados, com atuação predominante em Direito do Trabalho e experiência profissional construída ao longo de mais de uma década de prática jurídica.",
      "Ao longo de sua trajetória, integrou equipes de escritórios de advocacia de diferentes portes e estruturas, adquirindo experiência na condução de demandas judiciais e na gestão do contencioso. Sua atuação profissional é especialmente voltada ao Direito do Trabalho, área em que acumula mais de dez anos de experiência prática.",
      "Também possui experiência em contencioso cível, negociações, recuperação de créditos e gestão operacional jurídica.",
    ],
    education: [
      {
        year: "2013",
        description:
          "Graduação em Direito — Faculdade de Educação Superior do Paraná (FESP)",
      },
      {
        year: "2022",
        description:
          "Pós-graduação em Direito Securitário, com ênfase em Contratos de Seguros e Gestão de Riscos — Verbo Jurídico",
      },
    ],
    experience: [
      "Direito do Trabalho — Mais de dez anos de experiência prática na área, com atuação nas diferentes etapas do processo trabalhista, incluindo análise inicial, definição da estratégia jurídica, audiências, elaboração de peças, recursos e acompanhamento das fases de execução.",
      "Contencioso e negociações — Experiência em contencioso cível, negociações e recuperação de créditos.",
      "Gestão Jurídica — Experiência na organização de equipes, processos internos, relacionamento com clientes e administração de fluxos e rotinas do contencioso.",
      "Vidolin & Goetzke — Responsável técnica pela área Trabalhista, com atuação também na área Empresarial e participação na gestão e organização do escritório, na estruturação dos fluxos de trabalho, na eficiência operacional e na qualidade dos serviços jurídicos prestados.",
    ],
    seoTitle:
      "Ana Carolina de Almeida Goetzke | Vidolin & Goetzke Advogados Associados",
    seoDescription:
      "Advogada Sócia Administradora da Vidolin & Goetzke Advogados Associados, com atuação em Direito do Trabalho, Direito Empresarial e Gestão Jurídica.",
  },
  {
    memberNumber: "03",
    slug: getPublishedRouteSlug(publishedRoutes.teamMembers["03"]),
    phone: "(41) 99109-0020",
    phoneHref: "tel:+5541991090020",
    areas: [
      "Direito Civil",
      "Direito de Família",
      "Direito do Trabalho",
      "Direito Previdenciário",
      "Direito do Consumidor",
      "Direito Administrativo",
      "Direito de Trânsito",
      "Direito Eleitoral",
    ],
    biography: [
      "André Henrique de Moura Vidolin é advogado, inscrito na Ordem dos Advogados do Brasil — Seção do Paraná, sob o nº 117.147, formado em Direito pela Faculdade Estácio de Curitiba.",
      "Possui experiência na advocacia judicial e extrajudicial, com atuação em diferentes áreas do Direito, destacando-se em Direito Civil, Direito de Família, Direito do Trabalho, Direito Previdenciário, Direito do Consumidor, Direito Administrativo, Direito de Trânsito e Direito Eleitoral.",
      "Sua atuação é pautada pela estratégia jurídica, conhecimento técnico, responsabilidade profissional e proximidade com o cliente, buscando compreender as particularidades de cada caso para construir soluções jurídicas adequadas e efetivas.",
      "Com uma atuação multidisciplinar, André alia a experiência prática à constante atualização jurídica, buscando oferecer uma advocacia ética, estratégica e comprometida com a defesa dos direitos e interesses de seus clientes.",
    ],
    education: [
      {
        year: "Graduação",
        description: "Direito pela Faculdade Estácio de Curitiba.",
      },
    ],
    experience: [
      "Em sua trajetória profissional, integrou a Comissão de Direito de Família da OAB — Subseção Colombo, contribuindo para as atividades institucionais da Ordem e para o desenvolvimento e debate de questões relacionadas ao Direito de Família.",
      "Sua experiência profissional também envolve a atuação perante o Poder Judiciário, órgãos públicos e instituições administrativas, proporcionando uma visão prática e estratégica na condução de demandas judiciais e administrativas.",
      "Na área de Direito Eleitoral, possui experiência na análise e condução de questões relacionadas ao processo eleitoral, legislação eleitoral e demandas envolvendo candidatos, partidos e agentes públicos.",
    ],
    seoTitle:
      "André Henrique de Moura Vidolin | Vidolin & Goetzke Advogados Associados",
    seoDescription:
      "Perfil profissional de André Henrique de Moura Vidolin, Advogado Sócio, com atuação em Direito Civil, de Família, Trabalhista, Previdenciário e Eleitoral.",
  },
];

export const teamProfileSlugs = teamProfileDetails.map(
  (profile) => profile.slug,
);

export function getTeamProfile(slug: string): TeamProfile | undefined {
  const profile = teamProfileDetails.find((item) => item.slug === slug);

  if (!profile) {
    return undefined;
  }

  const member = teamMembers.find(
    (item) => item.number === profile.memberNumber,
  );

  if (!member) {
    return undefined;
  }

  return {
    slug: profile.slug,
    name: member.name,
    role: member.role,
    oab: member.oab,
    phone: profile.phone,
    phoneHref: profile.phoneHref,
    areas: profile.areas ?? member.areas ?? [],
    biography: profile.biography,
    education: profile.education,
    experience: profile.experience,
    seoTitle: profile.seoTitle,
    seoDescription: profile.seoDescription,
  };
}
