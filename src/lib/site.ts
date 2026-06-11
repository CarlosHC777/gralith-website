export const siteConfig = {
  name: "Gralith",
  url: "https://gralith.com.mx",
  // Temporary deployment URL. Canonical, Open Graph, JSON-LD, robots and sitemap
  // should keep using `url` as the final public domain.
  temporaryDeploymentUrl: "https://gralith-website.vercel.app",
  email: "carloshc@gralith.com.mx",
  description:
    "Gralith diseña sistemas de automatización de procesos para centralizar información, reducir tareas manuales y dar visibilidad operativa.",
};

export function absoluteUrl(path = "") {
  return `${siteConfig.url}${path}`;
}
