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

import { SectionReveal } from "@/components/motion/section-reveal";
import { StaggerContainer } from "@/components/motion/stagger-container";

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
    <div className="relative z-10 max-w-full overflow-hidden rounded-lg border border-border bg-card p-4 shadow-[0_24px_80px_-58px_var(--primary)] sm:p-5 lg:p-6">
      <div className="pointer-events-none absolute inset-0 z-0 bg-card" />
      <div className="pointer-events-none absolute inset-x-10 top-1/2 z-0 hidden h-px bg-border md:block" />

      <div className="relative z-10 grid min-w-0 gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <div className="grid min-w-0 gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Entrada
          </p>
          <StaggerContainer className="grid gap-2" delay={80} step={55}>
            {inputs.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="relative z-10 flex min-h-11 min-w-0 items-center gap-3 rounded-md border border-border bg-background/95 px-3 py-2 text-sm shadow-sm"
              >
                <Icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{label}</span>
              </div>
            ))}
          </StaggerContainer>
        </div>

        <SectionReveal delay={300}>
          <div className="relative z-10 mx-auto grid min-h-28 w-full place-items-center rounded-md border border-primary/20 bg-primary px-5 py-6 text-center text-primary-foreground shadow-[0_16px_50px_-32px_var(--primary)] md:min-h-36 md:w-36">
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
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground md:text-right">
            Salida
          </p>
          <StaggerContainer className="grid gap-2" delay={360} step={55}>
            {outputs.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="relative z-10 flex min-h-11 min-w-0 items-center gap-3 rounded-md border border-border bg-background/95 px-3 py-2 text-sm shadow-sm md:flex-row-reverse md:text-right"
              >
                <Icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{label}</span>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </div>
  );
}
