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

import { DarkCard } from "@/components/marketing/shared/dark-card";
import { SectionReveal } from "@/components/motion/section-reveal";
import { StaggerContainer } from "@/components/motion/stagger-container";
import { cn } from "@/lib/utils";

const inputs = [
  { label: "WhatsApp", icon: MessageSquareText },
  { label: "Correo", icon: Mail },
  { label: "Archivos", icon: FileText },
  { label: "Agenda", icon: CalendarDays },
];

const outputs = [
  { label: "Expedientes", icon: FolderKanban },
  { label: "Tareas", icon: Workflow },
  { label: "Auditoría", icon: ShieldCheck },
  { label: "Búsqueda", icon: Search },
];

export function HeroProcessFlow() {
  return (
    <DarkCard
      aria-label="Flujo operativo de Gralith: entradas, sistema central y salidas"
      className="relative z-10 max-w-full overflow-hidden p-4 shadow-[0_28px_90px_-60px_var(--gralith-garnet)] sm:p-5 lg:p-6"
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_56%_46%,var(--gralith-garnet-soft-fill),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(90deg,transparent,rgba(247,241,232,0.04),transparent)]" />
      <div className="pointer-events-none absolute inset-x-10 top-1/2 z-0 hidden h-px bg-[linear-gradient(90deg,transparent,var(--gralith-dark-border-garnet),transparent)] md:block" />

      <div className="relative z-10 grid min-w-0 gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <div className="grid min-w-0 gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gralith-dark-text-muted)]">
            Entrada
          </p>
          <StaggerContainer className="grid gap-2" delay={80} step={55}>
            {inputs.map(({ label, icon: Icon }) => (
              <FlowNode
                key={label}
                label={label}
                icon={Icon}
              />
            ))}
          </StaggerContainer>
        </div>

        <SectionReveal delay={300}>
          <div className="relative z-10 mx-auto grid min-h-28 w-full place-items-center rounded-lg border border-[var(--gralith-dark-border-garnet)] bg-[linear-gradient(135deg,var(--gralith-garnet),var(--gralith-garnet-deep))] px-5 py-6 text-center text-[var(--gralith-dark-text)] shadow-[0_22px_70px_-42px_var(--gralith-garnet)] md:min-h-36 md:w-36">
            <div className="pointer-events-none absolute inset-2 rounded-md border border-[rgba(247,241,232,0.08)]" />
            <div>
              <span className="text-xs uppercase tracking-[0.18em] opacity-75">
                Sistema
              </span>
              <span className="mt-1 block text-xl font-semibold leading-tight">
                Gralith
              </span>
            </div>
          </div>
        </SectionReveal>

        <div className="grid min-w-0 gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gralith-dark-text-muted)] md:text-right">
            Salida
          </p>
          <StaggerContainer className="grid gap-2" delay={360} step={55}>
            {outputs.map(({ label, icon: Icon }) => (
              <FlowNode
                key={label}
                label={label}
                icon={Icon}
                align="right"
              />
            ))}
          </StaggerContainer>
        </div>
      </div>
    </DarkCard>
  );
}

type FlowNodeProps = {
  label: string;
  icon: typeof MessageSquareText;
  align?: "left" | "right";
};

function FlowNode({ label, icon: Icon, align = "left" }: FlowNodeProps) {
  return (
    <div
      className={cn(
        "relative z-10 flex min-h-11 min-w-0 items-center gap-3 rounded-md border border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-panel)] px-3 py-2 text-sm text-[var(--gralith-dark-text-secondary)] shadow-[0_16px_48px_-42px_#000]",
        align === "right" && "md:flex-row-reverse md:text-right",
      )}
    >
      <Icon
        className="size-4 shrink-0 text-[var(--gralith-garnet-muted)]"
        aria-hidden="true"
      />
      <span>{label}</span>
    </div>
  );
}
