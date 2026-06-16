import { Mail, MessageSquareText } from "lucide-react";

import { ContactForm } from "@/components/marketing/contact/contact-form";
import { SectionHeading } from "@/components/marketing/shared/section-heading";
import { SectionReveal } from "@/components/motion/section-reveal";
import { siteConfig } from "@/lib/site";

export function ContactSection() {
  return (
    <section className="overflow-hidden bg-[var(--gralith-dark-base)] px-4 py-16 text-[var(--gralith-dark-text)] sm:px-6 md:py-28">
      <div className="mx-auto grid w-full max-w-[20.5rem] min-w-0 gap-12 sm:max-w-6xl lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <SectionReveal className="min-w-0">
          <SectionHeading
            eyebrow="Contacto"
            title="Solicita un diagnóstico operativo"
            description="Cuéntanos cómo trabaja tu equipo hoy. Revisaremos oportunidades para centralizar información, automatizar tareas y mejorar visibilidad."
            variant="dark"
          />
          <div className="mt-10 space-y-4 text-sm text-[var(--gralith-dark-text-secondary)]">
            <div className="flex items-center gap-3">
              <Mail className="size-4 text-[var(--gralith-garnet-muted)]" aria-hidden="true" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors hover:text-[var(--gralith-dark-text)]"
              >
                {siteConfig.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MessageSquareText
                className="size-4 text-[var(--gralith-garnet-muted)]"
                aria-hidden="true"
              />
              Respuesta inicial en 1 a 2 días hábiles.
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={120} className="min-w-0">
          <ContactForm />
        </SectionReveal>
      </div>
    </section>
  );
}
