# Gralith Dark Visual Foundation V1

## 1. Resumen

Esta fase prepara la base visual para una evolución de Gralith hacia una estética más oscura, premium y product-led, inspirada en páginas SaaS con enfoque de producto como Linear, pero adaptada a la identidad de Gralith: granate, sobriedad, operación jurídica y software para despachos.

Esta fase **no rediseña todavía el hero, la home completa ni las páginas internas**. Su objetivo es crear la base técnica y visual para que las siguientes fases puedan construir secciones oscuras de forma coherente, sin improvisar colores, fondos, bordes o efectos.

---

## 2. Contexto del proyecto

Gralith Website ya tiene:

- Next.js App Router.
- TypeScript.
- Tailwind CSS.
- shadcn/ui.
- Resend para contacto.
- Vercel Analytics.
- SEO, sitemap, robots, Open Graph y JSON-LD.
- Identidad actual clara/off-white con acento granate.
- Logo Gralith integrado.
- Home con hero, mockup, secciones de módulos, proceso, CTA.
- Landing legal `/despachos-juridicos`.
- Página de automatización `/automatizacion-de-procesos`.
- Arquitectura reciente organizada en componentes de site, marketing, sections, motion, backgrounds y content.

El usuario quiere ahora explorar una dirección más oscura, tipo producto premium, con:

- fondo negro/carbón
- más uso del granate
- gráficos y mockups más protagonistas
- secciones con distribución más sofisticada
- animaciones de texto e imágenes
- una laptop/sistema como pieza visual importante

Antes de tocar el hero o rediseñar secciones, se necesita una base de diseño oscuro consistente.

---

## 3. Problema que resuelve esta fase

Intentar cambiar una página clara a una estética oscura sin tokens ni componentes base suele producir:

- negros improvisados
- contrastes incorrectos
- cards que se ven planas
- bordes poco visibles o demasiado fuertes
- granate mal usado
- fondos pesados
- glows exagerados
- secciones inconsistentes
- problemas en mobile
- deuda visual difícil de corregir

Esta fase evita eso creando una **fundación visual** antes de implementar el rediseño.

---

## 4. Objetivo principal

Crear una base reutilizable para futuras secciones oscuras de Gralith, incluyendo:

- tokens de color
- superficies oscuras
- bordes
- textos
- acentos granate
- glows controlados
- fondos oscuros
- cards oscuras
- reglas de contraste
- componentes primitivos reutilizables

---

## 5. No objetivos

Esta fase NO debe:

- rediseñar la home completa
- rediseñar el hero
- rediseñar `/despachos-juridicos`
- rediseñar `/automatizacion-de-procesos`
- cambiar copy principal
- cambiar CTAs
- cambiar SEO
- tocar el formulario
- tocar Resend
- tocar DNS o deploy
- meter animaciones grandes
- instalar librerías visuales pesadas
- copiar exactamente la página de Linear

---

## 6. Dirección visual

La estética oscura de Gralith debe sentirse:

```txt
premium
sobria
jurídica
tecnológica
editorial
product-led
precisa
confiable
```

No debe sentirse:

```txt
gamer
cyberpunk
neón excesivo
startup IA genérica
plantilla copiada
oscura sin jerarquía
```

---

## 7. Paleta propuesta

Los valores exactos pueden ajustarse al sistema existente, pero la dirección debe ser parecida a esto.

### Fondos

```txt
Dark base:        #070708 / #08090B
Dark surface:     #0E1013 / #111318
Elevated surface: #15171D / #181B22
Soft dark panel:  #101116
```

### Granate

```txt
Garnet primary:   #68131D / #6E1721
Garnet deep:      #3D090F
Garnet muted:     #8A2A34
Garnet soft fill: rgba(104, 19, 29, 0.18)
```

### Texto

```txt
Text primary dark:   #F7F1E8
Text secondary dark: #B8B0A6
Text muted dark:     #7F786F
Text inverse:        #14110F
```

### Bordes

```txt
Border dark:       rgba(247, 241, 232, 0.10)
Border dark soft:  rgba(247, 241, 232, 0.06)
Border garnet:     rgba(126, 28, 40, 0.40)
```

### Glows

```txt
Garnet glow soft:   rgba(104, 19, 29, 0.25)
Garnet glow strong: rgba(104, 19, 29, 0.40)
Warm glow:          rgba(247, 241, 232, 0.08)
```

