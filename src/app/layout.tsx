import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/styles/main.scss";

export const metadata: Metadata = {
  title: "Vidolin & Goetzke Advogados Associados",
  description:
    "Soluções jurídicas com visão estratégica, atuação especializada e atendimento próximo.",
  icons: {
    icon: "/brand/logo-fundo-azul.jpg",
  },
};


type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
