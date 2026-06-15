# Phase 4 — Dynamic Operations Wall V1

## Branch

```bash
git checkout main
git pull origin main
git checkout -b dynamic-operations-wall-v1
```

## Goal

Create the strongest dynamic narrative section: scattered inputs becoming a central, traceable operation.

## Scope

This phase focuses on a single dynamic section. It should be the most expressive visual moment of the site, but still controlled and sober.


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

1. Build a section around the narrative: dispersión → sistema central → operación trazable.
2. Use cards for scattered inputs.
3. Use a central Gralith system panel.
4. Use output cards for organized operation.
5. Add controlled stagger/reveal motion.
6. Optional connecting lines if clean.
7. Avoid random floating elements.
8. Avoid excessive background noise.
9. Ensure mobile becomes a clear stacked narrative.

## Acceptance criteria

- Section tells a clear visual story.
- It is dynamic but not chaotic.
- Cards and connectors are readable.
- Mobile is clean.
- Other pages are not affected.
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
git commit -m "dynamic operations wall v1"
git push -u origin dynamic-operations-wall-v1
```

## Prompt for Codex

```txt
Read AGENTS.md.

Implement Phase 4 — Dynamic Operations Wall V1.

Goal:
Create the strongest dynamic narrative section on the homepage: scattered operational inputs becoming a central, traceable Gralith system.

Narrative:
- Dispersión
- Sistema central
- Operación trazable

Tasks:
1. Create or refine the Dynamic Operations Wall section.
2. Use input cards such as WhatsApp, Correo, Archivos, Agenda.
3. Use a central Gralith system panel.
4. Use output cards such as Expedientes, Tareas, Auditoría, Búsqueda.
5. Add controlled reveal/stagger motion.
6. Add connecting lines only if they look clean and intentional.
7. Avoid random floating elements.
8. Avoid visual noise behind text.
9. Make mobile a clear stacked sequence.
10. Respect reduced motion.
11. Do not touch .env.local, /api/contact, Resend, DNS, analytics or deployment config.
12. Run npm run lint and npm run build.

Final report:
- files created/modified
- section narrative
- motion used
- mobile behavior
- lint/build result
```
