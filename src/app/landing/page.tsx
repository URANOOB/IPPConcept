import type { Metadata } from "next";
import { LandingPageContent } from "@/features/landing/landing-page";

export const metadata: Metadata = {
  title: "Landing | Ingles Pa' La Paz",
  description:
    "Landing principal de Ingles Pa' La Paz, un proyecto para aprender ingles desde la calma, la identidad y la comunidad.",
};

export default function LandingPage() {
  return <LandingPageContent />;
}
