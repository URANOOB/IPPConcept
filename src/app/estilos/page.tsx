import type { Metadata } from "next";
import Footer from "@/components/footer";
import { MotionHero } from "@/components/estilos/motion-hero";

export const metadata: Metadata = {
  title: "Estilos | Ingles Pa' La Paz",
  description:
    "Guia de identidad visual para Ingles Pa' La Paz con logo, paleta, tipografias y tecnologias del proyecto.",
};

export default function EstilosPage() {
  return (
    <>
      <MotionHero />
      <Footer />
    </>
  );
}
