import type { Sector } from "../tipos";

export const juguetes: Sector = {
  slug: "juguetes",
  numero: "06",
  nombre: "Juguetes",
  nomPrincipal: "NOM-015-SCFI",
  nomsRelacionadas: [],
  descripcion:
    "Edad recomendada, advertencias de seguridad y datos comerciales para juguetes y artículos infantiles.",
  queEtiquetamos: ["Didácticos", "Peluches", "Figuras", "Juegos de mesa", "Muñecas"],
  camposObligatorios: [
    "Marca",
    "Descripción",
    "Edad recomendada",
    "Advertencias (piezas pequeñas)",
    "Contenido",
    "Importador y RFC",
  ],
  ejemploEtiqueta: {
    titulo: "Juguete · Marca",
    filas: [
      ["Descripción", "Bloques de construcción"],
      ["Edad", "+3 años"],
      ["Advertencia", "Piezas pequeñas · Riesgo de asfixia"],
      ["Origen", "China"],
    ],
    pie: "Cumple con NOM-015-SCFI · Importado por Importadora Ejemplo, S.A. de C.V.",
  },
  impresionRecomendada: {
    material: "Papel TT / PP",
    adhesivo: "Estándar",
    color: "Blanco",
    formato: "Etiqueta de caja",
  },
  errorComun: "No incluir la edad recomendada ni la advertencia de piezas pequeñas.",
  servicios: ["certificacion", "etiquetado", "impresion"],
  // La foto del catálogo muestra un logo de terceros (LEGO) y no se usa.
  // Esta es una imagen genérica generada con Higgsfield (7 nov 2026): bloques de madera y peluche sin marcas, etiqueta en blanco.
  foto: "/img/sectores/juguetes.webp",
  fotoAlt: "Caja de bloques de madera con etiqueta en blanco junto a un oso de peluche en una repisa infantil",
  validadoGS: false,
  publicado: true,
};
