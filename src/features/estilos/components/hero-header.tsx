import { m } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/shared/config/site";
import { HeaderButton } from "./header-button";
import ParamoIllustration from "./paramo";

export function HeroHeader() {
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
            <h1 className="sr-only">Estilos de Ingles Pa&apos; La Paz</h1>
            <Image
              src={siteConfig.assets.logoLetters}
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
            Conoce la identidad visual que tenemos en Ingles Pa&apos; La Paz que nos hace tan unicos.
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
              Pagina principal
            </HeaderButton>
          </m.div>
        </div>
      </section>
    </header>
  );
}
