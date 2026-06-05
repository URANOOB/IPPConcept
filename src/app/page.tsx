import type { Metadata } from "next";
import { MotionHero } from "@/components/motion-hero";

export const metadata: Metadata = {
  title: "Ingles Pa' La Paz | Identidad visual",
  description:
    "Landing page de identidad visual para Ingles Pa' La Paz con logo, paleta, tipografias y tecnologias del proyecto.",
};

export default function Home() {
  return <MotionHero />;
}
