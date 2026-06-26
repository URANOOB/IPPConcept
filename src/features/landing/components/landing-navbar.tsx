import Image from "next/image";
import { landingNavItems } from "../data";
import { siteConfig } from "@/shared/config/site";

export function LandingNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-(--ipp-line) bg-(--ipp-paper)/94 px-5 py-3 backdrop-blur-md sm:px-8 lg:px-12">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5">
        <a href="#hero" className="flex min-w-0 items-center gap-3" aria-label="Ir al inicio">
          <Image
            src={siteConfig.assets.logoSymbol}
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 shrink-0 object-contain"
            priority
          />
          <span className="font-display truncate text-2xl font-black leading-none text-(--ipp-ink)">
            Ingles Pa&apos; La Paz
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {landingNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-bold text-(--ipp-muted) transition hover:bg-(--ipp-light-green) hover:text-(--ipp-ink)"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="font-display inline-flex min-h-11 shrink-0 items-center rounded-full bg-(--ipp-plum) px-5 text-base font-black text-white shadow-[0_6px_0_var(--ipp-coral)] transition hover:-translate-y-0.5 hover:bg-(--ipp-coral) hover:shadow-[0_6px_0_var(--ipp-plum)]"
        >
          Contacto
        </a>
      </nav>
    </header>
  );
}
