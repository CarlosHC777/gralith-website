# Gralith Diagnostic Visuals Dark V1

## 1. Resumen

Esta fase agrega o adapta una sección de diagnóstico operativo en la home, usando la nueva dirección visual oscura de Gralith.

La home ya cuenta con:

- Dark hero product-led.
- Laptop/System Showcase.
- Product Capability Chapters.
- Dynamic Operations Wall.

Ahora falta comunicar que Gralith no automatiza a ciegas: primero entiende la operación del despacho mediante un diagnóstico visual y accionable.

Esta fase debe usar un radar chart / spider chart oscuro, premium y alineado a Gralith para explicar cómo se evalúa la operación antes de diseñar la solución.

---

## 2. Objetivo principal

Crear una sección de **diagnóstico operativo visual** que comunique:

```txt
Antes de automatizar, Gralith evalúa cómo opera el despacho y detecta qué ordenar primero.
```

La sección debe reforzar metodología, criterio y confianza.

---

## 3. Página objetivo

Página principal:

```txt
/
```

Esta fase debe enfocarse en la home.

Puede crear componentes reutilizables para una futura adaptación en:

```txt
/despachos-juridicos
```

pero no debe rediseñar todavía la landing legal completa.

---

## 4. Posición recomendada

Ubicar la sección después de:

```txt
Dynamic Operations Wall
```

Y antes de:

```txt
Proceso / cómo trabajamos / CTA final
```

Razón:

1. Primero la página muestra el producto.
2. Luego muestra la transformación de operación dispersa a trazable.
3. Después explica cómo Gralith diagnostica antes de implementar.

---

## 5. Mensaje estratégico

La sección no debe vender “una gráfica bonita”. Debe comunicar método.

Idea principal:

```txt
Primero entendemos el estado operativo. Luego diseñamos la automatización.
```

La gráfica es una herramienta visual para representar criterios de evaluación.

---

## 6. Copy sugerido

### Eyebrow

```txt
DIAGNÓSTICO OPERATIVO
```

### Heading opción A

```txt
Primero medimos la operación. Después automatizamos.
```

### Heading opción B

```txt
Una lectura clara antes de construir la solución.
```

### Heading opción C

```txt
Detectamos dónde ordenar antes de automatizar.
```

### Párrafo sugerido

```txt
Analizamos áreas clave del despacho para detectar dispersión, cuellos de botella y oportunidades de automatización gradual. El resultado es una lectura clara de qué ordenar, qué centralizar y qué medir primero.
```

### Microcopy del gráfico

```txt
Ejemplo ilustrativo. Los criterios se ajustan al flujo real de cada despacho.
```

---

## 7. Radar chart

Usar un radar chart con máximo 6 ejes.

### Ejes

```txt
Expedientes
Documentos
Agenda
Trazabilidad
Visibilidad
Automatización
```

### Series

Mostrar preferentemente dos estados:

```txt
Estado actual
Estado objetivo
```

Si dos polígonos se ven saturados, simplificar visualmente pero mantener la idea de comparación.

---

## 8. Datos ilustrativos

No usar datos reales. El gráfico debe ser un ejemplo.

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

---

## 9. Dirección visual dark

El gráfico debe sentirse parte del nuevo sistema oscuro.

### Fondo de sección

```txt
carbón / negro profundo
```

### Card del radar

```txt
surface elevated dark
borde sutil
sombra/glow muy suave
```

### Grid del radar

```txt
líneas finas en blanco/taupe con baja opacidad
```

### Estado actual

```txt
gris cálido / taupe
baja opacidad
stroke sutil
```

### Estado objetivo

```txt
granate translúcido
granate stroke más visible
```

### Labels

```txt
texto marfil/gris claro
legible
no demasiado pequeño
```

---

## 10. Layout recomendado

### Desktop

Dos columnas:

```txt
Izquierda:
- eyebrow
- heading
- párrafo
- 3 criterios breves / bullets

Derecha:
- radar chart card
- leyenda
- microcopy
```

### Mobile

Apilado:

```txt
texto
criterios
radar card
leyenda
microcopy
```

La gráfica no debe generar overflow horizontal.

---

## 11. Criterios/bullets sugeridos

Usar 3 bullets cortos:

```txt
Orden operativo — qué información está dispersa o duplicada.
Trazabilidad — qué acciones pueden reconstruirse con claridad.
Automatización — qué flujos conviene sistematizar primero.
```

Alternativa:

```txt
Dónde se pierde visibilidad.
Qué tareas dependen de seguimiento manual.
Qué datos deben centralizarse antes de automatizar.
```

---

## 12. Implementación técnica

Preferencia:

- Custom SVG radar chart.
- No instalar charting libraries.
- No usar Chart.js, Recharts o D3 para esta versión.

Motivo:

El radar es ilustrativo, ligero y altamente estilizado. Un SVG propio da más control y reduce dependencias.

### Componente sugerido

```txt
src/components/marketing/diagnostic/operational-radar-chart.tsx
```

### Sección sugerida

