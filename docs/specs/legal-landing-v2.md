# Legal Landing V2 — Gralith Website

## Goal

Improve `/despachos-juridicos` so it becomes the main commercial landing page for **Gralith Legal**, the first vertical of Gralith.

The page should clearly communicate the problem, the solution, the modules, the value proposition, and the next action for a legal office.

Production site:

* https://gralith.com.mx

Primary conversion action:

* Solicitar diagnóstico operativo gratuito

Contact page:

* https://gralith.com.mx/contacto

## Context

Gralith is a B2B process automation company for professional teams.

The first vertical is **Gralith Legal**, focused on operational automation for legal offices.

The current website already has:

* production domain configured
* SSL
* corporate email
* contact form connected with Resend
* Search Console
* sitemap
* Vercel Analytics
* Visual Polish V1
* Responsive, SEO and Performance V1

Do not break any of that.

## Core positioning

Gralith Legal helps legal offices move from scattered operational work to a centralized, traceable and visible system.

The main problem:

Legal offices often manage daily work across:

* WhatsApp
* email
* Drive folders
* Excel sheets
* calendars
* physical or digital documents
* memory of team members

This creates:

* scattered information
* lack of visibility
* duplicated work
* missed follow-ups
* weak accountability
* difficulty knowing what happened in a case
* dependence on specific people instead of process

Gralith Legal should be presented as a system that helps centralize:

* clients
* cases / expedientes
* documents
* agenda
* activity
* search
* audit trail
* roles and permissions

## Visual direction

Preserve the visual direction from Visual Polish V1:

* sober
* premium
* B2B
* operational
* trustworthy
* light/off-white background
* dark text
* dark garnet accent
* thin borders
* subtle shadows
* generous whitespace
* editorial layout

Avoid:

* generic AI gradients
* excessive animation
* playful/gamer visuals
* random abstract illustrations
* legal clichés such as gavels, scales everywhere, or courthouse stock imagery
* overpromising AI capabilities
* heavy dependencies

## Technical constraints

Do not:

* modify `.env.local`
* expose secrets
* modify `RESEND_API_KEY`
* break `/api/contact`
* change DNS/deployment/email configuration
* add heavy dependencies
* redesign the whole site
* modify unrelated pages unless needed for shared components

Allowed:

* create reusable marketing components
* reuse components from the home page
* reuse dashboard mockup patterns from Visual Polish V1
* improve metadata for `/despachos-juridicos`
* add section-specific components under `src/components/marketing/`

Before finishing:

* `npm run lint` must pass
* `npm run build` must pass

## Page to modify

Main page:

* `src/app/despachos-juridicos/page.tsx`

Possible shared components:

* `src/components/marketing/*`

Do not modify the contact form logic unless strictly necessary for link/CTA behavior.

## Required sections

### 1. Hero — Legal-specific positioning

Create a stronger hero for `/despachos-juridicos`.

Suggested headline:

> Automatización operativa para despachos jurídicos

Suggested subheadline:

> Centraliza expedientes, documentos, agenda, actividad y seguimiento en un sistema diseñado para dar visibilidad real a la operación diaria del despacho.

The hero should include:

* clear headline
* concise subheadline
* primary CTA: `Solicitar diagnóstico operativo`
* secondary CTA: `Ver módulos`
* visual element related to legal operations

The visual element can be:

* a legal operations dashboard mockup
* a process flow for a case
* a compact system map showing clients, cases, documents, agenda and activity

Avoid generic legal imagery.

### 2. Problem section

Create a section explaining the operational problem in legal offices.

Suggested section title:

> Cuando la operación depende de mensajes, carpetas y memoria, el despacho pierde visibilidad

Mention pain points naturally:

* conversaciones en WhatsApp
* documentos en carpetas dispersas
* fechas críticas en calendarios separados
* seguimiento manual
* poca visibilidad para socios o responsables
* dificultad para saber qué cambió, quién lo hizo y cuándo

Tone:

* direct
* practical
* not alarmist
* not too salesy

### 3. Before / After section

Add a clear comparison between current state and Gralith Legal.

Before:

* WhatsApp para seguimiento
* Drive para documentos
* Excel para control
* correos para instrucciones
* agenda separada
* avances de expediente poco visibles

After:

* expedientes centralizados
* documentos asociados al caso
* agenda vinculada a la operación
* actividad trazable
* búsqueda global
* roles y permisos
* visibilidad para responsables

This section should be visually clear and easy to scan.

### 4. Module grid

Create a module grid for Gralith Legal.

Modules:

1. Clientes
2. Expedientes
3. Documentos
4. Agenda
5. Búsqueda global
6. Actividad y auditoría
7. Roles y permisos
8. Seguimiento operativo

Each module should have:

* short title
* concise explanation
* small icon or visual detail
* no exaggerated claims

Suggested copy direction:

Clientes:

> Mantén datos de clientes y relaciones asociadas al expediente en un solo lugar.

Expedientes:

> Organiza asuntos, responsables, estados y contexto operativo del caso.

Documentos:

> Asocia archivos relevantes al expediente para evitar carpetas dispersas.

Agenda:

> Da seguimiento a fechas, audiencias, tareas y próximos pasos.

Búsqueda global:

> Encuentra clientes, expedientes y documentos sin depender de memoria o carpetas.

Actividad y auditoría:

> Visualiza cambios, movimientos y acciones relevantes dentro del expediente.

Roles y permisos:

