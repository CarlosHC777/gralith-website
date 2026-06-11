import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CTASectionProps = {
  title: string;
  description: string;
  ctaLabel: string;
  href?: string;
  className?: string;
};

export function CTASection({
  title,
  description,
  ctaLabel,
  href = "/contacto",
  className,
}: CTASectionProps) {
  return (
    <section className={cn("px-4 py-16 sm:px-6 md:py-28", className)}>
      <div className="mx-auto grid max-w-6xl gap-8 border-y border-border py-12 md:grid-cols-[1fr_auto] md:items-center">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-normal text-foreground md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            {description}
          </p>
        </div>
        <Button asChild size="lg" className="h-11 w-full rounded-md px-5 sm:w-auto">
          <Link href={href}>
            {ctaLabel}
            <ArrowRight data-icon="inline-end" className="size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
