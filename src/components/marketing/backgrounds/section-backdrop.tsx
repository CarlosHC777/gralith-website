import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionBackdropProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  overflow?: "visible" | "hidden";
};

export function SectionBackdrop({
  children,
  className,
  contentClassName,
  overflow = "visible",
}: SectionBackdropProps) {
  return (
    <section
      className={cn(
        "relative",
        overflow === "hidden" && "overflow-hidden",
        className,
      )}
    >
      <div className={cn("relative z-10", contentClassName)}>{children}</div>
    </section>
  );
}
