export const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

export const motionPresets = {
  reveal: {
    className:
      "transform-gpu transition-[opacity,transform] duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none",
    hiddenClassName: "translate-y-5 opacity-0",
    visibleClassName: "translate-y-0 opacity-100",
    delayStep: 80,
  },
  scaleReveal: {
    className:
      "transform-gpu transition-[opacity,transform] duration-700 ease-out motion-reduce:scale-100 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none",
    hiddenClassName: "translate-y-4 scale-[0.985] opacity-0",
    visibleClassName: "translate-y-0 scale-100 opacity-100",
  },
  splitHeadline: {
    className:
      "transform-gpu transition-[opacity,transform] duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none",
    hiddenClassName: "translate-y-3 opacity-0",
    visibleClassName: "translate-y-0 opacity-100",
    delayStep: 42,
  },
  parallax: {
    speed: 0.08,
    maxOffset: 24,
  },
  observer: {
    rootMargin: "0px 0px -12% 0px",
    threshold: 0.18,
  },
} as const;
