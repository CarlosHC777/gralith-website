import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Clock3,
  FolderKanban,
  Search,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

import { LaptopMockup } from "@/components/marketing/mockups/laptop-mockup";
import { DarkCard } from "@/components/marketing/shared/dark-card";
import { SectionHeading } from "@/components/marketing/shared/section-heading";
import { SectionReveal } from "@/components/motion/section-reveal";
import { StaggerContainer } from "@/components/motion/stagger-container";
import { Button } from "@/components/ui/button";

const supportCards = [
  {
    label: "Expedientes activos",
    value: "42",
    detail: "clientes, documentos y actividad conectados",
    icon: FolderKanban,
  },
  {
    label: "Tareas por vencer",
    value: "18",
    detail: "seguimiento operativo sin persecución manual",
    icon: Clock3,
  },
  {
    label: "Actividad reciente",
    value: "hace 2 min",
    detail: "registro claro de movimientos relevantes",
    icon: Activity,
  },
  {
    label: "Auditoría trazable",
    value: "96%",
    detail: "documentos revisados con historial visible",
    icon: ShieldCheck,
  },
];

const cases = [
  ["EXP-1042", "Gómez / Cobranza", "En revisión", "Hoy"],
  ["EXP-1038", "Mercantil Orión", "Pendiente", "Mañana"],
  ["EXP-1027", "Contrato Norte", "Completado", "12 Jun"],
];

