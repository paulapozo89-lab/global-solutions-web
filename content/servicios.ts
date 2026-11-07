export type Paso = { titulo: string; texto: string };

export const SERVICIOS = [
  {
    slug: "certificacion-nom",
    numero: "01",
    nombre: "Consultoría y certificación NOM",
    corto: "Certificación NOM",
    resumen:
      "Gestionamos todo el proceso de certificación ante organismos certificadores y dependencias autorizadas.",
    incluye: [
      "Diagnóstico normativo: identificamos qué NOMs aplican",
      "Certificado de Conformidad (CC)",
      "Carta de justificación técnica",
      "Carta de validación para liberación aduanal",
      "Modificaciones, renovaciones y ampliaciones",
      "Gestión de resolución técnica ante DGN",
      "Asesoría inicial sin costo",
    ],
  },
  {
    slug: "diseno-de-etiquetado",
    numero: "02",
    nombre: "Diseño de etiquetado e información comercial",
    corto: "Diseño de etiquetado",
    resumen: "Diseñamos etiquetas, manuales y garantías que cumplen cada requisito normativo.",
    incluye: [
      "Evaluación técnica de etiqueta (campos, idioma, advertencias)",
      "Diseño de etiqueta conforme a NOM aplicable",
      "Diseño de manuales de usuario y pólizas de garantía",
      "Adaptación de etiqueta en empaque",
      "Validación final técnico-normativa pre-impresión",
    ],
  },
  {
    slug: "impresion-de-etiquetas",
    numero: "03",
    nombre: "Impresión de etiquetas",
    corto: "Impresión de etiquetas",
    resumen: "Producimos tus etiquetas con infraestructura propia y control de calidad.",
    incluye: [
      "Pre-prensa y pruebas: muestra digital para aprobación",
      "Selección de sustrato y técnica según durabilidad",
      "Producción con control de color y campos críticos",
      "Control de calidad: contenido normativo, adhesión, trazabilidad",
      "Logística y entrega a cualquier punto de la república",
    ],
  },
] as const;

/** Catálogo p. 4: evaluamos, diseñamos, imprimimos. */
export const CICLO = [
  {
    numero: "01",
    titulo: "Evaluamos",
    texto: "Revisamos tu etiqueta, empaque, manual y garantía contra la NOM que aplica a tu producto.",
    puntos: ["Campos obligatorios", "Instructivo y póliza", "Idioma y advertencias", "Dictamen pre-impresión"],
  },
  {
    numero: "02",
    titulo: "Diseñamos",
    texto: "Creamos la etiqueta, empaque, manual y garantía que cumplen cada requisito normativo.",
    puntos: ["Arte conforme a NOM", "Manual y garantía", "Diseño de empaque", "Validación técnica final"],
  },
  {
    numero: "03",
    titulo: "Imprimimos",
    texto: "Producción propia de etiquetas con control de calidad e impresión térmica de alta definición.",
    puntos: ["Rollos industriales", "Material y adhesivo a medida", "Códigos NOM y de barras", "Entrega en 3-5 días"],
  },
] as const;

/** Proceso de etiquetado e impresión (catálogo p. 4). */
export const PROCESO_ETIQUETADO: Paso[] = [
  { titulo: "Diagnóstico", texto: "Revisamos tu etiqueta contra la NOM que aplica." },
  { titulo: "Diseño", texto: "Arte conforme a norma, manual y garantía." },
  { titulo: "Validación", texto: "Dictamen técnico antes de imprimir." },
  { titulo: "Impresión", texto: "Producción propia con control de calidad." },
  { titulo: "Entrega", texto: "Rollos listos para anaquel y aduana." },
];

/** Proceso de certificación (sitio actual). */
export const PROCESO_CERTIFICACION: Paso[] = [
  { titulo: "Diagnóstico", texto: "Identificamos qué NOMs aplican. Gratuito, en 48h." },
  { titulo: "Certificación", texto: "Tramitamos tu certificado ante el organismo correspondiente." },
  { titulo: "Diseño", texto: "Creamos tu etiqueta, manual y garantía conforme a norma." },
  { titulo: "Impresión", texto: "Producimos tus etiquetas con control de calidad propio." },
  { titulo: "Entrega", texto: "Producto listo para anaquel, producción o despacho aduanal." },
];

/** Catálogo p. 5. */
export const IMPRESION_ESPECIFICACIONES = {
  intro:
    "Producción propia con equipo térmico de alta definición. Tú eliges material, color, acabado y adhesivo según dónde vivirá la etiqueta.",
  grupos: [
    { titulo: "Colores", opciones: ["Blanco", "Gris", "Transparente"] },
    { titulo: "Material", opciones: ["Papel térmico (TT)", "Polipropileno", "Poliéster"] },
    { titulo: "Calidad", opciones: ["Básica", "Intermedia", "Alta"] },
    { titulo: "Pegamento", opciones: ["Estándar", "Semiagresivo", "Agresivo"] },
  ],
  incluye:
    "Incluye: códigos NOM y de barras, rollos a medida, resistencia a humedad, roce y exterior, troquelado a tu formato.",
  fotoPie: "Etiquetas NOM impresas en rollo, listas para aplicar",
  /** Aparece una sola vez en el sitio. */
  plazo: "Solo aplica a impresión de etiquetas: 3 a 5 días hábiles.",
} as const;

/** Catálogo p. 3. */
export const PROBLEMAS = [
  {
    titulo: "Producto retenido en aduana",
    texto:
      "Tu embarque llega pero no se libera por falta de certificación NOM o etiqueta incorrecta. Cada día son costos de almacenaje.",
  },
  {
    titulo: "Riesgo de sanción de PROFECO",
    texto:
      "El producto está en anaquel pero la etiqueta no cumple la norma. Una inspección puede significar multas y retiro de producto.",
  },
  {
    titulo: "No sabes qué NOM aplica",
    texto:
      "Quieres importar o lanzar, pero no tienes claro qué normas aplican ni qué documentos necesitas. Nosotros te lo decimos en 48 h.",
  },
] as const;

/** Sitio actual, sección "¿Por qué Global Solutions S&L?" */
export const PORQUE = [
  {
    titulo: "Solución integral",
    texto:
      "Certificación + etiquetado + impresión con infraestructura propia en un proceso unificado. Sin errores de coordinación entre proveedores.",
  },
  {
    titulo: "Diagnóstico gratuito en 48h",
    texto:
      "Te decimos exactamente qué NOMs aplican a tu producto, qué necesitas y cuánto toma. Sin compromiso.",
  },
  {
    titulo: "Experiencia real en tus NOMs",
    texto: "Especialistas en NOM-003-SCFI, NOM-024-SCFI y carta DGN.",
  },
  {
    titulo: "Atención directa",
    texto:
      "Hablas directamente con quienes gestionan tu trámite. Sin call centers, sin burocracia. Respuesta ágil por WhatsApp.",
  },
  {
    titulo: "Cumplimiento normativo y comercial",
    texto:
      "Aseguramos el cumplimiento normativo y de información comercial. Las cartas de validación para retenciones aplican con un máximo de 3 muestras.",
  },
] as const;
