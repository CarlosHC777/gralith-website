import {
  CalendarDays,
  Eye,
  FileSearch,
  Files,
  ListChecks,
  Search,
} from "lucide-react";

export const legalPainPoints = [
  "Conversaciones en WhatsApp que contienen decisiones importantes.",
  "Documentos en carpetas dispersas, versiones sueltas o correos antiguos.",
  "Fechas críticas en calendarios separados y seguimiento manual.",
  "Poca visibilidad para socios, responsables y equipo administrativo.",
  "Dificultad para saber qué cambió, quién lo hizo y cuándo.",
];

export const legalUseCases = [
  {
    title: "Seguimiento de expedientes",
    description:
      "Visualiza responsables, estados, pendientes y próximos pasos por asunto.",
    icon: ListChecks,
  },
  {
    title: "Control documental",
    description:
      "Asocia archivos relevantes al expediente para reducir carpetas paralelas.",
    icon: Files,
  },
  {
    title: "Agenda y fechas críticas",
    description:
      "Mantén audiencias, vencimientos y tareas ligadas al contexto operativo.",
    icon: CalendarDays,
  },
  {
    title: "Visibilidad para responsables",
    description:
      "Da a socios y líderes una lectura clara de carga, bloqueos y avances.",
    icon: Eye,
  },
  {
    title: "Búsqueda rápida",
    description:
      "Encuentra clientes, expedientes y documentos sin depender de memoria.",
    icon: Search,
  },
  {
    title: "Actividad trazable",
    description:
      "Consulta movimientos relevantes del equipo sin reconstruir conversaciones.",
    icon: FileSearch,
  },
];

export const legalProcessSteps = [
  [
    "01",
    "Diagnóstico",
    "Revisamos cómo trabaja actualmente el despacho: clientes, expedientes, documentos, agenda y seguimiento.",
  ],
  [
    "02",
    "Diseño",
    "Definimos un flujo operativo claro y priorizamos los puntos donde la automatización puede generar más valor.",
  ],
  [
    "03",
    "Automatización inicial",
    "Implementamos una primera versión funcional enfocada en centralizar información y reducir tareas manuales.",
  ],
  [
    "04",
    "Seguimiento",
    "Ajustamos el sistema con base en el uso real del equipo y los casos del despacho.",
  ],
];

export const legalAudiences = [
  "Despachos pequeños y medianos que quieren ordenar su operación.",
  "Equipos jurídicos con varios expedientes activos y múltiples responsables.",
  "Áreas que manejan muchos documentos, versiones y fechas críticas.",
  "Responsables que necesitan visibilidad sin cambiar todo de golpe.",
];

export const legalPrinciples = [
  "Primero ordenar, luego automatizar.",
  "Trazabilidad antes que complejidad.",
  "Software adaptado al flujo real del despacho.",
  "Automatización gradual, enfocada en adopción.",
  "Visibilidad para tomar mejores decisiones operativas.",
];
