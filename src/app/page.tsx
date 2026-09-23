import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactSection } from "@/components/sections/ContactSection";
import { Hero } from "@/components/sections/Hero";
import { LocationsSection } from "@/components/sections/LocationsSection";
import { OfficeSection } from "@/components/sections/OfficeSection";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { TeamSection } from "@/components/sections/TeamSection";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo-principal">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo-principal" className="home-main" tabIndex={-1}>
        <Hero />
        <OfficeSection />
        <PracticeAreas />
        <TeamSection />
        <LocationsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
