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
  { label: "Correos", icon: FileInput },
  { label: "Archivos", icon: DatabaseZap },
  { label: "Solicitudes", icon: ListChecks },
  { label: "Agenda", icon: BellRing },
];

const automationOutputs = [
  { label: "Tareas", icon: ListChecks },
  { label: "Reportes", icon: MonitorCheck },
  { label: "Responsables", icon: ShieldCheck },
  { label: "Seguimiento", icon: GitBranch },
];

const automationPainPoints = [
  "Información repartida entre herramientas.",
  "Aprobaciones y solicitudes sin seguimiento claro.",
  "Archivos y versiones difíciles de ubicar.",
  "Procesos repetitivos que siguen dependiendo de memoria.",
];

function AutomationSystemVisual() {
  return (
    <div className="overflow-hidden rounded-lg border border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-elevated)] p-4 text-[var(--gralith-dark-text)] shadow-[0_24px_90px_-64px_var(--gralith-garnet)] sm:p-5">
      <div className="grid gap-4 md:grid-cols-[0.86fr_1fr_0.86fr] md:items-center">
        <StaggerContainer className="grid gap-2" delay={80} step={55}>
          {automationInputs.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex min-h-11 items-center gap-3 rounded-md border border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-panel)] px-3 py-2 text-sm text-[var(--gralith-dark-text-secondary)] shadow-sm"
            >
              <Icon className="size-4 shrink-0 text-[var(--gralith-garnet-muted)]" aria-hidden="true" />
              <span>{label}</span>
            </div>
          ))}
        </StaggerContainer>

        <SectionReveal variant="scale" delay={180}>
          <div className="rounded-md border border-[var(--gralith-dark-border-garnet)] bg-[linear-gradient(135deg,var(--gralith-garnet),var(--gralith-garnet-deep))] px-5 py-6 text-center text-[var(--gralith-dark-text)] shadow-[0_18px_60px_-38px_var(--gralith-garnet)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-75">
              Sistema interno
            </p>
            <p className="mt-2 text-2xl font-semibold">Gralith</p>
            <p className="mx-auto mt-2 max-w-44 text-sm leading-6 opacity-85">
              Convierte entradas dispersas en flujos medibles.
            </p>
          </div>
        </SectionReveal>

        <StaggerContainer className="grid gap-2" delay={260} step={55}>
          {automationOutputs.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex min-h-11 items-center gap-3 rounded-md border border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-panel)] px-3 py-2 text-sm text-[var(--gralith-dark-text-secondary)] shadow-sm md:flex-row-reverse md:text-right"
            >
              <Icon className="size-4 shrink-0 text-[var(--gralith-garnet-muted)]" aria-hidden="true" />
              <span>{label}</span>
            </div>
          ))}
        </StaggerContainer>
      </div>

      <div className="mt-4 grid gap-2 border-t border-[var(--gralith-dark-border)] pt-4 text-sm text-[var(--gralith-dark-text-secondary)] sm:grid-cols-3">
        {["Menos captura manual", "Responsables claros", "Seguimiento medible"].map(
          (item) => (
            <div key={item} className="flex items-center gap-2">
              <ShieldCheck className="size-4 shrink-0 text-[var(--gralith-garnet-muted)]" aria-hidden="true" />
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
      title="Sistemas internos para operar con más claridad."
      description="Diseñamos flujos y sistemas operativos internos para centralizar información, reducir tareas manuales y dar visibilidad real a la operación diaria."
      ctaLabel="Solicitar diagnóstico"
      secondaryLabel="Ver Gralith Legal"
      secondaryHref="/despachos-juridicos"
      visual={<AutomationSystemVisual />}
      variant="dark"
    />
  );
}

export function AutomationApproachSection() {
  return (
    <section id="enfoque" className="scroll-mt-24 overflow-hidden border-t border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-surface)] px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-6xl min-w-0">
        <SectionReveal>
          <SectionHeading
            eyebrow="Enfoque"
            title="Automatización con criterio operativo, no solo herramientas."
            description="Partimos del proceso real: qué información entra, quién decide, qué debe ocurrir después y cómo se mide si la operación está bajo control."
            variant="dark"
          />
        </SectionReveal>
        <StaggerContainer className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-4" delay={60} step={55}>
          {automationPainPoints.map((point) => (
            <div
              key={point}
              className="rounded-lg border border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-panel)] p-4 text-sm leading-6 text-[var(--gralith-dark-text-secondary)]"
            >
              {point}
            </div>
          ))}
        </StaggerContainer>

        <StaggerContainer className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4" delay={120} step={70}>
          {automationFeatures.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              variant="dark"
              className="h-full"
            />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export function AutomationProcessSection() {
  return (
    <section className="overflow-hidden border-y border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-base)] px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-6xl min-w-0">
        <SectionReveal>
          <SectionHeading
            eyebrow="Proceso"
            title="Primero ordenar el flujo. Después automatizar con precisión."
            description="Primero entendemos cómo trabaja el equipo. Después diseñamos una primera versión útil, adoptable y conectada al flujo real."
            variant="dark"
          />
        </SectionReveal>

        <StaggerContainer className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4" delay={100} step={80}>
          {automationProcessSteps.map(([number, title, copy]) => (
            <div
              key={number}
              className="rounded-lg border border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-elevated)] p-5 text-[var(--gralith-dark-text)] shadow-[0_18px_60px_-54px_#000] md:min-h-64"
            >
              <div className="flex size-10 items-center justify-center rounded-full border border-[var(--gralith-dark-border-garnet)] bg-[var(--gralith-garnet-soft-fill)] text-sm font-semibold text-[var(--gralith-garnet-muted)]">
                {number}
              </div>
              <h2 className="mt-6 text-2xl font-semibold tracking-normal">
                {title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[var(--gralith-dark-text-secondary)]">
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
      title="Construyamos una operación más clara."
      description="Agenda un diagnóstico para identificar oportunidades de automatización y diseñar una primera versión útil para tu equipo."
      ctaLabel="Solicitar diagnóstico"
      variant="dark"
    />
  );
}
