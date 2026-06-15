"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import { motionPresets, reducedMotionQuery } from "@/components/motion/motion-presets";
import { cn } from "@/lib/utils";

type ParallaxLayerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  speed?: number;
  maxOffset?: number;
  disabled?: boolean;
};

export function ParallaxLayer({
  children,
  speed = motionPresets.parallax.speed,
  maxOffset = motionPresets.parallax.maxOffset,
  disabled = false,
  className,
  style,
  ...props
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const element = ref.current;
    const reducedMotion = window.matchMedia(reducedMotionQuery);

    if (!element || disabled || reducedMotion.matches) {
      setOffset(0);
      return;
    }

    let frame = 0;

    const updateOffset = () => {
      const rect = element.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const layerCenter = rect.top + rect.height / 2;
      const nextOffset = Math.max(
        -maxOffset,
        Math.min(maxOffset, (viewportCenter - layerCenter) * speed),
      );

      setOffset(nextOffset);
      frame = 0;
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateOffset);
    };

    updateOffset();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [disabled, maxOffset, speed]);

  return (
    <div
      ref={ref}
      className={cn(
        "transform-gpu motion-reduce:transform-none",
        className,
      )}
      style={
        {
          ...style,
          transform: `translate3d(0, ${offset.toFixed(2)}px, 0)`,
        } as CSSProperties
      }
      {...props}
    >
      {children}
    </div>
  );
}

