"use client";

import { useEffect, useMemo, useRef } from "react";

import { cn } from "@/lib/utils";

type GralithHexagonBackgroundProps = {
  variant?: "hero" | "surface" | "dark" | "card" | "heroWide";
  className?: string;
};

type HexCell = {
  key: string;
  path: string;
  highlighted: boolean;
};

type HeroAccentCell = {
  key: string;
  className: string;
  desktopOnly?: boolean;
};

const heroAccentCells: HeroAccentCell[] = [
  { key: "12:0", className: "fill-[#9a8f84]/[0.18]" },
  { key: "13:1", className: "fill-[#c1aa93]/[0.16]" },
  { key: "11:5", className: "fill-[#8f7771]/[0.15]" },
  { key: "15:5", className: "fill-[#9a8f84]/[0.13]", desktopOnly: true },
  { key: "9:7", className: "fill-[#521317]/[0.08]", desktopOnly: true },
];

const heroAccentKeySet = new Set(heroAccentCells.map((cell) => cell.key));

const variantConfig = {
  hero: {
    radius: 44,
    opacity: "opacity-[0.2] md:opacity-[0.55]",
    stroke: "stroke-primary/12",
    highlightStroke: "stroke-primary/24",
    highlightFill: "fill-primary/[0.06]",
    glow: "bg-primary/[0.08]",
    warmGlow: "bg-[#b8896b]/[0.12]",
    mask: "[mask-image:radial-gradient(720px_circle_at_74%_38%,black,transparent_78%)]",
    highlights: new Set(["10:1", "11:1", "10:2", "3:7", "14:6"]),
  },
  surface: {
    radius: 40,
    opacity: "opacity-[0.18] md:opacity-[0.48]",
    stroke: "stroke-primary/10",
    highlightStroke: "stroke-primary/20",
    highlightFill: "fill-primary/[0.045]",
    glow: "bg-primary/[0.075]",
    warmGlow: "bg-[#b8896b]/[0.1]",
    mask: "[mask-image:radial-gradient(520px_circle_at_72%_28%,black,transparent_78%)]",
    highlights: new Set(["8:1", "9:2", "2:5", "12:5"]),
  },
  dark: {
    radius: 42,
    opacity: "opacity-[0.24] md:opacity-[0.58]",
    stroke: "stroke-primary-foreground/12",
    highlightStroke: "stroke-primary-foreground/24",
    highlightFill: "fill-primary-foreground/[0.06]",
    glow: "bg-primary-foreground/[0.08]",
    warmGlow: "bg-[#f0dcdd]/[0.08]",
    mask: "[mask-image:radial-gradient(680px_circle_at_68%_42%,black,transparent_76%)]",
    highlights: new Set(["8:1", "9:2", "10:3", "4:6", "12:7"]),
  },
  card: {
    radius: 34,
    opacity: "opacity-[0.13] md:opacity-[0.16]",
    stroke: "stroke-[#521317]",
    highlightStroke: "stroke-[#521317]",
    highlightFill: "fill-transparent",
    glow: "hidden",
    warmGlow: "hidden",
    mask: "",
    highlights: new Set<string>(),
  },
  heroWide: {
    radius: 48,
    opacity: "opacity-[0.045] md:opacity-[0.06]",
    stroke: "stroke-[#521317]",
    highlightStroke: "stroke-[#521317]",
    highlightFill: "fill-transparent",
    glow: "hidden",
    warmGlow: "hidden",
    mask: "",
    highlights: heroAccentKeySet,
  },
} satisfies Record<
  NonNullable<GralithHexagonBackgroundProps["variant"]>,
  {
    radius: number;
    opacity: string;
    stroke: string;
    highlightStroke: string;
    highlightFill: string;
    glow: string;
    warmGlow: string;
    mask: string;
    highlights: Set<string>;
  }
>;

function hexPath(cx: number, cy: number, radius: number) {
  const points = Array.from({ length: 6 }, (_, index) => {
    const angle = (Math.PI / 180) * (60 * index);
    return `${(cx + radius * Math.cos(angle)).toFixed(2)},${(
      cy + radius * Math.sin(angle)
    ).toFixed(2)}`;
  });

  return `M${points.join("L")}Z`;
}

