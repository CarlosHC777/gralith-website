import {
  AutomationApproachSection,
  AutomationCTASection,
  AutomationHeroSection,
  AutomationProcessSection,
} from "@/components/marketing/sections/automation-sections";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Automatización de procesos y flujos de trabajo",
  description:
    "Diseño de sistemas, centralización operativa e integraciones para automatizar procesos y flujos de trabajo en equipos profesionales.",
  path: "/automatizacion-de-procesos",
});

export default function AutomationPage() {
  return (
    <div className="overflow-x-hidden bg-[var(--gralith-dark-base)]">
      <AutomationHeroSection />
      <AutomationApproachSection />
      <AutomationProcessSection />
      <AutomationCTASection />
    </div>
  );
}
