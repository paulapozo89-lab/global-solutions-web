import Link from "next/link";
import { SECTORES_VISIBLES } from "@/content/sectores";

/** Cinta continua de sectores y NOM. Pausa al pasar el cursor. */
export function MarqueeSectores() {
  const items = SECTORES_VISIBLES;
  if (items.length === 0) return null;
  const doble = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-gs-bg/60 py-3" aria-label="Sectores que atendemos">
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-gs-bg to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-gs-bg to-transparent" />
      <ul className="gs-marquee flex w-max gap-3 pr-3">
        {doble.map((s, i) => (
          <li key={`${s.slug}-${i}`} aria-hidden={i >= items.length}>
            <Link
              href={`/sectores/${s.slug}`}
              tabIndex={i >= items.length ? -1 : 0}
              className="flex items-center gap-3 rounded-full border border-white/10 bg-gs-navy px-4 py-2 font-display text-sm font-semibold uppercase tracking-wide text-white hover:border-gs-copper"
            >
              <span className="text-gs-copper-lt">{s.numero}</span>
              {s.nombre}
              <span className="rounded-full bg-white px-2 py-0.5 text-xs text-gs-navy">{s.nomPrincipal}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
