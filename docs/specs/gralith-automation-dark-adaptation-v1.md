# Gralith Automation Dark Adaptation V1

## 1. Resumen

Esta fase adapta la página `/automatizacion-de-procesos` al nuevo sistema visual oscuro de Gralith.

Las fases previas ya dejaron:

- Home en dark/product-led.
- Landing legal `/despachos-juridicos` adaptada a dark.
- Header dark/glass y logo original.
- Componentes compartidos de dark surfaces, mockups, motion y diagnóstico visual.

Ahora la página de automatización debe sentirse parte del mismo sistema, pero con un enfoque más general: equipos profesionales que quieren centralizar información, reducir tareas manuales y mejorar visibilidad operativa.

---

## 2. Objetivo principal

Convertir `/automatizacion-de-procesos` a la nueva estética dark/premium de Gralith, manteniendo su mensaje general de automatización para equipos profesionales.

Debe comunicar:

```txt
Gralith diseña sistemas operativos internos para ordenar procesos, centralizar información y reducir tareas manuales.
```

---

## 3. Página objetivo

```txt
/automatizacion-de-procesos
```

Esta fase debe enfocarse en esta página.

No rediseñar en esta fase:

```txt
/
/despachos-juridicos
/contacto
```

Se pueden tocar componentes compartidos solo si es necesario y sin romper home/legal.

---

## 4. Prioridad comercial

Esta página debe funcionar como landing general para empresas/equipos que no necesariamente son despachos jurídicos.

Debe sentirse:

- más amplia que Gralith Legal
- clara para equipos profesionales
- orientada a sistemas internos
- sobria y consultiva
- product-led, pero no demasiado específica de legal

---

## 5. Estructura esperada

La estructura puede variar según la implementación actual, pero debe conservar o adaptar estas secciones:

1. Hero de automatización.
2. Problema operativo general.
3. De entrada dispersa a operación centralizada.
4. Capacidades o casos de uso.
5. Proceso de implementación.
6. Principios de trabajo.
7. CTA final.

Si algunas ya existen, adaptarlas visualmente. No duplicar contenido.

---

## 6. Dirección visual

Usar el sistema dark existente:

- fondo carbón
- superficies elevadas
- bordes sutiles
- texto marfil/blanco cálido
- copy secundario gris cálido
- granate como acento
- cards oscuras
- diagramas/sistemas en dark
- glows controlados

Esta página puede ser un poco más abstracta que la legal, pero no debe volverse genérica o decorativa.

---

## 7. Hero de automatización

### Eyebrow

```txt
AUTOMATIZACIÓN DE PROCESOS
```

### H1 recomendado

```txt
Sistemas internos para operar con más claridad.
```

Alternativa:

```txt
Automatización de procesos para equipos profesionales.
```

### Supporting copy

```txt
Diseñamos flujos y sistemas operativos internos para centralizar información, reducir tareas manuales y dar visibilidad real a la operación diaria.
```

### CTAs

```txt
Solicitar diagnóstico
Ver Gralith Legal
```

El segundo CTA puede cambiar si existe otra ruta más adecuada.

### Visual sugerido

Un visual abstracto pero operativo:

```txt
Entrada dispersa → Sistema interno → Flujo medible
```

Entradas posibles:

```txt
Correos
Archivos
Solicitudes
Agenda
```

Salidas posibles:

```txt
Tareas
Reportes
Responsables
Seguimiento
```

---

## 8. Problema operativo general

Explicar el dolor de equipos profesionales:

```txt
Cuando la operación depende de mensajes, hojas sueltas y seguimiento manual, el equipo pierde claridad.
```

Problemas sugeridos:

```txt
Información repartida entre herramientas.
Aprobaciones y solicitudes sin seguimiento claro.
Archivos y versiones difíciles de ubicar.
Poca visibilidad para responsables.
Procesos repetitivos que siguen dependiendo de memoria.
```

Diseño:

- dark cards
- icon pills granate
- copy breve

---

## 9. De entrada a sistema

Crear o adaptar una sección visual tipo:

```txt
Entrada → Sistema → Operación
```

Pero más general que la legal.

### Entrada

```txt
Correo
Archivos
Solicitudes
Agenda
```

### Sistema

```txt
Gralith
Flujos internos
```

### Salida

```txt
Tareas
Reportes
Responsables
Seguimiento
```

Si ya existe una visual similar en la home, reutilizar patrón sin duplicar código innecesario.

---

## 10. Capacidades / casos de uso

Casos sugeridos:

```txt
Centralización de información
Seguimiento de procesos
Control documental
Automatización de tareas repetitivas
Visibilidad para responsables
Indicadores operativos
```

Diseño:

- cards oscuras
- no grid genérico si se puede mejorar
- agrupar por resultado operativo

---

## 11. Proceso de implementación

Mantener proceso claro:

```txt
Diagnóstico
Diseño del flujo
Automatización inicial
Seguimiento y ajuste
```

Copy sugerido:

```txt
Primero entendemos cómo trabaja el equipo. Después diseñamos una primera versión útil, adoptable y conectada al flujo real.
```

Diseño:

- process cards dark
- numeración sutil
- borde granate suave

---

## 12. Principios de trabajo

Incluir o adaptar principios como:

