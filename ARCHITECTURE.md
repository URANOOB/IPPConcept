# Arquitectura

Este proyecto usa una arquitectura por rutas y features sobre Next.js App Router.

## Rutas del producto

- `/estilos`: pagina de estilos del proyecto. Vive en `src/features/estilos` y muestra logo, paleta, tipografias y tecnologias.
- `/landing`: pagina principal de contenido. Vive en `src/features/landing` y es el lugar para agregar las secciones informativas del sitio.

## Capas

- `src/app`: rutas, layouts y metadata. Los archivos de esta capa deben ser delgados y componer features.
- `src/features`: UI y logica por pantalla o dominio. Cada feature expone su pantalla desde la raiz, por ejemplo `landing-page.tsx` o `estilos-page.tsx`.
- `src/shared`: piezas reutilizables entre features, como componentes comunes, configuracion, helpers y constantes.
- `public`: assets servidos directamente por Next.js. Se referencian desde componentes con rutas publicas como `/logo.png`.
- `src/app/globals.css`: tokens visuales, fuentes y estilos globales.

## Convenciones

- Evitar imports desde `src/app` hacia detalles internos de otra ruta.
- Usar `@/features/...` para pantallas y `@/shared/...` para piezas comunes.
- Mantener la configuracion de marca y enlaces compartidos en `src/shared/config/site.ts`.
- Los componentes con estado, efectos o librerias de animacion deben declarar `"use client"` solo en el archivo que lo necesita.
- Los assets de `public` deben consumirse por URL publica centralizada cuando se reutilicen en varias capas.
- Las rutas en `src/app/**/page.tsx` no deben guardar componentes grandes; deben importar una pantalla desde `src/features`.
- Evitar carpetas preventivas. Crear `hooks`, `utils`, `types` o `data` como carpetas solo cuando haya varios archivos relacionados.
- Si una feature tiene un solo archivo de datos, usar `data.ts` en la raiz de la feature.
