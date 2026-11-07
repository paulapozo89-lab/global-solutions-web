import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";
import { SECTORES_VISIBLES } from "@/content/sectores";

export default function sitemap(): MetadataRoute.Sitemap {
  const ahora = new Date();
  const fijas = [
    { ruta: "", prioridad: 1 },
    { ruta: "/certificacion-nom", prioridad: 0.9 },
    { ruta: "/diseno-de-etiquetado", prioridad: 0.9 },
    { ruta: "/impresion-de-etiquetas", prioridad: 0.9 },
    { ruta: "/sectores", prioridad: 0.8 },
    { ruta: "/producto-retenido-en-aduana", prioridad: 0.8 },
    { ruta: "/nosotros", prioridad: 0.6 },
    { ruta: "/contacto", prioridad: 0.8 },
  ];
  return [
    ...fijas.map((f) => ({ url: `${SITE.url}${f.ruta}`, lastModified: ahora, changeFrequency: "monthly" as const, priority: f.prioridad })),
    ...SECTORES_VISIBLES.map((s) => ({ url: `${SITE.url}/sectores/${s.slug}`, lastModified: ahora, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