> Controla qué puede ver o modificar cada persona del equipo.

Seguimiento operativo:

> Convierte pendientes y avances en un flujo más claro para responsables.

### 5. Legal dashboard mockup

Add or reuse a dashboard mockup that feels specific to legal operations.

It should be built with HTML/CSS, not as an image.

Suggested elements:

* search bar: “Buscar expediente, cliente o documento”
* table of cases
* status badges
* responsible person
* next date
* activity timeline
* small metrics

Example case rows:

* CIV-204 — Arrendamiento — En seguimiento
* MER-118 — Cobranza — Documentación pendiente
* FAM-082 — Convenio — Próxima audiencia
* LAB-331 — Conciliación — En revisión

Example activity:

* Documento agregado al expediente CIV-204
* Audiencia programada para FAM-082
* Responsable actualizado en MER-118
* Nota interna registrada en LAB-331

The mockup should communicate:

* order
* traceability
* visibility
* operational control

### 6. Use cases

Add a section with practical use cases.

Suggested title:

> Casos de uso iniciales

Use cases:

1. Seguimiento de expedientes
2. Control documental
3. Agenda y fechas críticas
4. Visibilidad para socios o responsables
5. Búsqueda rápida de información
6. Actividad y trazabilidad del equipo

Each use case should be concrete and practical.

Avoid making legal claims or implying legal advice.

### 7. How implementation works

Add a process section:

1. Diagnóstico
2. Diseño
3. Automatización inicial
4. Seguimiento

Suggested copy:

Diagnóstico:

> Revisamos cómo trabaja actualmente el despacho: clientes, expedientes, documentos, agenda y seguimiento.

Diseño:

> Definimos un flujo operativo claro y priorizamos los puntos donde la automatización puede generar más valor.

Automatización inicial:

> Implementamos una primera versión funcional enfocada en centralizar información y reducir tareas manuales.

Seguimiento:

> Ajustamos el sistema con base en el uso real del equipo y los casos del despacho.

This section should make the service feel approachable and not overwhelming.

### 8. Who it is for

Add a section explaining who benefits from Gralith Legal.

Suggested title:

> Pensado para despachos que quieren operar con más claridad

Mention:

* despachos pequeños y medianos
* equipos jurídicos con varios expedientes activos
* áreas que manejan muchos documentos
* equipos que necesitan seguimiento y visibilidad
* responsables que quieren ordenar operación sin cambiar todo de golpe

Avoid excluding larger clients completely.

### 9. Trust / operating principles

Add a section with principles, not fake testimonials.

Suggested title:

> Principios de trabajo

Principles:

* Primero ordenar, luego automatizar
* Trazabilidad antes que complejidad
* Software adaptado al flujo real del despacho
* Automatización gradual
* Visibilidad para tomar mejores decisiones operativas

Do not add fake logos, fake clients, fake ratings or fake testimonials.

### 10. Strong CTA

End with a strong CTA.

Suggested headline:

> Empieza con un diagnóstico operativo gratuito

Suggested text:

> Revisamos el flujo actual de tu despacho y detectamos oportunidades concretas para centralizar información, reducir tareas manuales y mejorar la visibilidad de expedientes.

Buttons:

* Primary: `Solicitar diagnóstico`
* Secondary: `Escribir a carloshc@gralith.com.mx`

Primary CTA should link to:

* `/contacto`

Secondary can use:

* `mailto:carloshc@gralith.com.mx`

## SEO requirements

Keep `/despachos-juridicos` metadata focused on:

* automatización para despachos jurídicos
* software para despachos jurídicos
* gestión de expedientes legales
* automatización operativa legal
* control documental para despachos
* seguimiento de expedientes

Avoid keyword stuffing.

Suggested title:

> Automatización para despachos jurídicos | Gralith Legal

Suggested description:

> Gralith Legal ayuda a despachos jurídicos a centralizar expedientes, documentos, agenda, actividad y seguimiento operativo en un sistema trazable.

Canonical:

* https://gralith.com.mx/despachos-juridicos

Open Graph should also be specific to Gralith Legal.

## Responsive requirements

Must look good on:

* 360px mobile
* 390px mobile
* 430px mobile
* 768px tablet
* 1280px desktop

Check:

* no horizontal overflow
* hero stacks correctly
* dashboard mockup does not break mobile
* module grid stacks clearly
* CTA buttons are usable on mobile
* text size remains readable
* spacing feels intentional

## Accessibility requirements

Review:

* heading hierarchy
* link text
* button labels
* focus states
* color contrast
* semantic sections
* no unnecessary ARIA
* icons should not replace meaningful text

## Performance requirements

Do not add heavy dependencies.

Avoid:

* large images
* heavy animation libraries
* 3D assets
* unnecessary client components

Prefer:

* server components
* CSS/Tailwind effects
* simple HTML/CSS mockups
* existing icon set if already available

## Acceptance criteria

This phase is complete when:

* `/despachos-juridicos` feels like a focused commercial landing page
* the page explains the problem and solution clearly
* the page has a strong CTA to `/contacto`
* the page is responsive
* SEO metadata is specific to Gralith Legal
* no secrets are touched
* `/api/contact` remains unchanged and available
* `npm run lint` passes
* `npm run build` passes

## Final report required

At the end, report:

* files modified
* components created
* SEO changes made
* responsive changes made
* dependencies added, if any
* whether the contact form logic was touched
* how to test locally
* whether `npm run lint` passed
* whether `npm run build` passed
