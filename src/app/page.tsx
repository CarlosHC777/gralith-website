import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ChartNoAxesCombined,
  ClipboardCheck,
  Files,
  Network,
} from "lucide-react";

import { CTASection } from "@/components/marketing/cta-section";
import { FeatureCard } from "@/components/marketing/feature-card";
import { Hero } from "@/components/marketing/hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Automatización de procesos para equipos profesionales",
  description:
    "Gralith diseña sistemas para centralizar información, reducir tareas manuales y dar visibilidad operativa a equipos profesionales.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Gralith"
        title="Automatización de procesos para equipos profesionales"
        description="Diseñamos sistemas operativos internos para centralizar información, reducir tareas manuales y dar visibilidad real a la operación diaria."
        ctaLabel="Solicitar diagnóstico"
        secondaryLabel="Ver Gralith Legal"
        secondaryHref="/despachos-juridicos"
      />

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Qué resolvemos"
            title="La operación deja de depender de memoria, mensajes y hojas sueltas."
            description="Gralith convierte procesos repetitivos en flujos claros: datos en un solo lugar, responsabilidades visibles y seguimiento sin persecución manual."
          />
          <div className="grid gap-4 md:grid-cols-2">
            <FeatureCard
              icon={Network}
              title="Centralización"
              description="Clientes, casos, documentos, tareas y actividad organizada en una fuente de verdad para el equipo."
            />
            <FeatureCard
              icon={ClipboardCheck}
              title="Ejecución consistente"
              description="Flujos definidos para que cada etapa tenga responsables, fechas, estados y evidencia."
            />
            <FeatureCard
              icon={ChartNoAxesCombined}
              title="Visibilidad operativa"
              description="Indicadores y trazabilidad para detectar bloqueos, carga de trabajo y prioridades reales."
            />
            <FeatureCard
              icon={Files}
              title="Menos trabajo manual"
              description="Automatizaciones para capturar, buscar, clasificar y mover información sin fricción administrativa."
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary/55 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <SectionHeading
            eyebrow="Primera vertical"
            title="Gralith Legal inicia con despachos jurídicos."
            description="Una solución para ordenar expedientes, documentos, agenda, comunicación y actividad del despacho en un sistema operativo único."
          />
          <Button asChild variant="outline" size="lg" className="h-11 rounded-md">
            <Link href="/despachos-juridicos">
              Explorar solución
              <ArrowRight data-icon="inline-end" className="size-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Cómo trabajamos"
            title="Del diagnóstico al seguimiento operativo."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              [
                "01",
                "Diagnóstico",
                "Mapeamos procesos, herramientas, dolores y puntos de control.",
              ],
              [
                "02",
                "Diseño",
                "Definimos la arquitectura operativa, módulos y datos clave.",
              ],
              [
                "03",
                "Automatización",
                "Construimos flujos, integraciones y vistas para el equipo.",
              ],
              [
                "04",
                "Seguimiento",
                "Ajustamos con métricas, adopción y mejora continua.",
              ],
            ].map(([step, title, description]) => (
              <div key={step} className="rounded-lg border border-border bg-card p-5">
                <p className="text-sm font-semibold text-primary">{step}</p>
                <h3 className="mt-6 text-lg font-medium">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
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
