import {
  CalendarDays,
  FileText,
  FolderKanban,
  Mail,
  MessageSquareText,
  Search,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import { SectionHeading } from "@/components/marketing/shared/section-heading";
import { SectionReveal } from "@/components/motion/section-reveal";
import { StaggerContainer } from "@/components/motion/stagger-container";

const scatteredInputs = [
  { label: "WhatsApp", detail: "instrucciones y avances", icon: MessageSquareText },
  { label: "Correo", detail: "solicitudes y aprobaciones", icon: Mail },
  { label: "Archivos", detail: "versiones y evidencias", icon: FileText },
  { label: "Agenda", detail: "fechas y vencimientos", icon: CalendarDays },
];

const traceableOutputs = [
  { label: "Expedientes", detail: "casos y documentos centralizados", icon: FolderKanban },
  { label: "Tareas", detail: "responsables y fechas visibles", icon: Workflow },
  { label: "Auditoría", detail: "historial de cambios y acciones", icon: ShieldCheck },
  { label: "Búsqueda", detail: "contexto localizable al instante", icon: Search },
];

export function DynamicOperationsWall() {
  return (
    <section className="relative overflow-hidden bg-primary px-4 py-16 text-primary-foreground sm:px-6 md:py-24">
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:items-center">
        <SectionReveal>
          <SectionHeading
            eyebrow="Dispersión → sistema → operación trazable"
            title="Lo que entra por muchos canales termina en una operación verificable."
            description="Gralith transforma mensajes, correos, archivos y agenda en expedientes, tareas, búsqueda y auditoría para que el equipo trabaje desde una fuente común."
            className="[&_h2]:text-primary-foreground [&_p:first-child]:text-primary-foreground/70 [&_p:last-child]:text-primary-foreground/74"
          />
        </SectionReveal>

        <div className="relative overflow-hidden rounded-lg border border-primary-foreground/16 bg-primary-foreground/[0.055] p-4 shadow-[0_28px_100px_-70px_#000] sm:p-6">
          <div className="pointer-events-none absolute left-[24%] right-[24%] top-1/2 z-0 hidden h-px bg-primary-foreground/18 lg:block" />
          <div className="pointer-events-none absolute bottom-[calc(50%-4rem)] left-[calc(50%-1px)] top-[calc(50%-4rem)] z-0 hidden w-px bg-primary-foreground/12 lg:block" />

          <div className="relative z-10 grid gap-4 lg:grid-cols-[0.88fr_1fr_0.88fr] lg:items-center">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/68">
                Dispersión
              </p>
              <StaggerContainer className="grid gap-3" delay={80} step={65}>
                {scatteredInputs.map(({ label, detail, icon: Icon }) => (
                  <div
                    key={label}
                    className="relative z-10 rounded-lg border border-primary-foreground/14 bg-primary-foreground/[0.075] p-4 shadow-[0_16px_50px_-42px_#000]"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary-foreground/12 text-primary-foreground">
                        <Icon className="size-4" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-medium">{label}</p>
                        <p className="mt-1 text-sm leading-5 text-primary-foreground/68">
                          {detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </StaggerContainer>
            </div>

            <SectionReveal variant="scale" delay={160} className="relative z-20">
              <div className="rounded-lg border border-primary-foreground/20 bg-[#fffcf6] p-4 text-foreground shadow-[0_24px_80px_-54px_#000] sm:p-5">
                <div className="border-b border-border pb-4 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Sistema central
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-normal">
                    Gralith
                  </h3>
                  <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-muted-foreground">
                    Reglas, roles y actividad conectadas en una vista común.
                  </p>
                </div>

                <div className="mt-5 grid gap-3">
                  {[
                    ["Entrada registrada", "cada señal queda ligada a un expediente"],
                    ["Responsable asignado", "el equipo sabe qué sigue y quién actúa"],
                    ["Historial visible", "la operación conserva evidencia consultable"],
                  ].map(([label, detail], index) => (
                    <div
                      key={label}
                      className="grid grid-cols-[auto_1fr] gap-3 rounded-md border border-border bg-background/70 p-3"
                    >
                      <span className="mt-0.5 flex size-6 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                        {index + 1}
                      </span>
                      <div>
                        <p className="text-sm font-medium">{label}</p>
                        <p className="text-xs leading-5 text-muted-foreground">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/68 lg:text-right">
                Operación trazable
              </p>
              <StaggerContainer className="grid gap-3" delay={260} step={65}>
                {traceableOutputs.map(({ label, detail, icon: Icon }) => (
                  <div
                    key={label}
                    className="relative z-10 rounded-lg border border-primary-foreground/14 bg-primary-foreground/[0.075] p-4 shadow-[0_16px_50px_-42px_#000]"
                  >
                    <div className="flex items-start gap-3 lg:flex-row-reverse lg:text-right">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary-foreground/12 text-primary-foreground">
                        <Icon className="size-4" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-medium">{label}</p>
                        <p className="mt-1 text-sm leading-5 text-primary-foreground/68">
                          {detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
