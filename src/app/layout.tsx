import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

import { Footer } from "@/components/marketing/footer";
import { Navbar } from "@/components/marketing/navbar";
import { absoluteUrl, siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Gralith | Automatización de procesos",
    template: "%s | Gralith",
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gralith | Automatización de procesos",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "Gralith",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: "Gralith - Automatización de procesos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gralith | Automatización de procesos",
    description: siteConfig.description,
    images: [absoluteUrl("/opengraph-image")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Gralith",
      url: siteConfig.url,
      email: siteConfig.email,
      description: siteConfig.description,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Gralith",
      url: siteConfig.url,
      description: siteConfig.description,
      publisher: {
        "@type": "Organization",
        name: "Gralith",
        url: siteConfig.url,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Gralith Legal",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: absoluteUrl("/despachos-juridicos"),
      description:
        "Sistema de automatización operativa para despachos jurídicos: clientes, expedientes, documentos, agenda, búsqueda, actividad y auditoría.",
      provider: {
        "@type": "Organization",
        name: "Gralith",
        url: siteConfig.url,
        email: siteConfig.email,
      },
    },
  ];

  return (
    <html lang="es" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
