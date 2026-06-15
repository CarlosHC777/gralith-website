import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

type LaptopMockupProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
  screenClassName?: string;
};

export function LaptopMockup({
  children,
  className,
  screenClassName,
  ...props
}: LaptopMockupProps) {
  return (
    <div className={cn("mx-auto w-full max-w-5xl", className)} {...props}>
      <div className="relative mx-auto rounded-t-[1.35rem] border border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-elevated)] p-2 shadow-[0_30px_110px_-72px_var(--gralith-garnet)] sm:p-3">
        <div className="absolute left-1/2 top-1.5 z-20 size-1.5 -translate-x-1/2 rounded-full bg-[var(--gralith-dark-text-muted)]" />
        <div
          className={cn(
            "relative aspect-[16/10] overflow-hidden rounded-[0.9rem] border border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-panel)] text-[var(--gralith-dark-text)]",
            screenClassName,
          )}
        >
          {children}
        </div>
      </div>
      <div className="relative mx-auto h-4 w-[96%] rounded-b-[1.6rem] border border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-surface)] shadow-[0_18px_44px_-36px_#000] sm:h-5">
        <div className="mx-auto h-1.5 w-24 rounded-b-lg border-x border-b border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-elevated)] sm:w-36" />
      </div>
    </div>
  );
}
