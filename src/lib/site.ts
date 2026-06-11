export const siteConfig = {
  name: "Gralith",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://gralith.com",
  description:
    "Gralith diseña sistemas de automatización de procesos para centralizar información, reducir tareas manuales y dar visibilidad operativa.",
};

export function absoluteUrl(path = "") {
  return `${siteConfig.url}${path}`;
}
