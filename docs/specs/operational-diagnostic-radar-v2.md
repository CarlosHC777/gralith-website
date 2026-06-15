# Operational Diagnostic Radar Section V2 — Gralith Legal

## 1. Contexto

Gralith ya cuenta con una landing visual más sólida y una narrativa de automatización operativa para despachos jurídicos. La siguiente mejora busca reforzar la idea de que el servicio no empieza construyendo software de forma improvisada, sino con un **diagnóstico operativo estructurado**.

Esta sección debe comunicar que Gralith analiza el estado actual del despacho y detecta prioridades antes de diseñar una solución.

La referencia visual es un gráfico de radar/araña, pero adaptado al lenguaje visual de Gralith: sobrio, cálido, granate, premium y B2B.

---

## 2. Objetivo

Agregar una sección visual que muestre un **diagnóstico operativo del despacho** mediante un radar chart estilizado.

La sección debe dar la idea de que Gralith evalúa áreas clave como expedientes, documentos, agenda, trazabilidad, visibilidad y automatización para identificar dónde conviene intervenir primero.

---

## 3. Página objetivo

Prioridad principal:

```txt
/despachos-juridicos
```

La sección debe colocarse en una zona media-baja de la landing legal, preferentemente:

- después de la sección de proceso/diagnóstico, o
- antes del CTA final.

No debe colocarse en el hero.

Opcional:

- Reutilizar más adelante en la home si aporta claridad, pero esta fase debe enfocarse en la landing legal.

---

## 4. Mensaje estratégico

La sección NO debe decir “te damos una gráfica de araña” como promesa técnica superficial.

Debe comunicar:

```txt
Antes de automatizar, entendemos cómo opera el despacho.
```

Ideas centrales:

- diagnóstico antes de implementación
- operación visible
- prioridades claras
- automatización gradual
- lectura accionable del estado actual

---

## 5. Copy sugerido

### Eyebrow

```txt
DIAGNÓSTICO OPERATIVO
```

### Heading opción A

```txt
Primero entendemos cómo opera el despacho.
```

### Heading opción B

```txt
Una lectura clara antes de automatizar.
```

### Heading opción C

```txt
Del diagnóstico a una operación más ordenada.
```

### Párrafo sugerido

```txt
Evaluamos áreas clave de la operación para detectar dispersión, cuellos de botella y oportunidades de automatización gradual. El objetivo es definir qué ordenar, qué centralizar y qué medir primero.
```

### Microcopy bajo gráfico

```txt
Ejemplo ilustrativo de evaluación operativa. Los criterios se ajustan al flujo real de cada despacho.
```

---

## 6. Ejes del radar chart

Usar máximo 6 ejes para mantener legibilidad:

```txt
Expedientes
Documentos
Agenda
Trazabilidad
Visibilidad
Automatización
```

No usar más de 6 ejes en esta versión.

---

## 7. Datos ilustrativos

El gráfico no debe representar datos reales. Debe ser un ejemplo visual.

### Estado actual

```txt
Expedientes: 55
Documentos: 45
Agenda: 60
Trazabilidad: 35
Visibilidad: 40
Automatización: 25
```

### Estado objetivo

```txt
Expedientes: 85
Documentos: 80
Agenda: 88
Trazabilidad: 82
Visibilidad: 86
Automatización: 78
```

Si dos polígonos se ven saturados, usar solo el polígono de “Estado objetivo” y dejar el actual como texto/legend secundario.

---

## 8. Diseño visual

### Estilo general

- fondo cálido/off-white
- borde suave
- grid del radar en taupe claro
- etiquetas sobrias
- polígono de estado actual en gris/taupe translúcido
- polígono de estado objetivo en granate translúcido
- stroke granate más visible
- sombras muy suaves
- sin colores chillones
- sin estética de dashboard genérico

### Paleta sugerida

```txt
Grid: taupe / stone muy suave
Actual: warm gray, opacity baja
Objetivo: garnet, opacity media-baja
Stroke objetivo: garnet oscuro
Texto: ink / charcoal
```

### Layout desktop

Dos columnas:

```txt
Izquierda:
- eyebrow
- heading
- párrafo
- lista breve de criterios o explicación

Derecha:
- card con radar chart
- leyenda
- microcopy
```

### Layout mobile

Una columna:

```txt
1. texto
2. radar chart
3. leyenda / microcopy
```

Las etiquetas del radar deben ser legibles y no generar horizontal overflow.

---

## 9. Componente recomendado

Crear componentes reutilizables:

```txt
src/components/marketing/diagnostic/operational-radar-chart.tsx
src/components/marketing/sections/legal-diagnostic-radar-section.tsx
```

Si la carpeta `diagnostic/` se siente excesiva, puede usarse:

```txt
src/components/marketing/shared/operational-radar-chart.tsx
```

pero el radar debe quedar como componente separado, no incrustado directamente en la página.

---

## 10. Implementación técnica

Preferencia:

- Usar un SVG custom.
- No instalar librería de charts.
- No usar Recharts, Chart.js o D3 para esta versión.

Motivo:

El radar es ilustrativo y debe estar altamente estilizado. Un SVG propio será más liviano, controlable y consistente con la identidad.

### Requisitos SVG

El componente debe:

