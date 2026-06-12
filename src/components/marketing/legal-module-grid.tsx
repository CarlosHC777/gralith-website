import type { LucideIcon } from "lucide-react";
import {
  Activity,
  CalendarDays,
  FileSearch,
  FileText,
  FolderKanban,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";

import { cn } from "@/lib/utils";

const modules: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}> = [
  {
    title: "Clientes",
    description:
      "Mantén datos de clientes y relaciones asociadas al expediente en un solo lugar.",
    icon: Users,
    className: "md:col-span-2",
  },
  {
    title: "Expedientes",
    description:
      "Organiza asuntos, responsables, estados y contexto operativo del caso.",
    icon: FolderKanban,
  },
  {
    title: "Documentos",
    description:
      "Asocia archivos relevantes al expediente para evitar carpetas dispersas.",
    icon: FileText,
  },
  {
    title: "Agenda",
    description:
      "Da seguimiento a fechas, audiencias, tareas y próximos pasos.",
    icon: CalendarDays,
  },
  {
    title: "Búsqueda global",
    description:
      "Encuentra clientes, expedientes y documentos sin depender de memoria o carpetas.",
    icon: Search,
  },
  {
    title: "Actividad y auditoría",
    description:
      "Visualiza cambios, movimientos y acciones relevantes dentro del expediente.",
    icon: Activity,
    className: "md:col-span-2",
  },
  {
    title: "Roles y permisos",
    description:
      "Controla qué puede ver o modificar cada persona del equipo.",
    icon: ShieldCheck,
  },
  {
    title: "Seguimiento operativo",
    description:
      "Convierte pendientes y avances en un flujo más claro para responsables.",
    icon: FileSearch,
    className: "md:col-span-2",
  },
];

export function LegalModuleGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {modules.map(({ title, description, icon: Icon, className }) => (
        <div
          key={title}
          className={cn(
            "rounded-lg border border-border bg-card p-5 shadow-sm md:min-h-52",
            className
          )}
        >
          <div className="flex size-10 items-center justify-center rounded-md bg-accent text-primary">
            <Icon className="size-5" aria-hidden="true" />
          </div>
          <h3 className="mt-7 text-lg font-semibold tracking-normal">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        </div>
      ))}
    </div>
  );
}
