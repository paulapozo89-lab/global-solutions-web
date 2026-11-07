import type { Sector } from "../tipos";

export const productosEnGeneral: Sector = {
  slug: "productos-en-general",
  numero: "05",
  nombre: "Productos en general",
  nomPrincipal: "NOM-050-SCFI",
  nomsRelacionadas: [],
  descripcion:
    "Información comercial mínima para productos diversos que no cuentan con una norma específica.",
  queEtiquetamos: ["Ferretería", "Hogar", "Papelería", "Deportes", "Mascotas"],
  camposObligatorios: [
    "Marca",
    "Descripción o denominación",
    "Contenido o dimensiones",
    "País de origen",
    "Importador y RFC",
    "Leyenda de precaución (si aplica)",
  ],
  ejemploEtiqueta: {
    titulo: "Producto · Marca",
    filas: [
      ["Descripción", "Organizador plástico"],
      ["Contenido", "1 Pieza"],
      ["Medidas", "30 × 20 × 15 cm"],
      ["Origen", "China"],
    ],
    pie: "Cumple con NOM-050-SCFI · Importado por Importadora Ejemplo, S.A. de C.V.",
  },
  impresionRecomendada: {
    material: "Papel TT / PP",
    adhesivo: "Estándar",
    color: "Blanco",
    formato: "Etiqueta de empaque",
  },
  errorComun: "Dejar fuera el contenido o las dimensiones, o el RFC del importador.",
  servicios: ["certificacion", "etiquetado", "impresion"],
  foto: "/img/sectores/productos-en-general.webp",
  fotoAlt: "Organizador plástico transparente con etiqueta NOM sobre un escritorio",
  validadoGS: false,
  publicado: true,
};
