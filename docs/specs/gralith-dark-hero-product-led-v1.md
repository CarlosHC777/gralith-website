# Gralith Dark Hero Product-Led V1

## 1. Resumen

Esta fase rediseña **solo el hero principal de la home** para llevar Gralith hacia una dirección más oscura, premium y product-led.

La fase anterior, **Gralith Dark Visual Foundation V1**, preparó tokens y primitivas para secciones oscuras. Esta fase debe usar esa base para construir un primer pantallazo más fuerte, más cercano a una landing SaaS de producto, sin rediseñar todavía el resto del sitio.

---

## 2. Contexto del proyecto

Gralith es una empresa B2B de automatización operativa para equipos profesionales. La primera vertical comercial es **Gralith Legal**, enfocada en despachos jurídicos.

El sitio actual ya tiene:

- identidad Gralith con logo/gema
- acento granate
- copy enfocado en automatización de procesos
- home con hero, mockup, secciones de módulos, diagnóstico/proceso y CTA
- componentes de motion y backgrounds organizados
- dark visual foundation reciente

El usuario quiere una estética más cercana a páginas SaaS/product-led de alto nivel:

- fondo oscuro
- titulares grandes
- interfaz del producto visible
- animaciones sutiles en texto e imágenes
- mayor uso del granate
- layouts más sofisticados

Esta fase se enfoca únicamente en el primer impacto: el hero.

---

## 3. Objetivo principal

Crear un hero oscuro, premium y product-led que comunique rápidamente:

```txt
Gralith ordena la operación diaria de un despacho mediante un sistema centralizado.
```

Debe sentirse más:

- serio
- tecnológico
- de producto
- premium
- orientado a despachos jurídicos

---

## 4. No objetivos

Esta fase NO debe:

- rediseñar toda la home
- rediseñar `/despachos-juridicos`
- rediseñar `/automatizacion-de-procesos`
- tocar la sección de laptop showcase todavía
- tocar diagnostic radar
- cambiar formulario de contacto
- tocar Resend
- tocar SEO global salvo import paths necesarios
- meter animaciones complejas
- agregar librerías pesadas
- convertir la página completa en Client Component
- copiar la landing de Linear literalmente

---

## 5. Dirección visual

El hero debe tener un estilo:

```txt
negro carbón
granate como acento principal
texto marfil/blanco cálido
superficies oscuras elevadas
mockup/sistema visual al frente
fondos sutiles
motion elegante
```

Debe evitar:

```txt
neón excesivo
cyberpunk
gamer
fondo demasiado brillante
muchos hexágonos
parallax agresivo
texto difícil de leer
```

---

## 6. Copy recomendado

### Eyebrow / Label

```txt
GRALITH LEGAL
```

### H1 recomendado

```txt
El sistema operativo para ordenar la operación diaria del despacho.
```

Alternativa más corta:

```txt
Automatización operativa para despachos jurídicos.
```

Preferencia: usar la primera si cabe bien en desktop y mobile.

### Supporting copy

```txt
Centraliza expedientes, documentos, agenda y actividad en una vista clara para que el equipo trabaje con menos fricción y más trazabilidad.
```

### CTA principal

```txt
Solicitar diagnóstico
```

### CTA secundario

```txt
Ver Gralith Legal
```

---

## 7. Estructura del hero

### Desktop

Usar layout split:

```txt
Izquierda:
- logo/eyebrow
- H1 grande
- supporting copy
- CTAs
- quizá 2 o 3 trust chips pequeños

Derecha:
- visual del sistema / product panel
- entradas y salidas operativas
- mockup oscuro o card elevada
```

### Mobile

Usar layout stacked:

```txt
1. label/logo
2. H1
3. supporting copy
4. CTAs
5. visual del sistema reducido
```

El H1 debe ser dominante pero no romper el layout.

---

## 8. Visual del sistema en hero

La visual derecha debe sugerir el producto sin ser la sección completa de laptop.

No usar todavía una laptop grande como elemento principal; eso corresponde a la siguiente fase.

Visual sugerido:

```txt
Input cards -> Sistema Gralith -> Output cards
```

### Inputs

```txt
WhatsApp
Correo
Archivos
Agenda
```

### Centro

```txt
Sistema Gralith
```

### Outputs

```txt
Expedientes
Tareas
Auditoría
Búsqueda
```

### Estilo

- cards oscuras elevadas
- borde fino
- acento granate
- líneas/conectores muy sutiles
- centro granate o superficie elevada con glow controlado
- etiquetas legibles

---

## 9. Background del hero

Usar la base dark creada en la fase anterior.

Permitido:

- fondo carbón
- gradiente radial granate muy sutil
- líneas geométricas muy tenues
- glow detrás del visual, no detrás del H1
- noise/texture muy suave si ya existe en el sistema

No permitido:

- patrón hexagonal fuerte detrás del texto
- muchas formas flotantes
- glows grandes que manchen el H1
- fondos que resten contraste

Regla:

```txt
El H1 manda. El fondo acompaña.
```

---

## 10. Motion

Usar las primitives creadas en fases anteriores.

### Animaciones sugeridas

1. Eyebrow aparece primero.
2. H1 entra por líneas con `SplitHeadline`.
3. Supporting copy aparece con fade-up.
4. CTAs aparecen con stagger.
5. Visual del sistema aparece con fade/scale.
6. Cards del visual aparecen escalonadas.
7. Conectores pueden aparecer con opacity si se ve limpio.

### Duración

Motion debe ser rápido y sutil.

