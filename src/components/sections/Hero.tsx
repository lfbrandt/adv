import { LinkButton } from "@/components/ui/LinkButton";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">
            Advocacia Estratégica e Humanizada
          </p>

          <h1 id="hero-title" className="hero__title">
            Soluções Jurídicas <span>com Visão Estratégica.</span>
          </h1>

          <p className="hero__description">
            Conhecimento, estratégia e proximidade para oferecer soluções
            jurídicas claras, seguras e alinhadas às necessidades de cada
            cliente.
          </p>

          <nav className="hero__actions" aria-label="Acessos principais">
            <LinkButton href="#areas" variant="primary">
              Conheça nossa atuação
            </LinkButton>
            <LinkButton href="#escritorio" variant="secondary">
              Conheça o escritório
            </LinkButton>
          </nav>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <span className="hero__plane hero__plane--outer" />
          <span className="hero__plane hero__plane--inner" />
          <span className="hero__visual-line" />
        </div>
      </div>
    </section>
  );
}
