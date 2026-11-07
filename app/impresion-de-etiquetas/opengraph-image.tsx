import { imagenOg, OG_SIZE } from "@/lib/og";

export const alt = "Impresión de etiquetas | Global Solutions S&L";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return imagenOg("Impresión de etiquetas");
}
