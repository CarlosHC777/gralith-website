import { DatabaseZap, GitBranch, ListChecks, MonitorCheck } from "lucide-react";

import { CTASection } from "@/components/marketing/cta-section";
import { FeatureCard } from "@/components/marketing/feature-card";
import { Hero } from "@/components/marketing/hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { SectionReveal } from "@/components/marketing/section-reveal";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Automatización de procesos y flujos de trabajo",
  description:
    "Diseño de sistemas, centralización operativa e integraciones para automatizar procesos y flujos de trabajo en equipos profesionales.",
  path: "/automatizacion-de-procesos",
});

export default function AutomationPage() {
  return (
    <>
      <Hero
        eyebrow="Automatización de procesos"
        title="Sistemas operativos internos para equipos que necesitan control y escala"
        description="Diseñamos herramientas que conectan información, decisiones y responsabilidades para que la operación avance con menos fricción manual."
        ctaLabel="Solicitar diagnóstico"
      />

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
            {[
              {
                icon: ListChecks,
                title: "Procesos claros",
                description:
                  "Mapeo de etapas, responsables, reglas y puntos de control para reducir ambigüedad.",
              },
              {
                icon: DatabaseZap,
                title: "Datos conectados",
                description:
                  "Modelos de información que reemplazan duplicidad, archivos sueltos y capturas repetidas.",
              },
              {
                icon: GitBranch,
                title: "Flujos automatizados",
                description:
                  "Acciones, alertas e integraciones que ejecutan tareas repetitivas en segundo plano.",
              },
              {
                icon: MonitorCheck,
                title: "Seguimiento visible",
                description:
                  "Vistas e indicadores para saber qué está detenido, vencido o listo para avanzar.",
              },
            ].map((feature, index) => (
              <SectionReveal key={feature.title} delay={index * 80}>
                <FeatureCard {...feature} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/55 px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {[
            [
              "1",
              "Diagnosticar",
              "Entendemos el flujo actual, los sistemas existentes y las pérdidas de tiempo.",
            ],
            [
              "2",
              "Diseñar",
              "Definimos una arquitectura mínima que el equipo pueda adoptar y operar.",
            ],
            [
              "3",
              "Implementar",
              "Construimos, probamos y ajustamos con usuarios reales y métricas concretas.",
            ],
          ].map(([number, title, copy], index) => (
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

      <CTASection
        title="Convierte procesos dispersos en una operación medible."
        description="Revisemos dónde tiene más sentido automatizar primero y qué sistema mínimo puede generar valor rápido."
        ctaLabel="Solicitar diagnóstico"
      />
    </>
  );
}
