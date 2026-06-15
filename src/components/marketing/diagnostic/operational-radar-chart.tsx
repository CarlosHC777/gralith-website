import { cn } from "@/lib/utils";

type RadarAxis = {
  label: string;
  current: number;
  target: number;
};

type OperationalRadarChartProps = {
  axes: RadarAxis[];
  className?: string;
  title?: string;
  description?: string;
};

const center = 210;
const radius = 112;
const levels = [0.25, 0.5, 0.75, 1];

function polarPoint(index: number, total: number, value: number) {
  const angle = -Math.PI / 2 + (index / total) * Math.PI * 2;
  const distance = radius * (value / 100);

  return {
    x: center + Math.cos(angle) * distance,
    y: center + Math.sin(angle) * distance,
  };
}

function pointsToString(points: Array<{ x: number; y: number }>) {
  return points.map(({ x, y }) => `${x.toFixed(2)},${y.toFixed(2)}`).join(" ");
}

function labelAnchor(x: number) {
  if (x < center - 16) {
    return "end";
  }

  if (x > center + 16) {
    return "start";
  }

  return "middle";
}

export function OperationalRadarChart({
  axes,
  className,
  title = "Radar de diagnóstico operativo",
  description = "Comparación ilustrativa entre estado actual y estado objetivo del despacho en seis áreas operativas.",
}: OperationalRadarChartProps) {
  const total = axes.length;
  const currentPoints = axes.map((axis, index) =>
    polarPoint(index, total, axis.current),
  );
  const targetPoints = axes.map((axis, index) =>
    polarPoint(index, total, axis.target),
  );
  const labelPoints = axes.map((axis, index) => ({
    ...polarPoint(index, total, 118),
    label: axis.label,
  }));

  return (
    <figure className={cn("w-full", className)}>
      <svg
        role="img"
        aria-labelledby="operational-radar-title operational-radar-description"
        viewBox="0 0 420 420"
        className="h-auto w-full overflow-visible"
      >
        <title id="operational-radar-title">{title}</title>
        <desc id="operational-radar-description">{description}</desc>

        <g fill="none">
          {levels.map((level) => (
            <polygon
              key={level}
              points={pointsToString(
                axes.map((_, index) => polarPoint(index, total, level * 100)),
              )}
              className="stroke-border"
              strokeWidth="1"
            />
          ))}

          {axes.map((_, index) => {
            const point = polarPoint(index, total, 100);

            return (
              <line
                key={index}
                x1={center}
                y1={center}
                x2={point.x}
                y2={point.y}
                className="stroke-border"
                strokeWidth="1"
              />
            );
          })}
        </g>

        <polygon
          points={pointsToString(currentPoints)}
          fill="#6f6258"
          fillOpacity="0.12"
          stroke="#8a7b70"
          strokeOpacity="0.52"
          strokeWidth="2"
        />
        <polygon
          points={pointsToString(targetPoints)}
          fill="var(--primary)"
          fillOpacity="0.18"
          stroke="var(--primary)"
          strokeWidth="2.5"
        />

        {targetPoints.map(({ x, y }, index) => (
          <circle
            key={`target-${axes[index].label}`}
            cx={x}
            cy={y}
            r="3.5"
            fill="var(--primary)"
          />
        ))}

        {labelPoints.map(({ x, y, label }) => (
          <text
            key={label}
            x={x}
            y={y}
            textAnchor={labelAnchor(x)}
            dominantBaseline="middle"
            className="fill-foreground text-[13px] font-medium"
          >
            {label}
          </text>
        ))}
      </svg>

      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="size-3 rounded-sm bg-[#6f6258]/20 ring-1 ring-[#8a7b70]/45" />
          <span>Estado actual</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="size-3 rounded-sm bg-primary/20 ring-1 ring-primary" />
          <span>Estado objetivo</span>
        </div>
      </div>
    </figure>
  );
}

