import Link from "next/link";
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
};

export function Hero({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref = "/contacto",
  secondaryLabel,
  secondaryHref,
}: HeroProps) {
  return (
    <section className="px-6 pb-20 pt-20 md:pb-28 md:pt-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          {eyebrow ? (
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-foreground md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-11 rounded-md px-5">
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
                className="h-11 rounded-md px-5"
              >
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              </Button>
            ) : null}
          </div>
        </div>
        <div className="border-y border-border py-6">
          <div className="grid gap-3 text-sm">
            {[
              ["Entrada", "WhatsApp, correo, archivos, agenda"],
              ["Sistema", "Información centralizada y flujos trazables"],
              ["Operación", "Menos tareas manuales, más visibilidad"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-[6.5rem_1fr] gap-4 rounded-lg border border-border bg-card p-4"
              >
                <span className="font-medium text-primary">{label}</span>
                <span className="text-muted-foreground">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
