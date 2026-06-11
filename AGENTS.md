# AGENTS.md — Gralith Website

## Project context

Gralith is a B2B process automation company for professional teams. The first vertical is Gralith Legal, focused on operational automation for legal offices.

Production domain:

- https://gralith.com.mx

Main contact email:

- carloshc@gralith.com.mx

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Resend for contact form email delivery
- Vercel for deployment

## Core rules

- Do not expose secrets in code.
- Never commit `.env.local`.
- Do not change or remove `RESEND_API_KEY`.
- Do not break the contact form in `/contacto`.
- Do not change DNS, deployment, or email configuration from code.
- Keep `npm run lint` passing.
- Keep `npm run build` passing.
- Prefer small, reviewable changes.
- Reuse existing components when possible.

## Visual direction

The visual identity should feel:

- B2B
- sober
- premium
- precise
- operational
- trustworthy
- modern but not flashy

Use:

- off-white / light background
- dark text
- dark garnet accent
- thin borders
- subtle shadows
- generous whitespace
- structured layouts

Avoid:

- generic AI startup gradients
- excessive animation
- gamer aesthetic
- random 3D globes
- abstract illustrations without purpose
- overly playful colors
- copying a full template

## Product language

Use clear business language around:

- process automation
- centralization
- legal operations
- documents
- clients
- cases
- activity
- search
- audit trail
- roles and permissions
- operational visibility

## Contact form

The contact form uses:

- `src/app/api/contact/route.ts`
- Resend
- `RESEND_API_KEY`
- sender: `Gralith <leads@gralith.com.mx>`
- recipient: `carloshc@gralith.com.mx`

Do not modify this logic unless the task explicitly asks for contact form changes.