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
      title="Automatización operativa para despachos jurídicos"
      description="Centraliza expedientes, documentos, agenda, actividad y seguimiento en un sistema diseñado para dar visibilidad real a la operación diaria del despacho."
      ctaLabel="Solicitar diagnóstico operativo"
      secondaryLabel="Ver módulos"
      secondaryHref="#modulos"
      visual={<LegalSystemMap />}
    />
  );
}

export function LegalDashboardSection() {
  return (
    <section className="px-4 pb-16 sm:px-6 md:pb-20">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <LegalDashboardMockup />
        </SectionReveal>
      </div>
    </section>
  );
}

export function LegalProblemSection() {
  return (
    <section className="px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionReveal>
          <SectionHeading
            eyebrow="Problema operativo"
            title="Cuando la operación depende de mensajes, carpetas y memoria, el despacho pierde visibilidad."
            description="El trabajo jurídico cotidiano suele avanzar entre herramientas que no fueron diseñadas para explicar qué está pasando en cada expediente."
          />
        </SectionReveal>
        <div className="grid gap-3">
          {legalPainPoints.map((point, index) => (
            <SectionReveal
              key={point}
              delay={index * 70}
              className="flex gap-3 rounded-lg border border-border bg-card p-4 text-sm leading-6 text-muted-foreground"
            >
              <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
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
    <section className="bg-secondary/55 px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <SectionHeading
            eyebrow="Antes y después"
            title="De herramientas dispersas a una operación trazable."
            description="Gralith Legal no reemplaza el criterio del equipo: ordena la información para que el seguimiento sea más claro."
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
    <section id="modulos" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <SectionHeading
            eyebrow="Módulos"
            title="Una base operativa para centralizar el trabajo del despacho."
            description="Cada módulo responde a una parte concreta de la operación: clientes, expedientes, documentos, agenda, actividad, búsqueda y control."
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
    <section className="bg-secondary/55 px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <SectionHeading
            eyebrow="Casos de uso"
            title="Casos de uso iniciales."
            description="Puntos prácticos donde un sistema operativo legal puede empezar a generar orden sin prometer atajos irreales."
          />
        </SectionReveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {legalUseCases.map(({ title, description, icon: Icon }, index) => (
            <SectionReveal
              key={title}
              delay={index * 70}
              className="rounded-lg border border-border bg-card p-5"
            >
              <div className="flex size-10 items-center justify-center rounded-md bg-accent text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-normal">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
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
    <section className="px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <SectionHeading
            eyebrow="Implementación"
            title="Un proceso gradual para ordenar primero y automatizar después."
            description="La implementación se enfoca en una primera versión útil, adoptable y conectada al flujo real del despacho."
          />
        </SectionReveal>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {legalProcessSteps.map(([step, title, description], index) => (
            <SectionReveal
              key={step}
              delay={index * 90}
              className="rounded-lg border border-border bg-card p-5 md:min-h-64"
            >
              <p className="text-sm font-semibold text-primary">{step}</p>
              <h3 className="mt-6 text-xl font-semibold tracking-normal">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
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
    <section className="bg-secondary/55 px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
        <SectionReveal>
          <SectionHeading
            eyebrow="Para quién"
            title="Pensado para despachos que quieren operar con más claridad."
            description="Funciona especialmente bien cuando el equipo ya siente que los expedientes, documentos y pendientes necesitan más estructura."
          />
          <div className="mt-8 grid gap-3">
            {legalAudiences.map((item) => (
              <div key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                <Users className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </SectionReveal>
        <SectionReveal delay={120} className="rounded-lg border border-border bg-card p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Principios de trabajo
          </p>
          <h2 className="mt-4 font-heading text-3xl font-semibold tracking-normal">
            Tecnología con criterio operativo.
          </h2>
          <div className="mt-8 grid gap-4">
            {legalPrinciples.map((item) => (
              <div key={item} className="border-l border-primary/35 pl-4 text-sm leading-6 text-muted-foreground">
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
    <section className="px-4 py-16 sm:px-6 md:py-24">
      <SectionReveal className="mx-auto grid max-w-6xl gap-8 border-y border-border py-12 md:grid-cols-[1fr_auto] md:items-center">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Siguiente paso
          </p>
          <h2 className="mt-4 font-heading text-3xl font-semibold tracking-normal md:text-4xl">
            Agenda un diagnóstico operativo gratuito.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Revisamos el flujo actual de tu despacho y detectamos oportunidades concretas
            para centralizar información, reducir tareas manuales y mejorar la visibilidad
            de expedientes.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
          <Button asChild size="lg" className="h-11 w-full rounded-md px-5 sm:w-auto">
            <Link href="/contacto">
              Agendar diagnóstico
              <ArrowRight data-icon="inline-end" className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-11 w-full rounded-md px-5 sm:w-auto"
          >
            <a href={`mailto:${siteConfig.email}`}>Escribir por correo</a>
          </Button>
        </div>
      </SectionReveal>
    </section>
  );
}