function MobileSystemScreen() {
  return (
    <div className="grid h-full min-w-0 gap-[3%] overflow-hidden bg-[var(--gralith-dark-panel)] p-[5%] text-[7px] leading-tight text-[var(--gralith-dark-text)]">
      <div className="min-w-0 border-b border-[var(--gralith-dark-border)] pb-[3%]">
        <p className="font-semibold uppercase tracking-[0.16em] text-[var(--gralith-garnet-muted)]">
          Vista operativa
        </p>
        <h3 className="mt-1 truncate text-[1.55em] font-semibold leading-none">
          Expedientes y actividad
        </h3>
      </div>

      <div className="grid min-w-0 grid-cols-3 gap-[2.5%]">
        {[
          ["42", "activos"],
          ["18", "vencen"],
          ["96%", "auditados"],
        ].map(([value, label]) => (
          <div
            key={label}
            className="min-w-0 rounded border border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-surface)] p-[10%]"
          >
            <p className="truncate text-[1.9em] font-semibold leading-none">{value}</p>
            <p className="mt-1 truncate text-[var(--gralith-dark-text-muted)]">
              {label}
            </p>
          </div>
        ))}
      </div>

      <div className="grid min-w-0 gap-[2.5%]">
        {cases.map(([id, name, status]) => (
          <div
            key={id}
            className="grid min-w-0 grid-cols-[0.72fr_1fr_auto] items-center gap-2 rounded border border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-base)] px-[3%] py-[2.5%]"
          >
            <span className="truncate font-medium text-[var(--gralith-garnet-muted)]">
              {id}
            </span>
            <span className="truncate">{name}</span>
            <span className="truncate rounded-full bg-[var(--gralith-garnet-soft-fill)] px-1.5 py-1 text-[var(--gralith-dark-text-secondary)]">
              {status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SystemScreen() {
  return (
    <>
      <div className="sm:hidden">
        <MobileSystemScreen />
      </div>
      <div className="hidden h-full min-w-0 max-w-full overflow-hidden bg-[var(--gralith-dark-panel)] text-[7px] leading-tight text-[var(--gralith-dark-text)] sm:flex sm:text-[9px] md:text-[11px]">
      <aside className="hidden w-[20%] shrink-0 border-r border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-surface)] p-[2.4%] sm:block">
        <div className="flex items-center gap-2">
          <div className="grid size-5 place-items-center rounded bg-[var(--gralith-garnet)] text-[10px] font-semibold text-[var(--gralith-dark-text)] md:size-6">
            G
          </div>
          <div className="min-w-0">
            <p className="truncate font-semibold">Gralith Legal</p>
            <p className="text-[var(--gralith-dark-text-muted)]">Operación</p>
          </div>
        </div>
        <div className="mt-[18%] grid gap-1.5">
          {["Expedientes", "Clientes", "Documentos", "Auditoría"].map(
            (item, index) => (
              <div
                key={item}
                className={
                  index === 0
                    ? "rounded bg-[var(--gralith-dark-elevated)] px-2 py-1.5 font-medium text-[var(--gralith-garnet-muted)] shadow-sm"
                    : "rounded px-2 py-1.5 text-[var(--gralith-dark-text-muted)]"
                }
              >
                {item}
              </div>
            ),
          )}
        </div>
      </aside>

      <div className="min-w-0 flex-1 overflow-hidden p-[3%]">
        <div className="flex items-start justify-between gap-3 border-b border-[var(--gralith-dark-border)] pb-[2.6%]">
          <div className="min-w-0">
            <p className="font-semibold uppercase tracking-[0.18em] text-[var(--gralith-garnet-muted)]">
              Vista operativa
            </p>
            <h3 className="mt-1 text-[1.7em] font-semibold leading-none tracking-normal">
              Expedientes y actividad
            </h3>
          </div>
          <div className="hidden min-h-7 w-[34%] items-center gap-1.5 rounded border border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-base)] px-2 text-[var(--gralith-dark-text-muted)] md:flex">
            <Search className="size-3" aria-hidden="true" />
            <span className="truncate">Buscar expediente o documento</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-[2.2%] py-[3%]">
          {[
            ["42", "expedientes activos"],
            ["18", "tareas por vencer"],
            ["96%", "documentos auditados"],
          ].map(([value, label]) => (
            <div key={label} className="rounded border border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-surface)] p-[7%]">
              <p className="text-[2.1em] font-semibold leading-none">{value}</p>
              <p className="mt-1 text-[var(--gralith-dark-text-muted)]">{label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-[2.2%] md:grid-cols-[1.35fr_0.65fr]">
          <div className="min-w-0 overflow-hidden rounded border border-[var(--gralith-dark-border)]">
            <div className="grid grid-cols-[0.75fr_1.25fr_1fr_0.6fr] gap-2 border-b border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-surface)] px-[3%] py-[2%] font-medium uppercase tracking-[0.12em] text-[var(--gralith-dark-text-muted)]">
              <span className="truncate">ID</span>
              <span className="truncate">Asunto</span>
              <span className="truncate">Estado</span>
              <span className="truncate">Fecha</span>
            </div>
            {cases.map(([id, name, status, date]) => (
              <div
                key={id}
                className="grid grid-cols-[0.75fr_1.25fr_1fr_0.6fr] items-center gap-2 border-b border-[var(--gralith-dark-border)] px-[3%] py-[2.5%] last:border-b-0"
              >
                <span className="truncate font-medium text-[var(--gralith-garnet-muted)]">{id}</span>
                <span className="truncate">{name}</span>
                <span className="truncate rounded-full bg-[var(--gralith-garnet-soft-fill)] px-1.5 py-1 text-[var(--gralith-dark-text-secondary)]">
                  {status}
                </span>
                <span className="truncate text-[var(--gralith-dark-text-muted)]">{date}</span>
              </div>
            ))}
          </div>

          <div className="hidden rounded border border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-surface)] p-[6%] md:block">
            <div className="flex items-center gap-1.5">
              <Activity className="size-3 text-[var(--gralith-garnet-muted)]" aria-hidden="true" />
              <p className="font-medium">Actividad reciente</p>
            </div>
            <div className="mt-[10%] grid gap-2.5">
              {["Documento agregado", "Audiencia reagendada", "Búsqueda guardada"].map(
                (item) => (
                  <div key={item} className="grid grid-cols-[auto_1fr] gap-2">
                    <CheckCircle2 className="mt-0.5 size-3 text-[var(--gralith-garnet-muted)]" aria-hidden="true" />
                    <div>
                      <p>{item}</p>
                      <p className="text-[var(--gralith-dark-text-muted)]">hace 2 min</p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export function LaptopShowcaseSection() {
  return (
    <section className="relative overflow-hidden border-y border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-base)] px-4 py-16 text-[var(--gralith-dark-text)] sm:px-6 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-24 h-80 bg-[radial-gradient(circle_at_50%_50%,var(--gralith-garnet-glow-soft),transparent_62%)]" />
      <div className="relative z-10 mx-auto max-w-6xl min-w-0">
        <div className="grid min-w-0 gap-8 md:grid-cols-[minmax(0,0.78fr)_auto] md:items-end">
          <SectionReveal>
            <SectionHeading
              eyebrow="Vista operativa"
              title="La operación del despacho en una sola vista."
              description="Consulta expedientes activos, próximos vencimientos, documentos vinculados y actividad reciente sin reconstruir la operación desde mensajes, carpetas o memoria."
              variant="dark"
              className="max-w-[calc(100vw-2rem)] [&_h2]:text-2xl [&_h2]:leading-tight sm:[&_h2]:text-3xl md:max-w-3xl md:[&_h2]:text-4xl"
            />
          </SectionReveal>

          <SectionReveal delay={120} className="md:justify-self-end">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 w-full rounded-md border-[var(--gralith-dark-border)] bg-transparent px-5 text-[var(--gralith-dark-text)] hover:bg-[var(--gralith-dark-elevated)] hover:text-[var(--gralith-dark-text)] sm:w-auto"
            >
              <Link href="/despachos-juridicos">
                Ver Gralith Legal
                <ArrowRight data-icon="inline-end" className="size-4" />
              </Link>
            </Button>
          </SectionReveal>
        </div>

        <SectionReveal variant="scale" delay={160} className="mt-10 md:mt-12">
          <LaptopMockup className="max-w-[calc(100vw-4rem)] sm:max-w-5xl">
            <SystemScreen />
          </LaptopMockup>
        </SectionReveal>

        <StaggerContainer className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" delay={220} step={70}>
          {supportCards.map(({ label, value, detail, icon: Icon }) => (
            <DarkCard
              key={label}
              className="p-4"
            >
              <div className="flex items-center gap-2">
                <Icon className="size-4 text-[var(--gralith-garnet-muted)]" aria-hidden="true" />
                <p className="text-sm font-medium text-[var(--gralith-dark-text)]">{label}</p>
              </div>
              <p className="mt-4 text-2xl font-semibold tracking-normal">
                {value}
              </p>
              <p className="mt-1 text-sm leading-6 text-[var(--gralith-dark-text-secondary)]">
                {detail}
              </p>
            </DarkCard>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
