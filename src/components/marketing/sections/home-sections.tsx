import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { DynamicOperationsWall } from "@/components/marketing/dynamic-operations-wall";
import { FeatureBentoGrid } from "@/components/marketing/feature-bento-grid";
import { HomeHeroNarrative } from "@/components/marketing/home-hero-narrative";
import { LaptopShowcaseSection } from "@/components/marketing/laptop-showcase-section";
import { CTASection } from "@/components/marketing/shared/cta-section";
import { SectionHeading } from "@/components/marketing/shared/section-heading";
import { WorkProcess } from "@/components/marketing/work-process";
import { SectionReveal } from "@/components/motion/section-reveal";
import { Button } from "@/components/ui/button";

export function HomeHeroSection() {
  return <HomeHeroNarrative />;
}

export function HomeDashboardSection() {
  return <LaptopShowcaseSection />;
}

export function HomeValueSection() {
  return (
    <section className="overflow-hidden border-t border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-base)] px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto grid max-w-6xl min-w-0 gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <SectionReveal>
          <SectionHeading
            eyebrow="Sistema operativo"
            title="La operación deja de vivir en memoria, mensajes y hojas sueltas."
            description="Gralith convierte procesos repetitivos en flujos claros: datos en un solo lugar, responsables visibles y seguimiento sin persecución manual."
            variant="dark"
          />
        </SectionReveal>
        <FeatureBentoGrid />
      </div>
    </section>
  );
}

export function HomeDynamicSection() {
  return <DynamicOperationsWall />;
}

export function HomeLegalVerticalSection() {
  return (
    <section className="overflow-hidden border-y border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-surface)] px-4 py-16 sm:px-6 md:py-20">
      <SectionReveal className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <SectionHeading
          eyebrow="Primera vertical"
          title="Gralith Legal inicia con despachos jurídicos."
          description="Una solución para ordenar expedientes, documentos, agenda, comunicación y actividad del despacho en un sistema operativo único."
          variant="dark"
        />
        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-11 w-full rounded-md border-[var(--gralith-dark-border)] bg-transparent text-[var(--gralith-dark-text)] hover:bg-[var(--gralith-dark-elevated)] hover:text-[var(--gralith-dark-text)] sm:w-auto"
        >
          <Link href="/despachos-juridicos">
            Explorar solución
            <ArrowRight data-icon="inline-end" className="size-4" />
          </Link>
        </Button>
      </SectionReveal>
    </section>
  );
}

export function HomeWorkProcessSection() {
  return (
    <section className="overflow-hidden bg-[var(--gralith-dark-base)] px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-6xl min-w-0">
        <SectionReveal>
          <SectionHeading
            eyebrow="Cómo trabajamos"
            title="Del diagnóstico al seguimiento operativo."
            description="Un proceso controlado para pasar de herramientas dispersas a una operación medible, adoptable y trazable."
            variant="dark"
          />
        </SectionReveal>
        <WorkProcess />
      </div>
    </section>
  );
}

export function HomeCTASection() {
  return (
    <CTASection
      title="Construyamos una operación más clara."
      description="Agenda un diagnóstico para identificar oportunidades de automatización y diseñar una primera versión útil para tu equipo."
      ctaLabel="Solicitar diagnóstico"
      variant="dark"
    />
  );
}
