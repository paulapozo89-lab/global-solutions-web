import { CIFRAS } from "@/content/cifras";
import { esProduccion } from "@/lib/entorno";
import { Contador } from "./Contador";

/**
 * Cifras grandes. Salen de content/cifras.ts.
 * Decisión de Paula (7 nov 2026): se publican aunque GS no haya validado; el aviso de pendiente solo sale en preview.
 */
export function Cifras({ ids }: { ids?: string[] }) {
  const lista = CIFRAS.filter((c) => !ids || ids.includes(c.id));
  if (lista.length === 0) return null;
  return (
    <div className="relative">
      {!esProduccion && lista.some((c) => !c.validadoGS) && (
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wide text-gs-copper-lt">
          Cifras pendientes de validación por GS (solo visible en preview)
        </p>
      )}
      <dl className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {lista.map((c) => (
          <div key={c.id} className="text-center">
            <dd className="font-display text-5xl font-bold leading-none text-gs-copper-lt md:text-6xl">
              <Contador valor={c.valor} />
            </dd>
            <dt className="mt-2 font-display text-sm font-semibold uppercase tracking-[0.14em] text-gs-mist">{c.etiqueta}</dt>
          </div>
        ))}
      </dl>
    </div>
  );
}
