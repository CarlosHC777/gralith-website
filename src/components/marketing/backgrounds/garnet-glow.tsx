import { cn } from "@/lib/utils";

type GarnetGlowProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  position?: "top-right" | "bottom-left" | "center";
  intensity?: "soft" | "medium";
};

const sizes = {
  sm: "size-48 md:size-64",
  md: "size-64 md:size-80",
  lg: "size-80 md:size-[28rem]",
};

const positions = {
  "top-right": "right-[-6rem] top-[-6rem]",
  "bottom-left": "bottom-[-7rem] left-[-7rem]",
  center: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
};

const intensities = {
  soft: "bg-[var(--gralith-garnet-glow-soft)] opacity-70",
  medium: "bg-[var(--gralith-garnet-glow-strong)] opacity-80",
};

export function GarnetGlow({
  className,
  size = "md",
  position = "top-right",
  intensity = "soft",
}: GarnetGlowProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl",
        sizes[size],
        positions[position],
        intensities[intensity],
        className,
      )}
    />
  );
}

