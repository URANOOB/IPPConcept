import { LandingHero } from "./components/landing-hero";
import { LandingNavbar } from "./components/landing-navbar";
import { LandingSection } from "./components/landing-section";
import { landingSections } from "./data";
import Footer from "@/shared/components/footer";

export function LandingPageContent() {
  return (
    <>
      <LandingNavbar />
      <main className="overflow-hidden bg-(--ipp-white) text-(--ipp-ink)">
        <LandingHero />
        {landingSections.map((section, index) => (
          <LandingSection key={section.id} section={section} index={index} />
        ))}
      </main>
      <Footer />
    </>
  );
}
