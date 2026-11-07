import type { Sector } from "../tipos";

export const bebidasAlcoholicas: Sector = {
  slug: "bebidas-alcoholicas",
  numero: "09",
  nombre: "Bebidas alcohólicas",
  nomPrincipal: "NOM-142-SSA1/SCFI",
  nomsRelacionadas: [],
  descripcion:
    "Contenido alcohólico, contenido neto y leyendas precautorias en bebidas alcohólicas preenvasadas.",
  queEtiquetamos: ["Destilados", "Vinos", "Licores", "Cervezas", "Cócteles"],
  camposObligatorios: [
    "Marca",
    "Contenido neto",
    "Por ciento de alcohol (% Alc. Vol.)",
    "Leyenda precautoria",
    "Lote",
    "Importador y RFC",
  ],
  ejemploEtiqueta: {
    titulo: "Destilado · Marca",
    filas: [
      ["Producto", "Tequila reposado"],
      ["Contenido", "750 ml"],
      ["Alcohol", "38% Alc. Vol."],
      ["Leyenda", "El abuso en el consumo es nocivo para la salud"],
    ],
    pie: "Cumple con NOM-142-SSA1/SCFI · Importado por Comercializadora Ejemplo, S.A. de C.V.",
  },
  impresionRecomendada: {
    material: "Poliéster / premium",
    adhesivo: "Semiagresivo",
    color: "Blanco / Transparente",
    formato: "Etiqueta de botella",
  },
  errorComun: "Omitir el porcentaje de alcohol (% Alc. Vol.) o la leyenda precautoria obligatoria.",
  servicios: ["certificacion", "etiquetado", "impresion"],
  foto: "/img/sectores/bebidas-alcoholicas.webp",
  fotoAlt: "Botella de vino con etiqueta NOM sobre la barra de un bar",
  validadoGS: false,
  publicado: true,
};
