export type Servicio = "certificacion" | "etiquetado" | "impresion";

export type Sector = {
  slug: string;
  numero: string;
  nombre: string;
  /** Chip del encabezado, literal del catálogo. */
  nomPrincipal: string;
  /** Del sitio actual o del catálogo. GS valida. */
  nomsRelacionadas: string[];
  /** Literal del catálogo. */
  descripcion: string;
  queEtiquetamos: string[];
  camposObligatorios: string[];
  ejemploEtiqueta: { titulo: string; filas: [string, string][]; pie: string };
  impresionRecomendada: {
    material: string;
    adhesivo?: string;
    color: string;
    formato: string;
  };
  errorComun: string;
  servicios: Servicio[];
  foto: string | null;
  fotoAlt: string;
  /** GS responde por la veracidad normativa. Sin validar: franja en preview, fuera de producción. */
  validadoGS: boolean;
  publicado: boolean;
};
