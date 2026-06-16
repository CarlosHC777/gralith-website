"use client";

import { useEffect, useRef, useState } from "react";

import { motionPresets, reducedMotionQuery } from "@/components/motion/motion-presets";

type MotionInViewOptions = {
  initialVisible?: boolean;
  once?: boolean;
};

export function useMotionInView<TElement extends Element>({
  initialVisible = false,
  once = true,
}: MotionInViewOptions = {}) {
  const ref = useRef<TElement>(null);
  const [isVisible, setIsVisible] = useState(initialVisible);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const reducedMotion = window.matchMedia(reducedMotionQuery);

    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      const frame = window.requestAnimationFrame(() => setIsVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      motionPresets.observer,
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once]);

  return { ref, isVisible };
}
