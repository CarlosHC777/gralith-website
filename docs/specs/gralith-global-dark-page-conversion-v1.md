# Gralith Global Dark Page Conversion V1

## 1. Resumen

Esta fase convierte la **home page** de Gralith hacia una experiencia visual completamente oscura, coherente con la nueva dirección dark/product-led.

Ya se implementaron fases previas:

- Dark Visual Foundation V1: tokens y primitivas oscuras.
- Dark Hero Product-Led V1: hero principal oscuro.
- Dark Header + Original Logo V1: navbar dark/glass permanente y logo original.

Ahora el objetivo es que el resto de secciones de la home deje de alternar entre oscuro y claro. La página debe empezar a sentirse como un producto SaaS premium con base oscura, acentos granate y superficies elevadas.

---

## 2. Alcance

### Página objetivo principal

```txt
/
```

Esta fase se enfoca en convertir la home completa a dark.

### Fuera de alcance por ahora

No convertir todavía:

```txt
/despachos-juridicos
/automatizacion-de-procesos
/contacto
```

Esas páginas se adaptarán en fases posteriores. En esta fase solo deben revisarse para asegurar que no se rompan por cambios compartidos.

---

## 3. Contexto visual

La intención final es que Gralith tenga una estética:

```txt
oscura
premium
product-led
sobria
con acento granate
con mockups protagonistas
con secciones tipo producto
```

No se busca simplemente poner `bg-black` en todas partes. Se busca crear profundidad con:

- fondos carbón
- superficies elevadas
- bordes suaves
- tipografía clara
- granate como acento
- cards oscuras
- mockups integrados
- divisores sutiles
- secciones con ritmo visual

---

## 4. Problema actual

La home ahora tiene un hero oscuro, pero varias secciones siguen en fondo claro/off-white. Esto produce:

- cortes visuales bruscos
- navbar dark glass sobre zonas claras
- falta de consistencia
- sensación de rediseño incompleto
- menor impacto premium

Esta fase debe resolver eso en la home.

---

## 5. Objetivo principal

Convertir todas las secciones principales de la home a una dirección oscura consistente, preservando el contenido y la estructura general.

La página debe sentirse como una única experiencia dark/product-led.

---

## 6. No objetivos

Esta fase NO debe:

- rediseñar desde cero todas las secciones
- cambiar el copy principal de forma amplia
- cambiar la arquitectura del sitio
- modificar rutas internas
- tocar `/api/contact`
- tocar Resend
- tocar `.env.local`
- tocar DNS, analytics o deploy config
- rediseñar `/despachos-juridicos`
- rediseñar `/automatizacion-de-procesos`
- rediseñar `/contacto`
- instalar librerías nuevas
- meter animaciones nuevas complejas

---

## 7. Dirección de color

Usar los tokens/primitivas creados en Dark Visual Foundation V1.

### Fondo base

```txt
carbón / negro profundo
```

Ejemplos:

```txt
#070708
#08090B
#0B0C0F
```

### Superficies

```txt
surface dark
surface elevated
panel dark
```

Ejemplos:

```txt
#101116
#13151A
#171920
```

### Texto

```txt
headings: marfil/blanco cálido
body: gris cálido claro
muted: gris cálido medio
```

### Acento

```txt
granate principal
```

Usar para:

- CTAs
- badges
- icon pills
- líneas activas
- highlights
- estados importantes

No usar granate como fondo de todas las secciones.

---

## 8. Ritmo visual recomendado

No todas las secciones deben tener el mismo negro. Para evitar una página plana, usar variación sutil:

```txt
Hero: dark base + glow granate
Producto/mockup: dark base + surface elevated
Módulos: dark base + cards elevated
Dynamic wall: garnet/deep section
Legal vertical: dark base + product panel
Proceso: dark surface section
CTA final: dark base + garnet CTA
Footer: dark base, low contrast
```

---

## 9. Secciones de la home a revisar

La arquitectura puede tener nombres distintos, pero conceptualmente revisar:

1. Hero oscuro actual.
2. Sección de producto / operación visible.
3. Mockup/laptop/dashboard section si ya existe.
4. Módulos o sistema operativo.
5. Dynamic Operations Wall / sección granate.
6. Primera vertical / Gralith Legal.
7. Proceso / cómo trabajamos.
8. CTA final.
9. Footer.

---

## 10. Reglas por tipo de sección

### 10.1 Secciones de texto

- fondo carbón
- heading marfil
- párrafo gris cálido
- eyebrow en granate muted o gris claro con tracking
- divisores sutiles

### 10.2 Cards

Usar `DarkCard` o equivalente.

Características:

- surface elevated
- borde blanco 6–10%
- icon pill granate suave
- sombra sutil
- hover muy leve si aplica

No usar cards blancas dentro de secciones oscuras.

### 10.3 Mockups

- mockups deben estar dentro de superficies oscuras limpias
- borde sutil
- evitar marcos negros demasiado pesados si se pierden contra el fondo
- usar sombra/glow con moderación

### 10.4 Sección granate

La sección granate puede mantenerse, pero debe integrarse mejor con el resto dark.

- usar granate profundo
- no hacer que parezca un bloque aislado
- bordes/transiciones suaves
- texto legible

### 10.5 CTA final

Debe sentirse como cierre premium.

Opciones:

- dark base con CTA granate
- panel elevado con borde granate sutil
- heading fuerte

### 10.6 Footer

Convertir footer a dark.

- logo original o mark según contraste
- texto muted
- links claros
- borde superior sutil

---

## 11. Backgrounds y ornamentos

Usar pocos ornamentos. Esta fase no debe llenar todo de efectos.

Permitido:

- glows granate muy suaves
- líneas/facetas tenues
- fondos geométricos locales
- gradient radial muy sutil

