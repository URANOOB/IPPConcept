"use client";

import { LazyMotion, MotionConfig, domAnimation, m } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import logoLetters from "../../../public/logoletras.png";
import logoSymbol from "../../../public/logo.png";
import { HeaderButton, HeaderButtonFilters } from "./header-button";
import ParamoIllustration from "./paramo";

const logoSrc = logoLetters;
const symbolSrc = logoSymbol;

const extendedPalette = [
  { name: "Rose", token: "--ipp-pink", value: "#FBB4BC", className: "bg-[var(--ipp-pink)]" },
  { name: "Light Green", token: "--ipp-light-green", value: "#EEFABC", className: "bg-[var(--ipp-light-green)]" },
  { name: "Blue Sky", token: "--ipp-blue", value: "#97D0F3", className: "bg-[var(--ipp-blue)]" },
  { name: "Soft Sand", token: "--ipp-beige", value: "#EFE2D9", className: "bg-[var(--ipp-beige)]" },
  { name: "Sky", token: "--ipp-sky", value: "#A8C8D8", className: "bg-[var(--ipp-sky)]" },
  { name: "Water", token: "--ipp-water", value: "#90C0C0", className: "bg-[var(--ipp-water)]" },
  { name: "Green", token: "--ipp-green", value: "#78a878", className: "bg-[var(--ipp-green)]" },
  { name: "Olive", token: "--ipp-olive", value: "#90A878", className: "bg-[var(--ipp-olive)]" },
  { name: "Cream", token: "--ipp-cream", value: "#FFF0C0", className: "bg-[var(--ipp-cream)]" },
  { name: "Paper", token: "--ipp-paper", value: "#FFF8E8", className: "bg-[var(--ipp-paper)]" },
  { name: "Coral", token: "--ipp-coral", value: "#C06048", className: "bg-[var(--ipp-coral)]" },
  { name: "Plum", token: "--ipp-plum", value: "#603048", className: "bg-[var(--ipp-plum)]" },
  { name: "Earth", token: "--ipp-earth", value: "#906030", className: "bg-[var(--ipp-earth)]" },
  { name: "Yellow", token: "--ipp-yellow", value: "#FFC84A", className: "bg-[var(--ipp-yellow)]" },
  { name: "Mint", token: "--ipp-mint", value: "#DCEBCF", className: "bg-[var(--ipp-mint)]" },
  { name: "White", token: "--ipp-white", value: "#FFFFFF", className: "bg-[var(--ipp-white)]" },
  { name: "Black", token: "--ipp-black", value: "#000000", className: "bg-[var(--ipp-black)]" },
];

const typeStyleFontFamilies: Record<string, string> = {
  LazyDog: "var(--font-display)",
  "White Shadows": "var(--font-brush)",
  "ITC Motter Corpus": "var(--font-solid)",
};

const TypeStyles = [
  { name: "LazyDog", sample: "Aprender jugando" },
  { name: "White Shadows", sample: "English with peace" },
  { name: "ITC Motter Corpus", sample: "Comunidad" },
];

const technologies = [
  {
    name: "Next.js",
    summary:
      "Framework principal. Organiza rutas, layout, renderizado y optimizacion de imagenes para construir la web.",
  },
  {
    name: "React",
    summary:
      "Base de componentes. Permite separar la interfaz en piezas reutilizables con estado e interaccion.",
  },
  {
    name: "Tailwind",
    summary:
      "Sistema de estilos. Usa clases utilitarias conectadas con los colores, espacios y fuentes del proyecto.",
  },
  {
    name: "Framer Motion",
    summary:
      "Animaciones de interfaz. Controla entradas, transiciones y microinteracciones suaves en componentes React.",
  },
  {
    name: "GSAP",
    summary:
      "Animaciones coordinadas. Maneja movimientos continuos y timelines como las mariposas del hero.",
  },
];

