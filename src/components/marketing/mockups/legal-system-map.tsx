import { Activity, CalendarDays, FileText, FolderKanban, Search, Users } from "lucide-react";

import { SectionReveal } from "@/components/motion/section-reveal";
import { StaggerContainer } from "@/components/motion/stagger-container";

const nodes = [
  { label: "Clientes", icon: Users },
  { label: "Expedientes", icon: FolderKanban },
  { label: "Documentos", icon: FileText },
  { label: "Agenda", icon: CalendarDays },
  { label: "Actividad", icon: Activity },
  { label: "Búsqueda", icon: Search },
];

export function LegalSystemMap() {
  return (
    <div className="overflow-hidden rounded-lg border border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-elevated)] p-4 text-[var(--gralith-dark-text)] shadow-[0_24px_90px_-64px_var(--gralith-garnet)] sm:p-5">
      <SectionReveal variant="scale" initialVisible>
        <div className="rounded-md border border-[var(--gralith-dark-border-garnet)] bg-[linear-gradient(135deg,var(--gralith-garnet),var(--gralith-garnet-deep))] px-4 py-5 text-[var(--gralith-dark-text)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-75">
            Sistema central
          </p>
          <p className="mt-2 text-2xl font-semibold">Gralith Legal</p>
          <p className="mt-2 text-sm leading-6 opacity-85">
            Un lugar para consultar, dar seguimiento y auditar la operación diaria del despacho.
          </p>
        </div>
      </SectionReveal>

      <StaggerContainer
        className="mt-4 grid gap-3 sm:grid-cols-2"
        delay={120}
        initialVisible
        step={55}
      >
        {nodes.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center gap-3 rounded-md border border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-panel)] px-3 py-3 text-sm text-[var(--gralith-dark-text-secondary)]"
          >
            <Icon className="size-4 text-[var(--gralith-garnet-muted)]" aria-hidden="true" />
            <span>{label}</span>
          </div>
        ))}
      </StaggerContainer>
    </div>
  );
}
