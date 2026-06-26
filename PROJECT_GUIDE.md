# Ingles Pa' La Paz - Guia del Proyecto

Este documento define las tecnologias, rutas y lineamientos base que deben respetarse durante la construccion del proyecto.

## Stack Tecnico

- **Framework:** Next.js con App Router.
- **UI:** React.
- **Lenguaje:** TypeScript.
- **Estilos:** Tailwind CSS.
- **Animaciones declarativas:** Framer Motion.
- **Animaciones imperativas / timelines:** GSAP.
- **Gestor de paquetes:** pnpm.

## Scripts

```bash
pnpm dev
pnpm build
pnpm start
```

## Rutas Principales

- Entrada principal de la app: `src/app/page.tsx`
- Layout global y metadata: `src/app/layout.tsx`
- Estilos globales, variables CSS, paleta y fuentes: `src/app/globals.css`
- Pantallas por feature: `src/features/`
- Pagina de estilos visuales: `src/features/estilos/`
- Pagina landing principal: `src/features/landing/`
- Componentes compartidos: `src/shared/components/`
- Configuracion compartida: `src/shared/config/site.ts`
- Componente visual de estilos: `src/features/estilos/components/motion-hero.tsx`
- Assets publicos futuros: `public/`

## Ruta CSS Base

Todos los estilos globales, tokens de color y variables de tipografia deben definirse en:

```txt
src/app/globals.css
```

Tailwind se carga desde ese archivo con:

```css
@import "tailwindcss";
```

## Colores del Logo

Estos colores vienen de la guia visual inicial del logo:

| Nombre | Variable | Hex |
| --- | --- | --- |
| Pink | `--ipp-pink` | `#fbb4bc` |
| Light Green | `--ipp-light-green` | `#eefabc` |
| Blue | `--ipp-blue` | `#97d0f3` |
| Beige | `--ipp-beige` | `#efe2d9` |

## Paleta Extendida IPP

Estos tokens tambien estan disponibles en `src/app/globals.css`:

| Nombre | Variable | Hex |
| --- | --- | --- |
| Sky | `--ipp-sky` | `#a8c8d8` |
| Water | `--ipp-water` | `#90c0c0` |
| Green | `--ipp-green` | `#78a878` |
| Olive | `--ipp-olive` | `#90a878` |
| Cream | `--ipp-cream` | `#fff0c0` |
| Paper | `--ipp-paper` | `#fff8e8` |
| Coral | `--ipp-coral` | `#c06048` |
| Plum | `--ipp-plum` | `#603048` |
| Earth | `--ipp-earth` | `#906030` |
| Yellow | `--ipp-yellow` | `#ffc84a` |
| Mint | `--ipp-mint` | `#dcebcf` |
| White | `--ipp-white` | `#ffffff` |
| Black | `--ipp-black` | `#000000` |

## Fuentes

La identidad visual usa estas familias:

| Uso | Fuente | Variable CSS |
| --- | --- | --- |
| Titulos expresivos | LazyDog | `--font-display` |
| Estilo brush/manual | Segoe Print / fallback manual | `--font-brush` |
| Titulos solidos / marca | ITC Motter Corpus | `--font-solid` |
| Texto base | Arial / Helvetica | `--font-body` |

Las variables estan declaradas en `src/app/globals.css`.

Cuando se reciban los archivos reales de fuente, deben agregarse preferiblemente en:

```txt
src/app/fonts/
```

Luego deben registrarse con `@font-face` en:

```txt
src/app/globals.css
```

Ejemplo esperado:

```css
@font-face {
  font-family: "LazyDog";
  src: url("./fonts/lazydog.woff2") format("woff2");
  font-weight: 400 900;
  font-style: normal;
  font-display: swap;
}
```

## Logo y Assets

El logo de letras oficial esta disponible en:

```txt
public/logoletras.png
```

La ruta publica para usarlo en componentes es:

```txt
/logoletras.png
```

Tambien existe un asset adicional:

```txt
public/logo.png
```

El logo debe consumirse desde componentes React con `next/image` cuando aplique.

## Lineamientos Visuales

- Mantener una estetica suave, infantil-amigable y calmada.
- Usar fondos claros: `--paper`, `--ipp-paper`, `--beige` o blanco.
- Usar `--ink`, `--ipp-plum` o negro solo para texto y contraste.
- Evitar una interfaz oscura como direccion principal.
- Preservar el lenguaje visual del logo: rosa, azul cielo, verde suave y beige.
- Usar Framer Motion para entradas, hover states y transiciones simples.
- Usar GSAP para animaciones continuas, timelines o movimientos coordinados.

## Verificacion Antes de Entregar Cambios

Antes de cerrar una modificacion importante:

```bash
pnpm lint
pnpm build
```

Si hay cambios visuales, revisar tambien en:

```txt
http://localhost:3000
```
