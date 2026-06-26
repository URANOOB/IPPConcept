export const extendedPalette = [
  { name: "Rose", token: "--ipp-pink", value: "#FBB4BC", className: "bg-[var(--ipp-pink)]" },
  {
    name: "Light Green",
    token: "--ipp-light-green",
    value: "#EEFABC",
    className: "bg-[var(--ipp-light-green)]",
  },
  { name: "Blue Sky", token: "--ipp-blue", value: "#97D0F3", className: "bg-[var(--ipp-blue)]" },
  {
    name: "Soft Sand",
    token: "--ipp-beige",
    value: "#EFE2D9",
    className: "bg-[var(--ipp-beige)]",
  },
  { name: "Sky", token: "--ipp-sky", value: "#A8C8D8", className: "bg-[var(--ipp-sky)]" },
  { name: "Water", token: "--ipp-water", value: "#90C0C0", className: "bg-[var(--ipp-water)]" },
  { name: "Green", token: "--ipp-green", value: "#78a878", className: "bg-[var(--ipp-green)]" },
  { name: "Olive", token: "--ipp-olive", value: "#90A878", className: "bg-[var(--ipp-olive)]" },
  { name: "Cream", token: "--ipp-cream", value: "#FFF0C0", className: "bg-[var(--ipp-cream)]" },
  { name: "Paper", token: "--ipp-paper", value: "#FFF8E8", className: "bg-[var(--ipp-paper)]" },
  { name: "Coral", token: "--ipp-coral", value: "#C06048", className: "bg-[var(--ipp-coral)]" },
  { name: "Plum", token: "--ipp-plum", value: "#603048", className: "bg-[var(--ipp-plum)]" },
  { name: "Earth", token: "--ipp-earth", value: "#906030", className: "bg-[var(--ipp-earth)]" },
  { name: "Yellow", token: "--ipp-yellow", value: "#FFC84A", className: "bg-[var(--ipp-yellow)]" },
  { name: "Mint", token: "--ipp-mint", value: "#DCEBCF", className: "bg-[var(--ipp-mint)]" },
  { name: "White", token: "--ipp-white", value: "#FFFFFF", className: "bg-[var(--ipp-white)]" },
  { name: "Black", token: "--ipp-black", value: "#000000", className: "bg-[var(--ipp-black)]" },
] as const;

export const typeStyles = [
  { name: "LazyDog", sample: "Aprender jugando", fontFamily: "var(--font-display)" },
  { name: "Brush manual", sample: "English with peace", fontFamily: "var(--font-brush)" },
  { name: "ITC Motter Corpus", sample: "Comunidad", fontFamily: "var(--font-solid)" },
] as const;

export const technologies = [
  {
    name: "Next.js",
    summary:
      "Framework principal. Organiza rutas, layout, renderizado y optimizacion de imagenes para construir la web.",
  },
  {
    name: "React",
    summary:
      "Base de componentes. Permite separar la interfaz en piezas reutilizables con estado e interaccion.",
  },
  {
    name: "Tailwind",
    summary:
      "Sistema de estilos. Usa clases utilitarias conectadas con los colores, espacios y fuentes del proyecto.",
  },
  {
    name: "Framer Motion",
    summary:
      "Animaciones de interfaz. Controla entradas, transiciones y microinteracciones suaves en componentes React.",
  },
  {
    name: "GSAP",
    summary:
      "Animaciones coordinadas. Maneja movimientos continuos y timelines como las mariposas del hero.",
  },
] as const;

export const logoColorNotes = [
  {
    name: "Logo Pink",
    token: "--ipp-pink",
    value: "#FBB4BC",
    className: "bg-[var(--ipp-pink)]",
    usage: "Base de marca y fondo principal del bloque grafico del logo.",
  },
  {
    name: "Logo Blue",
    token: "--ipp-blue",
    value: "#97D0F3",
    className: "bg-[var(--ipp-blue)]",
    usage: "Cielo, aire y sensacion tranquila dentro de la identidad.",
  },
  {
    name: "Light Green",
    token: "--ipp-light-green",
    value: "#EEFABC",
    className: "bg-[var(--ipp-light-green)]",
    usage: "Letras, mariposas y acentos luminosos asociados a calma y aprendizaje.",
  },
  {
    name: "Yellow",
    token: "--ipp-yellow",
    value: "#FFC84A",
    className: "bg-[var(--ipp-yellow)]",
    usage: "Detalles de energia visual, luz y pequenos acentos ilustrados.",
  },
  {
    name: "Earth",
    token: "--ipp-earth",
    value: "#906030",
    className: "bg-[var(--ipp-earth)]",
    usage: "Sombras calidas y tonos de apoyo en manos e ilustraciones.",
  },
  {
    name: "Cream",
    token: "--ipp-cream",
    value: "#FFF0C0",
    className: "bg-[var(--ipp-cream)]",
    usage: "Contrastes suaves y zonas claras sin perder calidez.",
  },
  {
    name: "IPP Ink",
    token: "--ipp-ink",
    value: "#603048",
    className: "bg-[var(--ipp-ink)]",
    usage: "Texto de apoyo, contornos y contraste sobrio dentro del sistema.",
  },
] as const;
