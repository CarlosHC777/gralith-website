import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionReveal } from "@/components/motion/section-reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CTASectionProps = {
  title: string;
  description: string;
  ctaLabel: string;
  href?: string;
  className?: string;
  variant?: "light" | "dark";
};

export function CTASection({
  title,
  description,
  ctaLabel,
  href = "/contacto",
  className,
  variant = "light",
}: CTASectionProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={cn(
        "px-4 py-16 sm:px-6 md:py-28",
        isDark && "bg-[var(--gralith-dark-base)] text-[var(--gralith-dark-text)]",
        className,
      )}
    >
      <SectionReveal
        className={cn(
          "mx-auto grid max-w-6xl gap-8 border-y py-12 md:grid-cols-[1fr_auto] md:items-center",
          isDark ? "border-[var(--gralith-dark-border)]" : "border-border",
        )}
      >
        <div className="max-w-2xl">
          <h2
            className={cn(
              "font-heading text-3xl font-semibold tracking-normal md:text-4xl",
              isDark ? "text-[var(--gralith-dark-text)]" : "text-foreground",
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "mt-4 text-base leading-7",
              isDark
                ? "text-[var(--gralith-dark-text-secondary)]"
                : "text-muted-foreground",
            )}
          >
            {description}
          </p>
        </div>
        <Button
          asChild
          size="lg"
          className={cn(
            "h-11 w-full rounded-md px-5 sm:w-auto",
            isDark &&
              "bg-[var(--gralith-garnet)] text-[var(--gralith-dark-text)] hover:bg-[var(--gralith-garnet-muted)]",
          )}
        >
          <Link href={href}>
            {ctaLabel}
            <ArrowRight data-icon="inline-end" className="size-4" />
          </Link>
        </Button>
      </SectionReveal>
    </section>
  );
}
