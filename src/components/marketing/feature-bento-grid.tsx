import type { LucideIcon } from "lucide-react";

import {
  Activity,
  CalendarDays,
  FileText,
  FolderKanban,
  Network,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";

import { DarkCard } from "@/components/marketing/shared/dark-card";
import { SectionReveal } from "@/components/motion/section-reveal";
import { cn } from "@/lib/utils";

const features: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}> = [
  {
    title: "Centralización",
    description:
      "Clientes, expedientes, documentos y tareas viven en una fuente de verdad operativa.",
    icon: Network,
    className: "md:col-span-2",
  },
  {
    title: "Expedientes",
    description:
      "Estados, responsables, fechas clave y actividad reunidos alrededor de cada asunto.",
    icon: FolderKanban,
  },
  {
    title: "Documentos",
    description:
      "Versiones, evidencia y archivos vinculados al contexto correcto.",
    icon: FileText,
  },
  {
    title: "Agenda",
    description:
      "Audiencias, vencimientos y recordatorios visibles antes de que se vuelvan urgentes.",
    icon: CalendarDays,
  },
  {
    title: "Actividad",
    description:
      "Historial claro de movimientos, avances y decisiones del equipo.",
    icon: Activity,
    className: "md:col-span-2",
  },
  {
    title: "Búsqueda global",
    description:
      "Encuentra clientes, documentos y expedientes sin saltar entre herramientas.",
    icon: Search,
  },
  {
    title: "Auditoría",
    description:
      "Trazabilidad de cambios, responsables y eventos importantes.",
    icon: ShieldCheck,
  },
  {
    title: "Roles y permisos",
    description:
      "Acceso por función para mantener control sin frenar la operación.",
    icon: Users,
    className: "md:col-span-2",
  },
];

export function FeatureBentoGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {features.map(({ title, description, icon: Icon, className }, index) => (
        <SectionReveal
          key={title}
          delay={index * 65}
          className={cn(className)}
        >
          <DarkCard interactive className="group h-full p-5 md:min-h-52">
            <div className="flex size-10 items-center justify-center rounded-md bg-[var(--gralith-garnet-soft-fill)] text-[var(--gralith-garnet-muted)] transition-transform group-hover:-translate-y-0.5">
              <Icon className="size-5" aria-hidden="true" />
            </div>
            <h3 className="mt-7 text-lg font-semibold tracking-normal text-[var(--gralith-dark-text)]">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[var(--gralith-dark-text-secondary)]">
              {description}
            </p>
          </DarkCard>
        </SectionReveal>
      ))}
    </div>
  );
}
