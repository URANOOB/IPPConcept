import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Ingles Pa' La Paz",
  description:
    "Pagina principal de Ingles Pa' La Paz, un proyecto para aprender ingles desde la calma, la identidad y la comunidad.",
};

export default function HomePage() {
  redirect("/landing");
}
