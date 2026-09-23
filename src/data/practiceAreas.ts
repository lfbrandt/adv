import {
  publishedRoutes,
  type PracticeAreaRoute,
} from "@/data/publishedRoutes";

export type PracticeArea = Readonly<{
  number: string;
  title: string;
  description: string;
  href?: PracticeAreaRoute;
}>;

export const practiceAreas: readonly PracticeArea[] = [
  {
    number: "01",
    title: "Trabalhista",
    description:
      "Atuação consultiva, preventiva e contenciosa nas relações de trabalho, incluindo demandas judiciais, acidentes e doenças ocupacionais e estruturação trabalhista de startups e negócios inovadores.",
    href: publishedRoutes.practiceAreas["01"],
  },
  {
    number: "02",
    title: "Previdenciário",
    description:
      "Planejamento previdenciário, concessão e revisão de benefícios, benefícios assistenciais, demandas relacionadas à incapacidade e atuação administrativa e judicial.",
    href: publishedRoutes.practiceAreas["02"],
  },
  {
    number: "03",
    title: "Cível",
    description:
      "Assessoria jurídica preventiva, inventários e sucessões, planejamento patrimonial, família, responsabilidade civil, relações de consumo, posse e propriedade.",
    href: publishedRoutes.practiceAreas["03"],
  },
  {
    number: "04",
    title: "Empresarial — Startups e Negócios Inovadores",
    description:
      "Estruturação e governança de startups, consultoria empresarial, contratos, projetos de inovação, captação de recursos de fomento e relações empresariais com o Poder Público.",
    href: publishedRoutes.practiceAreas["04"],
  },
  {
    number: "05",
    title: "Desportivo",
    description:
      "Assessoria trabalhista desportiva, contratos, governança, clubes-empresa e suporte jurídico relacionado a modelos societários no esporte.",
    href: publishedRoutes.practiceAreas["05"],
  },
  {
    number: "06",
    title: "Eleitoral e Partidário",
    description:
      "Consultoria e assessoria em processo eleitoral, candidaturas, prestação de contas, propaganda, ações eleitorais, elegibilidade e planejamento jurídico-eleitoral.",
    href: publishedRoutes.practiceAreas["06"],
  },
];