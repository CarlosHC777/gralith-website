import type { LucideIcon } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  variant?: "light" | "dark";
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  variant = "light",
}: FeatureCardProps) {
  const isDark = variant === "dark";

  return (
    <Card
      className={cn(
        "rounded-lg border-0 bg-card shadow-none",
        isDark &&
          "border border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-elevated)] text-[var(--gralith-dark-text)] shadow-[0_18px_60px_-54px_#000]",
        className,
      )}
    >
      <CardHeader className="gap-4">
        <div
          className={cn(
            "flex size-10 items-center justify-center rounded-md bg-accent text-primary",
            isDark &&
              "bg-[var(--gralith-garnet-soft-fill)] text-[var(--gralith-garnet-muted)]",
          )}
        >
          <Icon className="size-5" aria-hidden="true" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p
          className={cn(
            "text-sm leading-6",
            isDark
              ? "text-[var(--gralith-dark-text-secondary)]"
              : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
