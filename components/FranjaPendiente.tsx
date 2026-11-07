import { mostrarPendientes } from "@/lib/entorno";

/** Franja de "pendiente de validación". Solo en preview. */
export function FranjaPendiente({ texto }: { texto: string }) {
  if (!mostrarPendientes) return null;
  return (
    <div role="status" className="border-y border-gs-copper/50 bg-gs-copper/15 text-center">
      <p className="gs-container py-2 font-display text-sm font-semibold uppercase tracking-wide text-gs-copper-lt">
        {texto}
      </p>
    </div>
  );
}
