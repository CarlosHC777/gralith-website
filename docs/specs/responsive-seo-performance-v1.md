# Responsive, SEO and Performance V1 — Gralith Website

## Goal

Improve the Gralith website for production quality after Visual Polish V1.

Production site:

- https://gralith.com.mx

This phase focuses on:

- responsive polish
- SEO metadata
- Open Graph/social sharing
- performance
- accessibility basics
- form usability on mobile

Do not redesign the whole site. Polish what already exists.

## Current context

Gralith is a B2B process automation company for professional teams.

First vertical:

- Gralith Legal: operational automation for legal offices.

The contact form is already connected with Resend and sends leads to:

- carloshc@gralith.com.mx

Do not break the contact form.

## Scope

### 1. Responsive polish

Review and improve these routes:

- `/`
- `/despachos-juridicos`
- `/automatizacion-de-procesos`
- `/contacto`

Focus breakpoints:

- mobile: 360px–430px
- tablet: 768px
- desktop: 1280px+

Check:

- navbar spacing
- hero layout
- process flow layout
- dashboard mockup overflow
- bento grid stacking
- CTA buttons
- contact form spacing
- footer layout

The site should feel intentionally designed on mobile, not just squeezed.

### 2. SEO metadata

Improve metadata for each public page.

Pages:

- `/`
- `/despachos-juridicos`
- `/automatizacion-de-procesos`
- `/contacto`

Each page should have:

- unique title
- unique description
- canonical URL
- Open Graph title
- Open Graph description
- Open Graph URL
- Twitter card metadata if supported by current structure

Target positioning:

Home:
- automatización de procesos para equipos profesionales

Legal landing:
- automatización para despachos jurídicos
- software para despachos jurídicos
- gestión de expedientes legales

Process page:
- automatización de procesos
- centralización operativa
- flujos de trabajo

Contact:
- solicitar diagnóstico
- contacto Gralith

Avoid keyword stuffing. Keep language natural.

### 3. Open Graph image

Add a basic branded OG image if feasible.

It should communicate:

- Gralith
- Automatización de procesos
- gralith.com.mx

Style:

- clean
- off-white background
- dark text
- garnet accent
- no generic AI visuals

It can be implemented as a static file in `public/` or with a Next.js OG image route if simple.

### 4. Sitemap and robots

Review existing:

- `/sitemap.xml`
- `/robots.txt`

Ensure they use:

- https://gralith.com.mx

Ensure public pages are included.

### 5. Structured data

Review or add JSON-LD for:

- Organization
- WebSite
- SoftwareApplication or WebApplication if appropriate

Use Gralith as the organization name.

Use:

- https://gralith.com.mx
- carloshc@gralith.com.mx

Do not add fake address, fake phone number, fake reviews, fake ratings, or fake pricing.

### 6. Accessibility basics

Review:

- heading hierarchy
- button labels
- link text
- form labels
- focus states
- color contrast
- keyboard navigation
- aria labels only where useful

Do not overuse ARIA.

### 7. Performance

Avoid adding heavy dependencies.

Check:

- unnecessary client components
- unnecessary images
- oversized CSS
- layout shifts
- heavy animations
- components that could remain server components

Keep animations subtle and lightweight.

### 8. Contact form safety

Do not change the Resend API logic unless needed for accessibility or UX.

Do not expose:

- RESEND_API_KEY
- .env.local
- secrets

The contact form must still:

- submit to `/api/contact`
- show loading state
- show success state
- show error state
- preserve replyTo behavior

## Requirements

Before finishing:

- `npm run lint` must pass
- `npm run build` must pass
- `/` must load
- `/contacto` must load
- `/despachos-juridicos` must load
- `/automatizacion-de-procesos` must load
- `/api/contact` must remain available

## Deliverables

Report:

- files modified
- components created
- dependencies added, if any
- SEO changes made
- responsive changes made
- how to test locally
- whether lint/build passed
