import Link from "next/link";

import { practiceAreas } from "@/data/practiceAreas";

export function PracticeAreas() {
  return (
    <section
      id="areas"
      className="practice-areas"
      aria-labelledby="practice-areas-title"
    >
      <div className="container practice-areas__container">
        <header className="practice-areas__header">
          <div>
            <p className="practice-areas__eyebrow">Atuação</p>
            <h2 id="practice-areas-title" className="practice-areas__title">
              Áreas de atuação
            </h2>
          </div>

          <p className="practice-areas__introduction">
            O escritório atua de forma consultiva, administrativa e judicial
            em diferentes áreas do Direito, combinando conhecimento técnico,
            estratégia e acompanhamento próximo de cada demanda.
          </p>
        </header>

        <div className="practice-areas__grid">
          {practiceAreas.map((area) => (
            <article className="practice-area" key={area.number}>
              <span className="practice-area__number" aria-hidden="true">
                {area.number}
              </span>
              <h3 className="practice-area__title">{area.title}</h3>
              <p className="practice-area__description">
                {area.description}
                {area.href ? (
                  <Link
                    className="editorial-link practice-area__link"
                    href={area.href}
                  >
                    Conheça esta atuação
                    <span className="editorial-link__arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                ) : null}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}