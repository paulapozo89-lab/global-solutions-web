import { imagenOg, OG_SIZE } from "@/lib/og";

export const alt = "Certificación NOM | Global Solutions S&L";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return imagenOg("Certificación NOM");
}
