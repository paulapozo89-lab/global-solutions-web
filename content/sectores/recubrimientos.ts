import type { Sector } from "../tipos";

export const recubrimientos: Sector = {
  slug: "recubrimientos",
  numero: "04",
  nombre: "Recubrimientos",
  nomPrincipal: "NOM-003-SSA1",
  nomsRelacionadas: [],
  descripcion:
    "Advertencias de seguridad, toxicidad e instrucciones de uso en pinturas, tintas, barnices, lacas y esmaltes.",
  queEtiquetamos: ["Pintura vinílica", "Esmaltes", "Barnices", "Lacas", "Tintas"],
  camposObligatorios: [
    "Marca",
    "Contenido neto",
    "Advertencias de seguridad y toxicidad",
    "Instrucciones de uso",
    "Lote",
    "Fabricante o importador y RFC",
  ],
  ejemploEtiqueta: {
    titulo: "Recubrimiento · Marca",
    filas: [
      ["Producto", "Esmalte alquidálico"],
      ["Contenido", "1 L"],
      ["Advertencia", "Tóxico · Mantener fuera del alcance de niños"],
      ["Lote", "2026-04"],
    ],
    pie: "Cumple con NOM-003-SSA1 · Importado por Fabricante Ejemplo, S.A. de C.V.",
  },
  impresionRecomendada: {
    material: "Poliéster anti-solvente",
    adhesivo: "Agresivo",
    color: "Blanco",
    formato: "Etiqueta de bote",
  },
  errorComun:
    "Omitir las advertencias de toxicidad o usar un adhesivo que el solvente del producto desprende.",
  servicios: ["certificacion", "etiquetado", "impresion"],
  foto: "/img/sectores/recubrimientos.webp",
  fotoAlt: "Bote metálico de pintura con etiqueta NOM sobre una mesa de taller",
  validadoGS: false,
  publicado: true,
};
