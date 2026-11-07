import type { Sector } from "../tipos";

export const textil: Sector = {
  slug: "textil",
  numero: "01",
  nombre: "Textil",
  nomPrincipal: "NOM-004-SE",
  nomsRelacionadas: [],
  descripcion:
    "La etiqueta debe declarar marca, talla, composición de fibras e instrucciones de cuidado, de forma permanente y legible, en prendas, ropa de casa y accesorios textiles.",
  queEtiquetamos: ["Sábanas", "Toallas", "Cortinas", "Calcetines", "Mochilas", "Ropa de vestir"],
  camposObligatorios: [
    "Marca o razón social",
    "Talla",
    "Composición de fibras (%)",
    "Instrucciones de cuidado",
    "País de origen",
    "Importador y RFC",
  ],
  ejemploEtiqueta: {
    titulo: "Textil · Marca",
    filas: [
      ["Descripción", "Toalla de baño"],
      ["Composición", "100% Algodón"],
      ["Cuidado", "Lavar en frío · No blanquear"],
      ["Origen", "Hecho en México"],
    ],
    pie: "Cumple con NOM-004-SE · Importado por Importadora Ejemplo, S.A. de C.V.",
  },
  impresionRecomendada: { material: "Satín, Nylon", color: "Blanco", formato: "Colgante o cosida" },
  errorComun:
    "Omitir el símbolo de cuidado o declarar la composición de fibras sin el porcentaje exacto.",
  servicios: ["certificacion", "etiquetado", "impresion"],
  foto: "/img/sectores/textil.webp",
  fotoAlt: "Manos sosteniendo la etiqueta de cuidado cosida de una prenda textil",
  validadoGS: false,
  publicado: true,
};
