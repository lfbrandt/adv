import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

type InternalPageShellProps = Readonly<{
  children: ReactNode;
}>;

export function InternalPageShell({ children }: InternalPageShellProps) {
  return (
    <>
      <a className="skip-link" href="#conteudo-principal">
        Pular para o conteúdo principal
      </a>
      <Header />
      <main id="conteudo-principal" className="internal-page" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  );
}