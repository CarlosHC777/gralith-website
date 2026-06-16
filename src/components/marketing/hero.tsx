import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { GralithHexagonBackground } from "@/components/marketing/backgrounds/gralith-hexagon-background";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type HeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  visual?: ReactNode;
  showBrandLogo?: boolean;
  showHexBackground?: boolean;
  variant?: "light" | "dark";
};

export function Hero({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref = "/contacto",
  secondaryLabel,
  secondaryHref,
  visual,
  showBrandLogo = false,
  showHexBackground = false,
  variant = "light",
}: HeroProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={cn(
        "relative overflow-hidden px-4 pb-16 sm:px-6 md:pb-28",
        isDark && "bg-[var(--gralith-dark-base)] text-[var(--gralith-dark-text)]",
        showBrandLogo ? "pt-10 md:pt-20" : "pt-14 md:pt-28",
      )}
    >
      {showHexBackground ? <GralithHexagonBackground variant="heroWide" /> : null}
      {isDark ? (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_52%_10%,var(--gralith-garnet-glow-soft),transparent_58%)]" />
      ) : null}
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative z-10">
          {showBrandLogo ? (
            <div className="mb-4 flex justify-start md:mb-5">
              <Image
                src="/brand/gralith-logo-horizontal.png"
                alt="Gralith"
                width={666}
                height={375}
                sizes="(max-width: 640px) 128px, (max-width: 1024px) 176px, 208px"
                className="h-auto w-32 max-w-[46vw] object-contain sm:w-36 md:w-44 lg:w-52"
                priority
              />
            </div>
          ) : eyebrow ? (
            <p
              className={cn(
                "mb-5 text-xs font-semibold uppercase tracking-[0.2em]",
                isDark ? "text-[var(--gralith-garnet-muted)]" : "text-primary",
              )}
            >
              {eyebrow}
            </p>
          ) : null}
          <h1
            className={cn(
              "max-w-4xl font-heading text-4xl font-semibold leading-[1.06] tracking-normal sm:text-5xl md:text-6xl md:leading-[1.02]",
              isDark ? "text-[var(--gralith-dark-text)]" : "text-foreground",
            )}
          >
            {title}
          </h1>
          <p
            className={cn(
              "mt-6 max-w-2xl text-base leading-7 md:text-lg md:leading-8",
              isDark
                ? "text-[var(--gralith-dark-text-secondary)]"
                : "text-muted-foreground",
            )}
          >
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className={cn(
                "h-11 w-full rounded-md px-5 sm:w-auto",
                isDark &&
                  "bg-[var(--gralith-garnet)] text-[var(--gralith-dark-text)] shadow-[0_18px_55px_-34px_var(--gralith-garnet)] hover:bg-[var(--gralith-garnet-muted)]",
              )}
            >
              <Link href={ctaHref}>
                {ctaLabel}
                <ArrowRight data-icon="inline-end" className="size-4" />
              </Link>
            </Button>
            {secondaryLabel && secondaryHref ? (
              <Button
                asChild
                variant="outline"
                size="lg"
                className={cn(
                  "h-11 w-full rounded-md px-5 sm:w-auto",
                  isDark &&
                    "border-[var(--gralith-dark-border)] bg-transparent text-[var(--gralith-dark-text)] hover:bg-[var(--gralith-dark-elevated)] hover:text-[var(--gralith-dark-text)]",
                )}
              >
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              </Button>
            ) : null}
          </div>
        </div>
        {visual ?? (
          <div className="relative z-10 border-y border-border py-6">
            <div className="grid gap-3 text-sm">
              {[
                ["Entrada", "WhatsApp, correo, archivos, agenda"],
                ["Sistema", "Información centralizada y flujos trazables"],
                ["Operación", "Menos tareas manuales, más visibilidad"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="grid gap-2 rounded-lg border border-border bg-card p-4 sm:grid-cols-[6.5rem_1fr] sm:gap-4"
                >
                  <span className="font-medium text-primary">{label}</span>
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
