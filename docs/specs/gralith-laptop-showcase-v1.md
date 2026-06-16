# Gralith Laptop / System Showcase V1

## 1. Resumen

Esta fase agrega o refina una sección de la home para mostrar Gralith como un sistema real mediante una laptop/browser mockup con una vista del producto.

Ya existe una dirección visual dark/product-led en la home. El hero comunica la promesa principal y muestra un visual compacto de entradas → sistema → salidas. Esta nueva fase debe complementar el hero con una sección más concreta: **así se ve Gralith funcionando como sistema operativo del despacho**.

La sección debe reforzar confianza y tangibilidad. El usuario debe sentir que detrás de la promesa hay un producto concreto y una interfaz clara.

---

## 2. Contexto del proyecto

Gralith Website ya tiene:

- home en dirección dark visual system
- dark hero product-led
- navbar dark/glass con logo original
- componentes de secciones, mockups, backgrounds y motion organizados
- acento granate como identidad principal
- enfoque comercial hacia despachos jurídicos

El siguiente paso es crear una sección de producto protagonista similar a una landing SaaS premium: texto editorial + laptop/mockup grande + detalles de valor.

---

## 3. Objetivo principal

Crear una sección en la home que muestre una laptop, browser frame o device mockup con una vista de Gralith dentro.

La sección debe comunicar:

```txt
Gralith centraliza la operación del despacho en una vista clara y accionable.
```

---

## 4. Página objetivo

```txt
/
```

Esta fase solo debe tocar la home y componentes reutilizables necesarios.

No adaptar aún:

```txt
/despachos-juridicos
/automatizacion-de-procesos
/contacto
```

---

## 5. Posición recomendada

La sección debe ir después del hero principal, o después de una breve sección introductoria si la arquitectura actual ya la tiene.

Orden recomendado:

```txt
Hero oscuro
Laptop/System Showcase
Módulos / Product Chapters
Dynamic Operations Wall
Diagnóstico / Proceso
CTA final
```

No colocar la laptop dentro del hero. El hero ya tiene un visual compacto.

---

## 6. Dirección visual

La sección debe sentirse:

- premium
- producto real
- oscura
- sobria
- con profundidad
- de SaaS B2B
- alineada a Gralith

Debe evitar:

- parecer screenshot pegado
- parecer imagen genérica
- usar una laptop stock sin integración
- exceso de glow
- cards flotantes caóticas
- demasiada información dentro del mockup

---

## 7. Copy sugerido

### Eyebrow

```txt
VISTA OPERATIVA
```

### Heading opción A

```txt
La operación del despacho en una sola vista.
```

### Heading opción B

```txt
Expedientes, tareas y actividad en un sistema central.
```

### Heading opción C

```txt
Una vista clara para coordinar el trabajo diario.
```

### Párrafo sugerido

```txt
Consulta expedientes activos, próximos vencimientos, documentos vinculados y actividad reciente sin reconstruir la operación desde mensajes, carpetas o memoria.
```

### CTA opcional

```txt
Ver Gralith Legal
```

---

## 8. Visual del producto

La laptop debe mostrar una vista del sistema con elementos como:

```txt
Gralith Legal
Operación
Expedientes activos
Tareas por vencer
Documentos auditados
Actividad reciente
Tabla de expedientes
Búsqueda
```

Puede reutilizar o adaptar el dashboard mockup existente.

No crear datos demasiado complejos. El mockup debe ser legible y aspiracional.

---

## 9. Estructura de la sección

### Desktop

Opción recomendada:

```txt
Arriba:
- eyebrow
- heading
- paragraph

Centro:
- laptop/browser mockup grande

Alrededor o debajo:
- 3 o 4 metric/support cards pequeñas
```

Otra opción válida:

```txt
Izquierda:
- copy
- bullets
- CTA

Derecha:
- laptop/mockup grande
```

Elegir la opción que mejor se adapte al diseño actual.

### Mobile

```txt
1. Texto
2. Laptop/mockup reducido
3. Cards apiladas
```

En mobile se puede simplificar el contenido del mockup si el texto se vuelve ilegible.

---

## 10. Supporting cards sugeridas

Usar 3 o 4 máximo.

Ejemplos:

```txt
42 expedientes activos
18 tareas por vencer
96% documentos auditados
Actividad registrada hace 2 min
```

Estilo:

- dark cards elevadas
- borde sutil
- ícono granate suave
- tipografía clara
- sin saturar

---

## 11. Device mockup

Crear o reutilizar un componente como:

```txt
src/components/marketing/mockups/device-mockup.tsx
```

O:

```txt
src/components/marketing/mockups/laptop-mockup.tsx
```

Debe ser CSS/HTML, no imagen plana, si es razonable.

Características:

- frame oscuro
- screen area limpia
- border sutil
- shadow/glow controlado
- aspect ratio estable
- responsive

No usar imagen de laptop stock.

---

## 12. Implementación del dashboard dentro del mockup

Preferencia:

- reutilizar el dashboard mockup existente si ya existe
- adaptarlo a una versión compacta para pantalla de laptop
- evitar duplicar datos/componentes innecesariamente

Si el dashboard mockup existente es muy grande, crear una variante compacta:

```txt
DashboardMockupCompact
```

La variante compacta debe conservar:

- sidebar breve
- encabezado
- métricas
- tabla
- actividad reciente

