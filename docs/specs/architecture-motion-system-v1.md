# Architecture & Motion System V1 — Gralith Website

## 1. Contexto

Gralith Website es la landing pública de Gralith, una empresa B2B de automatización de procesos para equipos profesionales. La primera vertical comercial es **Gralith Legal**, enfocada en automatización operativa para despachos jurídicos.

El sitio ya cuenta con Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, Resend, Vercel Analytics, SEO básico por página, sitemap, robots, Open Graph, JSON-LD, identidad visual Gralith, mockups, fondos hexagonales y animaciones de scroll/reveal.

El problema actual no es que el sitio esté mal hecho, sino que los efectos visuales, fondos, mockups y motion han crecido por iteraciones. Antes de seguir agregando animaciones, se necesita una arquitectura visual más clara.

---

## 2. Problema

Actualmente existen síntomas de deuda visual/técnica:

- Fondos geométricos ajustados por sección sin un sistema común.
- Animaciones/reveals implementadas como piezas sueltas.
- Componentes de marketing con varias responsabilidades mezcladas.
- Fondos, motion, mockups y contenido conviven en los mismos componentes.
- Algunos efectos de scroll/fondo se sienten pegados o inconsistentes.
- El README sigue siendo el default de Create Next App.
- No hay una documentación clara de arquitectura visual.
- No debe seguirse agregando ornamentación sin una regla de sistema.

---

## 3. Objetivo principal

Crear una arquitectura de marketing y motion más ordenada para que el sitio sea mantenible, consistente y digno de una empresa, sin rediseñar todo el sitio.

La fase debe dejar preparada una base sólida para futuras mejoras visuales.

---

## 4. Objetivos específicos

1. Ordenar carpetas y componentes de marketing.
2. Separar responsabilidades: layout/site shell, secciones, mockups, fondos, motion y contenido.
3. Crear un sistema común para fondos y ornamentos.
4. Crear o reubicar un sistema común para motion/reveal.
5. Mantener el diseño actual sin grandes cambios visuales.
6. Eliminar o simplificar efectos que se sienten pegados.
7. Mantener performance y accesibilidad.
8. Mantener intacto el formulario de contacto.
9. Agregar documentación de proyecto y flujo de trabajo.
10. Agregar CI mínimo si no existe.

---

## 5. No objetivos

Esta fase NO debe:

- Rediseñar completamente el sitio.
- Cambiar el posicionamiento comercial.
- Cambiar el copy principal salvo que sea necesario para extracción de contenido.
- Tocar `.env.local`.
- Tocar `RESEND_API_KEY`.
- Tocar `/api/contact` o la lógica de Resend.
- Cambiar DNS, Vercel, analytics o configuración de despliegue.
- Agregar animaciones complejas nuevas.
- Agregar GSAP, Three.js, react-three-fiber, locomotive scroll o librerías pesadas.
- Implementar arquitectura hexagonal, Redux, Zustand o patrones innecesarios.
- Convertir páginas completas en Client Components.
- Meter fondos dinámicos nuevos sin sistema.

---

## 6. Decisión de arquitectura

Para este proyecto, “arquitectura digna de empresa” no significa Clean Architecture pesada. Al ser una landing/marketing site, significa:

- componentes claros
- carpetas coherentes
- diseño sistemático
- motion controlado
- fondos reutilizables
- reglas de marca documentadas
- README serio
- CI mínimo
- secrets protegidos
- deploy estable

---

## 7. Estructura objetivo recomendada

La estructura puede ajustarse si Codex encuentra una forma más limpia, pero debe tender a esto:

```txt
src/
  app/
    page.tsx
    layout.tsx
    contacto/
    despachos-juridicos/
    automatizacion-de-procesos/
    api/contact/

  components/
    site/
      navbar.tsx
      footer.tsx

    ui/
      button.tsx
      input.tsx
      textarea.tsx

    motion/
      section-reveal.tsx
      parallax-layer.tsx
      reduced-motion.ts

    marketing/
      sections/
        home-hero-section.tsx
        home-dashboard-section.tsx
        home-value-section.tsx
        home-dynamic-section.tsx
        home-legal-vertical-section.tsx
        home-work-process-section.tsx
        legal-hero-section.tsx
        legal-problem-section.tsx
        legal-modules-section.tsx
        legal-dashboard-section.tsx
        legal-process-section.tsx
        legal-cta-section.tsx

      mockups/
        hero-process-flow.tsx
        dashboard-mockup.tsx
        legal-dashboard-mockup.tsx
        legal-system-map.tsx

      backgrounds/
        section-backdrop.tsx
        hexagon-field.tsx
        garnet-ornaments.tsx
        gralith-hexagon-background.tsx

      shared/
        cta-section.tsx
        section-heading.tsx
        feature-card.tsx

  content/
    home.ts
    legal.ts
    navigation.ts

  lib/
    site.ts
    metadata.ts
    utils.ts
```

No es obligatorio crear todos los archivos si no aportan valor inmediato. La idea es evitar carpetas artificiales vacías.

---

## 8. Reglas de composición de páginas

