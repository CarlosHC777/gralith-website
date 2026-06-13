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
    <div className="relative z-10 overflow-hidden rounded-lg border border-border bg-card p-4 shadow-[0_24px_80px_-56px_var(--primary)] sm:p-5">
      <div className="pointer-events-none absolute inset-0 z-0 bg-card" />
      <div className="pointer-events-none absolute inset-x-8 top-1/2 z-0 hidden h-px bg-border md:block" />
      <div className="pointer-events-none absolute left-[18%] right-[18%] top-1/2 z-0 hidden h-px bg-primary/40 [animation:gralith-beam_4.8s_ease-in-out_infinite] md:block" />

      <div className="relative z-10 grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <div className="grid gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Entrada
          </p>
          {inputs.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="relative z-10 flex items-center gap-3 rounded-md border border-border bg-background/90 px-3 py-2 text-sm shadow-sm"
            >
              <Icon className="size-4 text-primary" aria-hidden="true" />
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className="relative z-10 mx-auto flex size-24 flex-col items-center justify-center rounded-full border border-primary/25 bg-primary text-center text-primary-foreground shadow-[0_16px_50px_-28px_var(--primary)] sm:size-28">
          <span className="text-xs uppercase tracking-[0.18em] opacity-75">
            Sistema
          </span>
          <span className="mt-1 text-xl font-semibold">Gralith</span>
        </div>

        <div className="grid gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground md:text-right">
            Salida
          </p>
          {outputs.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="relative z-10 flex items-center gap-3 rounded-md border border-border bg-background/90 px-3 py-2 text-sm shadow-sm md:flex-row-reverse md:text-right"
            >
              <Icon className="size-4 text-primary" aria-hidden="true" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