---

## 8. Reglas de uso del granate

El granate debe usarse como acento estratégico, no como relleno indiscriminado.

Usar granate para:

- CTAs principales
- puntos de énfasis
- líneas activas
- badges
- glows sutiles
- highlights de mockups
- pequeñas etiquetas
- elementos del sistema central

No usar granate para:

- fondos completos de muchas secciones oscuras
- todos los bordes
- todos los íconos
- todos los textos destacados
- glows grandes detrás de cada bloque

Regla práctica:

```txt
Negro/carbón = base
Marfil = texto
Granate = énfasis
Taupe/gris = soporte
```

---

## 9. Reglas de contraste

En secciones oscuras:

- El texto principal debe tener contraste alto.
- El texto secundario debe ser legible, no demasiado gris.
- Las cards deben distinguirse del fondo.
- Los bordes deben ser visibles sin verse duros.
- Los glows deben dar profundidad, no parecer manchas.
- Nunca colocar texto importante encima de fondos ornamentales fuertes.

---

## 10. Tipografía en dark mode

No cambiar la familia tipográfica en esta fase.

Sí revisar:

- peso de headings en fondo oscuro
- line-height de H1/H2
- letter spacing de eyebrows
- contraste de párrafos
- tamaño mínimo en mobile

La estética debe seguir siendo editorial y seria.

---

## 11. Componentes sugeridos

Crear o preparar componentes base. Los nombres pueden ajustarse a la arquitectura existente.

### 11.1 `DarkSectionBackdrop`

Ruta sugerida:

```txt
src/components/marketing/backgrounds/dark-section-backdrop.tsx
```

Responsabilidad:

- envolver secciones oscuras
- aplicar fondo carbón
- controlar overflow
- permitir ornamentos opcionales
- mantener z-index correcto
- usar `pointer-events-none` en decoraciones

Props sugeridas:

```ts
variant?: "plain" | "product" | "hero" | "garnet";
children: React.ReactNode;
className?: string;
```

### 11.2 `GarnetGlow`

Ruta sugerida:

```txt
src/components/marketing/backgrounds/garnet-glow.tsx
```

Responsabilidad:

- renderizar glows controlados
- tamaños predefinidos
- posiciones seguras
- opacidad baja

Props sugeridas:

```ts
size?: "sm" | "md" | "lg";
position?: "top-right" | "bottom-left" | "center";
intensity?: "soft" | "medium";
```

### 11.3 `DarkCard`

Ruta sugerida:

```txt
src/components/marketing/shared/dark-card.tsx
```

Responsabilidad:

- card oscura reutilizable
- borde sutil
- fondo elevado
- sombras controladas
- hover opcional muy leve

Props sugeridas:

```ts
children: React.ReactNode;
className?: string;
interactive?: boolean;
```

### 11.4 `DarkEyebrow`

Opcional si ya existe `SectionHeading` o un componente similar.

Responsabilidad:

- labels tipo “SISTEMA OPERATIVO”
- uppercase
- tracking amplio
- granate o text-muted
- consistente en dark sections

---

## 12. Dónde definir tokens

Preferencia:

1. Usar CSS variables existentes en `src/app/globals.css` si ya hay un sistema de variables.
2. Si el proyecto ya usa variables shadcn, extender de forma compatible.
3. Evitar duplicar colores hardcodeados en muchos componentes.

Posible estructura:

```css
:root {
  --gralith-garnet: ...;
  --gralith-garnet-deep: ...;
  --gralith-warm: ...;
}

.dark-gralith {
  --gralith-bg-dark: ...;
  --gralith-surface-dark: ...;
  --gralith-border-dark: ...;
  --gralith-text-dark: ...;
}
```

O usar clases utilitarias si el proyecto ya lo hace así.

---

## 13. Tareas detalladas

### Tarea 1 — Auditar colores actuales

Revisar:

```txt
src/app/globals.css
src/components/marketing/**/*
src/components/site/**/*
src/components/ui/**/*
```

Identificar:

- colores granate actuales
- fondos actuales
- clases repetidas
- hardcodes que puedan volverse tokens
- patrones de cards actuales

No cambiar todo todavía. Solo preparar base.

---

### Tarea 2 — Agregar tokens oscuros

