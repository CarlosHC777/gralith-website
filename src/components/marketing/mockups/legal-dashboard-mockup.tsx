import { Activity, CalendarDays, Search, ShieldCheck } from "lucide-react";

import { SectionReveal } from "@/components/motion/section-reveal";
import { StaggerContainer } from "@/components/motion/stagger-container";

const cases = [
  ["CIV-204", "Arrendamiento", "En seguimiento", "Ana R.", "18 Jun"],
  ["MER-118", "Cobranza", "Documentación pendiente", "Luis M.", "20 Jun"],
  ["FAM-082", "Convenio", "Próxima audiencia", "María C.", "24 Jun"],
  ["LAB-331", "Conciliación", "En revisión", "Socio", "28 Jun"],
];

const activity = [
  "Documento agregado al expediente CIV-204",
  "Audiencia programada para FAM-082",
  "Responsable actualizado en MER-118",
  "Nota interna registrada en LAB-331",
];

const metrics = [
  ["36", "expedientes activos"],
  ["12", "fechas críticas"],
  ["84", "documentos vinculados"],
];

function StatusBadge({ status }: { status: string }) {
  const tone =
    status === "En seguimiento"
      ? "bg-[var(--gralith-garnet-soft-fill)] text-[var(--gralith-garnet-muted)]"
      : status === "Próxima audiencia"
        ? "bg-[#b8896b]/15 text-[#e1b58f]"
        : "bg-[var(--gralith-dark-elevated)] text-[var(--gralith-dark-text-secondary)]";

  return (
    <span className={`rounded-full px-2 py-1 text-xs font-medium ${tone}`}>
      {status}
    </span>
  );
}

export function LegalDashboardMockup() {
  return (
    <div className="relative overflow-hidden rounded-lg border border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-elevated)] text-[var(--gralith-dark-text)] shadow-[0_24px_90px_-62px_var(--gralith-garnet)]">
      <div className="relative z-10 border-b border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-surface)] px-4 py-4 sm:px-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gralith-garnet-muted)]">
              Gralith Legal
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-normal">
              Control operativo del despacho
            </h2>
          </div>
          <div className="flex min-h-10 min-w-0 items-center gap-2 rounded-md border border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-base)] px-3 text-sm text-[var(--gralith-dark-text-muted)] lg:w-80">
            <Search className="size-4 shrink-0" aria-hidden="true" />
            <span className="truncate">Buscar expediente, cliente o documento</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 grid gap-4 p-4 sm:p-5">
        <StaggerContainer className="grid gap-3 sm:grid-cols-3" delay={80} step={70}>
          {metrics.map(([value, label]) => (
            <div
              key={label}
              className="rounded-lg border border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-panel)] p-4"
            >
              <p className="text-3xl font-semibold tracking-normal">{value}</p>
              <p className="mt-1 text-sm text-[var(--gralith-dark-text-secondary)]">{label}</p>
            </div>
          ))}
        </StaggerContainer>

        <div className="grid gap-4 xl:grid-cols-[1.45fr_0.55fr]">
          <div className="overflow-hidden rounded-lg border border-[var(--gralith-dark-border)]">
            <div className="overflow-x-auto lg:overflow-visible">
              <div className="min-w-[720px] lg:min-w-0">
                <div className="grid grid-cols-[0.7fr_1fr_1.2fr_0.75fr_0.75fr] gap-3 border-b border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-surface)] px-4 py-3 text-xs font-medium uppercase tracking-[0.12em] text-[var(--gralith-dark-text-muted)]">
                  <span>ID</span>
                  <span>Materia</span>
                  <span>Estado</span>
                  <span>Responsable</span>
                  <span>Próxima fecha</span>
                </div>
                {cases.map(([id, matter, status, owner, nextDate], index) => (
                  <SectionReveal
                    key={id}
                    delay={160 + index * 70}
                    className="grid grid-cols-[0.7fr_1fr_1.2fr_0.75fr_0.75fr] items-center gap-3 border-b border-[var(--gralith-dark-border)] px-4 py-4 text-sm last:border-b-0"
                  >
                    <span className="font-medium text-[var(--gralith-garnet-muted)]">{id}</span>
                    <span>{matter}</span>
                    <StatusBadge status={status} />
                    <span className="text-[var(--gralith-dark-text-secondary)]">{owner}</span>
                    <span className="text-[var(--gralith-dark-text-secondary)]">{nextDate}</span>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-panel)] p-4">
            <div className="flex items-center gap-2">
              <Activity className="size-4 text-[var(--gralith-garnet-muted)]" aria-hidden="true" />
              <h3 className="font-medium">Actividad trazable</h3>
            </div>
            <div className="mt-5 grid gap-4">
              {activity.map((item, index) => (
                <SectionReveal
                  key={item}
                  delay={240 + index * 80}
                  className="grid grid-cols-[auto_1fr] gap-3"
                >
                  <div className="mt-1 flex size-6 items-center justify-center rounded-full border border-[var(--gralith-dark-border-garnet)] bg-[var(--gralith-garnet-soft-fill)] text-[var(--gralith-garnet-muted)]">
                    {index === 1 ? (
                      <CalendarDays className="size-3" aria-hidden="true" />
                    ) : index === 2 ? (
                      <ShieldCheck className="size-3" aria-hidden="true" />
                    ) : (
                      <Activity className="size-3" aria-hidden="true" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm leading-5">{item}</p>
                    <p className="mt-1 text-xs text-[var(--gralith-dark-text-muted)]">
                      hace {index + 1} h
                    </p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
