import { Check, Minus } from "lucide-react";

const before = [
  "WhatsApp para seguimiento",
  "Drive para documentos",
  "Excel para control",
  "Correos para instrucciones",
  "Agenda separada",
  "Avances de expediente poco visibles",
];

const after = [
  "Expedientes centralizados",
  "Documentos asociados al caso",
  "Agenda vinculada a la operación",
  "Actividad trazable",
  "Búsqueda global",
  "Roles, permisos y visibilidad para responsables",
];

export function LegalBeforeAfter() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="rounded-lg border border-border bg-card p-5 md:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Antes
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-normal">
          Trabajo repartido entre herramientas y memoria
        </h3>
        <div className="mt-6 grid gap-3">
          {before.map((item) => (
            <div key={item} className="flex gap-3 text-sm text-muted-foreground">
              <Minus className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-primary/25 bg-primary p-5 text-primary-foreground md:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-80">
          Con Gralith Legal
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-normal">
          Un sistema operativo para ver qué pasa en cada asunto
        </h3>
        <div className="mt-6 grid gap-3">
          {after.map((item) => (
            <div key={item} className="flex gap-3 text-sm opacity-90">
              <Check className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
