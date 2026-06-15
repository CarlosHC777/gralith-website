# Phase 1 — Motion System Base V1

## Branch

```bash
git checkout main
git pull origin main
git checkout -b motion-system-base-v1
```

## Goal

Create reusable motion primitives before redesigning any section.

## Scope

This phase should not visually redesign the site. It only creates or refactors animation primitives that later sections can reuse.


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

1. Review existing motion/reveal components.
2. Create or refine motion primitives under `src/components/motion/`.
3. Suggested components:
   - `section-reveal.tsx`
   - `split-headline.tsx`
   - `stagger-container.tsx`
   - `parallax-layer.tsx`
   - `motion-presets.ts`
4. Preserve reduced-motion support.
5. Do not use motion directly inside pages.
6. Do not redesign the hero, laptop section, or dashboard yet.
7. If a dependency is required, only `motion` is allowed and must be justified.
8. Prefer a small, reviewable implementation.

## Acceptance criteria

- Motion primitives exist and are reusable.
- Existing visuals are unchanged or minimally affected.
- Reduced-motion behavior is supported.
- No page was converted fully to a Client Component.
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
git commit -m "motion system base v1"
git push -u origin motion-system-base-v1
```

## Prompt for Codex

```txt
Read AGENTS.md.

Implement Phase 1 — Motion System Base V1.

Goal:
Create reusable motion primitives before redesigning any Gralith section. Do not make visual redesign changes in this phase.

Tasks:
1. Review existing motion/reveal components.
2. Create or refine primitives in src/components/motion/.
3. Add these primitives where useful:
   - SectionReveal
   - SplitHeadline
   - StaggerContainer
   - ParallaxLayer
   - motionPresets
4. Keep motion subtle and reusable.
5. Respect prefers-reduced-motion.
6. Do not turn full pages into Client Components.
7. Do not redesign the hero or add new visual effects yet.
8. If you need a dependency, only `motion` is allowed, and explain why.
9. Do not touch .env.local, /api/contact, Resend, DNS, analytics or deployment config.
10. Run npm run lint and npm run build.

Final report:
- files created
- files modified
- whether `motion` was added
- how reduced motion is handled
- visuals changed or unchanged
- lint/build result
```