function createCells(radius: number, highlights: Set<string>) {
  const width = Math.sqrt(3) * radius;
  const height = radius * 1.5;
  const cells: HexCell[] = [];

  for (let row = -2; row < 12; row += 1) {
    for (let col = -2; col < 18; col += 1) {
      const x = col * width + (row % 2 ? width / 2 : 0) + 34;
      const y = row * height + radius + 8;

      cells.push({
        key: `${col}:${row}`,
        path: hexPath(x, y, radius),
        highlighted: highlights.has(`${col}:${row}`),
      });
    }
  }

  return cells;
}

export function GralithHexagonBackground({
  variant = "hero",
  className,
}: GralithHexagonBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const config = variantConfig[variant];
  const isCard = variant === "card";
  const isHeroWide = variant === "heroWide";
  const isCrispOnly = variant === "card" || variant === "heroWide";
  const cells = useMemo(
    () => createCells(config.radius, config.highlights),
    [config.radius, config.highlights],
  );
  const heroAccents = useMemo(
    () =>
      isHeroWide
        ? heroAccentCells
            .map((accent) => {
              const cell = cells.find(({ key }) => key === accent.key);

              return cell ? { ...accent, path: cell.path } : null;
            })
            .filter((accent): accent is HeroAccentCell & { path: string } =>
              Boolean(accent),
            )
        : [],
    [cells, isHeroWide],
  );

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 767px)");
    let frame = 0;

    const update = () => {
      frame = 0;

      if (isCrispOnly || reducedMotion.matches || mobile.matches) {
        element.style.setProperty("--hex-shift", "0px");
        return;
      }

      const rect = element.getBoundingClientRect();
      const distance = window.innerHeight / 2 - (rect.top + rect.height / 2);
      const shift = Math.max(-18, Math.min(18, distance * 0.025));

      element.style.setProperty("--hex-shift", `${shift.toFixed(2)}px`);
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
    mobile.addEventListener("change", requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener("change", requestUpdate);
      mobile.removeEventListener("change", requestUpdate);
    };
  }, [isCrispOnly]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden [transform:translate3d(0,var(--hex-shift,0px),0)]",
        className,
      )}
    >
      <div
        className={cn(
          "absolute -inset-x-12 -inset-y-10 md:-inset-x-20 md:-inset-y-16",
          config.opacity,
          config.mask,
          !isCrispOnly && "motion-safe:[animation:gralith-hex-pan_34s_ease-in-out_infinite]",
        )}
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 1280 760"
          preserveAspectRatio="xMidYMid slice"
        >
          <g
            className={cn("fill-transparent", config.stroke)}
            strokeWidth={isCard ? "1.15" : "1"}
          >
            {cells.map((cell) =>
              cell.highlighted ? null : <path key={cell.key} d={cell.path} />,
            )}
          </g>
          {isHeroWide ? (
            <g strokeWidth="1">
              {heroAccents.map((accent) => (
                <path
                  key={accent.key}
                  d={accent.path}
                  className={cn(
                    "stroke-[#521317]/[0.09]",
                    accent.className,
                    accent.desktopOnly && "hidden md:block",
                  )}
                />
              ))}
            </g>
          ) : null}
          {!isCrispOnly ? (
            <>
              <g
                className={cn(config.highlightFill, config.highlightStroke)}
                strokeWidth="1.25"
              >
                {cells.map((cell) =>
                  cell.highlighted ? (
                    <path key={cell.key} d={cell.path} />
                  ) : null,
                )}
              </g>
              <g className="stroke-primary/14 opacity-60" strokeWidth="1">
                {variant !== "dark"
                  ? cells
                      .filter((cell) => cell.highlighted)
                      .map((cell) => (
                        <path
                          key={`facet-${cell.key}`}
                          d={cell.path}
                          className="fill-transparent [stroke-dasharray:14_18]"
                        />
                      ))
                  : null}
              </g>
            </>
          ) : null}
        </svg>
      </div>

      {!isCrispOnly ? (
        <>
          <div className={cn("absolute right-[6%] top-[10%] h-72 w-72 rounded-full blur-3xl md:h-96 md:w-96", config.glow)} />
          <div className={cn("absolute -left-16 top-[8%] h-56 w-56 rounded-full blur-3xl md:h-72 md:w-72", config.warmGlow)} />
        </>
      ) : null}
    </div>
  );
}