```txt
Ordenar antes de automatizar.
Automatización gradual.
Sistema adaptado al flujo real.
Visibilidad antes que complejidad.
Seguimiento con base en uso real.
```

Diseño:

- panel dark elevated
- bullets claros
- sin exceso visual

---

## 13. CTA final

Heading sugerido:

```txt
Construyamos una operación más clara.
```

Copy sugerido:

```txt
Agenda un diagnóstico para identificar oportunidades de automatización y diseñar una primera versión útil para tu equipo.
```

CTA:

```txt
Solicitar diagnóstico
```

Diseño:

- dark elevated panel
- CTA granate
- copy corto

---

## 14. Motion

Motion mínimo:

- SectionReveal
- StaggerContainer para cards
- sin parallax fuerte
- sin animaciones continuas

Reduced motion cubierto por primitives existentes.

---

## 15. SEO y metadata

Preservar metadata existente de `/automatizacion-de-procesos`.

No cambiar:

- title
- description
- canonical/path
- Open Graph

salvo que un import o refactor lo requiera sin modificar contenido.

---

## 16. Tareas detalladas

### Tarea 1 — Auditar página actual

Revisar:

```txt
src/app/automatizacion-de-procesos/page.tsx
src/components/marketing/sections/automation-sections.tsx
src/components/marketing/*automation*
src/components/marketing/shared/*
```

Identificar estructura actual y secciones claras.

---

### Tarea 2 — Convertir a dark system

Actualizar wrappers, cards, fondos, borders y typography.

No usar solo `bg-black`; usar tokens/surfaces del dark system.

---

### Tarea 3 — Adaptar hero

Convertir hero de automatización a dark premium.

Mantener mensaje general, no legal específico.

---

### Tarea 4 — Adaptar secciones de problema/capacidades

Actualizar cards y layouts a dark.

Reducir repetición si hay grids genéricas.

---

### Tarea 5 — Adaptar proceso/CTA

Convertir proceso y CTA final a dark.

Mantener conversión clara.

---

### Tarea 6 — Validar rutas no objetivo

Verificar que `/` y `/despachos-juridicos` no se rompan por cambios compartidos.

---

## 17. No tocar

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

## 18. Criterios de aceptación

La fase se acepta si:

1. `/automatizacion-de-procesos` usa la nueva estética dark.
2. No quedan secciones principales claras/off-white.
3. Hero de automatización es claro y premium.
4. El mensaje sigue siendo general, no demasiado legal.
5. Cards/capacidades/proceso/CTA están adaptados a dark.
6. Metadata de automation se preserva.
7. Mobile no tiene overflow.
8. `/` y `/despachos-juridicos` no se rompen.
9. No se tocaron archivos protegidos.
10. `npm run lint` pasa.
11. `npm run build` pasa.

---

## 19. Validación

Comandos:

```bash
npm run lint
npm run build
npm run dev
```

Rutas:

```txt
/automatizacion-de-procesos
/
/despachos-juridicos
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

## 20. Rama sugerida

```bash
git checkout main
git pull origin main
git checkout -b gralith-automation-dark-adaptation-v1
```

Commit sugerido:

```bash
git add .
git commit -m "feat: adapt automation page to dark visual system"
git push -u origin gralith-automation-dark-adaptation-v1
```

---

## 21. Prompt para Codex

```txt
Read AGENTS.md.

Implement Gralith Automation Dark Adaptation V1 using docs/specs/gralith-automation-dark-adaptation-v1.md as the source of truth.

Goal:
Adapt /automatizacion-de-procesos to the new dark premium Gralith visual system while preserving its broader process-automation positioning.

Context:
The home page and /despachos-juridicos have already moved to the dark, product-led visual direction. Now the general automation page should feel consistent with the same system, but remain broader than the legal landing.

Important:
- Follow the spec closely.
- Focus on /automatizacion-de-procesos.
- Do not redesign the home page.
- Do not redesign /despachos-juridicos.
- Do not redesign /contacto.
- Preserve automation SEO metadata.
- Use existing dark tokens/primitives.
- Reuse existing components where possible.
- Do not duplicate components unnecessarily.
- Do not install dependencies.
- Do not touch .env.local.
- Do not touch /api/contact.
- Do not modify Resend logic.
- Do not touch DNS, analytics or deployment config.
- Keep npm run lint passing.
- Keep npm run build passing.

Expected work:
1. Audit the current /automatizacion-de-procesos page and related automation components.
2. Convert main automation sections from light/off-white to dark visual system.
3. Adapt the automation hero to dark premium style.
4. Keep the messaging broad for professional teams, not only legal.
5. Adapt problem, capability, process and CTA sections.
6. Keep motion subtle with existing primitives.
7. Ensure mobile has no horizontal overflow.
8. Validate /automatizacion-de-procesos, /, /despachos-juridicos and /contacto.

Suggested automation hero copy:
Eyebrow: AUTOMATIZACIÓN DE PROCESOS
Heading: Sistemas internos para operar con más claridad.
Paragraph: Diseñamos flujos y sistemas operativos internos para centralizar información, reducir tareas manuales y dar visibilidad real a la operación diaria.
CTAs: Solicitar diagnóstico / Ver Gralith Legal

Final report:
- files created
- files modified
- sections adapted
- automation metadata preserved
- motion behavior
- responsive behavior
- confirmation that protected files were untouched
- lint/build result
```
