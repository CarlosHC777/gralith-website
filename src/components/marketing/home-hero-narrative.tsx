import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { DarkSectionBackdrop } from "@/components/marketing/backgrounds/dark-section-backdrop";
import { HeroProcessFlow } from "@/components/marketing/mockups/hero-process-flow";
import { SplitHeadline } from "@/components/motion/split-headline";
import { StaggerContainer } from "@/components/motion/stagger-container";
import { SectionReveal } from "@/components/motion/section-reveal";
import { Button } from "@/components/ui/button";

export function HomeHeroNarrative() {
  return (
    <DarkSectionBackdrop
      variant="hero"
      className="px-4 pb-14 pt-16 sm:px-6 md:pb-20 md:pt-20"
      contentClassName="mx-auto w-full max-w-[calc(100vw-2rem)] min-w-0 sm:max-w-6xl"
    >
      <div className="grid gap-12 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
        <div className="relative z-10 min-w-0">
          <SplitHeadline
            as="h1"
            lines={[
              "El sistema operativo",
              "para ordenar",
              "la operación diaria",
              "del despacho.",
            ]}
            className="max-w-[calc(100vw-2rem)] font-heading text-4xl font-semibold leading-[1.06] tracking-normal text-[var(--gralith-dark-text)] sm:max-w-4xl sm:text-5xl md:text-6xl md:leading-[1.02]"
          />

          <SectionReveal delay={120}>
            <p className="mt-6 max-w-[calc(100vw-2rem)] text-base leading-7 text-[var(--gralith-dark-text-secondary)] sm:max-w-2xl md:text-lg md:leading-8">
              Centraliza expedientes, documentos, agenda y actividad en una
              vista clara para que el equipo trabaje con menos fricción y más
              trazabilidad.
            </p>
          </SectionReveal>

          <StaggerContainer
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            childClassName="w-full sm:w-auto"
            delay={180}
            step={80}
          >
            <Button
              asChild
              size="lg"
              className="h-11 w-full rounded-md bg-[var(--gralith-garnet)] px-5 text-[var(--gralith-dark-text)] shadow-[0_18px_55px_-32px_var(--gralith-garnet)] hover:bg-[var(--gralith-garnet-muted)] sm:w-auto"
            >
              <Link href="/contacto">
                Solicitar diagnóstico
                <ArrowRight data-icon="inline-end" className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 w-full rounded-md border-[var(--gralith-dark-border)] bg-transparent px-5 text-[var(--gralith-dark-text)] hover:bg-[var(--gralith-dark-surface)] hover:text-[var(--gralith-dark-text)] sm:w-auto"
            >
              <Link href="/despachos-juridicos">Ver Gralith Legal</Link>
            </Button>
          </StaggerContainer>

          <StaggerContainer
            className="mt-8 flex max-w-full flex-wrap gap-2"
            delay={260}
            step={60}
          >
            {["Expedientes visibles", "Agenda centralizada", "Auditoría trazable"].map(
              (label) => (
                <span
                  key={label}
                  className="rounded-full border border-[var(--gralith-dark-border-soft)] bg-[var(--gralith-dark-surface)] px-3 py-1 text-xs font-medium text-[var(--gralith-dark-text-secondary)]"
                >
                  {label}
                </span>
              ),
            )}
          </StaggerContainer>
        </div>

        <SectionReveal delay={160} variant="scale" className="relative z-10 min-w-0">
          <HeroProcessFlow />
        </SectionReveal>
      </div>
    </DarkSectionBackdrop>
  );
}
