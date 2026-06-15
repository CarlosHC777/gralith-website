# Phase 7 — Responsive, Performance & QA V1

## Branch

```bash
git checkout main
git pull origin main
git checkout -b visual-responsive-performance-qa-v1
```

## Goal

Perform final visual QA, responsive cleanup, performance checks and production readiness validation.

## Scope

This phase does not introduce new design concepts. It polishes and validates everything implemented in previous visual phases.


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

1. Review all pages on desktop, tablet and mobile.
2. Fix horizontal overflow.
3. Verify motion respects reduced motion.
4. Verify backgrounds do not cover text or cards.
5. Verify laptop/mockups do not break on mobile.
6. Verify CTAs are visible.
7. Verify contact page remains calm and functional.
8. Run lint/build.
9. Prepare PR summary and validation checklist.

## Acceptance criteria

- All routes render cleanly.
- No horizontal overflow.
- Mobile is polished.
- Motion is not excessive.
- Lint/build pass.
- Ready to merge/deploy.


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
git commit -m "visual responsive performance qa v1"
git push -u origin visual-responsive-performance-qa-v1
```

## Prompt for Codex

```txt
Read AGENTS.md.

Implement Phase 7 — Responsive, Performance & QA V1.

Goal:
Perform final QA and polish after the visual narrative phases. Do not introduce new design concepts.

Tasks:
1. Review all pages:
   - /
   - /despachos-juridicos
   - /automatizacion-de-procesos
   - /contacto
2. Check responsive widths:
   - 390px
   - 430px
   - 768px
   - 1024px
   - desktop
3. Fix horizontal overflow.
4. Verify backgrounds stay behind content.
5. Verify motion respects reduced motion.
6. Verify laptop/mockups scale correctly.
7. Verify CTAs are visible.
8. Verify contact form still loads and /api/contact was not changed.
9. Run npm run lint and npm run build.
10. Prepare a final report with QA checklist.

Do not touch .env.local, Resend, DNS, analytics or deployment config.

Final report:
- fixes made
- routes checked
- responsive breakpoints checked
- accessibility/reduced motion notes
- lint/build result
- ready/not ready for merge
```
