import type { Metadata } from "next";
import { Mail, MessageSquareText } from "lucide-react";

import { SectionHeading } from "@/components/marketing/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Solicita un diagnóstico con Gralith para automatizar procesos y ordenar la operación de tu equipo.",
  alternates: {
    canonical: "/contacto",
  },
};

export default function ContactPage() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contacto"
            title="Solicita un diagnóstico operativo"
            description="Cuéntanos cómo trabaja tu equipo hoy. Revisaremos oportunidades para centralizar información, automatizar tareas y mejorar visibilidad."
          />
          <div className="mt-10 space-y-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-3">
              <Mail className="size-4 text-primary" aria-hidden="true" />
              contacto@gralith.com
            </div>
            <div className="flex items-center gap-3">
              <MessageSquareText
                className="size-4 text-primary"
                aria-hidden="true"
              />
              Respuesta inicial en 1 a 2 días hábiles.
            </div>
          </div>
        </div>

        <form className="rounded-lg border border-border bg-card p-6 md:p-8">
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm font-medium">
              Nombre
              <Input name="name" placeholder="Tu nombre" />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Correo
              <Input name="email" type="email" placeholder="nombre@empresa.com" />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Empresa o despacho
              <Input name="company" placeholder="Nombre de la organización" />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              ¿Qué quieres automatizar?
              <Textarea
                name="message"
                placeholder="Describe el proceso, herramientas actuales y principal dolor operativo."
                className="min-h-36"
              />
            </label>
            <Button type="submit" size="lg" className="h-11 rounded-md">
              Enviar solicitud
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