```txt
300ms–700ms por elemento
stagger bajo
sin delays largos
```

### Reduced motion

Si `prefers-reduced-motion` está activo:

- mostrar contenido inmediatamente
- evitar parallax
- evitar transformaciones largas

---

## 11. Componentes sugeridos

Usar nombres existentes si ya hay equivalentes.

Posibles archivos:

```txt
src/components/marketing/sections/home-hero-section.tsx
src/components/marketing/mockups/hero-system-visual.tsx
```

También puede reutilizarse/refactorizarse:

```txt
src/components/marketing/hero.tsx
src/components/marketing/mockups/hero-process-flow.tsx
```

No crear componentes duplicados si ya hay uno limpio que pueda adaptarse.

---

## 12. Integración con arquitectura actual

La página `src/app/page.tsx` debe seguir leyéndose como ensamblado de secciones.

No mover lógica compleja al route file.

El hero debe quedar encapsulado en un componente de sección.

---

## 13. Reglas de responsive

### Desktop

- H1 grande, con buen line-height.
- Visual derecha visible y balanceada.
- CTAs claros.
- No saturar altura del hero.

### Tablet

- Puede reducir tamaño del visual.
- Mantener split si cabe.
- Si no cabe, pasar a stacked.

### Mobile

- H1 máximo 3–5 líneas.
- CTAs apilados o full width si hace falta.
- Visual después del copy.
- Evitar cards demasiado pequeñas.
- Sin overflow horizontal.

---

## 14. Accesibilidad

- Contraste alto para H1 y body copy.
- Botones con foco visible.
- Visual del sistema no debe ser la única forma de entender el mensaje.
- Si el visual contiene información importante, que exista texto equivalente en copy o labels legibles.

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
- páginas internas fuera de imports necesarios

---

## 16. Tareas detalladas

### Tarea 1 — Revisar foundation

Revisar los tokens/componentes creados en Dark Visual Foundation V1:

```txt
DarkSectionBackdrop
GarnetGlow
DarkCard
variables CSS / tokens dark
```

Usarlos en lugar de crear colores hardcodeados nuevos.

---

### Tarea 2 — Rediseñar componente del hero

Modificar el componente de hero actual o crear uno nuevo si la arquitectura lo justifica.

Debe incluir:

- label/eyebrow
- H1
- supporting copy
- CTAs
- visual del sistema

---

### Tarea 3 — Crear/refinar visual del sistema

Crear/refinar un visual compacto:

```txt
entradas -> Gralith -> salidas
```

Debe verse como interfaz/producto, no como infografía escolar.

---

### Tarea 4 — Aplicar motion sutil

Usar primitives existentes:

- `SplitHeadline`
- `SectionReveal`
- `StaggerContainer`
- motion presets

No meter una solución nueva si ya existe primitive.

---

### Tarea 5 — Revisar mobile

Verificar:

```txt
390px
430px
768px
desktop
```

Asegurar:

- no overflow
- H1 legible
- visual no se rompe
- CTAs visibles

---

## 17. Criterios de aceptación

La fase se acepta si:

1. El hero de `/` usa dirección oscura/product-led.
2. El H1 es claro, fuerte y legible.
3. El visual derecho comunica sistema/operación.
4. Se usan tokens/primitives de Dark Foundation.
5. El motion es sutil.
6. Reduced motion está respetado.
7. Mobile funciona sin overflow.
8. No se rediseñó el resto del sitio.
9. No se tocaron archivos protegidos.
10. `npm run lint` pasa.
11. `npm run build` pasa.

---

## 18. Validación

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
/contacto
```

Breakpoints:

```txt
390px
430px
768px
desktop
```

---

## 19. Rama sugerida

```bash
git checkout main
git pull origin main
git checkout -b gralith-dark-hero-v1
```

Commit sugerido:

```bash
git add .
git commit -m "feat: add dark product-led hero"
git push -u origin gralith-dark-hero-v1
```

---

## 20. Prompt para Codex

```txt
Read AGENTS.md.

Implement Gralith Dark Hero Product-Led V1 using docs/specs/gralith-dark-hero-product-led-v1.md as the source of truth.

Goal:
Redesign only the home hero into a dark, premium, product-led section using the dark visual foundation created in the previous phase.

Important:
- Follow the spec closely.
- The spec contains detailed copy, layout, visual direction, motion rules and acceptance criteria.
- Do not redesign the full homepage.
- Do not redesign /despachos-juridicos.
- Do not redesign /automatizacion-de-procesos.
- Do not touch .env.local.
- Do not touch /api/contact.
- Do not modify Resend logic.
- Do not touch DNS, analytics or deployment config.
- Do not add heavy animation libraries.
- Do not copy Linear literally.
- Keep npm run lint passing.
- Keep npm run build passing.

Expected work:
1. Use dark visual foundation tokens/components instead of hardcoding a new dark palette.
2. Redesign the home hero with:
   - eyebrow/label
   - strong H1
   - supporting copy
   - primary and secondary CTAs
   - right-side system visual
3. Use the recommended H1 unless it creates layout issues:
   “El sistema operativo para ordenar la operación diaria del despacho.”
4. Create or refine a compact input → Gralith → output system visual.
5. Use subtle motion primitives:
   - SplitHeadline
   - SectionReveal
   - StaggerContainer
6. Keep the rest of the homepage mostly unchanged.
7. Check desktop, tablet and mobile.

Final report:
- files created
- files modified
- hero copy used
- components reused from dark foundation
- motion used
- responsive behavior
- confirmation that protected files were untouched
- lint/build result
```
