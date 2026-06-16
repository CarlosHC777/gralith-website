import { OperationalRadarChart } from "@/components/marketing/diagnostic/operational-radar-chart";
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

const diagnosticNotes = [
  "Detectar dispersión entre herramientas, mensajes y archivos.",
  "Priorizar qué ordenar, qué centralizar y qué medir primero.",
  "Definir una automatización gradual, adoptable y trazable.",
];

export function LegalDiagnosticRadarSection() {
  return (
    <section className="overflow-hidden border-y border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-base)] px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto grid max-w-6xl min-w-0 gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <SectionReveal>
            <SectionHeading
              eyebrow="Diagnóstico operativo"
              title="Primero entendemos cómo opera el despacho."
              description="Evaluamos áreas clave de la operación para detectar dispersión, cuellos de botella y oportunidades de automatización gradual antes de diseñar la solución."
              variant="dark"
            />
          </SectionReveal>

          <StaggerContainer className="mt-8 grid gap-3" delay={120} step={70}>
            {diagnosticNotes.map((note) => (
              <div
                key={note}
                className="rounded-lg border border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-elevated)] p-4 text-sm leading-6 text-[var(--gralith-dark-text-secondary)] shadow-[0_16px_60px_-54px_#000]"
              >
                {note}
              </div>
            ))}
          </StaggerContainer>
        </div>

        <SectionReveal variant="scale" delay={120}>
          <div className="rounded-lg border border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-elevated)] p-4 text-[var(--gralith-dark-text)] shadow-[0_24px_90px_-68px_var(--gralith-garnet)] sm:p-6">
            <OperationalRadarChart axes={radarAxes} variant="dark" />
            <p className="mt-5 border-t border-[var(--gralith-dark-border)] pt-4 text-sm leading-6 text-[var(--gralith-dark-text-secondary)]">
              Ejemplo ilustrativo de evaluación operativa. Los criterios se ajustan
              al flujo real de cada despacho.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
