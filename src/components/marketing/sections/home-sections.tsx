import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionBackdrop } from "@/components/marketing/backgrounds/section-backdrop";
import { DynamicOperationsWall } from "@/components/marketing/dynamic-operations-wall";
import { FeatureBentoGrid } from "@/components/marketing/feature-bento-grid";
import { Hero } from "@/components/marketing/hero";
import { DashboardMockup } from "@/components/marketing/mockups/dashboard-mockup";
import { HeroProcessFlow } from "@/components/marketing/mockups/hero-process-flow";
import { CTASection } from "@/components/marketing/shared/cta-section";
import { SectionHeading } from "@/components/marketing/shared/section-heading";
import { WorkProcess } from "@/components/marketing/work-process";
import { SectionReveal } from "@/components/motion/section-reveal";
import { Button } from "@/components/ui/button";

export function HomeHeroSection() {
  return (
    <Hero
      eyebrow="Gralith"
      showBrandLogo
      showHexBackground
      title="Automatización de procesos para equipos profesionales"
      description="Diseñamos sistemas operativos internos para centralizar información, reducir tareas manuales y dar visibilidad real a la operación diaria."
      ctaLabel="Solicitar diagnóstico"
      secondaryLabel="Ver Gralith Legal"
      secondaryHref="/despachos-juridicos"
      visual={<HeroProcessFlow />}
    />
  );
}

export function HomeDashboardSection() {
  return (
    <SectionBackdrop className="pb-16 md:pb-20" overflow="hidden">
      <SectionReveal>
        <DashboardMockup />
      </SectionReveal>
    </SectionBackdrop>
  );
}

export function HomeValueSection() {
  return (
    <section className="px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <SectionReveal>
          <SectionHeading
            eyebrow="Sistema operativo"
            title="La operación deja de vivir en memoria, mensajes y hojas sueltas."
            description="Gralith convierte procesos repetitivos en flujos claros: datos en un solo lugar, responsables visibles y seguimiento sin persecución manual."
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
    <section className="bg-secondary/55 px-4 py-16 sm:px-6 md:py-20">
      <SectionReveal className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <SectionHeading
          eyebrow="Primera vertical"
          title="Gralith Legal inicia con despachos jurídicos."
          description="Una solución para ordenar expedientes, documentos, agenda, comunicación y actividad del despacho en un sistema operativo único."
        />
        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-11 w-full rounded-md sm:w-auto"
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
    <section className="px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <SectionHeading
            eyebrow="Cómo trabajamos"
            title="Del diagnóstico al seguimiento operativo."
            description="Un proceso controlado para pasar de herramientas dispersas a una operación medible, adoptable y trazable."
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
    />
  );
}
