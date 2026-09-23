type InternalHeroDetail = Readonly<{
  label: string;
  value: string;
  href?: string;
}>;

type InternalHeroProps = Readonly<{
  eyebrow: string;
  title: string;
  description?: string;
  details?: readonly InternalHeroDetail[];
  variant?: "area" | "profile";
}>;

export function InternalHero({
  eyebrow,
  title,
  description,
  details,
  variant = "area",
}: InternalHeroProps) {
  return (
    <section
      className={`internal-hero internal-hero--${variant}`}
      aria-labelledby="internal-page-title"
    >
      <div className="container internal-hero__container">
        <div className="internal-hero__content">
          <p className="internal-hero__eyebrow">{eyebrow}</p>
          <h1 id="internal-page-title" className="internal-hero__title">
            {title}
          </h1>
          {description ? (
            <p className="internal-hero__description">{description}</p>
          ) : null}
          {details?.length ? (
            <dl className="internal-hero__details">
              {details.map((detail) => (
                <div key={detail.label}>
                  <dt>{detail.label}</dt>
                  <dd>
                    {detail.href ? (
                      <a href={detail.href}>{detail.value}</a>
                    ) : (
                      detail.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
        <div className="internal-hero__geometry" aria-hidden="true" />
      </div>
    </section>
  );
}
