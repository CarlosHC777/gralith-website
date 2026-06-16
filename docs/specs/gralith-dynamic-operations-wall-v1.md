# Gralith Dynamic Operations Wall V1

## 1. Resumen

Esta fase crea o refina la sección más dinámica de la home: una visual narrativa que muestra cómo Gralith convierte información dispersa en una operación trazable.

Las fases previas ya dejaron la base:

- Home en dark visual system.
- Hero oscuro product-led.
- Laptop/System Showcase.
- Product Capability Chapters.

Ahora la página necesita un momento visual fuerte que explique la transformación principal de Gralith:

```txt
mensajes, correos, archivos y agenda → sistema central → expedientes, tareas, auditoría y búsqueda
```

Esta sección debe ser el bloque más expresivo de la home, sin caer en una animación caótica o decorativa.

---

## 2. Objetivo principal

Crear una sección visualmente poderosa y clara que comunique:

```txt
Gralith toma información operativa dispersa y la convierte en seguimiento verificable.
```

Debe sentirse como una visual de producto, no como una infografía genérica.

---

## 3. Página objetivo

```txt
/
```

Esta fase solo toca la home y componentes compartidos estrictamente necesarios.

No adaptar aún:

```txt
/despachos-juridicos
/automatizacion-de-procesos
/contacto
```

---

## 4. Posición recomendada

La sección debe aparecer después de:

```txt
Hero
Laptop/System Showcase
Product Capability Chapters
```

Y antes de:

```txt
Diagnóstico / proceso / CTA final
```

Si ya existe una sección similar, debe reemplazarse o refinarse. No duplicar la narrativa.

---

## 5. Narrativa central

La sección debe contar esta historia:

```txt
1. La operación entra por muchos canales.
2. Gralith la ordena en un sistema central.
3. El equipo obtiene seguimiento, trazabilidad y búsqueda.
```

Versión visual:

```txt
Entrada → Sistema Gralith → Operación trazable
```

---

## 6. Copy sugerido

### Eyebrow

```txt
DE DISPERSIÓN A OPERACIÓN TRAZABLE
```

### Heading opción A

```txt
La información entra por muchos canales. La operación debe responder desde uno.
```

### Heading opción B

```txt
Lo que entra por muchos canales termina en una operación verificable.
```

### Heading opción C

```txt
Del mensaje suelto al seguimiento trazable.
```

### Párrafo sugerido

```txt
Gralith toma señales operativas dispersas y las convierte en vistas, responsables y trazabilidad para que el equipo trabaje con menos fricción.
```

---

## 7. Estructura visual

### Desktop

Usar una composición de 3 zonas:

```txt
Izquierda: Entrada
Centro: Sistema Gralith
Derecha: Operación trazable
```

O una composición tipo wall:

```txt
Texto editorial a la izquierda
Visual operativo a la derecha
```

Elegir la opción que mejor funcione con el diseño actual, pero la narrativa debe ser clara.

### Mobile

Usar una secuencia vertical:

```txt
Entrada
↓
Sistema Gralith
↓
Operación trazable
```

En mobile, no forzar conectores complejos ni layouts de tres columnas.

---

## 8. Bloque de entrada

Cards de entrada sugeridas:

```txt
WhatsApp
Correo
Archivos
Agenda
```

Cada card puede tener:

- ícono pequeño
- label
- microcopy breve

Ejemplos:

```txt
WhatsApp — instrucciones y avances
Correo — solicitudes y aprobaciones
Archivos — versiones y evidencias
Agenda — fechas y vencimientos
```

---

## 9. Bloque central

El centro debe ser visualmente más fuerte.

Contenido sugerido:

```txt
Sistema central
Gralith
```

Elementos internos posibles:

```txt
Entrada registrada
Responsable asignado
Historial visible
Contexto localizado
```

Este panel debe sentirse estable, ordenado y más luminoso que los lados.

---

## 10. Bloque de salida

Cards de salida sugeridas:

```txt
Expedientes
Tareas
Auditoría
Búsqueda
```

Microcopy sugerido:

```txt
Expedientes — casos y documentos centralizados
Tareas — responsables y próximos pasos
Auditoría — historial de cambios y decisiones
Búsqueda — contexto localizable en segundos
```

---

## 11. Conectores

Se pueden usar líneas/conectores para reforzar la narrativa.

Permitido:

- líneas SVG finas
- opacidad baja
- acento granate muy sutil
- conectores decorativos `aria-hidden`

Evitar:

- líneas muy brillantes
- animaciones complejas
- conectores que crucen texto
- spaghetti diagram

En mobile, ocultar conectores complejos y usar una flecha o divisor vertical simple.

---

## 12. Fondo

La sección puede usar una variante más intensa que el resto de la home.

Opciones:

```txt
fondo granate profundo
fondo dark base con glow granate
fondo dark con panel central elevado
```

Debe integrarse con la página dark, no verse como un bloque pegado.

Recomendación:

- usar granate profundo como capa de énfasis
- mantener cards en superficies oscuras/translúcidas
- usar border sutil
- mantener texto en marfil/blanco cálido

---

## 13. Motion

Esta puede ser la sección más dinámica de la home, pero de forma controlada.

Secuencia sugerida:

1. Eyebrow + heading aparecen.
2. Cards de entrada aparecen con stagger.
3. Panel central aparece con fade/scale.
4. Cards de salida aparecen con stagger.
5. Conectores aparecen con opacity o draw simple si ya existe patrón.

