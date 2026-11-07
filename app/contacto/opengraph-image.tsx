import { imagenOg, OG_SIZE } from "@/lib/og";

export const alt = "Diagnóstico normativo gratuito | Global Solutions S&L";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return imagenOg("Diagnóstico normativo gratuito");
}
