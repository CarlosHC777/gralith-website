# Gralith Dark Header + Original Logo V1

## 1. Resumen

Esta fase es un micro-ajuste visual previo a continuar con las fases principales del rediseño dark/product-led.

El hero oscuro ya fue implementado, pero el header todavía necesita alinearse con la decisión visual final:

```txt
Toda la página irá hacia una dirección oscura.
La navbar no necesita modo claro/adaptativo.
El logo debe usar la identidad original de Gralith, no una versión blanca generada por filtros.
```

Esta fase modifica únicamente el header/navbar y el uso del logo.

---

## 2. Contexto

Gralith tiene assets de marca en `public/brand`, incluyendo variantes del logo:

```txt
public/brand/gralith-mark.png
public/brand/gralith-logo-vertical.png
public/brand/gralith-logo-horizontal.png
```

La intención actual es que la página evolucione a una experiencia completamente oscura, con acento granate y estética product-led. Por lo tanto, no se debe crear una navbar que cambie entre modo claro y oscuro según la sección.

El problema actual:

- El header glass se ve gris cuando pasa sobre secciones claras temporales.
- El logo se ve blanco, pero el usuario quiere mantener el logo original de Gralith.
- No debe resolverse creando muchas variantes o filtros; debe usarse el asset correcto.

---

## 3. Objetivo

Implementar un header consistente para la futura página oscura:

- navbar siempre dark/glass
- fondo oscuro semitransparente suficientemente opaco
- blur sutil
- texto blanco/off-white
- CTA granate
- logo original de Gralith sin filtros blancos

---

## 4. No objetivos

Esta fase NO debe:

- rediseñar el hero
- rediseñar el resto de la home
- convertir todas las secciones a dark todavía
- modificar `/despachos-juridicos`
- modificar `/automatizacion-de-procesos`
- tocar el formulario de contacto
- tocar Resend
- tocar SEO global salvo que sea estrictamente necesario
- crear un sistema adaptativo light/dark para el header
- agregar animaciones nuevas
- instalar dependencias

---

## 5. Decisión visual

La navbar debe tener un solo modo:

```txt
Dark glass navbar permanente
```

No usar:

```txt
light navbar
adaptive navbar
logo blanco como default
logo invertido con CSS
```

---

## 6. Estilo de navbar

### Fondo

Usar un fondo oscuro semitransparente con suficiente opacidad para que no se vea gris/muddy mientras existan secciones claras abajo.

Valores sugeridos:

```txt
background: rgba(7, 7, 8, 0.76–0.86)
backdrop-blur: medium
border-bottom: rgba(255, 255, 255, 0.06–0.10)
```

Con Tailwind puede ser algo equivalente a:

```txt
bg-[#070708]/80
backdrop-blur-md
border-b border-white/10
```

Ajustar según tokens existentes de Dark Visual Foundation.

### Texto

```txt
nav text: warm white / off-white
hover: white
active: white or subtle garnet underline/accent
```

### CTA

Mantener CTA granate:

```txt
Solicitar diagnóstico
```

El CTA debe seguir siendo visible y no parecer plano sobre el navbar oscuro.

---

## 7. Logo

### Asset preferido para navbar

```txt
/brand/gralith-logo-horizontal.png
```

### Asset para favicon/compacto si aplica

```txt
/brand/gralith-mark.png
```

### Asset para hero/secciones especiales si aplica

```txt
/brand/gralith-logo-vertical.png
```

Para esta fase, el header debe usar preferentemente el logo horizontal.

---

## 8. Reglas del logo

El logo debe mostrarse como asset original.

No aplicar:

```txt
filter: invert(...)
filter: brightness(...)
filter: grayscale(...)
mix-blend-mode
mask-image para recolorear
CSS que lo vuelva blanco
```

Si el logo no se lee bien sobre el navbar oscuro, ajustar:

```txt
opacidad/fondo del navbar
padding del logo
altura del logo
```

No recolorear el logo.

---

## 9. Tamaño y espaciado del logo

El logo en navbar debe ser legible, pero no enorme.

Valores orientativos:

```txt
height desktop: 22px–30px
height mobile: 20px–26px
```

Debe mantener proporción natural.

Agregar `alt="Gralith"` si se usa `Image`.

---

## 10. Comportamiento del header

Mantener el comportamiento actual si ya funciona:

- sticky o fixed, según implementación actual
- z-index alto
- sin saltos visuales
- sin flicker
- sin cambio de modo por scroll

Si el header es fixed/sticky, asegurarse de que el hero no quede tapado.

---

## 11. Responsive

### Desktop

- Logo visible
- nav centrado o en layout actual
- CTA a la derecha
- texto legible

### Tablet

- mismo comportamiento si cabe
- evitar que el logo se aplaste

### Mobile

