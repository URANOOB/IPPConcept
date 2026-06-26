"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/shared/config/site";

const titleLines = ["Ingles", "Pa' La Paz"];

export function LandingHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="hero" className="ipp-hero-shell relative min-h-[135vh] scroll-mt-24 bg-(--ipp-paper)">
      <div className="sticky top-0 flex min-h-screen overflow-hidden px-5 py-8 sm:px-8 lg:px-12">
        <motion.div
          className="relative z-10 flex w-full flex-col"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="flex items-start justify-between gap-8">
            <h1
              aria-label="Ingles Pa' La Paz"
              className="font-display max-w-5xl text-[clamp(5rem,11.2vw,11.4rem)] leading-[0.78] text-(--ipp-ink)"
            >
              {titleLines.map((line, lineIndex) => (
                <span key={line} className="block">
                  {line.split("").map((char, charIndex) => (
                    <motion.span
                      aria-hidden="true"
                      className="inline-block"
                      key={`${line}-${charIndex}`}
                      initial={reduceMotion ? false : { y: "105%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.72,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.2 + lineIndex * 0.16 + charIndex * 0.018,
                      }}
                    >
                      {char === " " ? "\u00a0" : char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>

            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="group hidden shrink-0 items-center justify-center sm:flex"
              aria-label="Contactar a Ingles Pa' La Paz"
              data-cursor="Escribenos"
            >
              <span className="ipp-contact-orbit relative grid h-31 w-31 place-items-center text-(--ipp-ink) lg:h-38 lg:w-38">
                <span className="font-display absolute inset-0 animate-[spin_16s_linear_infinite] text-[0.58rem] font-black uppercase tracking-[0.24em] lg:text-[0.66rem]">
                  <span className="ipp-ring-text">Aprende con calma • Comunidad • Paz •</span>
                </span>
                <span className="grid h-14 w-14 place-items-center rounded-full bg-(--ipp-light-green) shadow-[0_10px_0_var(--ipp-shadow)] transition group-hover:-translate-y-1 group-hover:bg-(--ipp-yellow)">
                  <Image
                    src={siteConfig.assets.logoSymbol}
                    alt=""
                    width={56}
                    height={56}
                    className="h-10 w-10 object-contain"
                  />
                </span>
              </span>
            </a>
          </div>

          <div className="mt-auto grid items-end gap-8 pb-12 sm:grid-cols-[minmax(0,0.86fr)_minmax(16rem,0.48fr)] lg:pb-14">
            <motion.p
              className="font-display max-w-2xl text-[clamp(1.75rem,3.8vw,4.6rem)] font-black leading-[0.92] text-(--ipp-plum)"
              initial={reduceMotion ? false : { y: 42, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 1 }}
            >
              El ingles no reemplaza lo que somos: abre caminos para contar nuestra historia.
            </motion.p>

            <motion.div
              className="relative ml-auto w-full max-w-sm sm:max-w-md"
              initial={reduceMotion ? false : { y: 56, opacity: 0, rotate: -2 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.9, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute -inset-4 rounded-full bg-(--ipp-blue) opacity-45 blur-3xl" />
              <Image
                src={siteConfig.assets.logoLetters}
                alt="Logo Ingles Pa' La Paz"
                width={1500}
                height={1487}
                priority
                className="relative h-auto w-full drop-shadow-[0_26px_0_rgba(96,48,72,0.12)]"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
