/** Marcador de sección: rombo numerado del catálogo. */
export function Rombo({ numero, className = "" }: { numero: string; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex h-12 w-12 rotate-45 items-center justify-center rounded-[6px] bg-gs-navy ${className}`}
    >
      <span className="-rotate-45 font-display text-lg font-bold text-white">{numero}</span>
    </span>
  );
}
