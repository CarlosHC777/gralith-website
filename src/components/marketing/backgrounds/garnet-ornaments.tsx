"use client";

import { useEffect, useRef, type CSSProperties } from "react";

import { cn } from "@/lib/utils";

type GarnetOrnamentsProps = {
  className?: string;
};

const ornaments = [
  {
    key: "top-right-large",
    className:
      "right-[-8.5rem] top-[-4rem] size-[18rem] bg-[#681A1F]/[0.06] md:right-[-7rem] md:top-[-5rem] md:size-[25rem] md:bg-[#681A1F]/[0.1]",
    depth: -0.08,
    rotation: "10deg",
  },
  {
    key: "lower-left-medium",
    className:
      "bottom-[-5rem] left-[-4.5rem] size-[13rem] bg-[#681A1F]/[0.05] md:bottom-[-5.5rem] md:left-[-2rem] md:size-[16rem] md:bg-[#681A1F]/[0.085]",
    depth: 0.06,
    rotation: "-8deg",
  },
  {
    key: "lower-right-medium",
    className:
      "bottom-[-4rem] right-[10%] hidden size-[14rem] bg-[#681A1F]/[0.075] md:block",
    depth: 0.045,
    rotation: "4deg",
  },
  {
    key: "mid-right-accent",
    className:
      "right-[4%] top-[42%] hidden size-[10rem] bg-[#681A1F]/[0.06] lg:block",
    depth: -0.035,
    rotation: "-3deg",
  },
];

export function GarnetOrnaments({ className }: GarnetOrnamentsProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const narrowViewport = window.matchMedia("(max-width: 767px)");
    let frame = 0;

    const update = () => {
      frame = 0;

      const rect = root.getBoundingClientRect();
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const distance = Math.max(-180, Math.min(180, viewportCenter - sectionCenter));
      const motionScale = reducedMotion.matches ? 0 : narrowViewport.matches ? 0.35 : 1;

      root.querySelectorAll<HTMLElement>("[data-garnet-ornament]").forEach((ornament) => {
        const depth = Number(ornament.dataset.depth ?? "0");
        const rotation = ornament.dataset.rotation ?? "0deg";
        const y = distance * depth * motionScale;

        ornament.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0) rotate(${rotation})`;
      });
    };

    const requestUpdate = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotion.addEventListener("change", requestUpdate);
    narrowViewport.addEventListener("change", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener("change", requestUpdate);
      narrowViewport.removeEventListener("change", requestUpdate);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 z-0 overflow-hidden", className)}
    >
      {ornaments.map((ornament) => (
        <div
          key={ornament.key}
          data-garnet-ornament
          data-depth={ornament.depth}
          data-rotation={ornament.rotation}
          className={cn("absolute transform-gpu will-change-transform", ornament.className)}
          style={
            {
              clipPath:
                "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0 50%)",
              transform: `rotate(${ornament.rotation})`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
