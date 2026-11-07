/** Sitio actual, sección "Nuestra historia". */
export const NOSOTROS = {
  eyebrow: "Nuestra historia",
  titulo: "Experiencia desde ambos lados del proceso normativo.",
  fundadora: "Abigail Martínez Hernández",
  parrafos: [
    "profesional con trayectoria tanto en empresas de gestoría como en organismos de certificación. Esa experiencia dual le permitió identificar las deficiencias estructurales del sistema: tiempos de respuesta prolongados, falta de acompañamiento técnico y una desconexión entre las necesidades del cliente y la operación de los actores normativos.",
    "Con ese conocimiento, creó Global Solutions S&L: una firma diseñada para operar de forma distinta. Comunicación directa, seguimiento puntual en cada fase, y la capacidad de integrar certificación, etiquetado e impresión bajo un mismo equipo.",
    "Hoy la empresa cuenta con infraestructura propia de impresión y un solo punto de contacto para todo el proceso normativo.",
  ],
  // PENDIENTE_GS: fotos reales de impresora, rollos, taller y equipo. No se generan con IA.
  fotos: [] as { src: string; alt: string }[],
} as const;
