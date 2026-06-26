export type LandingSectionData = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  accent: "pink" | "green" | "blue" | "cream" | "plum";
};

export const landingNavItems = [
  { label: "Historia", href: "#historia" },
  { label: "Que hacemos", href: "#que-hacemos" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Experiencias", href: "#experiencias" },
  { label: "Impacto", href: "#impacto" },
  { label: "Apoyanos", href: "#apoyanos" },
  { label: "Unete", href: "#unete" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const landingSections: LandingSectionData[] = [
  {
    id: "historia",
    eyebrow: "Historia",
    title: "Como comenzo",
    summary:
      "Espacio reservado para contar el origen de Ingles Pa' La Paz, las primeras motivaciones y la comunidad que impulso el proyecto.",
    accent: "pink",
  },
  {
    id: "que-hacemos",
    eyebrow: "Que hacemos",
    title: "Acciones y programas",
    summary:
      "Espacio reservado para presentar las actividades, talleres, encuentros o recursos que ofrece el proyecto.",
    accent: "green",
  },
  {
    id: "metodologia",
    eyebrow: "Metodologia",
    title: "Como aprendemos",
    summary:
      "Espacio reservado para explicar el enfoque pedagogico, las dinamicas de clase y la forma de acompanar el aprendizaje.",
    accent: "blue",
  },
  {
    id: "experiencias",
    eyebrow: "Experiencias",
    title: "Voces del proceso",
    summary:
      "Espacio reservado para testimonios, historias breves, imagenes o momentos significativos vividos por participantes.",
    accent: "cream",
  },
  {
    id: "impacto",
    eyebrow: "Impacto",
    title: "Resultados en comunidad",
    summary:
      "Espacio reservado para cifras, aprendizajes, logros, alcance territorial o cambios generados por el proyecto.",
    accent: "plum",
  },
  {
    id: "apoyanos",
    eyebrow: "Apoyanos",
    title: "Formas de aportar",
    summary:
      "Espacio reservado para explicar como personas, organizaciones o aliados pueden apoyar el crecimiento del proyecto.",
    accent: "pink",
  },
  {
    id: "unete",
    eyebrow: "Unete",
    title: "Participa con nosotros",
    summary:
      "Espacio reservado para convocatorias, voluntariado, inscripciones o rutas de participacion.",
    accent: "green",
  },
  {
    id: "contacto",
    eyebrow: "Contacto",
    title: "Hablemos",
    summary:
      "Espacio reservado para datos de contacto, redes sociales, correo y llamados a conversar con el equipo.",
    accent: "blue",
  },
];
