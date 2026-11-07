import { imagenOg, OG_SIZE } from "@/lib/og";

export const alt = "Catálogo de etiquetado por sector | Global Solutions S&L";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return imagenOg("Catálogo de etiquetado por sector");
}
