import type { Metadata } from "next";
import Footer from "@/components/footer";
import { LandingHero } from "@/components/landing/landing-hero";

export const metadata: Metadata = {
  title: "Landing | Ingles Pa' La Paz",
  description:
    "Landing principal de Ingles Pa' La Paz, un proyecto para aprender ingles desde la calma, la identidad y la comunidad.",
};

export default function LandingPage() {
  return (
    <>
      <LandingHero />
      <Footer />
    </>
  );
}