Las páginas deben leerse como ensamblado de secciones, no como implementación detallada.

Ejemplo deseado para `src/app/page.tsx`:

```tsx
export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <HomeDashboardSection />
      <HomeValueSection />
      <HomeDynamicSection />
      <HomeLegalVerticalSection />
      <HomeWorkProcessSection />
      <CTASection />
    </>
  );
}
```

Las páginas NO deberían contener arrays grandes de contenido, lógica de mockups, SVGs complejos, backgrounds, motion directo ni detalles de UI repetidos.

---

## 9. Sistema de fondos

Crear un sistema visual de fondos que pueda reutilizarse.

### Componentes sugeridos

```txt
SectionBackdrop
HexagonField
GarnetOrnaments
```

### Responsabilidades

#### `SectionBackdrop`

Controla fondo base de sección, clipping/overflow, capas decorativas permitidas, z-index y reglas responsive.

#### `HexagonField`

Controla patrón hexagonal, tamaño de celdas, stroke, highlights, opacidad, variante clara/oscura y comportamiento mobile.

#### `GarnetOrnaments`

Controla hexágonos grandes rellenos, posición por sección, opacidad, movimiento opcional y reducción en mobile.

---

## 10. Reglas de fondos

1. Los fondos nunca deben estar encima del contenido.
2. Todos los fondos deben usar `pointer-events-none`.
3. Las secciones con fondos deben usar `overflow-hidden` cuando haya ornamentos.
4. No debe haber horizontal overflow.
5. Los mockups deben tener superficies limpias y no heredar patrones internos salvo que sea intencional.
6. Los hexágonos destacados deben alinearse con el grid cuando formen parte de un patrón.
7. Los ornamentos grandes pueden ser independientes, pero deben estar claramente detrás del contenido.
8. Evitar masks/blur si generan aspecto lavado o difuso.
9. El hero debe ser más sobrio que las secciones secundarias.
10. En mobile se reducen ornamentos y movimiento.

---

## 11. Sistema de motion

La web debe tener un sistema de motion único.

### Decisión recomendada

- Mantener `SectionReveal` como primitiva base si basta con reveals simples.
- Adoptar `motion` únicamente si se van a implementar scroll-linked/parallax de forma consistente.
- No mezclar muchas técnicas de animación sin necesidad.

### Componentes sugeridos

```txt
SectionReveal
ParallaxLayer
useReducedMotionPreference
```

### Reglas

1. El motion debe ser sutil.
2. No debe competir con el copy.
3. No debe marear.
4. Debe respetar `prefers-reduced-motion`.
5. No convertir páginas completas en Client Components.
6. Los Client Components deben limitarse a primitives de motion/fondo.
7. Evitar animaciones diferentes en cada sección.
8. Usar duraciones y easing consistentes.
9. Motion debe apoyar jerarquía visual, no ser decoración vacía.

---

## 12. Política sobre `motion`

Si Codex decide instalar `motion`, debe cumplir:

- Agregar solo `motion`.
- No agregar GSAP ni librerías pesadas.
- Justificar por qué se instala.
- Usarlo para primitives reutilizables, no directamente en todas las secciones.
- Mantener server components donde sea posible.

Si no es necesario instalarlo en esta fase, dejar el sistema preparado y documentar que `motion` será la herramienta futura para scroll-linked animations.

---

## 13. Reglas por sección

### Home hero

- Fondo hexagonal sutil.
- Nada de parallax fuerte.
- El H1 debe dominar.
- No poner ornamentos fuertes detrás del título.
- El process flow debe estar limpio.

### Home dashboard/mockup

- Puede usar ornamentos granate grandes detrás del mockup.
- Opacidad baja.
- Movimiento suave si existe.
- El dashboard debe seguir siendo protagonista.

### Dynamic operations wall

- Puede tener motion más expresivo.
- Mantenerlo controlado.
- Evitar solapes accidentales.
- Cards claras y legibles.

### Legal landing

- Priorizar claridad y conversión.
- Motion mínimo.
- Fondos sobrios.
- Mockups limpios.

### Contacto

- Casi sin ornamentación.
- Prioridad total a conversión y formulario.

---

## 14. Contenido

Mover arrays/copy repetido a `src/content` cuando aporte claridad.

Ejemplos:

```txt
homeMetrics
homeCaseRows
homeActivityItems
legalModules
legalUseCases
legalProcessSteps
navigationItems
```

No extraer contenido si complica sin beneficio.

---

## 15. README

Reemplazar el README default por uno específico del proyecto.

Debe incluir:

- Qué es Gralith Website.
- Stack.
- Requisitos.
- Instalación local.
- Scripts.
- Variables de entorno.
- Notas de seguridad.
- Flujo de ramas/PR.
- Deploy en Vercel.
- Contact form y Resend.
- Convenciones de arquitectura.

---

## 16. CI mínimo

Si no existe workflow, agregar GitHub Actions:

```txt
.github/workflows/ci.yml
```

Debe correr en pull requests hacia `main`:

- checkout
- setup node
- npm ci
- npm run lint
- npm run build

---

## 17. Criterios de aceptación

