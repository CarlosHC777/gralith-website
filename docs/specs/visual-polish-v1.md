# Visual Polish V1 — Gralith Website

## Goal

Improve the Gralith landing page so it feels less generic and more like a serious B2B automation brand.

The site already works in production:

- https://gralith.com.mx

The contact form is already connected with Resend. Do not break it.

## Brand positioning

Gralith is a process automation company for professional teams.

First vertical:

- Gralith Legal: operational automation for legal offices.

The design should communicate:

- order
- precision
- traceability
- automation
- operational visibility
- trust

## Visual direction

Use a sober, premium B2B style:

- light/off-white background
- dark text
- dark garnet accent
- thin borders
- subtle shadows
- clean spacing
- editorial layout
- restrained animations

Avoid:

- generic AI gradients
- purple/blue SaaS clichés
- excessive motion
- 3D globes unless strongly justified
- random icons
- playful/gamer visual language
- full template copying

## Scope

### 1. Hero process flow

Improve the home hero with a visual process flow.

It should communicate:

Input:
- WhatsApp
- correo
- archivos
- agenda

System:
- Gralith

Output:
- expedientes
- tareas
- auditoría
- búsqueda

The visual can use lines, nodes, cards, or subtle animated beams.

### 2. Dashboard mockup

Add a dashboard mockup built with HTML/CSS, not an image.

It should include:

- mini sidebar
- search/global search bar
- case table
- status badges
- activity timeline
- small operational metrics

The mockup should feel connected to the real Gralith Legal product.

### 3. Bento grid for features

Convert or improve the features section into a more editorial bento grid.

Feature topics:

- centralización
- expedientes
- documentos
- agenda
- actividad
- búsqueda global
- auditoría
- roles y permisos

### 4. How we work

Improve the “Cómo trabajamos” section visually:

- Diagnóstico
- Diseño
- Automatización
- Seguimiento

Use a clear process/timeline layout.

### 5. Motion

Use motion sparingly.

Allowed:

- soft fade/slide on section reveal
- subtle hover states
- one special visual effect around the main mockup

Avoid:

- excessive animation
- distracting effects
- heavy dependencies

## Dependencies

Allowed if needed:

- `motion`

Avoid heavy dependencies such as:

- three
- react-three-fiber
- large animation libraries
- full template packages

## Requirements

- Keep existing routes working:
  - `/`
  - `/despachos-juridicos`
  - `/automatizacion-de-procesos`
  - `/contacto`
  - `/api/contact`
- Do not break the contact form.
- Keep responsive behavior.
- Keep `npm run lint` passing.
- Keep `npm run build` passing.
- Do not commit secrets.
- Do not modify `.env.local`.

## Deliverables

Create or modify components as needed.

At the end, report:

- files modified
- components created
- dependencies added
- how to test locally
- whether `npm run lint` passed
- whether `npm run build` passed

## Reference repositories

Use these repositories/libraries as reference sources for patterns and component ideas:

- shadcn-ui/ui
- magicuidesign/magicui
- shadcn/originui
- launch-ui/launch-ui

Use them as inspiration for:
- component structure
- bento grids
- dashboard mockups
- animated process flows
- app-style cards
- subtle hover states
- clean SaaS/website sections

Do not:
- copy a full template
- import large template packages
- add heavy dependencies
- change the brand direction to match any single reference
- overuse animations

Priority:

1. shadcn/ui for base components and consistency.
2. Magic UI for one or two subtle visual effects.
3. Origin UI for app UI composition ideas.
4. Launch UI for landing section structure.

Allowed Magic UI-style ideas:
- Animated Beam for the process flow
- Bento Grid for features
- Animated List for activity timeline
- Border Beam or Shine Border for the main dashboard mockup

Use only what supports the Gralith concept:
process automation, traceability, order, operational visibility, and legal operations.