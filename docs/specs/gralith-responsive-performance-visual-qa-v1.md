# Gralith Responsive, Performance & Visual QA V1

## 1. Resumen

Esta fase es una revisión final de calidad después de migrar el sitio a la nueva dirección visual oscura.

Ya se trabajaron las rutas principales:

```txt
/
/despachos-juridicos
/automatizacion-de-procesos
```

Ahora toca verificar que todo el sitio público sea consistente, responsive, accesible, performante y listo para merge/deploy.

Esta fase NO debe introducir una nueva dirección visual. Es una fase de QA, ajustes finos y limpieza.

---

## 2. Objetivo principal

Pulir y validar la experiencia pública de Gralith después del rediseño dark/product-led.

Se debe asegurar:

- consistencia visual
- responsive correcto
- sin horizontal overflow
- navegación limpia
- formularios intactos
- SEO preservado
- accesibilidad básica
- performance razonable
- build/lint pasando

---

## 3. Rutas objetivo

Revisar y validar:

```txt
/
/despachos-juridicos
/automatizacion-de-procesos
/contacto
/robots.txt
/sitemap.xml
/opengraph-image
```

---

## 4. No objetivos

Esta fase NO debe:

- rediseñar secciones grandes
- cambiar el concepto visual
- agregar nuevas secciones
- cambiar copy principal salvo correcciones pequeñas
- agregar animaciones nuevas
- instalar dependencias
- cambiar DNS/deploy/analytics
- tocar Resend innecesariamente
- cambiar metadata salvo si algo se rompió por imports

---

## 5. Checklist visual global

### Header/navbar

Verificar:

- navbar dark/glass permanente
- logo original visible
- nav text legible
- CTA visible
- no se ve gris/muddy
- no tapa contenido
- mobile correcto

### Fondo global

Verificar:

- no quedan secciones principales blancas/off-white en rutas dark
- fondos oscuros consistentes
- transiciones entre secciones suaves
- granate usado como acento, no en exceso

### Tipografía

Verificar:

- headings legibles
- line-height correcto
- párrafos con buen contraste
- labels/eyebrows consistentes
- no textos cortados en mobile

### Cards y surfaces

Verificar:

- cards con dark surface consistente
- bordes sutiles
- icon pills coherentes
- hover/focus no rompe contraste
- contenido no desborda

---

## 6. Checklist por sección de home

Revisar en `/`:

1. Dark hero product-led.
2. Laptop/System Showcase.
3. Product Capability Chapters.
4. Dynamic Operations Wall.
5. Diagnostic Visuals / radar chart.
6. Legal/vertical section si existe.
7. Process/implementation section.
8. CTA final.
9. Footer.

Para cada sección:

- revisar desktop
- revisar tablet
- revisar mobile
- revisar overflow
- revisar contraste
- revisar spacing

---

## 7. Checklist legal

Revisar `/despachos-juridicos`:

- hero legal dark
- problema operativo
- antes/después
- módulos legales
- dashboard legal
- diagnóstico radar
- casos de uso
- proceso
- audiencia/principios
- CTA final
- footer

Cuidar especialmente:

- dashboard con tabla en mobile
- radar labels
- cards largas
- CTAs visibles
- copy legal claro

---

## 8. Checklist automation

Revisar `/automatizacion-de-procesos`:

- hero general
- problema operativo general
- visual entrada/sistema/salida si existe
- capacidades/casos de uso
- proceso
- principios
- CTA final
- footer

Cuidar que:

- no se vuelva demasiado legal
- mantenga mensaje amplio para equipos profesionales
- no haya secciones claras residuales

---

## 9. Checklist contacto

Revisar `/contacto`:

- formulario visible
- dark style consistente si aplica
- campos legibles
- errores legibles
- loading state legible
- success/error state legible
- CTA claro

No modificar lógica del formulario salvo corrección visual menor.

---

## 10. Responsive QA

Revisar estas anchuras:

```txt
360px
390px
430px
768px
1024px
1280px+
```

Problemas a buscar:

- horizontal overflow
- cards aplastadas
- mockups cortados
- tablas desbordadas
- labels del radar encimados
- navbar tapando contenido
- CTAs fuera de pantalla
- spacing excesivo o insuficiente

---

## 11. Overflow QA

Agregar o corregir donde haga falta:

```txt
min-w-0
overflow-hidden
overflow-x-auto controlado
max-w-full
break-words
truncate cuando sea necesario
```

Pero no ocultar contenido importante de forma agresiva.

El body/html no deben generar scroll horizontal.

---

## 12. Motion QA

Verificar:

- motion sutil
- no animaciones excesivas
- no parpadeos
- no layout shift fuerte
- reduced motion respetado

Si existe `prefers-reduced-motion`, asegurar que:

- secciones siguen visibles
- animaciones no bloquean contenido
- transforms fuertes se reducen o eliminan

---

## 13. Accesibilidad básica

Revisar:

- contraste texto/fondo
- foco visible en botones y links
- `aria-label` donde sea necesario
- radar chart con `role`, `title`, `desc` o texto alternativo
- logo con `alt`
- botones con texto claro
- links no dependen solo del color

No se requiere auditoría WCAG completa, pero sí evitar errores obvios.

