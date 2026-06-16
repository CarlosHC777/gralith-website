# Gralith Legal Dark Adaptation V1

## 1. Resumen

Esta fase adapta la landing `/despachos-juridicos` a la nueva dirección visual oscura de Gralith.

La home ya evolucionó hacia una experiencia dark/product-led con:

- Dark hero.
- Dark header + logo original.
- Global dark page conversion.
- Laptop/System Showcase.
- Product Capability Chapters.
- Dynamic Operations Wall.
- Diagnostic Visuals Dark.

Ahora la landing legal debe sentirse parte del mismo sistema visual, manteniendo su objetivo principal: convertir despachos jurídicos mediante claridad, confianza y una propuesta operativa concreta.

---

## 2. Objetivo principal

Convertir `/despachos-juridicos` a una landing oscura, premium y orientada a producto, sin perder claridad comercial.

La página debe comunicar:

```txt
Gralith Legal ordena expedientes, documentos, agenda, actividad y seguimiento en un sistema operativo para despachos jurídicos.
```

---

## 3. Página objetivo

```txt
/despachos-juridicos
```

Esta fase debe enfocarse en la landing legal.

No rediseñar en esta fase:

```txt
/
/automatizacion-de-procesos
/contacto
```

Se pueden tocar componentes compartidos solo si es necesario y sin romper la home.

---

## 4. Prioridad comercial

La landing legal no debe volverse demasiado experimental.

Debe ser:

- clara
- directa
- confiable
- orientada a diagnóstico
- orientada a conversión
- visualmente premium
- fácil de entender para un despacho

Debe evitar:

- exceso de motion
- texto demasiado técnico
- fondos que distraigan
- mockups ilegibles
- narrativa confusa

---

## 5. Estructura esperada de la página

La estructura puede variar según la implementación actual, pero debe conservar o adaptar estas secciones:

1. Legal hero.
2. Problema operativo.
3. Antes / Después.
4. Módulos o capacidades legales.
5. Dashboard/mockup legal.
6. Diagnóstico operativo visual.
7. Casos de uso.
8. Proceso de implementación.
9. Audiencia / para quién.
10. Principios de trabajo.
11. CTA final.

No es necesario crear todas desde cero si ya existen. Refactorizar y adaptar visualmente.

---

## 6. Dirección visual

Usar el sistema dark existente:

- fondo carbón
- superficies elevadas
- bordes sutiles
- texto marfil/blanco cálido
- copy secundario gris cálido
- granate como acento
- mockups oscuros
- glows controlados
- nada de secciones claras/off-white

La página legal debe ser más sobria que la home. La home puede tener momentos más dinámicos; la landing legal debe priorizar conversión y comprensión.

---

## 7. Hero legal

### Eyebrow

```txt
GRALITH LEGAL
```

### H1 recomendado

```txt
Automatización operativa para despachos jurídicos.
```

### Supporting copy

```txt
Centraliza expedientes, documentos, agenda, actividad y seguimiento en un sistema diseñado para dar visibilidad real a la operación diaria del despacho.
```

### CTAs

```txt
Solicitar diagnóstico
Ver módulos
```

### Visual sugerido

- Legal system panel
- laptop/browser mockup con dashboard legal
- o input → sistema → output legal

Si ya existe `LegalDashboardMockup`, adaptarlo a dark mode en lugar de crear uno duplicado.

---

## 8. Problema operativo

Debe explicar el dolor:

```txt
Cuando la operación depende de mensajes, carpetas y memoria, el despacho pierde visibilidad.
```

Visual:

- cards oscuras con problemas concretos
- iconos granate suaves
- spacing amplio

Problemas sugeridos:

```txt
Conversaciones con decisiones importantes.
Documentos en carpetas dispersas.
Fechas críticas en calendarios separados.
Poca visibilidad para responsables.
Dificultad para saber qué cambió y cuándo.
```

---

## 9. Antes / Después

Mantener la narrativa:

```txt
Antes: trabajo repartido entre herramientas y memoria.
Con Gralith Legal: sistema operativo para ver qué pasa en cada asunto.
```

Adaptar a dark:

- lado “Antes” en surface dark neutral
- lado “Con Gralith Legal” con acento granate
- evitar fondo blanco
- bullets claros y legibles

---

## 10. Módulos legales

Capacidades esperadas:

```txt
Clientes
Expedientes
Documentos
Agenda
Búsqueda global
Actividad y auditoría
Roles y permisos
Seguimiento operativo
```

Diseño:

- dark cards
- no grid plano si se puede mejorar
- agrupar por capacidad operativa
- usar icon pills granate suaves

---

## 11. Dashboard/mockup legal

Debe mostrar una vista legal clara:

- expedientes activos
- fechas críticas
- documentos vinculados
- actividad reciente
- búsqueda
- responsable
- estado

Requisitos:

- dark mode
- mockup legible
- no overflow
- mobile compacto
- reutilizar componentes existentes si es posible

---

## 12. Diagnóstico operativo visual

Reutilizar la lógica del radar chart dark si ya existe.

Colocar como una sección de método:

### Heading sugerido

```txt
Primero entendemos cómo opera el despacho.
```

### Copy

```txt
Evaluamos áreas clave de la operación para detectar dispersión, cuellos de botella y oportunidades de automatización gradual antes de diseñar la solución.
```

Ejes:

```txt
Expedientes
Documentos
Agenda
Trazabilidad
Visibilidad
Automatización
```

No duplicar código si ya existe `OperationalRadarChart` con variante dark.

---

## 13. Casos de uso

Casos sugeridos:

```txt
Seguimiento de expedientes
Control documental
Agenda y fechas críticas
Visibilidad para responsables
Búsqueda rápida
Actividad trazable
```

Diseño:

