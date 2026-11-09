import { imagenOg, OG_SIZE } from "@/lib/og";
import { getSector, SECTORES_VISIBLES } from "@/content/sectores";

export const alt = "Etiquetado NOM por sector | Global Solutions S&L";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return SECTORES_VISIBLES.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getSector(slug);
  return imagenOg(s ? `${s.numero} · ${s.nombre}` : "Catálogo por sector", s ? `Etiquetado NOM · ${s.nomPrincipal}` : undefined);
}
