import {
  HomeCTASection,
  HomeDashboardSection,
  HomeDynamicSection,
  HomeHeroSection,
  HomeLegalVerticalSection,
  HomeValueSection,
  HomeWorkProcessSection,
} from "@/components/marketing/sections/home-sections";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Automatización de procesos para equipos profesionales",
  description:
    "Gralith diseña sistemas para centralizar información, automatizar flujos de trabajo y dar visibilidad operativa a equipos profesionales.",
  path: "/",
});

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HomeHeroSection />
      <HomeDashboardSection />
      <HomeValueSection />
      <HomeDynamicSection />
      <HomeLegalVerticalSection />
      <HomeWorkProcessSection />
      <HomeCTASection />
    </div>
  );
}
