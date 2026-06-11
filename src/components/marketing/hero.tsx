import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

type HeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  visual?: ReactNode;
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
}: HeroProps) {
  return (
    <section className="px-4 pb-16 pt-14 sm:px-6 md:pb-28 md:pt-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          {eyebrow ? (
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.06] tracking-normal text-foreground sm:text-5xl md:text-6xl md:leading-[1.02]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-11 w-full rounded-md px-5 sm:w-auto">
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
                className="h-11 w-full rounded-md px-5 sm:w-auto"
              >
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              </Button>
            ) : null}
          </div>
        </div>
        {visual ?? (
          <div className="border-y border-border py-6">
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
