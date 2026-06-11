import {
  Activity,
  CalendarDays,
  FileSearch,
  FolderKanban,
  History,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";

import { CTASection } from "@/components/marketing/cta-section";
import { FeatureCard } from "@/components/marketing/feature-card";
import { Hero } from "@/components/marketing/hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Automatización para despachos jurídicos",
  description:
    "Gralith Legal es software para despachos jurídicos: centraliza expedientes legales, documentos, agenda, búsqueda, actividad y auditoría.",
  path: "/despachos-juridicos",
});

const modules = [
  {
    icon: Users,
    title: "Clientes",
    description:
      "Ficha única por cliente con datos relevantes, responsables, historial y asuntos asociados.",
  },
  {
    icon: FolderKanban,
    title: "Expedientes",
    description:
      "Estados, etapas, prioridades, documentos y tareas ligadas a cada asunto del despacho.",
  },
  {
    icon: FileSearch,
    title: "Documentos",
    description:
      "Repositorio ordenado por cliente y expediente para evitar versiones dispersas y búsquedas lentas.",
  },
  {
    icon: CalendarDays,
    title: "Agenda",
    description:
      "Fechas críticas, vencimientos, audiencias y recordatorios operativos visibles para el equipo.",
  },
  {
    icon: Search,
    title: "Búsqueda",
    description:
      "Localización rápida de clientes, asuntos, documentos y actividad sin revisar múltiples canales.",
  },
  {
    icon: Activity,
    title: "Actividad",
    description:
      "Registro de movimientos, avances y pendientes para entender qué ocurrió y qué sigue.",
  },
  {
    icon: ShieldCheck,
    title: "Auditoría",
    description:
      "Trazabilidad de cambios, responsables y eventos para mayor control interno.",
  },
  {
    icon: History,
    title: "Seguimiento",
    description:
      "Vista operativa para revisar carga de trabajo, bloqueos y asuntos que requieren atención.",
  },
];

export default function LegalPage() {
  return (
    <>
      <Hero
        eyebrow="Gralith Legal"
        title="Automatización operativa para despachos jurídicos"
        description="Centraliza la operación del despacho en un sistema diseñado para reducir dispersión, dar seguimiento a expedientes y mantener control sobre documentos, agenda y actividad."
        ctaLabel="Solicitar demo"
      />

      <section className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Problema
            </p>
            <h2 className="mt-5 text-2xl font-semibold tracking-normal md:text-3xl">
              La información crítica vive entre WhatsApp, Drive, Excel, correos
              y documentos dispersos.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground">
              Cuando el despacho crece, el seguimiento depende de recordatorios
              manuales, búsqueda en múltiples herramientas y conversaciones
              difíciles de auditar.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-primary p-6 text-primary-foreground md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-80">
              Solución
            </p>
            <h2 className="mt-5 text-2xl font-semibold tracking-normal md:text-3xl">
              Clientes, expedientes, documentos, agenda, búsqueda, actividad y
              auditoría en un solo sistema.
            </h2>
            <p className="mt-5 text-base leading-7 opacity-80">
              Gralith Legal ordena la operación diaria para que socios, abogados
              y equipo administrativo trabajen con la misma información.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/55 px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Módulos"
            title="Una base operativa para el despacho."
            description="Los módulos se adaptan al flujo real del equipo: desde el ingreso de un asunto hasta seguimiento, documentación y control interno."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {modules.map((module) => (
              <FeatureCard key={module.title} {...module} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ordena la operación jurídica sin cambiar la esencia del despacho."
        description="Solicita una demo para revisar cómo Gralith Legal puede adaptarse a tus expedientes, responsables y forma de trabajo."
        ctaLabel="Solicitar demo"
      />
    </>
  );
}
