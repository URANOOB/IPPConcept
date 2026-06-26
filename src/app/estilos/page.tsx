import type { Metadata } from "next";
import { EstilosPageContent } from "@/features/estilos/estilos-page";

export const metadata: Metadata = {
  title: "Estilos | Ingles Pa' La Paz",
  description:
    "Guia de identidad visual para Ingles Pa' La Paz con logo, paleta, tipografias y tecnologias del proyecto.",
};

export default function EstilosPage() {
  return <EstilosPageContent />;
}