Agregar variables o utilidades para:

```txt
dark background
dark surface
elevated surface
dark border
dark muted text
garnet accent
garnet glow
warm text
```

Los tokens deben poder usarse en futuras fases sin reescribir colores.

---

### Tarea 3 — Crear primitivas oscuras

Crear componentes reutilizables para:

```txt
DarkSectionBackdrop
GarnetGlow
DarkCard
```

No necesitan estar ampliamente usados todavía. Deben compilar y estar listos para fases posteriores.

---

### Tarea 4 — Documentar uso

Agregar una nota breve en README o un comentario en el archivo de componentes explicando:

- cuándo usar dark sections
- cuándo usar granate
- cuándo evitar glows

No escribir documentación enorme. Solo suficiente para mantener consistencia.

---

### Tarea 5 — Validar que no haya regresiones

Como esta fase no rediseña páginas, el sitio debe verse prácticamente igual.

Revisar:

```txt
/
/despachos-juridicos
/automatizacion-de-procesos
/contacto
```

---

## 14. Reglas de implementación

- No hacer rediseño visible amplio.
- No aplicar dark theme global al sitio todavía.
- No convertir toda la página a negro.
- No crear una ruta nueva pública solo para probar.
- No instalar librerías nuevas.
- No tocar el formulario.
- No tocar archivos de deploy.
- No meter animaciones nuevas.
- Mantener cambios pequeños y revisables.

---

## 15. Archivos esperados

Posibles archivos modificados:

```txt
src/app/globals.css
README.md
```

Posibles archivos creados:

```txt
src/components/marketing/backgrounds/dark-section-backdrop.tsx
src/components/marketing/backgrounds/garnet-glow.tsx
src/components/marketing/shared/dark-card.tsx
```

No es obligatorio crear todos si la arquitectura existente ya tiene componentes equivalentes.

---

## 16. Criterios de aceptación

La fase se acepta si:

1. Existen tokens o utilidades claras para dark sections.
2. Existen primitivas reutilizables para secciones/cards/glows oscuros.
3. No se rediseñó la home todavía.
4. No se aplicó dark theme global.
5. No se tocaron archivos protegidos.
6. No se instalaron dependencias nuevas.
7. `npm run lint` pasa.
8. `npm run build` pasa.
9. Las rutas principales siguen funcionando.
10. El sitio queda preparado para la fase de Dark Hero Product-Led.

---

## 17. Comandos de validación

```bash
npm run lint
npm run build
npm run dev
```

Rutas a revisar:

```txt
/
/despachos-juridicos
/automatizacion-de-procesos
/contacto
```

---

## 18. Rama sugerida

```bash
git checkout main
git pull origin main
git checkout -b gralith-dark-foundation-v1
```

Commit sugerido:

```bash
git add .
git commit -m "chore: add dark visual foundation"
git push -u origin gralith-dark-foundation-v1
```

---

## 19. Prompt para Codex

```txt
Read AGENTS.md.

Implement Gralith Dark Visual Foundation V1 using docs/specs/gralith-dark-visual-foundation-v1.md as the source of truth.

Goal:
Prepare the visual foundation for future dark, product-led Gralith sections. This phase should create tokens/utilities and reusable primitives for dark sections, but it must not redesign the homepage yet.

Important:
- Follow the spec closely.
- The spec contains detailed visual direction, component suggestions and acceptance criteria.
- Do not apply a global dark theme.
- Do not redesign the hero.
- Do not redesign /despachos-juridicos.
- Do not redesign /automatizacion-de-procesos.
- Do not add new animations.
- Do not install new dependencies.
- Do not touch .env.local.
- Do not touch /api/contact.
- Do not modify Resend logic.
- Do not touch DNS, analytics or deployment config.
- Keep npm run lint passing.
- Keep npm run build passing.

Expected work:
1. Audit existing color and card/background patterns.
2. Add dark visual tokens or utilities in the most appropriate existing place.
3. Create reusable primitives if useful, such as:
   - DarkSectionBackdrop
   - GarnetGlow
   - DarkCard
4. Keep changes small and reviewable.
5. Do not make broad visible redesign changes yet.
6. Validate the main routes still work.

Final report:
- files created
- files modified
- tokens/utilities added
- components created
- whether any visible design changed
- confirmation that protected files were untouched
- lint/build result
```
