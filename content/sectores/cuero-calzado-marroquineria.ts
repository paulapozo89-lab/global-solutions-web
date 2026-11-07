import type { Sector } from "../tipos";

export const cueroCalzadoMarroquineria: Sector = {
  slug: "cuero-calzado-marroquineria",
  numero: "02",
  nombre: "Cuero, calzado y marroquinería",
  nomPrincipal: "NOM-020-SCFI",
  nomsRelacionadas: [],
  descripcion:
    "Identifica los materiales de corte, forro, plantilla y suela del calzado, y de los artículos de piel, cuero natural o sintético.",
  queEtiquetamos: ["Zapatos", "Botas", "Bolsos", "Cinturones", "Carteras", "Maletas"],
  camposObligatorios: [
    "Marca",
    "Descripción del artículo",
    "Material: corte, forro, suela y plantilla",
    "Talla",
    "País de origen",
    "Importador y RFC",
  ],
  ejemploEtiqueta: {
    titulo: "Calzado · Marca",
    filas: [
      ["Modelo", "Botín casual"],
      ["Corte", "Piel"],
      ["Forro", "Textil"],
      ["Suela", "Hule · Talla 27"],
    ],
    pie: "Cumple con NOM-020-SCFI · Importado por Comercializadora Ejemplo, S.A. de C.V.",
  },
  impresionRecomendada: {
    material: "Poliéster",
    adhesivo: "Semiagresivo",
    color: "Blanco / Transparente",
    formato: "Empaque + parche",
  },
  errorComun:
    "Declarar \"piel\" sin especificar el material de corte, forro, suela y plantilla por separado.",
  servicios: ["certificacion", "etiquetado", "impresion"],
  foto: "/img/sectores/cuero-calzado-marroquineria.webp",
  fotoAlt: "Etiqueta colgante con tallas y código de barras sobre un tenis deportivo gris",
  validadoGS: false,
  publicado: true,
};
