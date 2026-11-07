import type { Metadata } from "next";
import Link from "next/link";
import { Encabezado } from "@/components/Encabezado";
import { Migas } from "@/components/Migas";
import { SectorCard } from "@/components/SectorCard";
import { CtaCobre } from "@/components/CtaCobre";
import { SECTORES_PENDIENTES, SECTORES_VISIBLES } from "@/content/sectores";
import { esProduccion } from "@/lib/entorno";

export const metadata: Metadata = {
  title: "Sectores: catálogo de etiquetado NOM por industria",
  description:
    "Qué etiquetamos, campos obligatorios, ejemplo de etiqueta e impresión recomendada por sector: textil, calzado, electrónica, recubrimientos, alimentos, bebidas alcohólicas y más.",
  alternates: { canonical: "/sectores" },
  openGraph: { title: "Catálogo de etiquetado por sector", url: "/sectores" },
};

export default function Sectores() {
  return (
    <>
      <Encabezado
        eyebrow="Catálogo 2026"
        titulo="Catálogo de etiquetado por sector"
        texto="Diseño e impresión de etiquetas que cumplen la norma, industria por industria: del dato técnico al rollo listo para anaquel y aduana."
      >
        <div className="mt-6">
          <Migas items={[{ nombre: "Sectores", href: "/sectores" }]} />
        </div>
      </Encabezado>

      <section className="gs-section bg-gs-bg">
        <div className="gs-container">
          {SECTORES_VISIBLES.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SECTORES_VISIBLES.map((s) => (
                <SectorCard key={s.slug} sector={s} />
              ))}
            </div>
          ) : (
            <p className="text-lg text-gs-mist">
              Si no sabes qué norma aplica a tu producto, el{" "}
              <Link href="/contacto" className="text-gs-copper-lt underline">
                diagnóstico gratuito
              </Link>{" "}
              te lo resuelve.
            </p>
          )}

          {!esProduccion && (
            <div className="mt-12 rounded-gs-lg border border-gs-copper/40 bg-gs-navy p-6">
              <p className="gs-eyebrow text-gs-copper-lt">PENDIENTE_GS · Sectores por confirmar (solo en preview)</p>
              <p className="mt-2 text-sm text-gs-mist">
                El sitio actual los lista pero el catálogo no. Si GS los confirma, se publican solo con la parte de certificación.
              </p>
              <ul className="mt-4 grid gap-3 md:grid-cols-3">
                {SECTORES_PENDIENTES.map((s) => (
                  <li key={s.slug} className="rounded-gs bg-gs-bg p-4">
                    <p className="font-display text-lg font-bold uppercase">{s.nombre}</p>
                    <p className="mt-1 text-xs leading-relaxed text-gs-mist">{s.noms.join(" · ")}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <CtaCobre
        eyebrow="¿Tu sector no está aquí?"
        titulo="Te decimos qué NOM aplica a tu producto en 48 horas."
        ubicacion="sectores-cta"
        mensajeWa="diagnostico"
      />
    </>
  );
}
