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
    "Automatizacion",
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
    <div className="relative mt-12 grid gap-4 md:grid-cols-4">
      <div className="absolute left-0 right-0 top-7 hidden h-px bg-border md:block" />
      {steps.map(([step, title, description]) => (
        <div key={step} className="relative rounded-lg border border-border bg-card p-5">
          <div className="flex size-14 items-center justify-center rounded-full border border-primary/25 bg-background text-sm font-semibold text-primary shadow-sm">
            {step}
          </div>
          <h3 className="mt-8 text-xl font-semibold tracking-normal">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        </div>
      ))}
    </div>
  );
}
