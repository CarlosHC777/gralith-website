import { Mail, MessageSquareText } from "lucide-react";

import { ContactForm } from "@/components/marketing/contact/contact-form";
import { SectionHeading } from "@/components/marketing/section-heading";
import { SectionReveal } from "@/components/marketing/section-reveal";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Contacto y diagnóstico operativo",
  description:
    "Contacta a Gralith para solicitar un diagnóstico de automatización de procesos y ordenar la operación de tu equipo.",
  path: "/contacto",
});

export default function ContactPage() {
  return (
    <section className="px-4 py-16 sm:px-6 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionReveal>
          <SectionHeading
            eyebrow="Contacto"
            title="Solicita un diagnóstico operativo"
            description="Cuéntanos cómo trabaja tu equipo hoy. Revisaremos oportunidades para centralizar información, automatizar tareas y mejorar visibilidad."
          />
          <div className="mt-10 space-y-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-3">
              <Mail className="size-4 text-primary" aria-hidden="true" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
                {siteConfig.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MessageSquareText
                className="size-4 text-primary"
                aria-hidden="true"
              />
              Respuesta inicial en 1 a 2 días hábiles.
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={120}>
          <ContactForm />
        </SectionReveal>
      </div>
    </section>
  );
}
