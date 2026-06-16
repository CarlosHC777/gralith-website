# Gralith Product Capability Chapters V1

## 1. Resumen

Esta fase convierte la explicación de módulos/features de la home en una narrativa de producto más sofisticada, tipo “capítulos de capacidad”.

Ya están implementadas fases previas importantes:

- Dark Visual Foundation.
- Dark Hero Product-Led.
- Dark Header + Original Logo.
- Global Dark Page Conversion.
- Laptop/System Showcase.

Ahora la home ya tiene un primer impacto oscuro y una sección que muestra el sistema. El siguiente paso es explicar **qué capacidades concretas entrega Gralith** sin caer en una simple grilla genérica de features.

---

## 2. Objetivo principal

Crear una sección de **Product Capability Chapters** que explique las capacidades centrales de Gralith como partes de un sistema operativo para despachos.

La sección debe sentirse más como una landing SaaS premium:

- capítulos claros
- visuales de producto
- cards oscuras bien compuestas
- copy breve
- jerarquía fuerte
- motion sutil

---

## 3. Página objetivo

```txt
/
```

Esta fase se enfoca solo en la home.

No adaptar todavía:

```txt
/despachos-juridicos
/automatizacion-de-procesos
/contacto
```

---

## 4. Problema que resuelve

Una grilla simple de módulos comunica funcionalidades, pero no necesariamente comunica sistema.

La nueva sección debe evitar sentirse como:

```txt
lista de features
cards sueltas
módulos genéricos
texto repetitivo
```

Debe sentirse como:

```txt
capítulos del producto
partes de una operación conectada
sistema real para coordinar el despacho
```

---

## 5. Dirección visual

Inspiración general: producto SaaS premium, oscuro, modular y editorial.

Adaptación Gralith:

- fondo oscuro
- superficies elevadas
- borde sutil
- granate como acento
- mockups HTML/CSS pequeños
- iconografía sobria
- títulos fuertes
- texto breve

Evitar:

- exceso de animación
- colores nuevos fuera de marca
- screenshots genéricos
- cards blancas
- grids demasiado planos

---

## 6. Contenido recomendado

### Eyebrow

```txt
SISTEMA OPERATIVO
```

### Heading

```txt
Cada parte del despacho conectada a una operación más clara.
```

### Supporting copy

```txt
Gralith reúne expedientes, documentos, agenda, actividad y búsqueda para que el seguimiento diario no dependa de mensajes, memoria o carpetas dispersas.
```

---

## 7. Capítulos sugeridos

Usar 4 o 5 capítulos máximo.

### Capítulo 1 — Centralización

**Título:**

```txt
Centraliza la información operativa.
```

**Copy:**

```txt
Clientes, expedientes, documentos y tareas viven en una fuente de verdad para que el equipo sepa dónde consultar y qué sigue.
```

**Visual sugerido:**

Panel con elementos conectados:

```txt
Cliente → Expediente → Documentos → Tareas
```

---

### Capítulo 2 — Seguimiento

**Título:**

```txt
Da seguimiento sin perseguir pendientes.
```

**Copy:**

```txt
Agenda vencimientos, responsables y próximos pasos para reducir seguimiento manual y evitar que los asuntos se pierdan entre conversaciones.
```

**Visual sugerido:**

Mini timeline o lista de tareas con fechas.

---

### Capítulo 3 — Trazabilidad

**Título:**

```txt
Consulta qué cambió, quién lo hizo y cuándo.
```

**Copy:**

```txt
Registra actividad relevante para reconstruir avances, decisiones y movimientos sin depender de memoria o cadenas de mensajes.
```

**Visual sugerido:**

Activity feed con eventos.

---

### Capítulo 4 — Búsqueda global

**Título:**

```txt
Encuentra contexto sin saltar entre herramientas.
```

**Copy:**

```txt
Busca clientes, expedientes y documentos desde una misma vista para recuperar información clave en segundos.
```

**Visual sugerido:**

Command palette / search panel.

---

### Capítulo 5 — Roles y visibilidad

**Título:**

```txt
Controla qué ve cada responsable.
```

**Copy:**

```txt
Define permisos y visibilidad para socios, responsables y equipo operativo sin perder control sobre la información del despacho.
```

**Visual sugerido:**

Panel de roles o permisos.

---

## 8. Layout recomendado

### Desktop

Usar una composición menos plana que una grilla simple.

Opción recomendada:

```txt
Heading section full-width
Luego 3 bloques grandes tipo chapter
Luego 2 cards secundarias
```

Ejemplo:

```txt
[Centralización — large horizontal card]
[Seguimiento — card] [Trazabilidad — card]
[Búsqueda global — card] [Roles y visibilidad — card]
```

Otra opción válida:

```txt
Capítulos apilados alternando texto y visual.
```

Escoger la que mejor se adapte al diseño actual.

### Mobile

Todo apilado:

```txt
heading
chapter 1
chapter 2
chapter 3
chapter 4
chapter 5
```

Cards con buen spacing y sin contenido demasiado pequeño.

---

## 9. Visuales internos

Los visuales deben ser HTML/CSS/SVG simples, no imágenes genéricas.

Ejemplos permitidos:

- mini timeline
- mini activity feed
- command palette
- connected nodes
- permissions list
- compact table

Deben verse como parte de Gralith, no como gráficos random.

---

## 10. Reglas de estilo

