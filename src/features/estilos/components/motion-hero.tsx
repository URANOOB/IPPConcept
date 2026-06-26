"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import { HeroHeader } from "./hero-header";
import { HeaderButtonFilters } from "./header-button";
import { LogoSection } from "./logo-section";
import { PaletteSection } from "./palette-section";
import { TechnologySection } from "./technology-section";
import { TypographySection } from "./typography-section";

export function MotionHero() {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation}>
        <main className="min-h-screen overflow-hidden text-(--ipp-text)">
          <HeaderButtonFilters />
          <HeroHeader />
          <LogoSection />
          <PaletteSection />
          <TypographySection />
          <TechnologySection />
        </main>
      </LazyMotion>
    </MotionConfig>
  );
}
