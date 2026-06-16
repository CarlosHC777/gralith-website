"use client";

import {
  Children,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import { motionPresets } from "@/components/motion/motion-presets";
import { useMotionInView } from "@/components/motion/use-motion-in-view";
import { cn } from "@/lib/utils";

type StaggerContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  childClassName?: string;
  delay?: number;
  initialVisible?: boolean;
  step?: number;
  once?: boolean;
};

export function StaggerContainer({
  children,
  childClassName,
  delay = 0,
  initialVisible = false,
  step = motionPresets.reveal.delayStep,
  once = true,
  className,
  ...props
}: StaggerContainerProps) {
  const { ref, isVisible } = useMotionInView<HTMLDivElement>({
    initialVisible,
    once,
  });

  return (
    <div ref={ref} className={className} {...props}>
      {Children.map(children, (child, index) => (
        <div
          className={cn(
            motionPresets.reveal.className,
            isVisible
              ? motionPresets.reveal.visibleClassName
              : motionPresets.reveal.hiddenClassName,
            childClassName,
          )}
          style={
            {
              transitionDelay: `${delay + index * step}ms`,
            } as CSSProperties
          }
        >
          {child}
        </div>
      ))}
    </div>
  );
}
