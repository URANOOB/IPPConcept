import type { LandingSectionData } from "../data";
import { TornDivider } from "@/shared/components/torn-divider";

const accentClasses: Record<LandingSectionData["accent"], string> = {
  pink: "bg-(--ipp-pink)",
  green: "bg-(--ipp-light-green)",
  blue: "bg-(--ipp-blue)",
  cream: "bg-(--ipp-cream)",
  plum: "bg-(--ipp-plum) text-(--ipp-paper)",
};

const dividerColorClasses: Record<LandingSectionData["accent"], string> = {
  pink: "text-(--ipp-pink)",
  green: "text-(--ipp-light-green)",
  blue: "text-(--ipp-blue)",
  cream: "text-(--ipp-cream)",
  plum: "text-(--ipp-plum)",
};

export function LandingSection({
  section,
  index,
}: Readonly<{
  section: LandingSectionData;
  index: number;
}>) {
  const isDark = section.accent === "plum";

  return (
    <section
      id={section.id}
      className={`relative scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12 lg:py-28 ${accentClasses[section.accent]}`}
    >
      <TornDivider
        className={`pointer-events-none absolute left-0 top-0 h-16 w-full -translate-y-full sm:h-24 lg:h-32 ${dividerColorClasses[section.accent]}`}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.45fr_1fr] lg:items-end">
        <div>
          <p
            className={`font-solid text-[clamp(4rem,10vw,9rem)] leading-[0.78] ${
              isDark ? "text-(--ipp-yellow)" : "text-(--ipp-plum)"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </p>
          <p className="font-display mt-5 text-2xl font-black">{section.eyebrow}</p>
        </div>

        <div className="max-w-4xl">
          <h2 className="font-solid text-[clamp(3rem,7vw,7.5rem)] leading-[0.8]">
            {section.title}
          </h2>
          <p
            className={`mt-8 max-w-3xl text-xl leading-8 ${
              isDark ? "text-(--ipp-paper)/84" : "text-(--ipp-muted)"
            }`}
          >
            {section.summary}
          </p>
        </div>
      </div>
    </section>
  );
}
