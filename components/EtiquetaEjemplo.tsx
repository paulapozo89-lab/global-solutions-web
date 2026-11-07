import type { Sector } from "@/content/tipos";

/** Etiqueta de ejemplo en HTML/CSS, nunca como imagen. */
export function EtiquetaEjemplo({ sector }: { sector: Sector }) {
  const e = sector.ejemploEtiqueta;
  const amarilla = sector.slug === "eficiencia-energetica";
  return (
    <figure>
      <div
        className={
          amarilla
            ? "rounded-md border-2 border-gs-ink bg-gs-norma p-5 text-gs-ink shadow-gs-card"
            : "rounded-md border border-gs-gray-200 bg-white p-5 text-gs-ink shadow-gs-card"
        }
      >
        <div className="flex items-start justify-between gap-4 border-b border-gs-gray-200 pb-3">
          <p className="font-display text-base font-bold uppercase tracking-wide">{e.titulo}</p>
          {!amarilla && (
            <span className="font-display text-xl font-bold leading-none tracking-[0.1em] border-b-2 border-t-2 border-gs-ink px-0.5">NOM</span>
          )}
        </div>
        <dl className="mt-3 space-y-1.5 text-sm">
          {e.filas.map(([k, v]) => (
            <div key={k} className="flex gap-2">
              <dt className="shrink-0 font-semibold">{k}:</dt>
              <dd className="text-gs-ink-soft">{v}</dd>
            </div>
          ))}
        </dl>
        {amarilla ? (
          <div className="mt-4 grid grid-cols-6 overflow-hidden rounded-sm border border-gs-ink text-center font-display text-xs font-bold">
            {["0%", "10%", "20%", "30%", "40%", "50%"].map((p, i) => (
              <span key={p} className={i === 1 ? "bg-gs-ink py-1 text-gs-norma" : "py-1"}>
                {p}
              </span>
            ))}
          </div>
        ) : (
          <p className="mt-3 border-t border-gs-gray-200 pt-3 text-xs text-gs-copper-tx">{e.pie}</p>
        )}
      </div>
      <figcaption className="mt-2 text-center font-display text-sm font-semibold uppercase tracking-[0.14em] text-gs-ink-soft">
        Representación ilustrativa
      </figcaption>
    </figure>
  );
}