- cards oscuras
- copy breve
- iconografía sobria

---

## 14. Proceso de implementación

Mantener o adaptar:

```txt
Diagnóstico
Diseño
Automatización inicial
Seguimiento
```

Diseño:

- dark process cards
- numeración sutil
- borde o línea de progreso discreta
- nada demasiado animado

---

## 15. CTA final

Debe cerrar con fuerza comercial.

Heading sugerido:

```txt
Agenda un diagnóstico operativo gratuito.
```

Copy sugerido:

```txt
Revisamos cómo trabaja actualmente tu despacho y detectamos oportunidades concretas para centralizar información, reducir tareas manuales y mejorar visibilidad de expedientes.
```

CTAs:

```txt
Agendar diagnóstico
Escribir por correo
```

Diseño:

- dark elevated panel
- acento granate
- no fondo claro

---

## 16. Motion

Motion mínimo:

- SectionReveal
- StaggerContainer para cards
- nada de parallax fuerte
- nada de animaciones infinitas

Reduced motion cubierto por primitives existentes.

---

## 17. SEO y metadata

No modificar SEO salvo que un import lo requiera.

Mantener:

- title legal
- description legal
- canonical
- Open Graph

---

## 18. Tareas detalladas

### Tarea 1 — Auditar página legal actual

Revisar:

```txt
src/app/despachos-juridicos/page.tsx
src/components/marketing/legal-*
src/components/marketing/sections/*
src/components/marketing/mockups/*
```

Identificar todas las secciones claras y componentes existentes.

---

### Tarea 2 — Convertir estructura a dark

Actualizar wrappers, backgrounds, cards y typography a dark system.

No aplicar solo `bg-black`; usar surfaces, borders y text tokens.

---

### Tarea 3 — Adaptar hero legal

Convertir el hero a la nueva estética dark.

Mantener mensaje legal claro.

---

### Tarea 4 — Adaptar componentes legales existentes

Actualizar:

- before/after
- module grid
- legal dashboard mockup
- system map si existe
- use cases
- process cards
- CTA

No duplicar componentes.

---

### Tarea 5 — Integrar radar diagnóstico

Reutilizar `OperationalRadarChart` dark variant si existe.

Insertarlo donde tenga sentido dentro de la página legal.

---

### Tarea 6 — Revisar mobile

Validar que todo apile bien y no haya overflow.

---

## 19. No tocar

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

## 20. Criterios de aceptación

La fase se acepta si:

1. `/despachos-juridicos` usa la nueva estética dark.
2. No quedan secciones claras/off-white principales en la landing legal.
3. Hero legal es claro y premium.
4. Mockup legal se ve en dark y es legible.
5. Módulos/casos/proceso están adaptados a dark.
6. Radar diagnóstico está integrado o se justifica no integrarlo.
7. CTA final es claro y visible.
8. Mobile no tiene overflow.
9. SEO legal no se rompió.
10. No se tocaron archivos protegidos.
11. `npm run lint` pasa.
12. `npm run build` pasa.

---

## 21. Validación

Comandos:

```bash
npm run lint
npm run build
npm run dev
```

Rutas:

```txt
/despachos-juridicos
/
/contacto
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

## 22. Rama sugerida

```bash
git checkout main
git pull origin main
git checkout -b gralith-legal-dark-adaptation-v1
```

Commit sugerido:

```bash
git add .
git commit -m "feat: adapt legal landing to dark visual system"
git push -u origin gralith-legal-dark-adaptation-v1
```

---

## 23. Prompt para Codex

```txt
Read AGENTS.md.

Implement Gralith Legal Dark Adaptation V1 using docs/specs/gralith-legal-dark-adaptation-v1.md as the source of truth.

Goal:
Adapt /despachos-juridicos to the new dark premium Gralith visual system while preserving clarity and conversion.

Context:
The home page has already moved to a dark, product-led visual direction with hero, laptop showcase, product capability chapters, dynamic operations wall and diagnostic visuals. Now the legal landing should feel consistent with that system, but remain more conversion-focused and less experimental.

Important:
- Follow the spec closely.
- Focus on /despachos-juridicos.
- Do not redesign the home page.
- Do not redesign /automatizacion-de-procesos.
- Do not redesign /contacto.
- Preserve legal SEO metadata.
- Use existing dark tokens/primitives.
- Reuse existing legal components where possible.
- Reuse OperationalRadarChart dark variant if useful.
- Do not duplicate components unnecessarily.
- Do not install dependencies.
- Do not touch .env.local.
- Do not touch /api/contact.
- Do not modify Resend logic.
- Do not touch DNS, analytics or deployment config.
- Keep npm run lint passing.
- Keep npm run build passing.

Expected work:
1. Audit the current /despachos-juridicos page and legal marketing components.
2. Convert main legal sections from light/off-white to the dark visual system.
3. Adapt the legal hero to dark premium style.
4. Adapt before/after, modules, legal dashboard, use cases, process and CTA sections.
5. Integrate the dark diagnostic radar section if it fits the flow.
6. Keep copy clear and conversion-oriented.
7. Keep motion subtle.
8. Ensure mobile has no horizontal overflow.
9. Validate /despachos-juridicos, / and /contacto.

Suggested legal hero copy:
Eyebrow: GRALITH LEGAL
Heading: Automatización operativa para despachos jurídicos.
Paragraph: Centraliza expedientes, documentos, agenda, actividad y seguimiento en un sistema diseñado para dar visibilidad real a la operación diaria del despacho.
CTAs: Solicitar diagnóstico / Ver módulos

Final report:
- files created
- files modified
- sections adapted
- whether radar diagnostic was integrated
- legal metadata preserved
- motion behavior
- responsive behavior
- confirmation that protected files were untouched
- lint/build result
```
