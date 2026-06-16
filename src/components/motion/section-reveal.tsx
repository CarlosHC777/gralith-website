"use client";

import {
  type CSSProperties,
  type ReactNode,
} from "react";

import { motionPresets } from "@/components/motion/motion-presets";
import { useMotionInView } from "@/components/motion/use-motion-in-view";
import { cn } from "@/lib/utils";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  initialVisible?: boolean;
  once?: boolean;
  variant?: "up" | "scale";
};

export function SectionReveal({
  children,
  className,
  delay = 0,
  initialVisible = false,
  once = true,
  variant = "up",
}: SectionRevealProps) {
  const { ref, isVisible } = useMotionInView<HTMLDivElement>({
    initialVisible,
    once,
  });
  const preset =
    variant === "scale" ? motionPresets.scaleReveal : motionPresets.reveal;

  return (
    <div
      ref={ref}
      className={cn(
        preset.className,
        isVisible ? preset.visibleClassName : preset.hiddenClassName,
        className,
      )}
      style={{ transitionDelay: `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
