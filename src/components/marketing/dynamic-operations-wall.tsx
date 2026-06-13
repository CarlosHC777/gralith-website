import {
  CalendarDays,
  FileText,
  FolderKanban,
  Mail,
  MessageSquareText,
  Search,
  ShieldCheck,
} from "lucide-react";

import { GralithHexagonBackground } from "@/components/marketing/backgrounds/gralith-hexagon-background";
import { SectionHeading } from "@/components/marketing/section-heading";
import { SectionReveal } from "@/components/marketing/section-reveal";

const scatteredInputs = [
  { label: "WhatsApp", detail: "instrucciones y avances", icon: MessageSquareText },
  { label: "Correo", detail: "solicitudes y aprobaciones", icon: Mail },
  { label: "Archivos", detail: "versiones y evidencias", icon: FileText },
  { label: "Agenda", detail: "fechas y vencimientos", icon: CalendarDays },
];

const systemLayers = [
  { label: "Expedientes", value: "Fuente operativa", icon: FolderKanban },
  { label: "Búsqueda", value: "Contexto localizable", icon: Search },
  { label: "Auditoría", value: "Cambios trazables", icon: ShieldCheck },
];

export function DynamicOperationsWall() {
  return (
    <section className="relative overflow-hidden bg-primary px-4 py-16 text-primary-foreground sm:px-6 md:py-24">
      <GralithHexagonBackground variant="dark" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <SectionReveal>
          <SectionHeading
            eyebrow="De dispersión a sistema"
            title="La información entra por muchos canales. La operación debe responder desde uno."
            description="Gralith toma señales operativas dispersas y las convierte en vistas, responsabilidades y trazabilidad para que el equipo trabaje con menos fricción."
            className="[&_h2]:text-primary-foreground [&_p:first-child]:text-primary-foreground/70 [&_p:last-child]:text-primary-foreground/74"
          />
        </SectionReveal>

        <div className="relative min-h-[520px] overflow-hidden rounded-lg border border-primary-foreground/16 bg-primary-foreground/[0.055] p-4 shadow-[0_28px_100px_-70px_#000] sm:p-6 md:min-h-[480px]">
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-1/2 z-0 hidden h-px bg-primary-foreground/14 md:block" />
          <div className="pointer-events-none absolute bottom-[18%] left-[18%] right-[20%] z-0 hidden h-px bg-primary-foreground/10 md:block" />

          <div className="relative z-10 grid gap-4 md:grid-cols-[0.85fr_1.15fr] md:items-center">
            <div className="grid gap-3">
              {scatteredInputs.map(({ label, detail, icon: Icon }, index) => (
                <SectionReveal
                  key={label}
                  delay={index * 80}
                  className={[
                    "relative z-10 rounded-lg border border-primary-foreground/14 bg-primary-foreground/[0.075] p-4 shadow-[0_16px_50px_-42px_#000]",
                    index === 1 ? "md:translate-x-6" : "",
                    index === 2 ? "md:-translate-x-2" : "",
                  ].join(" ")}
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
                </SectionReveal>
              ))}
            </div>

            <SectionReveal delay={180} className="relative z-20">
              <div className="rounded-lg border border-primary-foreground/20 bg-[#fffcf6] p-4 text-foreground shadow-[0_24px_80px_-54px_#000] sm:p-5">
                <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                      Sistema central
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-normal">
                      Operación organizada
                    </h3>
                  </div>
                  <div className="rounded-full border border-primary/20 bg-accent px-3 py-1 text-xs font-medium text-primary">
                    Trazable
                  </div>
                </div>

                <div className="mt-5 grid gap-3">
                  {systemLayers.map(({ label, value, icon: Icon }, index) => (
                    <SectionReveal
                      key={label}
                      delay={260 + index * 90}
                      className="rounded-md border border-border bg-background/70 p-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-accent text-primary">
                          <Icon className="size-4" aria-hidden="true" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium">{label}</p>
                          <p className="text-xs text-muted-foreground">{value}</p>
                        </div>
                        <div className="ml-auto hidden h-2 w-20 rounded-full bg-primary/15 sm:block">
                          <div className="h-2 rounded-full bg-primary" style={{ width: `${74 + index * 8}%` }} />
                        </div>
                      </div>
                    </SectionReveal>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
