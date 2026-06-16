import { OperationalRadarChart } from "@/components/marketing/diagnostic/operational-radar-chart";
import { DarkCard } from "@/components/marketing/shared/dark-card";
import { SectionHeading } from "@/components/marketing/shared/section-heading";
import { SectionReveal } from "@/components/motion/section-reveal";
import { StaggerContainer } from "@/components/motion/stagger-container";

const radarAxes = [
  { label: "Expedientes", current: 55, target: 85 },
  { label: "Documentos", current: 45, target: 80 },
  { label: "Agenda", current: 60, target: 88 },
  { label: "Trazabilidad", current: 35, target: 82 },
  { label: "Visibilidad", current: 40, target: 86 },
  { label: "Automatización", current: 25, target: 78 },
];

const diagnosticCriteria = [
  {
    title: "Orden operativo",
    description: "Qué información está dispersa, duplicada o fuera de contexto.",
  },
  {
    title: "Trazabilidad",
    description: "Qué acciones pueden reconstruirse con claridad por el equipo.",
  },
  {
    title: "Automatización",
    description: "Qué flujos conviene sistematizar primero y con menos fricción.",
  },
];

export function DiagnosticVisualsSection() {
  return (
    <section className="overflow-hidden border-y border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-base)] px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto grid max-w-6xl min-w-0 gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <div className="min-w-0">
          <SectionReveal>
            <SectionHeading
              eyebrow="Diagnóstico operativo"
              title="Primero medimos la operación. Después automatizamos."
              description="Analizamos áreas clave del despacho para detectar dispersión, cuellos de botella y oportunidades de automatización gradual. El resultado es una lectura clara de qué ordenar, qué centralizar y qué medir primero."
              variant="dark"
            />
          </SectionReveal>

          <StaggerContainer
            className="mt-8 grid gap-3"
            childClassName="min-w-0"
            delay={120}
            step={70}
          >
            {diagnosticCriteria.map((criterion) => (
              <DarkCard key={criterion.title} className="p-4">
                <h3 className="text-sm font-semibold text-[var(--gralith-dark-text)]">
                  {criterion.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--gralith-dark-text-secondary)]">
                  {criterion.description}
                </p>
              </DarkCard>
            ))}
          </StaggerContainer>
        </div>

        <SectionReveal variant="scale" delay={120}>
          <DarkCard className="min-w-0 p-4 shadow-[0_30px_120px_-80px_rgba(138,42,52,0.9)] sm:p-6">
            <div className="mb-5 flex flex-col gap-2 border-b border-[var(--gralith-dark-border)] pb-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gralith-garnet-muted)]">
                  Lectura visual
                </p>
                <h3 className="mt-2 font-heading text-xl font-semibold text-[var(--gralith-dark-text)]">
                  Estado actual vs. objetivo
                </h3>
              </div>
              <p className="max-w-xs text-sm leading-6 text-[var(--gralith-dark-text-muted)]">
                Seis áreas para priorizar sin automatizar a ciegas.
              </p>
            </div>

            <OperationalRadarChart
              axes={radarAxes}
              variant="dark"
              title="Radar de diagnóstico operativo de Gralith"
              description="Gráfico ilustrativo de diagnóstico operativo con seis criterios: expedientes, documentos, agenda, trazabilidad, visibilidad y automatización. Compara un estado actual con un estado objetivo."
            />

            <p className="sr-only">
              El radar compara un estado actual menor frente a un estado objetivo
              más alto en expedientes, documentos, agenda, trazabilidad,
              visibilidad y automatización.
            </p>
            <p className="mt-5 border-t border-[var(--gralith-dark-border)] pt-4 text-sm leading-6 text-[var(--gralith-dark-text-secondary)]">
              Ejemplo ilustrativo. Los criterios se ajustan al flujo real de
              cada despacho.
            </p>
          </DarkCard>
        </SectionReveal>
      </div>
    </section>
  );
}