---

## 13. Motion

Usar motion de forma sutil.

Permitido:

- SectionReveal en el bloque
- laptop fade + slight scale
- cards con stagger
- glow sutil estático

Evitar:

- parallax fuerte
- floating cards exageradas
- animación infinita llamativa
- movimiento dentro del dashboard

Reduced motion:

- mostrar sin transforms importantes
- evitar stagger largo

---

## 14. Background

La sección debe usar la dirección dark existente.

Permitido:

- fondo carbón
- glow granate detrás de laptop
- líneas/facetas muy sutiles
- superficie elevada detrás del mockup si se ve bien

No permitido:

- fondo claro
- grandes hexágonos distractores
- patrón fuerte detrás del texto
- glow que opaque el mockup

---

## 15. Reglas de accesibilidad

- El contenido principal debe ser textual, no depender solo del mockup.
- Laptop/mockup puede tener `aria-hidden` si es decorativo.
- Si se considera informativo, agregar `aria-label` descriptivo.
- CTAs con foco visible.
- Contraste suficiente.

---

## 16. Archivos probables

Revisar la arquitectura actual antes de crear nuevos archivos.

Posibles archivos:

```txt
src/components/marketing/sections/home-sections.tsx
src/components/marketing/sections/laptop-showcase-section.tsx
src/components/marketing/mockups/device-mockup.tsx
src/components/marketing/mockups/laptop-mockup.tsx
src/components/marketing/mockups/dashboard-mockup.tsx
src/components/marketing/mockups/legal-dashboard-mockup.tsx
src/components/marketing/shared/dark-card.tsx
```

No crear duplicados si ya existe un componente equivalente.

---

## 17. Tareas detalladas

### Tarea 1 — Auditar mockups existentes

Buscar componentes existentes de dashboard o legal dashboard.

Determinar si se pueden reutilizar dentro de un device frame.

---

### Tarea 2 — Crear device/laptop mockup

Crear un componente reutilizable que pueda envolver contenido.

Debe aceptar children:

```tsx
<DeviceMockup>
  <DashboardMockupCompact />
</DeviceMockup>
```

---

### Tarea 3 — Crear sección Laptop/System Showcase

Crear sección con:

- eyebrow
- heading
- paragraph
- device mockup
- support cards opcionales

---

### Tarea 4 — Integrar en home

Agregar la sección después del hero o donde tenga más sentido en la home actual.

No mover demasiadas secciones en esta fase.

---

### Tarea 5 — Responsive

Asegurar que el device mockup:

- no genere overflow
- no sea demasiado pequeño
- no corte contenido importante
- se vea limpio en mobile

---

## 18. No tocar

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

## 19. Criterios de aceptación

La fase se acepta si:

1. La home tiene una sección de laptop/system showcase.
2. El mockup muestra una vista creíble de Gralith.
3. La sección se integra con la estética dark.
4. El device mockup es reutilizable.
5. El contenido no se ve como imagen pegada.
6. Motion es sutil.
7. Mobile funciona sin overflow.
8. No se tocaron archivos protegidos.
9. `npm run lint` pasa.
10. `npm run build` pasa.

---

## 20. Validación

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

## 21. Rama sugerida

```bash
git checkout main
git pull origin main
git checkout -b gralith-laptop-showcase-v1
```

Commit sugerido:

```bash
git add .
git commit -m "feat: add Gralith laptop showcase section"
git push -u origin gralith-laptop-showcase-v1
```

---

## 22. Prompt para Codex

```txt
Read AGENTS.md.

Implement Gralith Laptop / System Showcase V1 using docs/specs/gralith-laptop-showcase-v1.md as the source of truth.

Goal:
Add a dark product-led laptop/device showcase section to the home page that displays the Gralith system in a credible, premium way.

Context:
The home page now has a dark hero, dark header/logo, and a global dark visual direction. The next step is to show Gralith as a real product/system through a laptop or browser mockup. The hero already has a compact input -> system -> output visual, so this section should be a more concrete product showcase.

Important:
- Follow the spec closely.
- Focus on the home page `/`.
- Do not redesign the hero.
- Do not redesign internal pages.
- Do not touch .env.local.
- Do not touch /api/contact.
- Do not modify Resend logic.
- Do not touch DNS, analytics or deployment config.
- Do not install dependencies.
- Use existing dark tokens/primitives.
- Keep npm run lint passing.
- Keep npm run build passing.

Expected work:
1. Audit existing dashboard/legal dashboard mockup components.
2. Reuse or adapt an existing dashboard mockup where possible.
3. Create a reusable DeviceMockup/LaptopMockup component if needed.
4. Create a Laptop/System Showcase section with:
   - eyebrow
   - heading
   - paragraph
   - large device mockup
   - optional supporting metric/activity cards
5. Suggested heading:
   “La operación del despacho en una sola vista.”
6. Suggested paragraph:
   “Consulta expedientes activos, próximos vencimientos, documentos vinculados y actividad reciente sin reconstruir la operación desde mensajes, carpetas o memoria.”
7. Keep motion subtle: reveal, slight scale/fade, small stagger only.
8. Ensure mobile layout does not overflow.

Final report:
- files created
- files modified
- section placement
- mockup components reused/created
- motion behavior
- responsive behavior
- confirmation that protected files were untouched
- lint/build result
```
