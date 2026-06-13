import { Hero } from "@/components/marketing/hero";
import { CTASection } from "@/components/marketing/shared/cta-section";
import { FeatureCard } from "@/components/marketing/shared/feature-card";
import { SectionHeading } from "@/components/marketing/shared/section-heading";
import { SectionReveal } from "@/components/motion/section-reveal";
import { automationFeatures, automationProcessSteps } from "@/content/automation";

export function AutomationHeroSection() {
  return (
    <Hero
      eyebrow="Automatización de procesos"
      title="Sistemas operativos internos para equipos que necesitan control y escala"
      description="Diseñamos herramientas que conectan información, decisiones y responsabilidades para que la operación avance con menos fricción manual."
      ctaLabel="Solicitar diagnóstico"
    />
  );
}

export function AutomationApproachSection() {
  return (
    <section className="px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <SectionHeading
            eyebrow="Enfoque"
            title="Automatización con criterio operativo, no solo herramientas."
            description="Partimos del proceso real: qué información entra, quién decide, qué debe ocurrir después y cómo se mide si la operación está bajo control."
          />
        </SectionReveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {automationFeatures.map((feature, index) => (
            <SectionReveal key={feature.title} delay={index * 80}>
              <FeatureCard {...feature} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AutomationProcessSection() {
  return (
    <section className="bg-secondary/55 px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {automationProcessSteps.map(([number, title, copy], index) => (
          <SectionReveal
            key={number}
            delay={index * 90}
            className="border-l border-primary/35 pl-5"
          >
            <p className="text-sm font-semibold text-primary">{number}</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-normal">
              {title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {copy}
            </p>
          </SectionReveal>
        ))}
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
