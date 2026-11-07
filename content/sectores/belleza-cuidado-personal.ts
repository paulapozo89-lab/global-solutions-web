import type { Sector } from "../tipos";

export const bellezaCuidadoPersonal: Sector = {
  slug: "belleza-cuidado-personal",
  numero: "07",
  nombre: "Belleza y cuidado personal",
  nomPrincipal: "NOM-141-SSA1/SCFI",
  nomsRelacionadas: [],
  descripcion:
    "Denominación, ingredientes (INCI), lote, caducidad y modo de uso en cosméticos para cabello, rostro, manos y cuerpo.",
  queEtiquetamos: ["Cabello", "Ojos y cejas", "Labios", "Facial", "Manos y uñas"],
  camposObligatorios: [
    "Denominación del producto",
    "Marca",
    "Contenido neto",
    "Lista de ingredientes (INCI)",
    "Lote y caducidad",
    "Modo de uso",
    "Importador y RFC",
  ],
  ejemploEtiqueta: {
    titulo: "Cosmético · Marca",
    filas: [
      ["Producto", "Crema facial hidratante"],
      ["Contenido", "50 ml"],
      ["INCI", "Aqua, Glycerin, Cetearyl..."],
      ["Lote / Cad.", "C-2026 · 03/2028"],
    ],
    pie: "Cumple con NOM-141-SSA1/SCFI · Importado por Importadora Ejemplo, S.A. de C.V.",
  },
  impresionRecomendada: {
    material: "Polipropileno",
    adhesivo: "Semiagresivo",
    color: "Blanco / Transparente",
    formato: "Envolvente o sleeve",
  },
  errorComun: "Listar ingredientes sin nomenclatura INCI, o sin lote y caducidad legibles.",
  servicios: ["certificacion", "etiquetado", "impresion"],
  foto: "/img/sectores/belleza-cuidado-personal.webp",
  fotoAlt: "Envase de cosmético con etiqueta de ingredientes y sello NOM en un baño",
  validadoGS: false,
  publicado: true,
};
