import Link from "next/link";
import { SITE } from "@/content/site";

export type Miga = { nombre: string; href: string };

export function Migas({ items, claro = false, tono }: { items: Miga[]; claro?: boolean; tono?: "cobre" }) {
  const lista = [{ nombre: "Inicio", href: "/" }, ...items];
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: lista.map((m, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: m.nombre,
      item: `${SITE.url}${m.href}`,
    })),
  };
  return (
    <nav aria-label="Ruta" className={tono === "cobre" ? "text-gs-bg" : claro ? "text-gs-ink-soft" : "text-gs-mist"}>
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {lista.map((m, i) => (
          <li key={m.href} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === lista.length - 1 ? (
              <span aria-current="page" className={tono === "cobre" ? "font-semibold text-gs-bg" : claro ? "text-gs-navy" : "text-white"}>{m.nombre}</span>
            ) : (
              <Link href={m.href} className="hover:underline">{m.nombre}</Link>
            )}
          </li>
        ))}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </nav>
  );
}
