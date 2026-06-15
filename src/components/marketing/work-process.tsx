import { DarkCard } from "@/components/marketing/shared/dark-card";
import { SectionReveal } from "@/components/motion/section-reveal";

const steps = [
  [
    "01",
    "Diagnóstico",
    "Mapeamos procesos, herramientas, dolores y puntos de control.",
  ],
  [
    "02",
    "Diseño",
    "Definimos arquitectura operativa, módulos, reglas y datos clave.",
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
];

export function WorkProcess() {
  return (
    <div className="relative mt-10 grid gap-4 md:mt-12 md:grid-cols-4">
      <div className="absolute left-0 right-0 top-7 hidden h-px bg-[var(--gralith-dark-border)] md:block" />
      {steps.map(([step, title, description], index) => (
        <SectionReveal
          key={step}
          delay={index * 90}
          className="relative md:min-h-60"
        >
          <DarkCard className="h-full p-5">
            <div className="flex size-14 items-center justify-center rounded-full border border-[var(--gralith-dark-border-garnet)] bg-[var(--gralith-garnet-soft-fill)] text-sm font-semibold text-[var(--gralith-dark-text)] shadow-sm">
              {step}
            </div>
            <h3 className="mt-6 text-xl font-semibold tracking-normal text-[var(--gralith-dark-text)] md:mt-8">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[var(--gralith-dark-text-secondary)]">
              {description}
            </p>
          </DarkCard>
        </SectionReveal>
      ))}
    </div>
  );
}
