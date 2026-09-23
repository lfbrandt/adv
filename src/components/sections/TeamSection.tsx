import Link from "next/link";

import { teamMembers } from "@/data/team";

export function TeamSection() {
  return (
    <section
      id="equipe"
      className="team-section"
      aria-labelledby="team-title"
    >
      <div className="container team-section__container">
        <header className="team-section__header">
          <div>
            <p className="team-section__eyebrow">Equipe</p>
            <h2 id="team-title" className="team-section__title">
              Conhecimento, estratégia e experiência.
            </h2>
          </div>

          <p className="team-section__introduction">
            A atuação da Vidolin &amp; Goetzke é conduzida por profissionais
            com experiências complementares, unindo prática jurídica, gestão e
            visão estratégica.
          </p>
        </header>

        <div className="team-section__grid">
          {teamMembers.map((member) => (
            <article className="team-member" key={member.number}>
              <span className="team-member__number" aria-hidden="true">
                {member.number}
              </span>

              <div className="team-member__identity">
                <h3 className="team-member__name">{member.name}</h3>
                <p className="team-member__role">{member.role}</p>
                <p className="team-member__oab">{member.oab}</p>
              </div>

              {(member.summary || member.areas) && (
                <div className="team-member__details">
                  {member.summary && (
                    <p className="team-member__summary">{member.summary}</p>
                  )}

                  {member.areas && (
                    <div className="team-member__areas">
                      <p className="team-member__areas-label">
                        Áreas de atuação
                      </p>
                      <ul>
                        {member.areas.map((area) => (
                          <li key={area}>{area}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {member.href ? (
                    <Link
                      className="editorial-link team-member__link"
                      href={member.href}
                    >
                      Ver perfil
                      <span
                        className="editorial-link__arrow"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </Link>
                  ) : null}
                </div>
              )}

              {!member.summary && !member.areas && member.href ? (
                <Link
                  className="editorial-link team-member__link"
                  href={member.href}
                >
                  Ver perfil
                  <span className="editorial-link__arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
