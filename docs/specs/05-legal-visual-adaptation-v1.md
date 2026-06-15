# Phase 5 — Legal Visual Adaptation V1

## Branch

```bash
git checkout main
git pull origin main
git checkout -b legal-visual-adaptation-v1
```

## Goal

Adapt the new visual/motion language to the legal landing page without hurting clarity or conversion.

## Scope

This phase only touches `/despachos-juridicos` and legal-specific marketing components.


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

1. Review the legal landing after phases 1–4.
2. Apply the shared motion/background primitives conservatively.
3. Improve hero/dashboard/modules only where it helps clarity.
4. Keep the page commercial and readable.
5. Avoid heavy motion.
6. Avoid noisy backgrounds.
7. Preserve SEO metadata.
8. Keep CTAs visible and strong.

## Acceptance criteria

- Legal page feels consistent with home.
- Conversion clarity is preserved.
- Motion is minimal and premium.
- No excessive backgrounds.
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
git commit -m "legal visual adaptation v1"
git push -u origin legal-visual-adaptation-v1
```

## Prompt for Codex

```txt
Read AGENTS.md.

Implement Phase 5 — Legal Visual Adaptation V1.

Goal:
Adapt the new visual and motion language to /despachos-juridicos without hurting clarity or conversion.

Tasks:
1. Review the legal landing after the home visual updates.
2. Apply shared motion primitives conservatively.
3. Apply background primitives only where they improve clarity or depth.
4. Keep the legal hero clear and commercial.
5. Keep the legal dashboard/mockup clean and readable.
6. Do not make the legal page as animated as the home dynamic section.
7. Preserve SEO metadata and route structure.
8. Keep CTAs visible.
9. Check desktop and mobile.
10. Do not touch .env.local, /api/contact, Resend, DNS, analytics or deployment config.
11. Run npm run lint and npm run build.

Final report:
- files modified
- visual changes made
- motion/background components used
- mobile behavior
- lint/build result
```
