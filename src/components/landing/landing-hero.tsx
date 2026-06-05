import Image from "next/image";
import logoLetters from "../../../public/logoletras.png";

export function LandingHero() {
  return (
    <main className="min-h-screen bg-(--ipp-white) text-(--ipp-ink)">
      <section className="paper-texture grid min-h-screen items-center px-6 py-20 sm:px-8">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
          <div className="flex flex-col items-start gap-7">
            <div className="relative">
              <div className="absolute inset-8 -z-10 rounded-full bg-[radial-gradient(circle,rgba(255,200,74,0.4)_0%,rgba(255,200,74,0.14)_45%,rgba(255,200,74,0)_72%)] blur-3xl" />
              <Image
                src={logoLetters}
                alt="Ingles Pa' La Paz"
                width={1500}
                height={1487}
                loading="eager"
                fetchPriority="high"
                className="h-auto w-full max-w-105"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
