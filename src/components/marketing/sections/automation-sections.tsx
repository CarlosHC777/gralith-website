import {
  BellRing,
  DatabaseZap,
  FileInput,
  GitBranch,
  ListChecks,
  MonitorCheck,
  ShieldCheck,
} from "lucide-react";

import { Hero } from "@/components/marketing/hero";
import { CTASection } from "@/components/marketing/shared/cta-section";
import { FeatureCard } from "@/components/marketing/shared/feature-card";
import { SectionHeading } from "@/components/marketing/shared/section-heading";
import { SectionReveal } from "@/components/motion/section-reveal";
import { StaggerContainer } from "@/components/motion/stagger-container";
import { automationFeatures, automationProcessSteps } from "@/content/automation";

const automationInputs = [
  { label: "Solicitudes", icon: FileInput },
  { label: "Datos", icon: DatabaseZap },
  { label: "Reglas", icon: ListChecks },
];

const automationOutputs = [
  { label: "Alertas", icon: BellRing },
  { label: "Flujos", icon: GitBranch },
  { label: "Visibilidad", icon: MonitorCheck },
];

function AutomationSystemVisual() {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card p-4 shadow-[0_24px_80px_-58px_var(--primary)] sm:p-5">
      <div className="grid gap-4 md:grid-cols-[0.86fr_1fr_0.86fr] md:items-center">
        <StaggerContainer className="grid gap-2" delay={80} step={55}>
          {automationInputs.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex min-h-11 items-center gap-3 rounded-md border border-border bg-background/80 px-3 py-2 text-sm shadow-sm"
            >
              <Icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{label}</span>
            </div>
          ))}
        </StaggerContainer>

        <SectionReveal variant="scale" delay={180}>
          <div className="rounded-md border border-primary/20 bg-primary px-5 py-6 text-center text-primary-foreground shadow-[0_16px_50px_-32px_var(--primary)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-75">
              Sistema operativo
            </p>
            <p className="mt-2 text-2xl font-semibold">Gralith</p>
            <p className="mx-auto mt-2 max-w-44 text-sm leading-6 opacity-85">
              Conecta información, reglas y responsables.
            </p>
          </div>
        </SectionReveal>

        <StaggerContainer className="grid gap-2" delay={260} step={55}>
          {automationOutputs.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex min-h-11 items-center gap-3 rounded-md border border-border bg-background/80 px-3 py-2 text-sm shadow-sm md:flex-row-reverse md:text-right"
            >
              <Icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{label}</span>
            </div>
          ))}
        </StaggerContainer>
      </div>

      <div className="mt-4 grid gap-2 border-t border-border pt-4 text-sm text-muted-foreground sm:grid-cols-3">
        {["Menos captura manual", "Responsables claros", "Seguimiento medible"].map(
          (item) => (
            <div key={item} className="flex items-center gap-2">
              <ShieldCheck className="size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{item}</span>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export function AutomationHeroSection() {
  return (
    <Hero
      eyebrow="Automatización de procesos"
      title="Sistemas operativos internos para equipos que necesitan control y escala"
      description="Diseñamos herramientas que conectan información, decisiones y responsabilidades para que la operación avance con menos fricción manual."
      ctaLabel="Solicitar diagnóstico"
      secondaryLabel="Ver enfoque"
      secondaryHref="#enfoque"
      visual={<AutomationSystemVisual />}
    />
  );
}

export function AutomationApproachSection() {
  return (
    <section id="enfoque" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <SectionHeading
            eyebrow="Enfoque"
            title="Automatización con criterio operativo, no solo herramientas."
            description="Partimos del proceso real: qué información entra, quién decide, qué debe ocurrir después y cómo se mide si la operación está bajo control."
          />
        </SectionReveal>
        <StaggerContainer className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4" delay={80} step={70}>
          {automationFeatures.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              className="h-full border border-border shadow-sm"
            />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export function AutomationProcessSection() {
  return (
    <section className="border-y border-border bg-secondary/45 px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <SectionHeading
            eyebrow="Proceso"
            title="Primero ordenar el flujo. Después automatizar con precisión."
            description="La automatización funciona mejor cuando el equipo entiende qué se está conectando, qué se elimina y cómo se dará seguimiento."
          />
        </SectionReveal>

        <StaggerContainer className="mt-10 grid gap-4 md:grid-cols-3" delay={100} step={80}>
          {automationProcessSteps.map(([number, title, copy]) => (
            <div
              key={number}
              className="rounded-lg border border-border bg-card p-5 shadow-sm md:min-h-64"
            >
              <div className="flex size-10 items-center justify-center rounded-full border border-primary/25 bg-accent text-sm font-semibold text-primary">
                {number}
              </div>
              <h2 className="mt-6 text-2xl font-semibold tracking-normal">
                {title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {copy}
              </p>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export function AutomationCTASection() {
  return (
    <CTASection
      title="Convierte procesos dispersos en una operación medible."
      description="Revisemos dónde tiene más sentido automatizar primero y qué sistema mínimo puede generar valor rápido."
      ctaLabel="Solicitar diagnóstico"
    />
  );
}
