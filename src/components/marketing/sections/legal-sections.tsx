import Link from "next/link";
import { ArrowRight, ShieldCheck, Users } from "lucide-react";

import { Hero } from "@/components/marketing/hero";
import { LegalBeforeAfter } from "@/components/marketing/legal-before-after";
import { LegalModuleGrid } from "@/components/marketing/legal-module-grid";
import { LegalDashboardMockup } from "@/components/marketing/mockups/legal-dashboard-mockup";
import { LegalSystemMap } from "@/components/marketing/mockups/legal-system-map";
import { SectionHeading } from "@/components/marketing/shared/section-heading";
import { SectionReveal } from "@/components/motion/section-reveal";
import { Button } from "@/components/ui/button";
import {
  legalAudiences,
  legalPainPoints,
  legalPrinciples,
  legalProcessSteps,
  legalUseCases,
} from "@/content/legal";
import { siteConfig } from "@/lib/site";

export function LegalHeroSection() {
  return (
    <Hero
      eyebrow="Gralith Legal"
      title="Automatización operativa para despachos jurídicos."
      description="Centraliza expedientes, documentos, agenda, actividad y seguimiento en un sistema diseñado para dar visibilidad real a la operación diaria del despacho."
      ctaLabel="Solicitar diagnóstico"
      secondaryLabel="Ver módulos"
      secondaryHref="#modulos"
      visual={<LegalSystemMap />}
      variant="dark"
    />
  );
}

export function LegalDashboardSection() {
  return (
    <section className="overflow-hidden bg-[var(--gralith-dark-base)] px-4 pb-16 sm:px-6 md:pb-20">
      <div className="mx-auto max-w-6xl min-w-0">
        <SectionReveal>
          <LegalDashboardMockup />
        </SectionReveal>
      </div>
    </section>
  );
}

