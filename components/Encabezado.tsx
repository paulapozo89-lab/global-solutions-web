import { Sello } from "./Sello";

/** Encabezado de página interior en navy con sello. */
export function Encabezado({ eyebrow, titulo, texto, children }: { eyebrow: string; titulo: string; texto?: string; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-gs-navy">
      <Sello />
      <div className="gs-container relative py-16 md:py-24">
        <p className="gs-eyebrow text-gs-copper-lt">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl text-4xl md:text-6xl">{titulo}</h1>
        {texto && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gs-mist md:text-xl">{texto}</p>}
        {children}
      </div>
    </section>
  );
}
