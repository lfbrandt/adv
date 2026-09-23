import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/internal/Breadcrumbs";
import { InternalCta } from "@/components/internal/InternalCta";
import { InternalHero } from "@/components/internal/InternalHero";
import { InternalPageShell } from "@/components/internal/InternalPageShell";
import { getTeamProfile, teamProfileSlugs } from "@/data/teamProfiles";

type TeamProfilePageProps = Readonly<{
  params: Promise<{ slug: string }>;
}>;

export const dynamicParams = false;

export function generateStaticParams() {
  return teamProfileSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: TeamProfilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const profile = getTeamProfile(slug);

  if (!profile) {
    notFound();
  }

  return {
    title: profile.seoTitle,
    description: profile.seoDescription,
  };
}

export default async function TeamProfilePage({
  params,
}: TeamProfilePageProps) {
  const { slug } = await params;
  const profile = getTeamProfile(slug);

  if (!profile) {
    notFound();
  }

  return (
    <InternalPageShell>
      <Breadcrumbs
        items={[
          { label: "Início", href: "/" },
          { label: "Equipe", href: "/#equipe" },
          { label: profile.name },
        ]}
      />
      <InternalHero
        eyebrow="Perfil profissional"
        title={profile.name}
        details={[
          { label: "Função", value: profile.role },
          { label: "Registro", value: profile.oab },
          ...(profile.phone && profile.phoneHref
            ? [
                {
                  label: "Telefone",
                  value: profile.phone,
                  href: profile.phoneHref,
                },
              ]
            : []),
        ]}
        variant="profile"
      />

      <section
        className="internal-section profile-biography"
        aria-labelledby="profile-biography-title"
      >
        <div className="container internal-section__grid">
          <div className="internal-section__heading">
            <p className="internal-section__eyebrow">Perfil</p>
            <h2 id="profile-biography-title">Trajetória profissional</h2>
          </div>
          <div className="profile-biography__copy">
            {profile.biography.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section
        className="internal-section internal-section--light profile-education"
        aria-labelledby="profile-education-title"
      >
        <div className="container">
          <div className="internal-section__heading internal-section__heading--wide">
            <p className="internal-section__eyebrow">Formação acadêmica</p>
            <h2 id="profile-education-title">Formação</h2>
          </div>
          <ol className="profile-education__list">
            {profile.education.map((item) => (
              <li key={item.year}>
                <p className="profile-education__year">{item.year}</p>
                <p>{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="internal-section profile-experience"
        aria-labelledby="profile-experience-title"
      >
        <div className="container internal-section__grid">
          <div className="internal-section__heading">
            <p className="internal-section__eyebrow">Percurso</p>
            <h2 id="profile-experience-title">Experiência e atuação</h2>
          </div>
          <ul className="profile-experience__list">
            {profile.experience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="internal-section internal-section--primary profile-areas"
        aria-labelledby="profile-areas-title"
      >
        <div className="container profile-areas__grid">
          <div className="internal-section__heading">
            <p className="internal-section__eyebrow">Especialidades</p>
            <h2 id="profile-areas-title">Áreas de atuação</h2>
          </div>
          <ul className="profile-areas__list">
            {profile.areas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </section>

      <InternalCta
        title="Entre em contato com o escritório"
        buttonLabel="Entre em contato"
        href="/#contato"
      />
    </InternalPageShell>
  );
}
