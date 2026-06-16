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
    "Diagnóstico",
    "Entendemos el flujo actual, los sistemas existentes y las pérdidas de tiempo.",
  ],
  [
    "2",
    "Diseño del flujo",
    "Definimos una arquitectura mínima que el equipo pueda adoptar y operar.",
  ],
  [
    "3",
    "Automatización inicial",
    "Construimos una primera versión funcional enfocada en reducir fricción manual.",
  ],
  [
    "4",
    "Seguimiento y ajuste",
    "Ajustamos con base en uso real, responsables y métricas concretas.",
  ],
];
