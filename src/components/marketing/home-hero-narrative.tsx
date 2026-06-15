import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { HeroProcessFlow } from "@/components/marketing/mockups/hero-process-flow";
import { SectionReveal } from "@/components/motion/section-reveal";
import { SplitHeadline } from "@/components/motion/split-headline";
import { StaggerContainer } from "@/components/motion/stagger-container";
import { Button } from "@/components/ui/button";

export function HomeHeroNarrative() {
  return (
    <section className="relative overflow-hidden px-4 pb-14 pt-10 sm:px-6 md:pb-20 md:pt-16">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
        <div className="relative z-10 min-w-0">
          <SectionReveal>
            <div className="mb-5 flex justify-start">
              <Image
                src="/brand/gralith-logo-horizontal.png"
                alt="Gralith"
                width={666}
                height={375}
                sizes="(max-width: 640px) 132px, (max-width: 1024px) 172px, 204px"
                className="h-auto w-32 max-w-[46vw] object-contain sm:w-36 md:w-44 lg:w-52"
                priority
              />
            </div>
          </SectionReveal>

          <SplitHeadline
            as="h1"
            lines={["Automatización", "que ordena", "la operación diaria."]}
            className="max-w-4xl font-heading text-4xl font-semibold leading-[1.06] tracking-normal text-foreground sm:text-5xl md:text-6xl md:leading-[1.02]"
          />

          <SectionReveal delay={120}>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
              Gralith convierte mensajes, archivos, agenda y actividad del equipo en
              un sistema operativo claro: expedientes visibles, tareas trazables,
              auditoría y búsqueda en un solo lugar.
            </p>
          </SectionReveal>

          <StaggerContainer
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            childClassName="sm:w-auto"
            delay={180}
            step={80}
          >
            <Button asChild size="lg" className="h-11 w-full rounded-md px-5 sm:w-auto">
              <Link href="/contacto">
                Solicitar diagnóstico
                <ArrowRight data-icon="inline-end" className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 w-full rounded-md px-5 sm:w-auto"
            >
              <Link href="/despachos-juridicos">Ver Gralith Legal</Link>
            </Button>
          </StaggerContainer>
        </div>

        <SectionReveal delay={160} className="relative z-10 min-w-0">
          <HeroProcessFlow />
        </SectionReveal>
      </div>
    </section>
  );
}
