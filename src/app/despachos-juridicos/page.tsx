import {
  LegalAudienceSection,
  LegalBeforeAfterSection,
  LegalCTASection,
  LegalDashboardSection,
  LegalHeroSection,
  LegalModulesSection,
  LegalProblemSection,
  LegalProcessSection,
  LegalUseCasesSection,
} from "@/components/marketing/sections/legal-sections";
import { LegalDiagnosticRadarSection } from "@/components/marketing/sections/legal-diagnostic-radar-section";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Automatización para despachos jurídicos | Gralith Legal",
  description:
    "Gralith Legal ayuda a despachos jurídicos a centralizar expedientes, documentos, agenda, actividad y seguimiento operativo en un sistema trazable.",
  path: "/despachos-juridicos",
  absoluteTitle: true,
});

export default function LegalPage() {
  return (
    <>
      <LegalHeroSection />
      <LegalDashboardSection />
      <LegalProblemSection />
      <LegalBeforeAfterSection />
      <LegalModulesSection />
      <LegalUseCasesSection />
      <LegalProcessSection />
      <LegalDiagnosticRadarSection />
      <LegalAudienceSection />
      <LegalCTASection />
    </>
  );
}
