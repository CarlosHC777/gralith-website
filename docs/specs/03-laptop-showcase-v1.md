# Phase 3 — Laptop Showcase V1

## Branch

```bash
git checkout main
git pull origin main
git checkout -b laptop-showcase-v1
```

## Goal

Create a product-led laptop/device showcase section that displays the Gralith system.

## Scope

This phase adds or replaces one homepage section below the hero. It should show the product/system inside a laptop or device frame.


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

1. Create a reusable `DeviceMockup` or `LaptopMockup`.
2. Create `LaptopShowcaseSection`.
3. Display a Gralith dashboard/system view inside the laptop screen.
4. Add optional supporting cards: active cases, pending tasks, activity, audit.
5. Use subtle scale/fade reveal for the laptop.
6. Use stagger for supporting cards.
7. Optional very light parallax via the motion primitive.
8. Keep the section premium and readable.
9. Do not make the section noisy with too many ornaments.

## Acceptance criteria

- A laptop/device mockup exists and is reusable.
- The product/system is visible and believable.
- Supporting cards reinforce product value.
- Motion is subtle.
- Mobile version is clean.
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
git commit -m "laptop showcase v1"
git push -u origin laptop-showcase-v1
```

## Prompt for Codex

```txt
Read AGENTS.md.

Implement Phase 3 — Laptop Showcase V1.

Goal:
Create a product-led laptop/device showcase section that displays the Gralith system clearly and elegantly.

Tasks:
1. Create a reusable DeviceMockup or LaptopMockup component.
2. Create a LaptopShowcaseSection for the homepage.
3. Show a Gralith dashboard/system view inside the laptop screen.
4. Add optional supporting cards around the mockup:
   - expedientes activos
   - tareas por vencer
   - actividad reciente
   - auditoría trazable
5. Use subtle motion:
   - laptop fade/scale in
   - supporting cards stagger
   - optional very slight parallax
6. Keep background calm and premium.
7. Do not place ornaments inside the laptop screen.
8. Ensure mobile layout is clean and not cramped.
9. Do not touch .env.local, /api/contact, Resend, DNS, analytics or deployment config.
10. Run npm run lint and npm run build.

Final report:
- files created
- files modified
- device/mockup implementation
- motion behavior
- mobile behavior
- lint/build result
```
