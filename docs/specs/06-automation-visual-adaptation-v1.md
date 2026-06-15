# Phase 6 — Automation Visual Adaptation V1

## Branch

```bash
git checkout main
git pull origin main
git checkout -b automation-visual-adaptation-v1
```

## Goal

Adapt the visual system to `/automatizacion-de-procesos` so it no longer feels secondary.

## Scope

This phase only touches the automation page and related components.


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

1. Review the automation page.
2. Apply the same visual language used in home and legal.
3. Keep the page clear and conversion-oriented.
4. Add motion only where it supports comprehension.
5. Use background variants conservatively.
6. Avoid unnecessary visual complexity.
7. Preserve route and SEO behavior.

## Acceptance criteria

- Automation page feels consistent with the new visual system.
- It remains clear and readable.
- Motion is subtle.
- No horizontal overflow.
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
git commit -m "automation visual adaptation v1"
git push -u origin automation-visual-adaptation-v1
```


Read AGENTS.md.

Implement Phase 6 — Automation Visual Adaptation V1.

Goal:
Adapt the visual system to /automatizacion-de-procesos so the page feels consistent with the updated Gralith website and no longer feels secondary.

Tasks:
1. Review the automation page structure and components.
2. Apply shared section, motion and background primitives where useful.
3. Keep the page clear, sober and conversion-oriented.
4. Do not over-animate.
5. Avoid noisy backgrounds behind text.
6. Preserve SEO and route behavior.
7. Check mobile and desktop.
8. Do not touch .env.local, /api/contact, Resend, DNS, analytics or deployment config.
9. Run npm run lint and npm run build.

Final report:
- files modified
- visual changes made
- motion/background components used
- mobile behavior
- lint/build result
```
