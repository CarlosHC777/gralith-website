import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type DarkCardProps = ComponentPropsWithoutRef<"div"> & {
  interactive?: boolean;
};

// Use dark primitives for isolated product-led sections. Keep garnet as an accent,
// avoid strong glows behind text, and do not use these to enable a global dark theme.
export function DarkCard({
  children,
  className,
  interactive = false,
  ...props
}: DarkCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-elevated)] text-[var(--gralith-dark-text)] shadow-[0_24px_80px_-70px_#000]",
        interactive &&
          "transition-colors hover:border-[var(--gralith-dark-border-garnet)] hover:bg-[var(--gralith-dark-elevated-strong)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

