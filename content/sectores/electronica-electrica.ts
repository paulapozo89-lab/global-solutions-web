import type { Sector } from "../tipos";

export const electronicaElectrica: Sector = {
  slug: "electronica-electrica",
  numero: "03",
  nombre: "Electrónica y eléctrica",
  nomPrincipal: "NOM-024-SCFI",
  nomsRelacionadas: [
    "NOM-001-SCFI",
    "NOM-003-SCFI",
    "NOM-016-SCFI",
    "NOM-019-SCFI",
    "NOM-054-SCFI",
    "NOM-058-SCFI",
    "NOM-064-SCFI",
  ],
  descripcion:
    "Información comercial y de operación de productos electrónicos, eléctricos y electrodomésticos; las especificaciones de seguridad se rigen por la NOM-003-SCFI.",
  queEtiquetamos: ["Cargadores", "Luminarias", "Línea blanca", "Pantallas", "Audio"],
  camposObligatorios: [
    "Marca y modelo",
    "Especificaciones eléctricas (V, W, A)",
    "Instructivo en español",
    "Leyendas de seguridad",
    "País de origen",
    "Importador y RFC",
  ],
  ejemploEtiqueta: {
    titulo: "Sisolar · 0426D200-03",
    filas: [
      ["Descripción", "Luminario solar LED exterior"],
      ["Eléctricas", "200 W · 3.2 Vcd · 200 Wh"],
      ["Batería", "LiFePO4 12 Ah"],
      ["Panel solar", "4.5 Vcd / 15 W"],
    ],
    pie: "Cumple con NOM-003-SCFI-2014 · Importado por Comercializadora Ejemplo, S.A. de C.V.",
  },
  impresionRecomendada: {
    material: "Poliéster",
    adhesivo: "Agresivo",
    color: "Plata o Blanco",
    formato: "Producto + empaque",
  },
  errorComun:
    "Faltar el instructivo en español o las leyendas de seguridad obligatorias del aparato.",
  servicios: ["certificacion", "etiquetado", "impresion"],
  foto: "/img/sectores/electronica-electrica.webp",
  fotoAlt: "Cargador de pared blanco con etiqueta NOM conectado a un contacto",
  validadoGS: false,
  publicado: true,
};
