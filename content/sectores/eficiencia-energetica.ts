import type { Sector } from "../tipos";

export const eficienciaEnergetica: Sector = {
  slug: "eficiencia-energetica",
  numero: "10",
  nombre: "Eficiencia energética",
  nomPrincipal: "NOM-ENER / NOM-022-ENER/SCFI",
  nomsRelacionadas: [
    "NOM-004-ENER",
    "NOM-014-ENER",
    "NOM-016-ENER",
    "NOM-028-ENER",
    "NOM-029-ENER",
    "NOM-030-ENER",
    "NOM-031-ENER",
    "NOM-032-ENER",
  ],
  descripcion:
    "Etiqueta de consumo de energía que compara el gasto del aparato contra el límite de la norma; obligatoria en electrodomésticos y refrigeración.",
  queEtiquetamos: ["Refrigeradores", "Enfriadores", "Aires", "Lavadoras", "Congeladores"],
  camposObligatorios: [
    "Marca, tipo y modelo",
    "Capacidad",
    "Consumo establecido en la norma",
    "Consumo del aparato",
    "Porcentaje de ahorro",
    "NOM aplicable",
  ],
  ejemploEtiqueta: {
    titulo: "Eficiencia energética · NOM-022-ENER/SCFI",
    filas: [
      ["Marca", "Icehaus · Enfriador vertical"],
      ["Modelo", "RVC-2SD-950 · Cap. 950 L"],
      ["Consumo en la norma (Wh/L · 24 h)", "9.9"],
      ["Consumo del aparato (Wh/L · 24 h)", "8.8"],
      ["Ahorro", "11.1%"],
    ],
    pie: "Etiqueta amarilla de consumo de energía",
  },
  impresionRecomendada: {
    material: "Poliéster",
    adhesivo: "Semiagresivo",
    color: "Amarillo norma",
    formato: "Etiqueta de aparato",
  },
  errorComun:
    "Usar colores o escala fuera de especificación, o no actualizar el % de ahorro del modelo.",
  servicios: ["certificacion", "etiquetado", "impresion"],
  foto: "/img/sectores/eficiencia-energetica.webp",
  fotoAlt: "Lavadora con etiqueta amarilla de eficiencia energética",
  validadoGS: false,
  publicado: true,
};
