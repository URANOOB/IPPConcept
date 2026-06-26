import { m } from "framer-motion";
import { typeStyles } from "../data";
import { revealUp, revealViewport } from "./motion-settings";

export function TypographySection() {
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
      <div className="mx-auto mt-12 max-w-6xl border-t border-(--ipp-coral) bg-(--ipp-white) pt-10">
        <h2 className="font-brush text-center text-lg font-black uppercase tracking-[0.28em] text-(--ipp-black)">
          Tipografias
        </h2>
        <div className="mt-8 grid gap-0 overflow-hidden rounded-md border border-(--ipp-coral) md:grid-cols-3">
          {typeStyles.map((style, index) => (
            <TypeStyleCard key={style.name} style={style} index={index} />
          ))}
        </div>
      </div>
    </m.section>
  );
}

function TypeStyleCard({ style, index }: { style: (typeof typeStyles)[number]; index: number }) {
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
      <p className="text-3xl font-black leading-tight text-current" style={{ fontFamily: style.fontFamily }}>
        {style.sample}
      </p>
      <p className="font-solid mt-4 text-xs font-black uppercase tracking-[0.14em] text-current">
        {style.name}
      </p>
      <p className="mt-3 text-sm text-current" style={{ fontFamily: style.fontFamily }}>
        ABCDEFGHIJKLMN OPQRSTUVWXYZ
      </p>
      <p className="mt-1 text-sm text-current" style={{ fontFamily: style.fontFamily }}>
        0123456789
      </p>
    </m.article>
  );
}
