import { DatabaseZap, GitBranch, ListChecks, MonitorCheck } from "lucide-react";

export const automationFeatures = [
  {
    icon: ListChecks,
    title: "Procesos claros",
    description:
      "Mapeo de etapas, responsables, reglas y puntos de control para reducir ambigüedad.",
  },
  {
    icon: DatabaseZap,
    title: "Datos conectados",
    description:
      "Modelos de información que reemplazan duplicidad, archivos sueltos y capturas repetidas.",
  },
  {
    icon: GitBranch,
    title: "Flujos automatizados",
    description:
      "Acciones, alertas e integraciones que ejecutan tareas repetitivas en segundo plano.",
  },
  {
    icon: MonitorCheck,
    title: "Seguimiento visible",
    description:
      "Vistas e indicadores para saber qué está detenido, vencido o listo para avanzar.",
  },
];

export const automationProcessSteps = [
  [
    "1",
    "Diagnosticar",
    "Entendemos el flujo actual, los sistemas existentes y las pérdidas de tiempo.",
  ],
  [
    "2",
    "Diseñar",
    "Definimos una arquitectura mínima que el equipo pueda adoptar y operar.",
  ],
  [
    "3",
    "Implementar",
    "Construimos, probamos y ajustamos con usuarios reales y métricas concretas.",
  ],
];
