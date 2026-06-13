import { Activity, CalendarDays, Search, ShieldCheck } from "lucide-react";

import { GarnetOrnaments } from "@/components/marketing/backgrounds/garnet-ornaments";
import { GralithHexagonBackground } from "@/components/marketing/backgrounds/gralith-hexagon-background";
import { SectionReveal } from "@/components/motion/section-reveal";

const cases = [
  ["EXP-1042", "Gómez / Cobranza", "En revisión", "Hoy"],
  ["EXP-1038", "Mercantil Orión", "Pendiente", "Mañana"],
  ["EXP-1027", "Contrato Norte", "Completado", "12 Jun"],
];

const metrics = [
  ["42", "expedientes activos"],
  ["18", "tareas por vencer"],
  ["96%", "documentos auditados"],
];

const activity = [
  "Documento agregado a EXP-1042",
  "Audiencia reagendada",
  "Búsqueda: contrato marco",
];

function StatusBadge({ status }: { status: string }) {
  const active = status === "En revisión";
  const done = status === "Completado";

  return (
    <span
      className={
        active
          ? "rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
          : done
            ? "rounded-full bg-emerald-950/10 px-2 py-1 text-xs font-medium text-emerald-900"
            : "rounded-full bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
      }
    >
      {status}
    </span>
  );
}

export function DashboardMockup() {
  return (
    <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
      <GarnetOrnaments className="-inset-x-4 -inset-y-16" />
      <GralithHexagonBackground variant="surface" className="-inset-x-8 -inset-y-10" />
      <div className="relative z-10 overflow-hidden rounded-lg border border-border bg-card shadow-[0_24px_90px_-60px_var(--primary)]">
        <div className="grid min-h-[420px] md:grid-cols-[13rem_1fr]">
          <aside className="hidden border-r border-border bg-secondary/45 p-4 md:block">
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground">
                G
              </div>
              <div>
                <p className="text-sm font-semibold">Gralith Legal</p>
                <p className="text-xs text-muted-foreground">Operación</p>
              </div>
            </div>
            <div className="mt-8 grid gap-2 text-sm">
              {["Expedientes", "Clientes", "Documentos", "Auditoría"].map(
                (item, index) => (
                  <div
                    key={item}
                    className={
                      index === 0
                        ? "rounded-md bg-card px-3 py-2 font-medium text-primary shadow-sm"
                        : "rounded-md px-3 py-2 text-muted-foreground"
                    }
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </aside>

          <div className="min-w-0 p-4 md:p-6">
            <div className="flex flex-col gap-4 border-b border-border pb-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Vista operativa
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-normal">
                  Expedientes y actividad
                </h2>
              </div>
              <div className="flex min-h-10 min-w-0 items-center gap-2 rounded-md border border-border bg-background px-3 text-sm text-muted-foreground md:w-72">
                <Search className="size-4" aria-hidden="true" />
                <span className="truncate">Buscar cliente, expediente o documento</span>
              </div>
            </div>

            <div className="grid gap-4 py-5 md:grid-cols-3">
              {metrics.map(([value, label], index) => (
                <SectionReveal
                  key={label}
                  delay={index * 80}
                  className="rounded-lg border border-border p-4"
                >
                  <p className="text-3xl font-semibold tracking-normal">{value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{label}</p>
                </SectionReveal>
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
              <div className="overflow-hidden rounded-lg border border-border">
                <div className="overflow-x-auto">
                  <div className="min-w-[560px] sm:min-w-[620px]">
                    <div className="grid grid-cols-[0.75fr_1.25fr_1fr_0.6fr] gap-3 border-b border-border bg-secondary/45 px-4 py-3 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                      <span>ID</span>
                      <span>Asunto</span>
                      <span>Estado</span>
                      <span>Fecha</span>
                    </div>
                    {cases.map(([id, name, status, date], index) => (
                      <SectionReveal
                        key={id}
                        delay={180 + index * 70}
                        className="grid grid-cols-[0.75fr_1.25fr_1fr_0.6fr] items-center gap-3 border-b border-border px-4 py-4 text-sm last:border-b-0"
                      >
                        <span className="font-medium text-primary">{id}</span>
                        <span>{name}</span>
                        <StatusBadge status={status} />
                        <span className="text-muted-foreground">{date}</span>
                      </SectionReveal>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border p-4">
                <div className="flex items-center gap-2">
                  <Activity className="size-4 text-primary" aria-hidden="true" />
                  <p className="font-medium">Actividad reciente</p>
                </div>
                <div className="mt-5 grid gap-4">
                  {activity.map((item, index) => (
                    <SectionReveal
                      key={item}
                      delay={260 + index * 80}
                      className="grid grid-cols-[auto_1fr] gap-3"
                    >
                      <div className="mt-1 flex size-6 items-center justify-center rounded-full border border-primary/25 bg-accent text-primary">
                        {index === 1 ? (
                          <CalendarDays className="size-3" aria-hidden="true" />
                        ) : index === 2 ? (
                          <Search className="size-3" aria-hidden="true" />
                        ) : (
                          <ShieldCheck className="size-3" aria-hidden="true" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm">{item}</p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          hace {index + 2} min
                        </p>
                      </div>
                    </SectionReveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
