import { imagenOg, OG_SIZE } from "@/lib/og";

export const alt = "Global Solutions S&L: certificación NOM, etiquetado e impresión";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return imagenOg("Certificación NOM, etiquetado e impresión", "Un solo proceso. Un solo socio.");
}
