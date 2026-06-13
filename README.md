# Gralith Website

Marketing site for Gralith, a B2B process automation company for professional teams. The first commercial vertical is Gralith Legal, focused on operational automation for legal offices.

Production domain: https://gralith.com.mx

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Vercel Analytics
- Resend for contact form email delivery
- Vercel for deployment

## Requirements

- Node.js compatible with the version used by Next.js 16
- npm
- A local `.env.local` file for secrets

## Local Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Environment Variables

Required locally and in Vercel:

```txt
RESEND_API_KEY=
```

Never commit `.env.local`, API keys, DNS settings, deployment secrets, or email provider secrets.

## Contact Form

The contact form posts to `src/app/api/contact/route.ts` and sends email through Resend.

Current delivery contract:

- sender: `Gralith <leads@gralith.com.mx>`
- recipient: `carloshc@gralith.com.mx`
- secret: `RESEND_API_KEY`

Do not modify contact delivery logic unless the task is explicitly about the contact form.

## Architecture Conventions

- `src/app` contains route composition and metadata.
- `src/components/site` contains global shell components such as navbar and footer.
- `src/components/marketing/sections` contains route-level marketing sections.
- `src/components/marketing/mockups` contains dashboard/process/system visuals.
- `src/components/marketing/backgrounds` contains reusable background primitives and ornaments.
- `src/components/marketing/shared` contains reusable marketing UI.
- `src/components/motion` contains motion primitives such as `SectionReveal`.
- `src/content` contains static marketing/navigation data when extraction improves readability.

Pages should read as section assemblies. Avoid putting large content arrays, SVG details, motion logic, or background implementation directly inside route files.

## Motion And Background Rules

- Keep motion subtle and purposeful.
- Respect `prefers-reduced-motion`.
- Keep client components isolated to motion/background primitives when possible.
- Background layers must be `pointer-events-none` and behind content.
- Use `overflow-hidden` on sections that include large ornaments.
- Avoid heavy animation libraries, particles, 3D libraries, and flashy gradients.

## Branch And PR Flow

Use small, reviewable branches:

```bash
git checkout -b descriptive-branch-name
npm run lint
npm run build
```

Open a pull request into `main`. The CI workflow runs lint and production build on PRs.

## Deploy

Deployment is handled by Vercel. Do not change DNS, analytics, email, or deployment configuration from code unless a task explicitly requires it.
