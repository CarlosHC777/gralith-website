import { ContactSection } from "@/components/marketing/sections/contact-section";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contacto y diagnóstico operativo",
  description:
    "Contacta a Gralith para solicitar un diagnóstico de automatización de procesos y ordenar la operación de tu equipo.",
  path: "/contacto",
});

export default function ContactPage() {
  return <ContactSection />;
}
