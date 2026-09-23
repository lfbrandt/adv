import Image from "next/image";
import Link from "next/link";

import { LinkButton } from "@/components/ui/LinkButton";

const navigation = [
  { href: "/#escritorio", label: "Escritório" },
  { href: "/#areas", label: "Áreas de atuação" },
  { href: "/#equipe", label: "Equipe" },
  { href: "/#contato", label: "Contato" },
] as const;

export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link
          className="site-header__logo"
          href="/"
          aria-label="Vidolin & Goetzke Advogados Associados — página inicial"
        >
          <Image
            className="site-header__logo-image"
            src="/brand/logo-fundo-azul.jpg"
            alt=""
            width={1800}
            height={1587}
            preload
            sizes="(min-width: 1024px) 14rem, (min-width: 768px) 11rem, 12rem"
          />
        </Link>

        <nav className="site-header__nav" aria-label="Navegação principal">
          <ul className="site-header__nav-list">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link className="site-header__nav-link" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <LinkButton
          className="site-header__cta"
          href="/#contato"
          variant="primary"
        >
          Fale conosco
        </LinkButton>
      </div>
    </header>
  );
}