Usar:

- `DarkCard` o surface equivalente
- borde blanco/granate sutil
- icon pill granate suave
- typography dark tokens
- hover muy leve si ya existe patrón
- spacing generoso

Evitar:

- cards demasiado brillantes
- bordes muy fuertes
- iconos grandes sin sentido
- texto largo
- elementos que parezcan dashboard real completo si no lo son

---

## 11. Motion

Usar motion sutil:

- SectionReveal para la sección
- StaggerContainer para cards
- micro reveal de visuales si ya existe patrón

No agregar:

- animaciones infinitas
- parallax fuerte
- nuevos sistemas de motion

Reduced motion debe funcionar.

---

## 12. Componentes sugeridos

Crear si aporta claridad:

```txt
src/components/marketing/sections/product-capability-chapters-section.tsx
src/components/marketing/shared/product-capability-card.tsx
src/components/marketing/mockups/capability-mini-visuals.tsx
```

O adaptar componentes existentes si ya cumplen la función.

No duplicar patterns si ya existe `FeatureCard`, `DarkCard` o algo equivalente.

---

## 13. Integración con secciones existentes

La sección debe reemplazar o evolucionar la sección actual de módulos/features de la home.

No debe duplicarse el mismo contenido en dos lugares.

Si ya existe una sección de “Sistema operativo” o cards de módulos, convertirla a esta nueva estructura.

---

## 14. Tareas detalladas

### Tarea 1 — Auditar sección actual de módulos/features

Buscar en home la sección que muestra capacidades como:

```txt
Centralización
Expedientes
Documentos
Agenda
Actividad
Búsqueda
Auditoría
Roles y permisos
```

Determinar si se reemplaza o refactoriza.

---

### Tarea 2 — Crear contenido de capítulos

Crear data estructurada para los capítulos.

Preferencia:

```txt
src/content/home.ts
```

O el archivo de contenido existente.

Cada capítulo debe tener:

```txt
title
copy
visualType
highlight optional
```

---

### Tarea 3 — Crear/actualizar componente de sección

Crear una sección clara:

```txt
ProductCapabilityChaptersSection
```

Debe renderizar heading + cards/chapters.

---

### Tarea 4 — Crear mini visuales

Crear mini visuales por tipo:

```txt
centralization
timeline
activity
search
roles
```

Deben ser ligeros y estar dentro de cards.

---

### Tarea 5 — Integrar en home

Reemplazar la sección antigua de módulos/features con esta nueva sección.

No mover otras secciones salvo que sea necesario para el flujo.

---

### Tarea 6 — Validar mobile

Asegurar:

- no overflow
- textos legibles
- cards no muy estrechas
- visuales internos no se rompen

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
- páginas internas salvo imports compartidos necesarios

---

## 16. Criterios de aceptación

La fase se acepta si:

1. La home tiene una sección de product capability chapters.
2. La sección reemplaza/evoluciona la grilla simple de módulos.
3. No hay contenido duplicado de features.
4. Las cards se ven premium en dark mode.
5. Cada capítulo comunica una capacidad clara.
6. Los mini visuales se sienten parte de Gralith.
7. Motion es sutil.
8. Mobile no tiene overflow.
9. No se tocaron archivos protegidos.
10. `npm run lint` pasa.
11. `npm run build` pasa.

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

## 18. Rama sugerida

```bash
git checkout main
git pull origin main
git checkout -b gralith-product-capability-chapters-v1
```

Commit sugerido:

```bash
git add .
git commit -m "feat: add product capability chapters"
git push -u origin gralith-product-capability-chapters-v1
```

---

## 19. Prompt para Codex

```txt
Read AGENTS.md.

Implement Gralith Product Capability Chapters V1 using docs/specs/gralith-product-capability-chapters-v1.md as the source of truth.

Goal:
Replace or evolve the simple home modules/features section into a more premium product capability chapters section.

Context:
The home page is now dark/product-led and includes a hero and laptop/system showcase. The next step is to explain Gralith capabilities as connected product chapters rather than a generic feature grid.

Important:
- Follow the spec closely.
- Focus on the home page `/`.
- Do not redesign the hero.
- Do not redesign the laptop showcase.
- Do not redesign internal pages.
- Do not duplicate the existing modules/features section.
- Use existing dark tokens/primitives such as DarkCard, SectionReveal and StaggerContainer where appropriate.
- Do not touch .env.local.
- Do not touch /api/contact.
- Do not modify Resend logic.
- Do not touch DNS, analytics or deployment config.
- Do not install dependencies.
- Keep npm run lint passing.
- Keep npm run build passing.

Expected work:
1. Audit the current modules/features section on the home page.
2. Replace or refactor it into a Product Capability Chapters section.
3. Use 4–5 chapters maximum:
   - Centralización
   - Seguimiento
   - Trazabilidad
   - Búsqueda global
   - Roles y visibilidad
4. Each chapter should include:
   - title
   - short copy
   - small product-like visual or UI pattern
5. Use dark premium cards and Gralith garnet accents.
6. Avoid generic feature-card repetition.
7. Keep motion subtle with existing primitives.
8. Ensure mobile layout is clean and has no horizontal overflow.

Final report:
- files created
- files modified
- section replaced/refactored
- chapters included
- visual patterns created
- motion behavior
- responsive behavior
- confirmation that protected files were untouched
- lint/build result
```
