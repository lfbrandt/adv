import { publishedRoutes, type TeamProfileRoute } from "@/data/publishedRoutes";

export type TeamMember = Readonly<{
  number: string;
  name: string;
  role: string;
  oab: string;
  areas?: readonly string[];
  summary?: string;
  href?: TeamProfileRoute;
}>;

export const teamMembers: readonly TeamMember[] = [
  {
    number: "01",
    name: "Luis Guilherme Brandt Goetzke",
    role: "Advogado Sócio Gestor",
    oab: "OAB/PR 69.118",
    areas: [
      "Gestão, Estratégia e Inovação",
      "Direito Civil",
      "Direito Desportivo",
      "Direito Empresarial",
    ],
    summary:
      "Atua nas áreas de Direito Civil, Empresarial e Desportivo, integrando prática jurídica, gestão estratégica e inovação. É responsável pela gestão estratégica do escritório.",
    href: publishedRoutes.teamMembers["01"],
  },
  {
    number: "02",
    name: "Ana Carolina de Almeida Goetzke",
    role: "Advogada Sócia Administradora",
    oab: "OAB/PR 70.101",
    areas: ["Direito do Trabalho", "Direito Empresarial", "Gestão Jurídica"],
    summary:
      "Atua predominantemente em Direito do Trabalho, com experiência em contencioso, gestão jurídica e atuação empresarial. É responsável técnica pela área Trabalhista e participa da gestão administrativa do escritório.",
    href: publishedRoutes.teamMembers["02"],
  },
  {
    number: "03",
    name: "André Henrique de Moura Vidolin",
    role: "Advogado Sócio",
    oab: "OAB/PR 117.147",
    href: publishedRoutes.teamMembers["03"],
  },
];