- recibir labels y series como props o constantes limpias
- calcular puntos del polígono
- dibujar niveles concéntricos
- dibujar ejes radiales
- dibujar labels
- dibujar leyenda
- ser responsive con `viewBox`
- evitar overflow de labels

---

## 11. Motion

Motion permitido, pero sutil.

Usar primitives existentes si ya existen:

- `SectionReveal`
- `StaggerContainer`
- `ParallaxLayer` solo si aporta

### Animaciones sugeridas

- sección aparece con reveal suave
- card del radar hace fade/scale muy leve
- polígonos pueden dibujarse/fade-in cuando entra la sección

No hacer animaciones complejas del chart.

Respetar `prefers-reduced-motion`.

---

## 12. Accesibilidad

El radar debe tener alternativa textual.

Agregar:

- `aria-label` o `role="img"`
- título/descripción accesible
- datos resumidos en texto visible o sr-only

Ejemplo:

```txt
Gráfico ilustrativo de diagnóstico operativo con seis criterios: expedientes, documentos, agenda, trazabilidad, visibilidad y automatización.
```

---

## 13. No tocar

No modificar:

- `.env.local`
- `/api/contact`
- Resend
- `RESEND_API_KEY`
- DNS
- Vercel Analytics
- configuración de deployment
- metadata global salvo que sea estrictamente necesario por imports

---

## 14. Criterios de aceptación

La fase se acepta si:

1. La sección aparece en `/despachos-juridicos`.
2. La sección comunica diagnóstico operativo, no performance genérico.
3. El radar chart está estilizado con identidad Gralith.
4. El gráfico tiene máximo 6 ejes.
5. Los labels son legibles en desktop y mobile.
6. No hay horizontal overflow.
7. No se instaló librería de charts.
8. El componente es reutilizable.
9. Motion es sutil y respeta reduced motion.
10. `/api/contact` no fue modificado.
11. `.env.local` no aparece en git.
12. `npm run lint` pasa.
13. `npm run build` pasa.

---

## 15. Validación

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
desktop
```

---

## 16. Rama sugerida

```bash
git checkout main
git pull origin main
git checkout -b legal-diagnostic-radar-v2
```

Commit sugerido:

```bash
git add .
git commit -m "feat: add operational diagnostic radar section"
git push -u origin legal-diagnostic-radar-v2
```

---

## 17. Prompt para Codex

```txt
Read AGENTS.md.

Implement Operational Diagnostic Radar Section V2 using docs/specs/operational-diagnostic-radar-v2.md as the source of truth.

Context:
Gralith Legal should communicate that the work starts with a structured operational diagnosis before automation. We want a visual section with a radar/spider chart that illustrates how a law firm may be evaluated across key operational areas.

Goal:
Add a new section to /despachos-juridicos that presents an illustrative operational diagnostic radar chart in the Gralith visual style.

Important constraints:
- Do not touch .env.local.
- Do not touch /api/contact.
- Do not modify Resend logic.
- Do not touch DNS, analytics or deployment config.
- Do not install a charting library.
- Prefer a custom SVG radar chart.
- Keep npm run lint passing.
- Keep npm run build passing.

Placement:
Add the section to /despachos-juridicos, preferably after the implementation/process section or before the final CTA. Do not place it in the hero.

Section content:
- Eyebrow: DIAGNÓSTICO OPERATIVO
- Heading: Primero entendemos cómo opera el despacho.
- Paragraph: Evaluamos áreas clave de la operación para detectar dispersión, cuellos de botella y oportunidades de automatización gradual. El objetivo es definir qué ordenar, qué centralizar y qué medir primero.
- Include a short microcopy that clarifies the chart is illustrative and adapted to each firm.

Radar axes:
- Expedientes
- Documentos
- Agenda
- Trazabilidad
- Visibilidad
- Automatización

Illustrative data:
Estado actual:
- Expedientes: 55
- Documentos: 45
- Agenda: 60
- Trazabilidad: 35
- Visibilidad: 40
- Automatización: 25

Estado objetivo:
- Expedientes: 85
- Documentos: 80
- Agenda: 88
- Trazabilidad: 82
- Visibilidad: 86
- Automatización: 78

Visual requirements:
- Warm off-white background.
- Thin taupe radar grid.
- Current state in warm gray/taupe with low opacity.
- Target state in garnet with translucent fill and stronger garnet stroke.
- Premium, sober and consistent with Gralith.
- Not generic Excel/dashboard style.
- Labels must be readable.
- No horizontal overflow.

Technical requirements:
- Create a reusable radar chart component, preferably custom SVG.
- Suggested files:
  - src/components/marketing/diagnostic/operational-radar-chart.tsx
  - src/components/marketing/sections/legal-diagnostic-radar-section.tsx
- Use existing SectionReveal/Stagger motion primitives if useful.
- Respect prefers-reduced-motion.
- Add accessible label/description for the chart.

Responsive:
- Desktop: two-column layout with text and chart card.
- Mobile: stacked layout, chart labels readable, no overflow.

Validation:
- npm run lint
- npm run build
- check /despachos-juridicos on desktop, tablet and mobile.

Final report:
- files created
- files modified
- where the section was inserted
- whether SVG was used
- motion behavior
- accessibility behavior
- responsive behavior
- confirmation that /api/contact and .env.local were untouched
- lint/build result
```
