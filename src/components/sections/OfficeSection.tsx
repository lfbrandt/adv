const practiceModes = [
  { number: "01", label: "Consultoria e Assessoria Jurídica" },
  { number: "02", label: "Atuação Administrativa" },
  { number: "03", label: "Atuação Judicial — Contencioso" },
] as const;

export function OfficeSection() {
  return (
    <section
      id="escritorio"
      className="office-section"
      aria-labelledby="office-title"
    >
      <div className="container office-section__container">
        <p className="office-section__eyebrow">O Escritório</p>

        <div className="office-section__layout">
          <div className="office-section__heading-group">
            <h2 id="office-title" className="office-section__title">
              Advocacia estratégica <span>e humanizada.</span>
            </h2>
            <span className="office-section__accent" aria-hidden="true" />
          </div>

          <div className="office-section__content">
            <div className="office-section__copy">
              <p>
                A Vidolin &amp; Goetzke Advogados Associados atua em
                diferentes áreas do Direito, aliando conhecimento técnico à
                atenção dedicada a cada cliente. O escritório busca oferecer
                soluções jurídicas personalizadas, claras e eficientes, com
                seriedade, comprometimento e transparência.
              </p>
              <p>
                Mais do que tratar questões jurídicas isoladamente, a atuação
                é orientada por estratégia, planejamento e compreensão das
                necessidades de cada cliente, buscando transformar situações
                complexas em caminhos jurídicos mais claros e objetivos.
              </p>
            </div>

            <ol
              className="office-section__modes"
              aria-label="Formas de atuação"
            >
              {practiceModes.map((mode) => (
                <li key={mode.number}>
                  <span className="office-section__mode-number">
                    {mode.number}
                  </span>
                  <span className="office-section__mode-label">
                    {mode.label}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
