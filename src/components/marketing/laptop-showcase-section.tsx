import {
  Activity,
  CheckCircle2,
  Clock3,
  FolderKanban,
  Search,
  ShieldCheck,
} from "lucide-react";

import { LaptopMockup } from "@/components/marketing/mockups/laptop-mockup";
import { DarkCard } from "@/components/marketing/shared/dark-card";
import { SectionHeading } from "@/components/marketing/shared/section-heading";
import { SectionReveal } from "@/components/motion/section-reveal";
import { StaggerContainer } from "@/components/motion/stagger-container";

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

function SystemScreen() {
  return (
    <div className="flex h-full min-w-0 bg-[var(--gralith-dark-panel)] text-[7px] leading-tight text-[var(--gralith-dark-text)] sm:text-[9px] md:text-[11px]">
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

      <div className="min-w-0 flex-1 p-[3%]">
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
          <div className="overflow-hidden rounded border border-[var(--gralith-dark-border)]">
            <div className="grid grid-cols-[0.75fr_1.25fr_1fr_0.6fr] gap-2 border-b border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-surface)] px-[3%] py-[2%] font-medium uppercase tracking-[0.12em] text-[var(--gralith-dark-text-muted)]">
              <span>ID</span>
              <span>Asunto</span>
              <span>Estado</span>
              <span>Fecha</span>
            </div>
            {cases.map(([id, name, status, date]) => (
              <div
                key={id}
                className="grid grid-cols-[0.75fr_1.25fr_1fr_0.6fr] items-center gap-2 border-b border-[var(--gralith-dark-border)] px-[3%] py-[2.5%] last:border-b-0"
              >
                <span className="font-medium text-[var(--gralith-garnet-muted)]">{id}</span>
                <span className="truncate">{name}</span>
                <span className="truncate rounded-full bg-[var(--gralith-garnet-soft-fill)] px-1.5 py-1 text-[var(--gralith-dark-text-secondary)]">
                  {status}
                </span>
                <span className="text-[var(--gralith-dark-text-muted)]">{date}</span>
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
  );
}

export function LaptopShowcaseSection() {
  return (
    <section className="overflow-hidden border-y border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-base)] px-4 py-16 text-[var(--gralith-dark-text)] sm:px-6 md:py-20">
      <div className="mx-auto max-w-6xl min-w-0">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[0.64fr_0.36fr] lg:items-start">
          <SectionReveal>
            <SectionHeading
              eyebrow="Producto en operación"
              title="Un sistema visible para coordinar casos, documentos y actividad."
              description="La información clave del despacho se concentra en una vista clara: expedientes, tareas, auditoría y búsqueda para operar con menos fricción."
              variant="dark"
            />
          </SectionReveal>

          <StaggerContainer className="grid gap-3 sm:grid-cols-2" delay={120} step={70}>
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

        <SectionReveal variant="scale" delay={180} className="mt-10">
          <LaptopMockup>
            <SystemScreen />
          </LaptopMockup>
        </SectionReveal>
      </div>
    </section>
  );
}
