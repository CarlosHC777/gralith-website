import type { CSSProperties, ReactNode } from "react";

import { GarnetGlow } from "@/components/marketing/backgrounds/garnet-glow";
import { cn } from "@/lib/utils";

type DarkSectionBackdropProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  variant?: "plain" | "product" | "hero" | "garnet";
  overflow?: "visible" | "hidden";
};

const backgrounds = {
  plain: "var(--gralith-dark-base)",
  product:
    "radial-gradient(circle at 70% 18%, var(--gralith-warm-glow), transparent 34%), var(--gralith-dark-base)",
  hero:
    "radial-gradient(circle at 78% 22%, var(--gralith-garnet-glow-soft), transparent 34%), var(--gralith-dark-base)",
  garnet:
    "radial-gradient(circle at 78% 22%, var(--gralith-garnet-glow-strong), transparent 32%), var(--gralith-dark-base)",
};

export function DarkSectionBackdrop({
  children,
  className,
  contentClassName,
  variant = "plain",
  overflow = "hidden",
}: DarkSectionBackdropProps) {
  const showGlow = variant === "hero" || variant === "garnet";

  return (
    <section
      className={cn(
        "relative text-[var(--gralith-dark-text)]",
        overflow === "hidden" && "overflow-hidden",
        className,
      )}
      style={{ background: backgrounds[variant] } as CSSProperties}
    >
      {showGlow ? (
        <GarnetGlow
          position="top-right"
          size={variant === "hero" ? "lg" : "md"}
          intensity={variant === "garnet" ? "medium" : "soft"}
        />
      ) : null}
      <div className={cn("relative z-10", contentClassName)}>{children}</div>
    </section>
  );
}
