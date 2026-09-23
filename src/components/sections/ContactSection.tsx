import { LinkButton } from "@/components/ui/LinkButton";
import { contact } from "@/data/contact";

export function ContactSection() {
  return (
    <section
      id="contato"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="container contact-section__container">
        <div className="contact-section__heading">
          <p className="contact-section__eyebrow">Contato</p>
          <h2 id="contact-title" className="contact-section__title">
            Vamos conversar sobre sua necessidade jurídica.
          </h2>
        </div>

        <div className="contact-section__content">
          <p className="contact-section__introduction">
            Entre em contato com a equipe da Vidolin &amp; Goetzke para
            apresentar sua demanda e conhecer as possibilidades de atuação do
            escritório.
          </p>

          <address className="contact-section__details">
            <div className="contact-section__detail">
              <span>E-mail</span>
              <a href={contact.emailHref}>{contact.email}</a>
            </div>

            <div className="contact-section__detail">
              <span>Instagram</span>
              <a
                href={contact.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${contact.instagram.handle} no Instagram (abre em nova guia)`}
              >
                {contact.instagram.handle}
              </a>
            </div>
          </address>

          <LinkButton href={contact.emailHref} variant="primary">
            Enviar e-mail
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
