"use client";

import { type ComponentPropsWithoutRef, type CSSProperties } from "react";

import { motionPresets } from "@/components/motion/motion-presets";
import { useMotionInView } from "@/components/motion/use-motion-in-view";
import { cn } from "@/lib/utils";

type SplitHeadlineProps = ComponentPropsWithoutRef<"h2"> & {
  as?: "h1" | "h2" | "h3";
  text?: string;
  lines?: string[];
  delay?: number;
  once?: boolean;
};

export function SplitHeadline({
  as: Tag = "h2",
  text,
  lines,
  delay = 0,
  once = true,
  className,
  ...props
}: SplitHeadlineProps) {
  const { ref, isVisible } = useMotionInView<HTMLHeadingElement>({ once });
  const headlineLines = lines ?? (text ? [text] : []);
  const accessibleText = text ?? headlineLines.join(" ");

  return (
    <Tag
      ref={ref}
      className={className}
      aria-label={accessibleText}
      {...props}
    >
      {headlineLines.map((line, index) => (
        <span
          key={`${line}-${index}`}
          aria-hidden="true"
          className={cn(
            "block",
            motionPresets.splitHeadline.className,
            isVisible
              ? motionPresets.splitHeadline.visibleClassName
              : motionPresets.splitHeadline.hiddenClassName,
          )}
          style={
            {
              transitionDelay: `${delay + index * motionPresets.splitHeadline.delayStep}ms`,
            } as CSSProperties
          }
        >
          {line}
        </span>
      ))}
    </Tag>
  );
}
