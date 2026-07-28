# Inglés Pa' La Paz

Una experiencia web para presentar **Inglés Pa' La Paz**, un proyecto de aprendizaje de inglés que pone en el centro la calma, la identidad y la comunidad.

![Vista previa de la landing de Inglés Pa' La Paz](public/screenshots/landing.png)

## Estado del proyecto

La estructura visual y de navegación ya está disponible. El contenido de las secciones se irá incorporando progresivamente: historia, programas, metodología, experiencias, impacto, formas de aportar y contacto.

## Vistas

| Ruta | Descripción |
| --- | --- |
| `/landing` | Landing principal con la narrativa y las secciones del proyecto. |
| `/estilos` | Guía de identidad: logo, paleta, tipografía y tecnologías. |

![Guía de estilos de Inglés Pa' La Paz](public/screenshots/estilos.png)

## Tecnologías

- [Next.js](https://nextjs.org/) con App Router
- React y TypeScript
- Tailwind CSS
- Framer Motion
- Playwright para las capturas y comprobaciones visuales
- pnpm como gestor de paquetes

## Ejecutarlo localmente

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000). La ruta principal redirige a `/landing`.

### Comprobaciones

```bash
pnpm lint
pnpm build
```

## Estructura

```txt
src/
  app/        # Rutas, layout y estilos globales
  features/   # Pantallas y componentes por funcionalidad
  shared/     # Componentes y configuración reutilizables
public/       # Logos, fuentes y capturas del proyecto
```

## Identidad visual

La interfaz utiliza una paleta suave inspirada en la marca: rosa, verde claro, azul cielo y beige. Las variables de color, tipografías y estilos globales viven en [`src/app/globals.css`](src/app/globals.css).

---

Desarrollado para **Inglés Pa' La Paz**.
