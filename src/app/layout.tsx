import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ingles Pa' La Paz",
  description: "Proyecto web para Ingles Pa' La Paz con Next.js, Tailwind, Framer Motion y GSAP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
