import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CTASection } from "@/components/marketing/cta-section";
import { DashboardMockup } from "@/components/marketing/dashboard-mockup";
import { DynamicOperationsWall } from "@/components/marketing/dynamic-operations-wall";
import { FeatureBentoGrid } from "@/components/marketing/feature-bento-grid";
import { Hero } from "@/components/marketing/hero";
import { HeroProcessFlow } from "@/components/marketing/hero-process-flow";
import { SectionHeading } from "@/components/marketing/section-heading";
import { SectionReveal } from "@/components/marketing/section-reveal";
import { WorkProcess } from "@/components/marketing/work-process";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Automatización de procesos para equipos profesionales",
  description:
    "Gralith diseña sistemas para centralizar información, automatizar flujos de trabajo y dar visibilidad operativa a equipos profesionales.",
  path: "/",
});

export default function Home() {
  return (
    <>
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

      <section className="pb-16 md:pb-20">
        <SectionReveal>
          <DashboardMockup />
        </SectionReveal>
      </section>

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

      <DynamicOperationsWall />

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

      <CTASection
        title="Construyamos una operación más clara."
        description="Agenda un diagnóstico para identificar oportunidades de automatización y diseñar una primera versión útil para tu equipo."
        ctaLabel="Solicitar diagnóstico"
      />
    </>
  );
}
