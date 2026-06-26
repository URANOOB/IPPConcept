import { m } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/shared/config/site";
import { logoColorNotes } from "../data";
import { revealUp, revealViewport } from "./motion-settings";

export function LogoSection() {
  return (
    <m.section
      id="logo"
      className="paper-texture scroll-mt-8 px-6 py-3 text-(--ipp-ink) sm:px-8"
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      variants={revealUp}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-brush text-5xl font-black leading-none">Logo</h2>
        <div className="mt-10 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <LogoImages />
          <LogoCopy />
        </div>
        <LogoColors />
      </div>
    </m.section>
  );
}

function LogoImages() {
  return (
    <div className="grid gap-8">
      <div className="flex min-h-56 items-center justify-center rounded-md p-6">
        <Image
          src={siteConfig.assets.logoLetters}
          alt="Logotipo Ingles Pa' La Paz"
          width={1500}
          height={1487}
          className="h-auto w-full max-w-90"
        />
      </div>
      <div className="flex min-h-36 items-center justify-center rounded-md p-6">
        <Image
          src={siteConfig.assets.logoSymbol}
          alt="Simbolo Ingles Pa' La Paz"
          width={1500}
          height={1487}
          className="h-auto w-full max-w-40"
        />
      </div>
    </div>
  );
}

function LogoCopy() {
  return (
    <div className="max-w-2xl space-y-5">
      <p className="font-solid text-lg font-semibold leading-8">
        El logo de Ingles Pa&apos; La Paz combina letras expresivas, manos abiertas y
        mariposas para comunicar aprendizaje, calma, acompanamiento y comunidad.
      </p>
      <p className="font-solid text-base leading-7 text-(--ipp-muted)">
        El simbolo puede usarse como marca compacta en espacios pequenos. El logotipo de
        letras debe reservarse para encabezados, piezas de marca y composiciones donde el
        nombre necesite ser el foco principal.
      </p>
      <p className="font-solid text-base leading-7 text-(--ipp-muted)">
        Mantener siempre margen alrededor del logo y evitar colocarlo sobre fondos con
        demasiado detalle. Los fondos recomendados son `--ipp-paper`, `--ipp-pink`,
        `--ipp-blue` y `--ipp-cream`.
      </p>
    </div>
  );
}

function LogoColors() {
  return (
    <div className="mt-16">
      <div className="max-w-2xl">
        <h3 className="font-brush text-2xl font-black">Colores presentes en el logo</h3>
        <p className="font-solid mt-3 text-sm leading-6 text-(--ipp-muted)">
          Estos tokens cubren los colores principales usados por la marca visual: fondos
          suaves, letras, mariposas, manos e informacion de contraste.
        </p>
      </div>
      <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {logoColorNotes.map((color, index) => (
          <m.div
            className="grid grid-cols-[72px_1fr] items-center gap-5"
            key={color.token}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{ delay: index * 0.04, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={`h-18 w-18 rounded-full ${color.className}`} />
            <div>
              <p className="font-solid text-sm font-black">{color.name}</p>
              <p className="font-solid mt-2 text-sm font-bold text-(--ipp-plum)">{color.token}</p>
              <p className="font-solid text-sm font-bold text-(--ipp-plum)">{color.value}</p>
              <p className="font-solid mt-3 text-sm leading-6 text-(--ipp-muted)">{color.usage}</p>
            </div>
          </m.div>
        ))}
      </div>
    </div>
  );
}
