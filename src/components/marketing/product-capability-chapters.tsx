import {
  Activity,
  KeyRound,
  Link2,
  Search,
  ShieldCheck,
} from "lucide-react";
import type { ReactNode } from "react";

import { DarkCard } from "@/components/marketing/shared/dark-card";
import { StaggerContainer } from "@/components/motion/stagger-container";
import { cn } from "@/lib/utils";

type Chapter = {
  title: string;
  copy: string;
  visual: VisualType;
  className?: string;
};

type VisualType =
  | "centralization"
  | "timeline"
  | "activity"
  | "search"
  | "roles";

const chapters: Chapter[] = [
  {
    title: "Centraliza la información operativa.",
    copy: "Clientes, expedientes, documentos y tareas viven en una fuente de verdad para que el equipo sepa dónde consultar y qué sigue.",
    visual: "centralization",
    className: "lg:col-span-2",
  },
  {
    title: "Da seguimiento sin perseguir pendientes.",
    copy: "Agenda vencimientos, responsables y próximos pasos para reducir seguimiento manual y evitar que los asuntos se pierdan entre conversaciones.",
    visual: "timeline",
  },
  {
    title: "Consulta qué cambió, quién lo hizo y cuándo.",
    copy: "Registra actividad relevante para reconstruir avances, decisiones y movimientos sin depender de memoria o cadenas de mensajes.",
    visual: "activity",
  },
  {
    title: "Encuentra contexto sin saltar entre herramientas.",
    copy: "Busca clientes, expedientes y documentos desde una misma vista para recuperar información clave en segundos.",
    visual: "search",
  },
  {
    title: "Controla qué ve cada responsable.",
    copy: "Define permisos y visibilidad para socios, responsables y equipo operativo sin perder control sobre la información del despacho.",
    visual: "roles",
  },
] ;

export function ProductCapabilityChapters() {
  return (
    <StaggerContainer
      className="grid min-w-0 gap-4 lg:grid-cols-2"
      delay={80}
      step={70}
    >
      {chapters.map((chapter) => (
        <DarkCard
          key={chapter.title}
          interactive
          className={cn(
            "grid min-w-0 gap-6 overflow-hidden p-5 sm:p-6 lg:min-h-80 lg:grid-cols-[0.95fr_1.05fr] lg:items-center",
            chapter.className,
          )}
        >
          <div className="min-w-0">
            <div className="mb-5 flex size-10 items-center justify-center rounded-md bg-[var(--gralith-garnet-soft-fill)] text-[var(--gralith-garnet-muted)]">
              <ChapterIcon visual={chapter.visual} />
            </div>
            <h3 className="text-xl font-semibold leading-tight tracking-normal text-[var(--gralith-dark-text)]">
              {chapter.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[var(--gralith-dark-text-secondary)]">
              {chapter.copy}
            </p>
          </div>
          <CapabilityVisual visual={chapter.visual} />
        </DarkCard>
      ))}
    </StaggerContainer>
  );
}

function ChapterIcon({ visual }: { visual: VisualType }) {
  const className = "size-5";

  if (visual === "centralization") return <Link2 className={className} aria-hidden="true" />;
  if (visual === "timeline") return <ShieldCheck className={className} aria-hidden="true" />;
  if (visual === "activity") return <Activity className={className} aria-hidden="true" />;
  if (visual === "search") return <Search className={className} aria-hidden="true" />;
  return <KeyRound className={className} aria-hidden="true" />;
}

function CapabilityVisual({ visual }: { visual: VisualType }) {
  if (visual === "centralization") return <CentralizationVisual />;
  if (visual === "timeline") return <TimelineVisual />;
  if (visual === "activity") return <ActivityVisual />;
  if (visual === "search") return <SearchVisual />;
  return <RolesVisual />;
}

function VisualShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-w-0 rounded-lg border border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-panel)] p-4 shadow-[0_18px_60px_-52px_#000]">
      {children}
    </div>
  );
}

function CentralizationVisual() {
  const nodes = ["Cliente", "Expediente", "Documentos", "Tareas"];

  return (
    <VisualShell>
      <div className="grid gap-3">
        {nodes.map((node, index) => (
          <div key={node} className="grid grid-cols-[auto_1fr] items-center gap-3">
            <div className="grid size-7 place-items-center rounded-full border border-[var(--gralith-dark-border-garnet)] bg-[var(--gralith-garnet-soft-fill)] text-xs font-semibold text-[var(--gralith-dark-text)]">
              {index + 1}
            </div>
            <div className="rounded-md border border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-base)] px-3 py-2 text-sm text-[var(--gralith-dark-text-secondary)]">
              {node}
            </div>
          </div>
        ))}
      </div>
    </VisualShell>
  );
}

function TimelineVisual() {
  const items = [
    ["Hoy", "Responsable asignado"],
    ["Mañana", "Vencimiento visible"],
    ["Vie", "Siguiente paso"],
  ];

  return (
    <VisualShell>
      <div className="grid gap-3">
        {items.map(([date, label]) => (
          <div key={label} className="grid grid-cols-[3rem_1fr] gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--gralith-garnet-muted)]">
              {date}
            </span>
            <div className="rounded-md border border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-base)] px-3 py-2 text-sm text-[var(--gralith-dark-text-secondary)]">
              {label}
            </div>
          </div>
        ))}
      </div>
    </VisualShell>
  );
}

function ActivityVisual() {
  const events = ["Documento agregado", "Audiencia reagendada", "Cambio auditado"];

  return (
    <VisualShell>
      <div className="grid gap-3">
        {events.map((event) => (
          <div key={event} className="grid grid-cols-[auto_1fr] gap-3">
            <span className="mt-1 size-2 rounded-full bg-[var(--gralith-garnet-muted)]" />
            <div>
              <p className="text-sm font-medium text-[var(--gralith-dark-text)]">{event}</p>
              <p className="text-xs text-[var(--gralith-dark-text-muted)]">hace 2 min</p>
            </div>
          </div>
        ))}
      </div>
    </VisualShell>
  );
}

function SearchVisual() {
  return (
    <VisualShell>
      <div className="rounded-md border border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-base)] px-3 py-2 text-sm text-[var(--gralith-dark-text-muted)]">
        buscar expediente, cliente o documento
      </div>
      <div className="mt-3 grid gap-2">
        {["EXP-1042 Cobranza", "Contrato Norte.pdf", "Cliente Mercantil Orión"].map((item) => (
          <div
            key={item}
            className="truncate rounded-md bg-[var(--gralith-dark-elevated)] px-3 py-2 text-sm text-[var(--gralith-dark-text-secondary)]"
          >
            {item}
          </div>
        ))}
      </div>
    </VisualShell>
  );
}

function RolesVisual() {
  const roles = [
    ["Socio", "Todo el expediente"],
    ["Responsable", "Tareas y documentos"],
    ["Operación", "Agenda y actividad"],
  ];

  return (
    <VisualShell>
      <div className="grid gap-2">
        {roles.map(([role, access]) => (
          <div
            key={role}
            className="grid grid-cols-[5.5rem_1fr] gap-3 rounded-md border border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-base)] px-3 py-2 text-sm"
          >
            <span className="font-medium text-[var(--gralith-dark-text)]">{role}</span>
            <span className="truncate text-[var(--gralith-dark-text-muted)]">{access}</span>
          </div>
        ))}
      </div>
    </VisualShell>
  );
}
