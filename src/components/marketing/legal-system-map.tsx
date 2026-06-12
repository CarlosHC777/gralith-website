import { Activity, CalendarDays, FileText, FolderKanban, Search, Users } from "lucide-react";

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
    <div className="rounded-lg border border-border bg-card p-4 shadow-[0_24px_80px_-58px_var(--primary)] sm:p-5">
      <div className="grid gap-3 sm:grid-cols-2">
        {nodes.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center gap-3 rounded-md border border-border bg-background/75 px-3 py-3 text-sm"
          >
            <Icon className="size-4 text-primary" aria-hidden="true" />
            <span>{label}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-md bg-primary px-4 py-4 text-primary-foreground">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-75">
          Sistema central
        </p>
        <p className="mt-2 text-2xl font-semibold">Gralith Legal</p>
        <p className="mt-2 text-sm leading-6 opacity-85">
          Un lugar para consultar, dar seguimiento y auditar la operación diaria del despacho.
        </p>
      </div>
    </div>
  );
}
