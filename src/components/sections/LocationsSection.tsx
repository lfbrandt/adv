import { locations } from "@/data/contact";

export function LocationsSection() {
  return (
    <section
      id="unidades"
      className="locations-section"
      aria-labelledby="locations-title"
    >
      <div className="container locations-section__container">
        <header className="locations-section__header">
          <div>
            <p className="locations-section__eyebrow">Unidades</p>
            <h2 id="locations-title" className="locations-section__title">
              Presença próxima. <span>Atuação estratégica.</span>
            </h2>
          </div>

          <p className="locations-section__introduction">
            A Vidolin &amp; Goetzke conta com unidades em Campina Grande do
            Sul e Curitiba, mantendo uma atuação próxima às necessidades de
            seus clientes.
          </p>
        </header>

        <div className="locations-section__grid">
          {locations.map((location) => (
            <article className="location" key={location.number}>
              <span className="location__number" aria-hidden="true">
                {location.number}
              </span>

              <div>
                <h3 className="location__title">
                  {location.city} <span>/ {location.state}</span>
                </h3>

                <address className="location__address">
                  {location.addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                  <p className="location__postal-code">
                    CEP {location.postalCode}
                  </p>
                </address>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
