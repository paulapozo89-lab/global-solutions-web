import { imagenOg, OG_SIZE } from "@/lib/og";

export const alt = "¿Producto retenido en aduana? | Global Solutions S&L";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return imagenOg("¿Producto retenido en aduana?");
}