const logoColorNotes = [
  {
    name: "Logo Pink",
    token: "--ipp-pink",
    value: "#FBB4BC",
    className: "bg-[var(--ipp-pink)]",
    usage: "Base de marca y fondo principal del bloque grafico del logo.",
  },
  {
    name: "Logo Blue",
    token: "--ipp-blue",
    value: "#97D0F3",
    className: "bg-[var(--ipp-blue)]",
    usage: "Cielo, aire y sensacion tranquila dentro de la identidad.",
  },
  {
    name: "Light Green",
    token: "--ipp-light-green",
    value: "#EEFABC",
    className: "bg-[var(--ipp-light-green)]",
    usage: "Letras, mariposas y acentos luminosos asociados a calma y aprendizaje.",
  },
  {
    name: "Yellow",
    token: "--ipp-yellow",
    value: "#FFC84A",
    className: "bg-[var(--ipp-yellow)]",
    usage: "Detalles de energia visual, luz y pequenos acentos ilustrados.",
  },
  {
    name: "Earth",
    token: "--ipp-earth",
    value: "#906030",
    className: "bg-[var(--ipp-earth)]",
    usage: "Sombras calidas y tonos de apoyo en manos e ilustraciones.",
  },
  {
    name: "Cream",
    token: "--ipp-cream",
    value: "#FFF0C0",
    className: "bg-[var(--ipp-cream)]",
    usage: "Contrastes suaves y zonas claras sin perder calidez.",
  },
  {
    name: "IPP Ink",
    token: "--ipp-ink",
    value: "#603048",
    className: "bg-[var(--ipp-ink)]",
    usage: "Texto de apoyo, contornos y contraste sobrio dentro del sistema.",
  },
];

const revealViewport = { once: true, amount: 0.18 };

const revealUp = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0 },
};

type SectionId = "logo" | "paleta" | "tipografias";

export function MotionHero() {
  const [activeSection, setActiveSection] = useState<SectionId>("logo");

  useEffect(() => {
    const sections = ["logo", "paleta", "tipografias"]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        let visible: IntersectionObserverEntry | undefined;

        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }

          if (!visible || entry.intersectionRatio > visible.intersectionRatio) {
            visible = entry;
          }
        }

        if (visible?.target.id) {
          setActiveSection(visible.target.id as SectionId);
        }
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.15, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation}>
        <main className="min-h-screen overflow-hidden text-(--ipp-text)">
          <HeaderButtonFilters />
          <HeroHeader activeSection={activeSection} />
          <LogoSection />
          <PaletteSection />
          <TypographySection />
          <TechnologySection />
        </main>
      </LazyMotion>
    </MotionConfig>
  );
}

function HeroHeader({
  activeSection,
}: {
  activeSection: SectionId;
}) {
  return (
    <header className="torn-header relative isolate min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-(--ipp-sky)" aria-hidden="true">
        <ParamoIllustration className="h-full w-full object-cover" />
      </div>
      <section className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 px-6 pt-30 pb-24 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-0">
        <div className="relative flex max-w-2xl flex-col items-start gap-6">
          <m.div
            className="relative w-full max-w-105 before:absolute before:inset-x-8 before:top-6 before:bottom-10 before:-z-10 before:rounded-full before:blur-2xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="sr-only">Ingles Pa&apos; La Paz</h1>
            <Image
              src={logoSrc}
              alt=""
              width={1500}
              height={1487}
              loading="eager"
              fetchPriority="high"
              className="h-auto w-full"
            />
          </m.div>
          <m.p
            className="font-brush max-w-xl text-base font-bold leading-7 text-(--ipp-ink) sm:text-lg"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Conoce la identidad visual que tenemos en Ingles Pa&apos; La Paz que nos hace tan únicos.
          </m.p>
          <m.div
            className="flex flex-col gap-6 sm:flex-row sm:gap-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.65 }}
          >
            <HeaderButton href="#paleta" size="large">
              Ver paleta
            </HeaderButton>
            <HeaderButton href="#tipografias" size="large">
              Tipografias
            </HeaderButton>
            <HeaderButton href="/landing" size="large">
              Pagina Principal
            </HeaderButton>
          </m.div>
        </div>
      </section>
    </header>
  );
}