Si existe menú móvil:

- mantener funcionamiento actual
- dark background también en menú móvil
- logo original visible
- CTA o menú no deben cortarse

No rediseñar navegación mobile más allá de lo necesario.

---

## 12. Archivos probables

Revisar primero la arquitectura actual. Posibles archivos:

```txt
src/components/site/navbar.tsx
src/components/site/header.tsx
src/components/site/site-header.tsx
src/components/marketing/shared/logo.tsx
src/app/layout.tsx
```

Modificar solo lo necesario.

---

## 13. Tareas detalladas

### Tarea 1 — Ubicar implementación del header

Encontrar el componente real que renderiza:

- logo
- nav links
- CTA “Solicitar diagnóstico”

No modificar componentes no relacionados.

---

### Tarea 2 — Restaurar logo original

Usar el asset:

```txt
/brand/gralith-logo-horizontal.png
```

Eliminar cualquier filtro que haga el logo blanco.

Si hay un componente de logo reutilizable, actualizarlo para que use el asset original sin filtros.

---

### Tarea 3 — Navbar dark glass permanente

Aplicar un solo estado visual:

- dark glass
- blur
- border bottom sutil
- texto blanco/off-white
- CTA granate

No implementar lógica de scroll para cambiar light/dark.

---

### Tarea 4 — Ajustar opacidad

Mientras existan secciones claras abajo, usar suficiente opacidad para que el header no se vea gris.

Revisar visualmente:

```txt
hero oscuro
secciones claras actuales
scroll intermedio
```

---

### Tarea 5 — Validar responsive

Revisar:

```txt
390px
430px
768px
desktop
```

---

## 14. No tocar

No modificar:

- `.env.local`
- `/api/contact`
- Resend
- `RESEND_API_KEY`
- DNS
- Vercel Analytics
- configuración de deploy
- lógica de contacto
- contenido de páginas internas

---

## 15. Criterios de aceptación

La fase se acepta si:

1. La navbar tiene un solo modo dark/glass.
2. No existe lógica de navbar adaptativa light/dark.
3. El logo se ve como el asset original de Gralith.
4. No hay filtros que vuelvan blanco el logo.
5. El nav text es blanco/off-white.
6. El CTA sigue siendo granate.
7. La navbar no se ve gris/muddy sobre secciones claras temporales.
8. La navbar se ve bien sobre el hero oscuro.
9. Responsive funciona.
10. No se tocó `/api/contact`.
11. No se tocó `.env.local`.
12. `npm run lint` pasa.
13. `npm run build` pasa.

---

## 16. Validación

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
/automatizacion-de-procesos
/contacto
```

Revisar navbar en:

```txt
hero oscuro
scroll sobre secciones claras actuales
mobile
```

---

## 17. Rama sugerida

```bash
git checkout main
git pull origin main
git checkout -b gralith-dark-header-logo-v1
```

Commit sugerido:

```bash
git add .
git commit -m "fix: align dark header and original logo"
git push -u origin gralith-dark-header-logo-v1
```

---

## 18. Prompt para Codex

```txt
Read AGENTS.md.

Implement Gralith Dark Header + Original Logo V1 using docs/specs/gralith-dark-header-original-logo-v1.md as the source of truth.

Goal:
Make the header/navbar consistent with the future fully dark Gralith site and restore the original Gralith logo asset.

Context:
The site is moving toward a fully dark visual direction. Because the entire page will eventually be dark, we do not want an adaptive light/dark navbar. The navbar should always be dark glass. The current logo appears white, but the user wants the original Gralith logo from public/brand to be used.

Important:
- Follow the spec closely.
- Do not implement adaptive light/dark navbar behavior.
- Keep navbar always dark/glass.
- Use the original logo asset from public/brand.
- Prefer /brand/gralith-logo-horizontal.png for the navbar.
- Do not apply CSS filters that turn the logo white.
- Remove invert/brightness/grayscale/mix-blend/mask logo treatments if present.
- Do not redesign the hero.
- Do not redesign the rest of the page.
- Do not touch .env.local.
- Do not touch /api/contact.
- Do not modify Resend logic.
- Do not touch DNS, analytics or deployment config.
- Do not install dependencies.
- Keep npm run lint passing.
- Keep npm run build passing.

Expected work:
1. Locate the actual navbar/header component.
2. Restore the original logo asset in the navbar.
3. Remove any CSS treatment that makes the logo white.
4. Make the navbar a permanent dark glass header.
5. Use enough opacity so the navbar does not look gray over temporary light sections.
6. Keep nav text white/off-white and CTA garnet.
7. Check desktop, tablet and mobile.

Final report:
- files modified
- logo asset used
- filters removed, if any
- navbar styling used
- responsive behavior
- confirmation that protected files were untouched
- lint/build result
```
