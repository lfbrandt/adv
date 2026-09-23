export type PracticeAreaRoute = `/areas/${string}`;
export type TeamProfileRoute = `/equipe/${string}`;

type PublishedRoutes = Readonly<{
  practiceAreas: Readonly<Record<string, PracticeAreaRoute>>;
  teamMembers: Readonly<Record<string, TeamProfileRoute>>;
}>;

export const publishedRoutes = {
  practiceAreas: {
    "01": "/areas/direito-trabalhista",
    "02": "/areas/direito-previdenciario",
    "03": "/areas/direito-civil",
    "04": "/areas/direito-empresarial-startups",
    "05": "/areas/direito-desportivo",
    "06": "/areas/direito-eleitoral-partidario",
  },
  teamMembers: {
    "01": "/equipe/luis-guilherme-brandt-goetzke",
    "02": "/equipe/ana-carolina-de-almeida-goetzke",
    "03": "/equipe/andre-henrique-de-moura-vidolin",
  },
} as const satisfies PublishedRoutes;

export function getPublishedRouteSlug(
  route: PracticeAreaRoute | TeamProfileRoute,
): string {
  return route.slice(route.lastIndexOf("/") + 1);
}