function LogoSection() {
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
          src={logoSrc}
          alt="Logotipo Ingles Pa' La Paz"
          width={1500}
          height={1487}
          className="h-auto w-full max-w-90"
        />
      </div>
      <div className="flex min-h-36 items-center justify-center rounded-md p-6">
        <Image
          src={symbolSrc}
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

function PaletteSection() {
  return (
    <m.section
      id="paleta"
      className="paper-texture scroll-mt-8 px-6 py-12 sm:px-8"
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      variants={revealUp}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mt-8 border-t border-(--ipp-line) pt-10">
          <h3 className="font-brush text-center text-lg font-black uppercase tracking-[0.22em] text-(--ipp-ink)">
            Paleta de colores IPP
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {extendedPalette.map((color, index) => (
              <m.div
                className="flex items-center gap-3 rounded-md border border-(--ipp-line) bg-(--ipp-white) p-3"
                key={color.token}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={revealViewport}
                whileHover={{ y: -4, backgroundColor: "var(--ipp-light-green)" }}
                transition={{ delay: index * 0.03, type: "spring", stiffness: 320, damping: 22 }}
              >
                <div className={`h-12 w-12 shrink-0 rounded-full border border-(--ipp-black)/10 ${color.className}`} />
                <div className="min-w-0">
                  <p className="font-solid text-base font-black text-(--ipp-ink)">{color.name}</p>
                  <p className="font-solid truncate text-xs font-bold text-(--ipp-muted)">{color.token}</p>
                  <p className="font-solid text-xs font-black uppercase text-(--ipp-black)">{color.value}</p>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </m.section>
  );
}

function TypographySection() {
  return (
    <m.section
      id="tipografias"
      aria-label="Muestras de las tipografias oficiales del proyecto"
      className="paper-texture scroll-mt-8 px-6 pt-1 pb-8 sm:px-8"
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      variants={revealUp}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto max-w-6xl mt-12 border-t border-(--ipp-coral) pt-10 bg-(--ipp-white)">
        <h2 className="font-brush text-center text-lg font-black uppercase tracking-[0.28em] text-(--ipp-black)">
          Tipografias
        </h2>
        <div className="mt-8 grid gap-0 overflow-hidden rounded-md border border-(--ipp-coral) md:grid-cols-3">
          {TypeStyles.map((style, index) => (
            <TypeStyleCard key={style.name} style={style} index={index} />
          ))}
        </div>
      </div>
    </m.section>
  );
}

function TypeStyleCard({ style, index }: { style: (typeof TypeStyles)[number]; index: number }) {
  const typeFontFamily = typeStyleFontFamilies[style.name];

  return (
    <m.article
      aria-label={`Tipografia ${style.name}: ${style.sample}`}
      tabIndex={0}
      className="group border-b border-(--ipp-coral) p-6 text-(--ipp-ink) outline-none last:border-b-0 hover:bg-(--ipp-coral) hover:text-white focus-visible:bg-(--ipp-coral) focus-visible:text-white focus-visible:ring-4 focus-visible:ring-(--ipp-yellow)/70 md:border-b-0 md:border-r md:last:border-r-0"
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={revealViewport}
      transition={{ delay: index * 0, duration: 0, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="text-3xl font-black leading-tight text-current" style={{ fontFamily: typeFontFamily }}>
        {style.sample}
      </p>
      <p className="font-solid mt-4 text-xs font-black uppercase tracking-[0.14em] text-current">
        {style.name}
      </p>
      <p className="mt-3 text-sm text-current" style={{ fontFamily: typeFontFamily }}>
        ABCDEFGHIJKLMN OPQRSTUVWXYZ
      </p>
      <p className="mt-1 text-sm text-current" style={{ fontFamily: typeFontFamily }}>
        0123456789
      </p>
    </m.article>
  );
}

function TechnologySection() {
  return (
    <m.section
      aria-label="Tecnologias usadas en el proyecto"
      className="paper-texture w-full px-6 py-12 sm:px-8"
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      variants={revealUp}
      transition={{ duration: 0, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-brush text-center text-lg font-black uppercase tracking-[0.28em] text-(--ipp-black)">
          Tecnologias del proyecto
        </h2>
        <div className="mt-8 grid gap-3 md:grid-cols-5">
          {technologies.map((item, index) => (
            <m.article
              aria-label={`${item.name}: ${item.summary}`}
              tabIndex={0}
              className="flex min-h-40 flex-col rounded-md border border-(--ipp-coral) px-4 py-4 text-(--ipp-ink) shadow-sm outline-none backdrop-blur hover:bg-(--ipp-coral) hover:text-white focus-visible:bg-(--ipp-coral) focus-visible:text-white focus-visible:ring-4 focus-visible:ring-(--ipp-yellow)/70"
              key={item.name}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={revealViewport}
              transition={{ delay: index * 0, type: "spring", stiffness: 320, damping: 22 }}
            >
              <span className="font-solid text-sm font-black text-current">{item.name}</span>
              <span className="font-solid mt-3 text-sm font-medium leading-6 text-current">
                {item.summary}
              </span>
            </m.article>
          ))}
        </div>
      </div>
    </m.section>
  );
}