---

## 14. Performance QA

Verificar:

- no imágenes enormes innecesarias
- assets de logo correctos
- no dependencias nuevas innecesarias
- componentes client solo donde haga falta
- no convertir páginas completas en Client Components
- no loops o listeners innecesarios
- SVGs razonables

Si hay imágenes grandes en `public/brand` o mockups, no duplicarlas ni cargarlas innecesariamente.

---

## 15. SEO QA

Revisar que no se haya roto:

```txt
metadata por página
canonical
Open Graph
Twitter metadata
robots.txt
sitemap.xml
opengraph-image
JSON-LD si existe
```

No cambiar SEO salvo correcciones necesarias.

---

## 16. Contact/API smoke test

No modificar `/api/contact`, pero hacer smoke test si el entorno lo permite.

Mínimo:

- abrir `/contacto`
- revisar que formulario cargue
- opcional: POST inválido a `/api/contact` debe responder con validación controlada

No enviar leads reales innecesariamente.

---

## 17. Archivos probables

Esta fase puede tocar muchos archivos de UI, pero debe evitar cambios grandes.

Probables:

```txt
src/app/page.tsx
src/app/despachos-juridicos/page.tsx
src/app/automatizacion-de-procesos/page.tsx
src/app/contacto/page.tsx
src/components/site/*
src/components/marketing/**/*
src/app/globals.css
```

No tocar backend/contact logic.

---

## 18. No tocar

No modificar:

- `.env.local`
- `/api/contact` salvo que exista un bug visual imposible de resolver sin tocarlo
- Resend
- `RESEND_API_KEY`
- DNS
- Vercel Analytics
- configuración de deployment
- package.json salvo que sea estrictamente necesario, pero esta fase no debería instalar nada

---

## 19. Criterios de aceptación

La fase se acepta si:

1. `npm run lint` pasa.
2. `npm run build` pasa.
3. `/` se ve consistente en dark.
4. `/despachos-juridicos` se ve consistente en dark.
5. `/automatizacion-de-procesos` se ve consistente en dark.
6. `/contacto` funciona y es legible.
7. No hay horizontal overflow en mobile.
8. Navbar/header se ve bien en todas las rutas.
9. Logo original se mantiene correcto.
10. CTAs son visibles.
11. Radar charts no se rompen en mobile.
12. Mockups/laptops/dashboard no generan overflow de página.
13. Motion no es excesivo.
14. Reduced motion queda respetado.
15. SEO básico no se rompió.
16. Archivos protegidos intactos.

---

## 20. Validación local

Comandos:

```bash
npm run lint
npm run build
npm run dev
```

Abrir:

```txt
http://localhost:3000/
http://localhost:3000/despachos-juridicos
http://localhost:3000/automatizacion-de-procesos
http://localhost:3000/contacto
http://localhost:3000/robots.txt
http://localhost:3000/sitemap.xml
```

Si el dev server usa otro puerto, ajustar.

---

## 21. Rama sugerida

```bash
git checkout main
git pull origin main
git checkout -b gralith-responsive-performance-qa-v1
```

Commit sugerido:

```bash
git add .
git commit -m "polish: finalize dark responsive visual QA"
git push -u origin gralith-responsive-performance-qa-v1
```

---

## 22. Prompt para Codex

```txt
Read AGENTS.md.

Implement Gralith Responsive, Performance & Visual QA V1 using docs/specs/gralith-responsive-performance-visual-qa-v1.md as the source of truth.

Goal:
Perform final QA and polish after the dark/product-led redesign across the main public Gralith routes.

Context:
The home page, /despachos-juridicos and /automatizacion-de-procesos have been adapted to the dark visual system. This phase should not introduce a new visual direction. It should fix consistency, responsive, overflow, accessibility and performance issues.

Important:
- Follow the spec closely.
- Do not redesign major sections.
- Do not add new sections.
- Do not add new animations.
- Do not install dependencies.
- Do not touch .env.local.
- Do not modify Resend logic.
- Do not touch DNS, analytics or deployment config.
- Avoid touching /api/contact unless absolutely necessary; it should remain intact.
- Keep npm run lint passing.
- Keep npm run build passing.

Routes to check:
- /
- /despachos-juridicos
- /automatizacion-de-procesos
- /contacto
- /robots.txt
- /sitemap.xml
- /opengraph-image

Tasks:
1. Review visual consistency across all main routes.
2. Fix any remaining light/off-white sections that should be dark.
3. Check navbar/header consistency and original logo usage.
4. Fix horizontal overflow across mobile widths.
5. Check laptop/mockups/dashboard overflow.
6. Check radar chart labels and responsiveness.
7. Check CTAs, cards, text contrast and focus states.
8. Ensure motion remains subtle and reduced motion is respected.
9. Preserve SEO metadata and public generated routes.
10. Verify contact page remains legible and functional.
11. Run npm run lint and npm run build.

Breakpoints:
- 360px
- 390px
- 430px
- 768px
- 1024px
- desktop

Final report:
- files modified
- routes checked
- responsive fixes made
- overflow fixes made
- accessibility fixes made
- performance notes
- SEO notes
- confirmation that protected files were untouched
- lint/build result
```