La fase se acepta si:

1. `npm run lint` pasa.
2. `npm run build` pasa.
3. `/` responde y se ve igual o mejor.
4. `/despachos-juridicos` responde y se ve igual o mejor.
5. `/automatizacion-de-procesos` responde.
6. `/contacto` responde.
7. `/api/contact` no fue modificado.
8. `.env.local` no aparece en git.
9. No se tocó configuración de DNS/deploy/analytics.
10. El README ya no es el default.
11. Existe una estructura más clara para motion/backgrounds.
12. No hay horizontal overflow en mobile.
13. El hero no quedó más cargado visualmente.
14. Los mockups siguen siendo legibles.
15. El repo queda más fácil de mantener.

---

## 18. Comandos de validación

```bash
npm run lint
npm run build
npm run dev
```

Rutas a revisar:

```txt
http://localhost:3000/
http://localhost:3000/despachos-juridicos
http://localhost:3000/automatizacion-de-procesos
http://localhost:3000/contacto
```

Breakpoints:

```txt
390px
430px
768px
1024px
desktop
```

---

## 19. Flujo Git recomendado

```bash
git checkout main
git pull origin main
git checkout -b architecture-motion-system-v1
```

Después de Codex:

```bash
npm run lint
npm run build
git status
git add .
git commit -m "chore: organize marketing architecture and motion system"
git push -u origin architecture-motion-system-v1
```

Abrir PR:

```txt
architecture-motion-system-v1 -> main
```

---

## 20. Prompt para Codex

```txt
Read AGENTS.md.

Implement Architecture & Motion System V1 using docs/specs/architecture-motion-system-v1.md as the source of truth.

Context:
Gralith Website is a Next.js App Router marketing site for a B2B process automation company. The first commercial vertical is Gralith Legal for legal offices. The site already has branding, SEO, Vercel Analytics, Resend contact form, legal landing and visual/motion experiments.

Problem:
The project has accumulated backgrounds, hexagon effects, motion/reveal behavior and marketing mockups through multiple iterations. The site works, but the architecture for marketing sections, backgrounds and motion needs to be cleaned up before adding more visual dynamics.

Goal:
Refactor the marketing architecture so the site is easier to maintain and future visual work can follow a consistent system.

Important constraints:
- Do not redesign the whole site.
- Do not change the main visual identity.
- Do not touch .env.local.
- Do not expose secrets.
- Do not touch RESEND_API_KEY.
- Do not modify /api/contact or Resend logic.
- Do not change DNS, analytics or deployment config.
- Keep npm run lint passing.
- Keep npm run build passing.
- Prefer small, reviewable changes.
- Preserve all routes.

Tasks:

1. Audit the current structure
Review:
- src/app/page.tsx
- src/app/despachos-juridicos/page.tsx
- src/app/automatizacion-de-procesos/page.tsx
- src/app/contacto/page.tsx
- src/components/marketing/*
- src/components/marketing/backgrounds/*
- src/components/marketing/section-reveal.tsx
- src/app/globals.css

2. Organize components
Refactor toward a clearer structure:
- src/components/site
- src/components/marketing/sections
- src/components/marketing/mockups
- src/components/marketing/backgrounds
- src/components/marketing/shared
- src/components/motion
- src/content

Only create folders/files that actually improve clarity. Do not create empty architecture for its own sake.

3. Page composition
Make src/app/page.tsx and other page files read like clean assemblies of sections.
Move detailed section implementation into section components.

4. Motion system
Move or refactor SectionReveal into src/components/motion.
Keep reduced-motion support.
Do not add complex new animation behavior in this PR.
If you think the `motion` package should be installed, explain why before using it. Prefer not adding a new dependency unless necessary.

5. Background system
Refactor background components so responsibilities are clearer.
Avoid one giant catch-all component for every visual treatment.
Separate concerns where useful:
- hexagon field
- highlighted cells
- section backdrop
- large garnet ornaments

Do not add new visual experiments. Preserve or simplify the existing visuals.

6. Mockups
Move dashboard/process/legal mockups into a mockups folder if useful.
Keep mockups visually unchanged unless a small cleanup is needed.

7. Content extraction
Move repeated static arrays and section data into src/content where it improves readability.
Do not over-extract.

8. README
Replace the default create-next-app README with a Gralith-specific README including:
- project description
- stack
- setup
- scripts
- env vars
- security notes
- contact form notes
- deploy notes
- architecture conventions

9. CI
If no GitHub Actions CI exists, add .github/workflows/ci.yml to run:
- npm ci
- npm run lint
- npm run build
on pull requests to main.

10. Validate routes
Check:
- /
- /despachos-juridicos
- /automatizacion-de-procesos
- /contacto

11. Final report
At the end, report:
- files moved
- files modified
- components created
- folders created
- whether visuals changed
- whether /api/contact was untouched
- whether .env.local was untouched
- lint result
- build result
```

---

## 21. Nota final

Esta fase no busca que el sitio se vea mucho más espectacular todavía. Busca que el código quede listo para que la siguiente fase visual sea consistente, mantenible y no una suma de adornos.