export function LegalProblemSection() {
  return (
    <section className="overflow-hidden border-t border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-surface)] px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto grid max-w-6xl min-w-0 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionReveal>
          <SectionHeading
            eyebrow="Problema operativo"
            title="Cuando la operación depende de mensajes, carpetas y memoria, el despacho pierde visibilidad."
            description="El trabajo jurídico cotidiano suele avanzar entre herramientas que no fueron diseñadas para explicar qué está pasando en cada expediente."
            variant="dark"
          />
        </SectionReveal>
        <div className="grid gap-3">
          {legalPainPoints.map((point, index) => (
            <SectionReveal
              key={point}
              delay={index * 70}
              className="flex gap-3 rounded-lg border border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-elevated)] p-4 text-sm leading-6 text-[var(--gralith-dark-text-secondary)]"
            >
              <ShieldCheck className="mt-0.5 size-4 shrink-0 text-[var(--gralith-garnet-muted)]" aria-hidden="true" />
              <span>{point}</span>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LegalBeforeAfterSection() {
  return (
    <section className="overflow-hidden bg-[var(--gralith-dark-base)] px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-6xl min-w-0">
        <SectionReveal>
          <SectionHeading
            eyebrow="Antes y después"
            title="De herramientas dispersas a una operación trazable."
            description="Gralith Legal no reemplaza el criterio del equipo: ordena la información para que el seguimiento sea más claro."
            variant="dark"
          />
        </SectionReveal>
        <div className="mt-10">
          <LegalBeforeAfter />
        </div>
      </div>
    </section>
  );
}

export function LegalModulesSection() {
  return (
    <section id="modulos" className="scroll-mt-24 overflow-hidden border-y border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-surface)] px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-6xl min-w-0">
        <SectionReveal>
          <SectionHeading
            eyebrow="Módulos"
            title="Una base operativa para centralizar el trabajo del despacho."
            description="Cada módulo responde a una parte concreta de la operación: clientes, expedientes, documentos, agenda, actividad, búsqueda y control."
            variant="dark"
          />
        </SectionReveal>
        <div className="mt-10">
          <LegalModuleGrid />
        </div>
      </div>
    </section>
  );
}

export function LegalUseCasesSection() {
  return (
    <section className="overflow-hidden bg-[var(--gralith-dark-base)] px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-6xl min-w-0">
        <SectionReveal>
          <SectionHeading
            eyebrow="Casos de uso"
            title="Casos de uso iniciales."
            description="Puntos prácticos donde un sistema operativo legal puede empezar a generar orden sin prometer atajos irreales."
            variant="dark"
          />
        </SectionReveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {legalUseCases.map(({ title, description, icon: Icon }, index) => (
            <SectionReveal
              key={title}
              delay={index * 70}
              className="rounded-lg border border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-elevated)] p-5 text-[var(--gralith-dark-text)]"
            >
              <div className="flex size-10 items-center justify-center rounded-md bg-[var(--gralith-garnet-soft-fill)] text-[var(--gralith-garnet-muted)]">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-normal">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--gralith-dark-text-secondary)]">
                {description}
              </p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LegalProcessSection() {
  return (
    <section className="overflow-hidden border-y border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-surface)] px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-6xl min-w-0">
        <SectionReveal>
          <SectionHeading
            eyebrow="Implementación"
            title="Un proceso gradual para ordenar primero y automatizar después."
            description="La implementación se enfoca en una primera versión útil, adoptable y conectada al flujo real del despacho."
            variant="dark"
          />
        </SectionReveal>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {legalProcessSteps.map(([step, title, description], index) => (
            <SectionReveal
              key={step}
              delay={index * 90}
              className="rounded-lg border border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-elevated)] p-5 text-[var(--gralith-dark-text)] md:min-h-64"
            >
              <p className="text-sm font-semibold text-[var(--gralith-garnet-muted)]">{step}</p>
              <h3 className="mt-6 text-xl font-semibold tracking-normal">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--gralith-dark-text-secondary)]">
                {description}
              </p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LegalAudienceSection() {
  return (
    <section className="overflow-hidden bg-[var(--gralith-dark-base)] px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto grid max-w-6xl min-w-0 gap-10 lg:grid-cols-2">
        <SectionReveal>
          <SectionHeading
            eyebrow="Para quién"
            title="Pensado para despachos que quieren operar con más claridad."
            description="Funciona especialmente bien cuando el equipo ya siente que los expedientes, documentos y pendientes necesitan más estructura."
            variant="dark"
          />
          <div className="mt-8 grid gap-3">
            {legalAudiences.map((item) => (
              <div key={item} className="flex gap-3 text-sm leading-6 text-[var(--gralith-dark-text-secondary)]">
                <Users className="mt-0.5 size-4 shrink-0 text-[var(--gralith-garnet-muted)]" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </SectionReveal>
        <SectionReveal delay={120} className="rounded-lg border border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-elevated)] p-6 text-[var(--gralith-dark-text)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gralith-garnet-muted)]">
            Principios de trabajo
          </p>
          <h2 className="mt-4 font-heading text-3xl font-semibold tracking-normal">
            Tecnología con criterio operativo.
          </h2>
          <div className="mt-8 grid gap-4">
            {legalPrinciples.map((item) => (
              <div key={item} className="border-l border-[var(--gralith-dark-border-garnet)] pl-4 text-sm leading-6 text-[var(--gralith-dark-text-secondary)]">
                {item}
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

export function LegalCTASection() {
  return (
    <section className="overflow-hidden bg-[var(--gralith-dark-base)] px-4 py-16 sm:px-6 md:py-24">
      <SectionReveal className="mx-auto grid max-w-6xl gap-8 rounded-lg border border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-elevated)] p-6 text-[var(--gralith-dark-text)] shadow-[0_24px_90px_-70px_#000] md:grid-cols-[1fr_auto] md:items-center md:p-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gralith-garnet-muted)]">
            Siguiente paso
          </p>
          <h2 className="mt-4 font-heading text-3xl font-semibold tracking-normal md:text-4xl">
            Agenda un diagnóstico operativo gratuito.
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--gralith-dark-text-secondary)]">
            Revisamos el flujo actual de tu despacho y detectamos oportunidades concretas
            para centralizar información, reducir tareas manuales y mejorar la visibilidad
            de expedientes.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
          <Button asChild size="lg" className="h-11 w-full rounded-md bg-[var(--gralith-garnet)] px-5 text-[var(--gralith-dark-text)] hover:bg-[var(--gralith-garnet-muted)] sm:w-auto">
            <Link href="/contacto">
              Agendar diagnóstico
              <ArrowRight data-icon="inline-end" className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-11 w-full rounded-md border-[var(--gralith-dark-border)] bg-transparent px-5 text-[var(--gralith-dark-text)] hover:bg-[var(--gralith-dark-surface)] hover:text-[var(--gralith-dark-text)] sm:w-auto"
          >
            <a href={`mailto:${siteConfig.email}`}>Escribir por correo</a>
          </Button>
        </div>
      </SectionReveal>
    </section>
  );
}
