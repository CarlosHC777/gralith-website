# Phase 2 — Home Hero Narrative V1

## Branch

```bash
git checkout main
git pull origin main
git checkout -b home-hero-narrative-v1
```

## Goal

Redesign only the home hero into a stronger editorial/product narrative.

## Scope

This phase touches the home hero only. It should not redesign the whole home page or downstream pages.


## Protected areas

Do not touch:

- `.env.local`
- `/api/contact`
- Resend logic
- `RESEND_API_KEY`
- DNS / domain configuration
- Vercel Analytics
- deployment config unless import paths require harmless updates

Keep:

- `npm run lint` passing
- `npm run build` passing
- existing routes working
- current Gralith brand identity


## Tasks

1. Build a stronger hero with left-side copy and right-side system visual.
2. Use `SplitHeadline` for line-by-line title reveal.
3. Use subtle reveal/stagger for paragraph and CTAs.
4. Right visual: input → Gralith system → output.
5. Inputs: WhatsApp, Correo, Archivos, Agenda.
6. Outputs: Expedientes, Tareas, Auditoría, Búsqueda.
7. Keep the visual clean and balanced.
8. Avoid heavy backgrounds behind the H1.
9. No big garnet ornaments behind hero text.
10. Keep the hero responsive and clear on mobile.

## Acceptance criteria

- Home hero feels stronger and clearer.
- H1 is dominant and readable.
- Motion is subtle and not distracting.
- Right-side system visual is clean.
- No horizontal overflow.
- Other sections remain mostly unchanged.
- Lint/build pass.


## Validation

Run:

```bash
npm run lint
npm run build
npm run dev
```

Check routes as applicable:

```txt
/
/despachos-juridicos
/automatizacion-de-procesos
/contacto
```

Check responsive widths:

```txt
390px
430px
768px
1024px
desktop
```


## Commit suggestion

```bash
git add .
git commit -m "home hero narrative v1"
git push -u origin home-hero-narrative-v1
```

## Prompt for Codex

```txt
Read AGENTS.md.

Implement Phase 2 — Home Hero Narrative V1.

Goal:
Redesign only the home hero into a stronger editorial/product narrative. Do not redesign the rest of the site.

Hero requirements:
- Left column: Gralith brand lockup if needed, strong headline, short supporting copy, primary CTA, secondary CTA.
- Right column: clean input → system → output visual.
- Inputs: WhatsApp, Correo, Archivos, Agenda.
- Center: Sistema Gralith.
- Outputs: Expedientes, Tareas, Auditoría, Búsqueda.

Motion requirements:
- Use SplitHeadline for line-by-line title reveal.
- Paragraph fades up.
- CTAs stagger subtly.
- Visual nodes/cards reveal sequentially.
- Respect reduced motion.

Visual constraints:
- No noisy background behind H1.
- No large garnet ornaments behind hero text.
- Keep the hero premium, sober and product-led.
- Keep the process/system visual clean.

Do not touch .env.local, /api/contact, Resend, DNS, analytics or deployment config.

Validate:
- npm run lint
- npm run build
- / on desktop/tablet/mobile

Final report:
- files modified
- components created
- motion used
- responsive behavior
- lint/build result
```
