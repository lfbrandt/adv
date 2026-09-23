import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/internal/Breadcrumbs";
import { InternalCta } from "@/components/internal/InternalCta";
import { InternalHero } from "@/components/internal/InternalHero";
import { InternalPageShell } from "@/components/internal/InternalPageShell";
import {
  getPracticeAreaDetail,
  practiceAreaDetails,
} from "@/data/practiceAreaDetails";

type PracticeAreaPageProps = Readonly<{
  params: Promise<{ slug: string }>;
}>;

export const dynamicParams = false;

export function generateStaticParams() {
  return practiceAreaDetails.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: PracticeAreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeAreaDetail(slug);

  if (!area) {
    notFound();
  }

  return {
    title: area.seoTitle,
    description: area.seoDescription,
  };
}

export default async function PracticeAreaPage({
  params,
}: PracticeAreaPageProps) {
  const { slug } = await params;
  const area = getPracticeAreaDetail(slug);

  if (!area) {
    notFound();
  }

  return (
    <InternalPageShell>
      <Breadcrumbs
        items={[
          { label: "Início", href: "/" },
          { label: "Áreas de atuação", href: "/#areas" },
          { label: area.title },
        ]}
      />
      <InternalHero
        eyebrow={area.eyebrow}
        title={area.title}
        description={area.heroDescription}
      />

      <section
        className="internal-section area-introduction"
        aria-labelledby="area-introduction-title"
      >
        <div className="container internal-section__grid">
          <div className="internal-section__heading">
            <p className="internal-section__eyebrow">Visão geral</p>
            <h2 id="area-introduction-title">{area.introductionTitle}</h2>
          </div>
          <p className="internal-section__lead">{area.introduction}</p>
        </div>
      </section>

      <section
        className="internal-section internal-section--light area-services"
        aria-labelledby="area-services-title"
      >
        <div className="container">
          <div className="internal-section__heading internal-section__heading--wide">
            <p className="internal-section__eyebrow">Escopo</p>
            <h2 id="area-services-title">Serviços e atuações</h2>
          </div>
          <ol
            className="area-services__list"
            data-count={area.services.length}
          >
            {area.services.map((service) => (
              <li key={service.title}>
                <h3>{service.title}</h3>
                {service.description ? <p>{service.description}</p> : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="internal-section area-audience"
        aria-labelledby="area-audience-title"
      >
        <div className="container internal-section__grid">
          <div className="internal-section__heading">
            <p className="internal-section__eyebrow">Para quem atuamos</p>
            <h2 id="area-audience-title">Público e perfil de demanda</h2>
          </div>
          <div className="area-audience__copy">
            {area.audience.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <InternalCta
        title="Precisa de orientação nesta área?"
        buttonLabel="Entre em contato"
        href="/#contato"
      />
    </InternalPageShell>
  );
}