No agregar:

- animaciones infinitas
- parallax fuerte
- efectos de partículas
- motion que dependa de scroll complejo

Reduced motion:

- mostrar todo sin transforms fuertes
- no animar conectores

---

## 14. Componentes sugeridos

Revisar si ya existe una sección similar y refactorizarla.

Posibles archivos:

```txt
src/components/marketing/dynamic-operations-wall.tsx
src/components/marketing/sections/dynamic-operations-wall-section.tsx
src/components/marketing/shared/dark-card.tsx
src/components/motion/stagger-container.tsx
src/components/motion/section-reveal.tsx
```

No duplicar si ya existe una sección parecida.

---

## 15. Tareas detalladas

### Tarea 1 — Auditar sección existente

Buscar si ya existe una sección de:

```txt
DynamicOperationsWall
OperationsWall
EntradaSistemaSalida
```

Si existe, refinarla en lugar de crear otra.

---

### Tarea 2 — Definir estructura de datos

Crear o limpiar data para:

```txt
inputs
central steps
outputs
```

Puede vivir en el mismo componente si es simple, o en `src/content/home.ts` si ya hay contenido centralizado.

---

### Tarea 3 — Construir layout desktop

Crear layout de 3 zonas o texto + visual, asegurando:

- jerarquía clara
- centro dominante
- cards legibles
- spacing amplio

---

### Tarea 4 — Construir layout mobile

Apilar en secuencia:

```txt
Entrada → Sistema → Salida
```

Evitar overflow horizontal.

---

### Tarea 5 — Agregar motion sutil

Usar primitives existentes:

- SectionReveal
- StaggerContainer

No instalar dependencias.

---

### Tarea 6 — Revisar integración visual

Asegurar que la sección se integre con:

- hero oscuro
- laptop showcase
- capability chapters
- secciones siguientes

---

## 16. No tocar

No modificar:

- `.env.local`
- `/api/contact`
- Resend
- `RESEND_API_KEY`
- DNS
- Vercel Analytics
- configuración de deploy
- páginas internas fuera de imports compartidos necesarios

---

## 17. Criterios de aceptación

La fase se acepta si:

1. La home tiene una sección clara de entrada → sistema → salida.
2. La sección se siente como el momento dinámico principal de la home.
3. No hay duplicación de una sección similar.
4. El centro Gralith se siente dominante y ordenado.
5. Los inputs y outputs son legibles.
6. Conectores, si existen, son limpios y no invasivos.
7. Mobile muestra una secuencia clara.
8. No hay horizontal overflow.
9. Motion es sutil y respeta reduced motion.
10. No se tocaron archivos protegidos.
11. `npm run lint` pasa.
12. `npm run build` pasa.

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
1024px
desktop
```

---

## 19. Rama sugerida

```bash
git checkout main
git pull origin main
git checkout -b gralith-dynamic-operations-wall-v1
```

Commit sugerido:

```bash
git add .
git commit -m "feat: add dynamic operations wall"
git push -u origin gralith-dynamic-operations-wall-v1
```

---

## 20. Prompt para Codex

```txt
Read AGENTS.md.

Implement Gralith Dynamic Operations Wall V1 using docs/specs/gralith-dynamic-operations-wall-v1.md as the source of truth.

Goal:
Create or refine the main dynamic narrative section of the home page: scattered operational inputs becoming a central Gralith system and traceable outputs.

Context:
The home page is now dark/product-led and already includes the dark hero, laptop showcase and product capability chapters. The next step is to create the strongest dynamic section of the home: Entrada -> Sistema Gralith -> Operación trazable.

Important:
- Follow the spec closely.
- Focus on the home page `/`.
- Do not redesign the hero.
- Do not redesign the laptop showcase.
- Do not redesign product capability chapters.
- Do not redesign internal pages.
- Do not duplicate an existing dynamic operations section; refactor if one exists.
- Use existing dark tokens/primitives.
- Use existing motion primitives only.
- Do not install dependencies.
- Do not touch .env.local.
- Do not touch /api/contact.
- Do not modify Resend logic.
- Do not touch DNS, analytics or deployment config.
- Keep npm run lint passing.
- Keep npm run build passing.

Expected work:
1. Audit whether a Dynamic Operations Wall section already exists.
2. Replace/refine it into a clear Entrada -> Sistema -> Salida narrative.
3. Use input cards:
   - WhatsApp
   - Correo
   - Archivos
   - Agenda
4. Use a central Gralith system panel.
5. Use output cards:
   - Expedientes
   - Tareas
   - Auditoría
   - Búsqueda
6. Add subtle connectors if they look clean.
7. Use controlled stagger/reveal motion.
8. On mobile, stack the sequence vertically and avoid complex connectors.
9. Avoid visual noise and random floating elements.

Suggested copy:
Eyebrow: DE DISPERSIÓN A OPERACIÓN TRAZABLE
Heading: La información entra por muchos canales. La operación debe responder desde uno.
Paragraph: Gralith toma señales operativas dispersas y las convierte en vistas, responsables y trazabilidad para que el equipo trabaje con menos fricción.

Final report:
- files created
- files modified
- whether existing section was refactored or new section created
- narrative implemented
- motion behavior
- mobile behavior
- confirmation that protected files were untouched
- lint/build result
```
