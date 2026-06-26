import { m } from "framer-motion";
import { extendedPalette } from "../data";
import { revealUp, revealViewport } from "./motion-settings";

export function PaletteSection() {
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
