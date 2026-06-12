import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Eye,
  FileSearch,
  Files,
  ListChecks,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";

import { LegalBeforeAfter } from "@/components/marketing/legal-before-after";
import { LegalDashboardMockup } from "@/components/marketing/legal-dashboard-mockup";
import { LegalModuleGrid } from "@/components/marketing/legal-module-grid";
import { LegalSystemMap } from "@/components/marketing/legal-system-map";
import { Hero } from "@/components/marketing/hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Automatización para despachos jurídicos | Gralith Legal",
  description:
    "Gralith Legal ayuda a despachos jurídicos a centralizar expedientes, documentos, agenda, actividad y seguimiento operativo en un sistema trazable.",
  path: "/despachos-juridicos",
  absoluteTitle: true,
});

const painPoints = [
  "Conversaciones en WhatsApp que contienen decisiones importantes.",
  "Documentos en carpetas dispersas, versiones sueltas o correos antiguos.",
  "Fechas críticas en calendarios separados y seguimiento manual.",
  "Poca visibilidad para socios, responsables y equipo administrativo.",
  "Dificultad para saber qué cambió, quién lo hizo y cuándo.",
];

const useCases = [
  {
    title: "Seguimiento de expedientes",
    description:
      "Visualiza responsables, estados, pendientes y próximos pasos por asunto.",
    icon: ListChecks,
  },
  {
    title: "Control documental",
    description:
      "Asocia archivos relevantes al expediente para reducir carpetas paralelas.",
    icon: Files,
  },
  {
    title: "Agenda y fechas críticas",
    description:
      "Mantén audiencias, vencimientos y tareas ligadas al contexto operativo.",
    icon: CalendarDays,
  },
  {
    title: "Visibilidad para responsables",
    description:
      "Da a socios y líderes una lectura clara de carga, bloqueos y avances.",
    icon: Eye,
  },
  {
    title: "Búsqueda rápida",
    description:
      "Encuentra clientes, expedientes y documentos sin depender de memoria.",
    icon: Search,
  },
  {
    title: "Actividad trazable",
    description:
      "Consulta movimientos relevantes del equipo sin reconstruir conversaciones.",
    icon: FileSearch,
  },
];

const process = [
  [
    "01",
    "Diagnóstico",
    "Revisamos cómo trabaja actualmente el despacho: clientes, expedientes, documentos, agenda y seguimiento.",
  ],
  [
    "02",
    "Diseño",
    "Definimos un flujo operativo claro y priorizamos los puntos donde la automatización puede generar más valor.",
  ],
  [
    "03",
    "Automatización inicial",
    "Implementamos una primera versión funcional enfocada en centralizar información y reducir tareas manuales.",
  ],
  [
    "04",
    "Seguimiento",
    "Ajustamos el sistema con base en el uso real del equipo y los casos del despacho.",
  ],
];

const audiences = [
  "Despachos pequeños y medianos que quieren ordenar su operación.",
  "Equipos jurídicos con varios expedientes activos y múltiples responsables.",
  "Áreas que manejan muchos documentos, versiones y fechas críticas.",
  "Responsables que necesitan visibilidad sin cambiar todo de golpe.",
];

const principles = [
  "Primero ordenar, luego automatizar.",
  "Trazabilidad antes que complejidad.",
  "Software adaptado al flujo real del despacho.",
  "Automatización gradual, enfocada en adopción.",
  "Visibilidad para tomar mejores decisiones operativas.",
];

export default function LegalPage() {
  return (
    <>
      <Hero
        eyebrow="Gralith Legal"
        title="Automatización operativa para despachos jurídicos"
        description="Centraliza expedientes, documentos, agenda, actividad y seguimiento en un sistema diseñado para dar visibilidad real a la operación diaria del despacho."
        ctaLabel="Solicitar diagnóstico operativo"
        secondaryLabel="Ver módulos"
        secondaryHref="#modulos"
        visual={<LegalSystemMap />}
      />

      <section className="px-4 pb-16 sm:px-6 md:pb-20">
        <div className="mx-auto max-w-6xl">
          <LegalDashboardMockup />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            eyebrow="Problema operativo"
            title="Cuando la operación depende de mensajes, carpetas y memoria, el despacho pierde visibilidad."
            description="El trabajo jurídico cotidiano suele avanzar entre herramientas que no fueron diseñadas para explicar qué está pasando en cada expediente."
          />
          <div className="grid gap-3">
            {painPoints.map((point) => (
              <div
                key={point}
                className="flex gap-3 rounded-lg border border-border bg-card p-4 text-sm leading-6 text-muted-foreground"
              >
                <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/55 px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Antes y después"
            title="De herramientas dispersas a una operación trazable."
            description="Gralith Legal no reemplaza el criterio del equipo: ordena la información para que el seguimiento sea más claro."
          />
          <div className="mt-10">
            <LegalBeforeAfter />
          </div>
        </div>
      </section>

      <section id="modulos" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Módulos"
            title="Una base operativa para centralizar el trabajo del despacho."
            description="Cada módulo responde a una parte concreta de la operación: clientes, expedientes, documentos, agenda, actividad, búsqueda y control."
          />
          <div className="mt-10">
            <LegalModuleGrid />
          </div>
        </div>
      </section>

      <section className="bg-secondary/55 px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Casos de uso"
            title="Casos de uso iniciales."
            description="Puntos prácticos donde un sistema operativo legal puede empezar a generar orden sin prometer atajos irreales."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-lg border border-border bg-card p-5">
                <div className="flex size-10 items-center justify-center rounded-md bg-accent text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-semibold tracking-normal">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Implementación"
            title="Un proceso gradual para ordenar primero y automatizar después."
            description="La implementación se enfoca en una primera versión útil, adoptable y conectada al flujo real del despacho."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {process.map(([step, title, description]) => (
              <div key={step} className="rounded-lg border border-border bg-card p-5 md:min-h-64">
                <p className="text-sm font-semibold text-primary">{step}</p>
                <h3 className="mt-6 text-xl font-semibold tracking-normal">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/55 px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Para quién"
              title="Pensado para despachos que quieren operar con más claridad."
              description="Funciona especialmente bien cuando el equipo ya siente que los expedientes, documentos y pendientes necesitan más estructura."
            />
            <div className="mt-8 grid gap-3">
              {audiences.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                  <Users className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Principios de trabajo
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-normal">
              Tecnología con criterio operativo.
            </h2>
            <div className="mt-8 grid gap-4">
              {principles.map((item) => (
                <div key={item} className="border-l border-primary/35 pl-4 text-sm leading-6 text-muted-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 border-y border-border py-12 md:grid-cols-[1fr_auto] md:items-center">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Siguiente paso
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-normal md:text-4xl">
              Agenda un diagnóstico operativo gratuito.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Revisamos el flujo actual de tu despacho y detectamos oportunidades concretas
              para centralizar información, reducir tareas manuales y mejorar la visibilidad
              de expedientes.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <Button asChild size="lg" className="h-11 w-full rounded-md px-5 sm:w-auto">
              <Link href="/contacto">
                Agendar diagnóstico
                <ArrowRight data-icon="inline-end" className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 w-full rounded-md px-5 sm:w-auto"
            >
              <a href={`mailto:${siteConfig.email}`}>Escribir por correo</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
