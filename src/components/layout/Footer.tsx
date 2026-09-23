import Image from "next/image";
import Link from "next/link";

import { contact, locations } from "@/data/contact";

const footerNavigation = [
  { href: "/#escritorio", label: "Escritório" },
  { href: "/#areas", label: "Áreas de atuação" },
  { href: "/#equipe", label: "Equipe" },
  { href: "/#unidades", label: "Unidades" },
  { href: "/#contato", label: "Contato" },
] as const;

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__container">
        <div className="site-footer__main">
          <div className="site-footer__brand">
            <Link
              className="site-footer__logo"
              href="/"
              aria-label="Vidolin & Goetzke Advogados Associados — página inicial"
            >
              <Image
                className="site-footer__logo-image"
                src="/brand/logo-fundo-azul.jpg"
                alt=""
                width={1800}
                height={1587}
                sizes="(min-width: 1024px) 19rem, (min-width: 768px) 15rem, 13rem"
              />
            </Link>
          </div>

          <nav
            className="site-footer__navigation"
            aria-label="Navegação do rodapé"
          >
            <p className="site-footer__label">Navegação</p>
            <ul>
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__contact">
            <p className="site-footer__label">Contato</p>
            <address>
              <a className="site-footer__email" href={contact.emailHref}>
                {contact.email}
              </a>
              <a
                href={contact.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${contact.instagram.handle} no Instagram (abre em nova guia)`}
              >
                {contact.instagram.handle}
              </a>
            </address>
          </div>
        </div>

        <div className="site-footer__locations" aria-label="Unidades">
          {locations.map((location) => (
            <p key={location.number}>
              {location.city} <span>/ {location.state}</span>
            </p>
          ))}
        </div>

        <p className="site-footer__copyright">
          © 2026 Vidolin &amp; Goetzke Advogados Associados.
        </p>
      </div>
    </footer>
  );
}