```txt
src/components/marketing/sections/diagnostic-visuals-section.tsx
```

Si ya existe un radar chart de una fase anterior, reutilizarlo y adaptarlo a dark mode en lugar de duplicarlo.

---

## 13. Requisitos del SVG

El radar chart debe:

- usar `viewBox` responsive
- calcular puntos del polígono
- dibujar niveles concéntricos
- dibujar ejes radiales
- mostrar labels sin overflow
- mostrar una leyenda clara
- aceptar data como constante o props
- ser accesible

---

## 14. Motion

Motion permitido de forma sutil:

- SectionReveal en la sección
- radar card fade/scale leve
- polígonos aparecen con opacity o scale leve
- bullets con stagger

No hacer:

- animación circular permanente
- morph complejo
- partículas
- movimiento constante

Reduced motion:

- mostrar gráfico estático
- evitar transforms fuertes

---

## 15. Accesibilidad

El gráfico debe tener alternativa textual.

Opciones:

- `role="img"`
- `aria-label`
- texto sr-only con resumen
- microcopy visible

Ejemplo de descripción:

```txt
Gráfico ilustrativo de diagnóstico operativo con seis criterios: expedientes, documentos, agenda, trazabilidad, visibilidad y automatización. Compara un estado actual con un estado objetivo.
```

---

## 16. Integración con home

Agregar la sección dentro del flujo actual de la home.

No duplicar una sección de diagnóstico si ya existe.

No mover muchas secciones salvo que sea necesario para que la narrativa tenga sentido.

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
- páginas internas salvo imports compartidos necesarios

---

## 18. Criterios de aceptación

La fase se acepta si:

1. La home tiene una sección de diagnóstico operativo visual.
2. La sección comunica método, no solo decoración.
3. El radar chart usa la estética dark de Gralith.
4. El gráfico tiene máximo 6 ejes.
5. Se compara estado actual vs estado objetivo o se justifica simplificación.
6. No se instaló librería de charts.
7. Mobile no tiene overflow.
8. Labels son legibles.
9. Motion es sutil y reduced motion queda cubierto.
10. El componente es reutilizable para futura landing legal.
11. No se tocaron archivos protegidos.
12. `npm run lint` pasa.
13. `npm run build` pasa.

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
git checkout -b gralith-diagnostic-visuals-dark-v1
```

Commit sugerido:

```bash
git add .
git commit -m "feat: add dark operational diagnostic visuals"
git push -u origin gralith-diagnostic-visuals-dark-v1
```

---

## 21. Prompt para Codex

```txt
Read AGENTS.md.

Implement Gralith Diagnostic Visuals Dark V1 using docs/specs/gralith-diagnostic-visuals-dark-v1.md as the source of truth.

Goal:
Add a dark operational diagnostic visuals section to the home page, centered around a premium radar/spider chart that communicates Gralith's diagnostic method before automation.

Context:
The home page is now dark/product-led and already includes the dark hero, laptop showcase, product capability chapters and dynamic operations wall. The next step is to show that Gralith starts with a structured operational diagnosis before implementation.

Important:
- Follow the spec closely.
- Focus on the home page `/`.
- Do not redesign the hero.
- Do not redesign the laptop showcase.
- Do not redesign product capability chapters.
- Do not redesign dynamic operations wall.
- Do not redesign internal pages.
- Use existing dark tokens/primitives.
- Use a custom SVG radar chart if possible.
- Do not install charting libraries.
- Do not install dependencies.
- Do not touch .env.local.
- Do not touch /api/contact.
- Do not modify Resend logic.
- Do not touch DNS, analytics or deployment config.
- Keep npm run lint passing.
- Keep npm run build passing.

Expected work:
1. Add a diagnostic visuals section to the home page.
2. Use the section copy and structure from the spec.
3. Create or reuse an OperationalRadarChart component.
4. Use 6 axes:
   - Expedientes
   - Documentos
   - Agenda
   - Trazabilidad
   - Visibilidad
   - Automatización
5. Show Estado actual vs Estado objetivo using illustrative data.
6. Style the chart for dark mode with taupe/gray grid and garnet target polygon.
7. Add a short explanation and 3 diagnostic criteria/bullets.
8. Use SectionReveal/StaggerContainer if helpful, with subtle motion only.
9. Ensure accessibility with aria-label or sr-only summary.
10. Ensure mobile has no horizontal overflow and labels remain readable.

Suggested copy:
Eyebrow: DIAGNÓSTICO OPERATIVO
Heading: Primero medimos la operación. Después automatizamos.
Paragraph: Analizamos áreas clave del despacho para detectar dispersión, cuellos de botella y oportunidades de automatización gradual. El resultado es una lectura clara de qué ordenar, qué centralizar y qué medir primero.
Microcopy: Ejemplo ilustrativo. Los criterios se ajustan al flujo real de cada despacho.

Final report:
- files created
- files modified
- section placement
- radar implementation details
- whether custom SVG was used
- motion behavior
- accessibility behavior
- mobile behavior
- confirmation that protected files were untouched
- lint/build result
```
