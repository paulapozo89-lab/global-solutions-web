import type { Sector } from "../tipos";

export const alimentosBebidas: Sector = {
  slug: "alimentos-bebidas",
  numero: "08",
  nombre: "Alimentos y bebidas",
  nomPrincipal: "NOM-051-SCFI/SSA1",
  nomsRelacionadas: [],
  descripcion:
    "Denominación, ingredientes, declaración nutrimental y sellos de advertencia frontal en alimentos y bebidas no alcohólicas preenvasados.",
  queEtiquetamos: ["Abarrotes", "Botanas", "Bebidas", "Lácteos", "Congelados"],
  camposObligatorios: [
    "Denominación",
    "Marca",
    "Contenido neto",
    "Lista de ingredientes",
    "Declaración nutrimental",
    "Lote y caducidad",
    "Sellos de advertencia",
    "Importador y RFC",
  ],
  ejemploEtiqueta: {
    titulo: "Alimento · Marca",
    filas: [
      ["Producto", "Galletas"],
      ["Contenido", "200 g"],
      ["Lote", "L-228"],
      ["Caducidad", "12/2026"],
    ],
    pie: "Cumple con NOM-051-SCFI/SSA1 · Importado por Importadora Ejemplo, S.A. de C.V.",
  },
  impresionRecomendada: {
    material: "Polipropileno",
    adhesivo: "Agresivo (frío)",
    color: "Blanco",
    formato: "Frontal + nutrimental",
  },
  errorComun:
    "Calcular mal los sellos de advertencia o usar adhesivo que no resiste humedad ni frío.",
  servicios: ["certificacion", "etiquetado", "impresion"],
  foto: "/img/sectores/alimentos-bebidas.webp",
  fotoAlt: "Caja de galletas con tabla nutrimental, etiqueta NOM y sellos de advertencia",
  validadoGS: false,
  publicado: true,
};
