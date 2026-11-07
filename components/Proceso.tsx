import type { Paso } from "@/content/servicios";
import { cn } from "@/lib/utils";

/** Barra de proceso de 5 pasos, número en cobre. */
export function Proceso({ pasos, claro = false, titulo = "El proceso, paso a paso" }: { pasos: Paso[]; claro?: boolean; titulo?: string }) {
  return (
    <div>
      <p className={cn("gs-eyebrow mb-6 text-center", claro ? "text-gs-copper-tx" : "text-gs-copper-lt")}>{titulo}</p>
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {pasos.map((p, i) => (
          <li
            key={p.titulo}
            className={cn(
              "relative flex gap-3 rounded-gs p-4",
              claro ? "bg-gs-gray-50" : "border border-white/10 bg-gs-navy-2",
            )}
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gs-copper font-display text-lg font-bold text-white">
              {i + 1}
            </span>
            <div>
              <h3 className={cn("font-display text-lg font-bold uppercase", claro ? "text-gs-navy" : "text-white")}>{p.titulo}</h3>
              <p className={cn("mt-1 text-sm leading-snug", claro ? "text-gs-ink-soft" : "text-gs-mist")}>{p.texto}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