Evitar:

- hexágonos fuertes en todas las secciones
- glows detrás de todos los headings
- muchas formas flotantes
- fondos que compitan con texto

Regla:

```txt
El contenido y los mockups mandan. El fondo acompaña.
```

---

## 12. Motion

No agregar motion complejo en esta fase.

Se puede mantener o reutilizar:

- SectionReveal
- SplitHeadline si ya está en hero
- StaggerContainer donde ya exista

No crear nuevas animaciones grandes.

---

## 13. Implementación técnica

### Tarea 1 — Auditar secciones claras de la home

Identificar todos los wrappers con fondos claros como:

```txt
bg-background
bg-[#...claro]
bg-white
bg-stone
bg-neutral claro
```

Mapearlos a variantes dark.

---

### Tarea 2 — Convertir wrappers de sección

Usar `DarkSectionBackdrop` o clases/tokens de Dark Foundation.

No aplicar solo `bg-black`; usar variación de superficies.

---

### Tarea 3 — Convertir cards y panels

Reemplazar cards claras con:

- `DarkCard`
- surface elevated
- border dark
- text dark palette

Revisar especialmente:

- cards de métricas
- cards de módulos
- cards de proceso
- cards de CTA

---

### Tarea 4 — Ajustar textos

Cambiar colores de texto para dark:

```txt
headings -> text primary dark
body -> text secondary dark
muted -> muted dark
```

No dejar texto oscuro sobre fondo oscuro.

---

### Tarea 5 — Ajustar íconos y badges

- icon pills en granate suave
- íconos en granate o marfil
- badges con borde/surface dark

---

### Tarea 6 — Ajustar footer

Convertir footer a dark.

Revisar que el logo se vea correcto.

---

### Tarea 7 — Revisar transiciones entre secciones

Evitar cortes duros innecesarios.

Usar:

- borders sutiles
- fondos ligeramente distintos
- spacing consistente

---

### Tarea 8 — Validar mobile

Revisar que cards y mockups no generen overflow.

---

## 14. Archivos probables

Dependiendo de la arquitectura actual, revisar/modificar:

```txt
src/app/page.tsx
src/components/marketing/sections/home-sections.tsx
src/components/marketing/sections/*
src/components/marketing/shared/*
src/components/marketing/mockups/*
src/components/marketing/backgrounds/*
src/components/site/footer.tsx
src/app/globals.css
```

Modificar solo lo necesario.

---

## 15. No tocar

No modificar:

- `.env.local`
- `/api/contact`
- Resend
- `RESEND_API_KEY`
- DNS
- Vercel Analytics
- configuración de deploy
- lógica del formulario

---

## 16. Criterios de aceptación

La fase se acepta si:

1. La home `/` ya no tiene secciones principales en blanco/off-white.
2. El hero oscuro se mantiene.
3. El header dark/logo se mantiene correcto.
4. Las secciones usan superficies oscuras consistentes.
5. Las cards son legibles en dark.
6. El granate se usa como acento, no como relleno excesivo.
7. El footer se ve integrado en dark.
8. No hay horizontal overflow.
9. Mobile funciona.
10. No se rediseñaron páginas internas.
11. No se tocó `/api/contact`.
12. No se tocó `.env.local`.
13. `npm run lint` pasa.
14. `npm run build` pasa.

---

## 17. Validación

Comandos:

```bash
npm run lint
npm run build
npm run dev
```

Rutas:

```txt
/
/despachos-juridicos
/automatizacion-de-procesos
/contacto
```

Revisión visual principal:

```txt
/
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

## 18. Rama sugerida

```bash
git checkout main
git pull origin main
git checkout -b gralith-global-dark-page-v1
```

Commit sugerido:

```bash
git add .
git commit -m "feat: convert home page to dark visual system"
git push -u origin gralith-global-dark-page-v1
```

---

## 19. Prompt para Codex

```txt
Read AGENTS.md.

Implement Gralith Global Dark Page Conversion V1 using docs/specs/gralith-global-dark-page-conversion-v1.md as the source of truth.

Goal:
Convert the home page to a consistent dark visual system now that the hero, dark foundation, and dark header/logo direction are established.

Context:
The site is moving toward a fully dark, premium, product-led visual direction. The home hero is already dark, but several lower sections are still light/off-white. This creates inconsistency with the permanent dark glass navbar. This phase should convert the home page sections to dark while preserving structure and copy.

Important:
- Follow the spec closely.
- Focus on the home page `/`.
- Do not redesign internal pages yet.
- Do not redesign the hero from scratch.
- Do not introduce a new visual concept.
- Use tokens/primitives from Dark Visual Foundation.
- Keep the existing dark header and original logo behavior.
- Do not touch .env.local.
- Do not touch /api/contact.
- Do not modify Resend logic.
- Do not touch DNS, analytics or deployment config.
- Do not install dependencies.
- Keep npm run lint passing.
- Keep npm run build passing.

Expected work:
1. Audit all home page sections that still use light backgrounds.
2. Convert home section wrappers to dark variants using existing dark tokens/components.
3. Convert cards/panels to dark surfaces with subtle borders.
4. Update text colors for readability on dark backgrounds.
5. Update icon pills, badges and dividers for dark mode.
6. Integrate the existing granate/dynamic section with the new dark flow.
7. Convert footer to dark if it is still light.
8. Avoid adding new animations or new decorative systems.
9. Do not convert /despachos-juridicos, /automatizacion-de-procesos or /contacto yet, except for shared components only if necessary.
10. Check desktop, tablet and mobile.

Final report:
- files modified
- sections converted to dark
- components reused from dark foundation
- whether any sections remain light and why
- responsive behavior
- confirmation that protected files were untouched
- lint/build result
```
