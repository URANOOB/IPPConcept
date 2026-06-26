import { m } from "framer-motion";
import { technologies } from "../data";
import { revealUp, revealViewport } from "./motion-settings";

export function TechnologySection() {
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
