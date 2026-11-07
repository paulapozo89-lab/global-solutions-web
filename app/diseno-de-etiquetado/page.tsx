import type { Metadata } from "next";
import Link from "next/link";
import { Encabezado } from "@/components/Encabezado";
import { Migas } from "@/components/Migas";
import { Proceso } from "@/components/Proceso";
import { CtaCobre } from "@/components/CtaCobre";
import { SectorCard } from "@/components/SectorCard";
import { Boton } from "@/components/Boton";
import { CICLO, PROCESO_ETIQUETADO, SERVICIOS } from "@/content/servicios";
import { SECTORES_VISIBLES } from "@/content/sectores";
import { JsonLd, schemaServicio } from "@/lib/schema";

const servicio = SERVICIOS[1];

export const metadata: Metadata = {
  title: "Diseño de etiquetado e información comercial conforme a NOM",
  description:
    "Evaluamos tu etiqueta, empaque, manual y garantía contra la NOM que aplica, diseñamos el arte conforme a norma y lo validamos antes de imprimir.",
  alternates: { canonical: "/diseno-de-etiquetado" },
  openGraph: { title: "Diseño de etiquetado", url: "/diseno-de-etiquetado" },
};

export default function DisenoEtiquetado() {
  return (
    <>
      <Encabezado
        eyebrow={`Servicio ${servicio.numero}`}
        titulo="De la evaluación a la etiqueta impresa"
        texto="Un solo proveedor para todo el ciclo: evaluamos tu etiquetado, lo diseñamos conforme a norma y lo imprimimos con infraestructura propia."
      >
        <div className="mt-6">
          <Migas items={[{ nombre: "Diseño de etiquetado", href: "/diseno-de-etiquetado" }]} />
        </div>
        <div className="mt-8">
          <Boton href="/contacto">Evaluar mi etiqueta</Boton>
        </div>
      </Encabezado>

      <section className="gs-light gs-section">
        <div className="gs-container space-y-4">
          {CICLO.map((c, i) => (
            <div
              key={c.numero}
              className={`grid gap-6 rounded-gs-xl p-7 md:grid-cols-[120px_1fr] md:p-10 ${
                i === 0 ? "bg-gs-navy text-white" : i === 1 ? "bg-gs-navy-2 text-white" : "bg-gs-copper text-white"
              }`}
            >
              <span className={`font-display text-7xl font-bold leading-none md:text-8xl ${i === 2 ? "text-gs-bg" : "text-gs-mist"}`}>{c.numero}</span>
              <div>
                <h2 className="text-3xl text-white md:text-4xl">{c.titulo}</h2>
                <p className={`mt-2 text-lg ${i === 2 ? "font-medium text-gs-bg" : "text-gs-mist"}`}>{c.texto}</p>
                <ul className={`mt-5 grid gap-2 sm:grid-cols-2 ${i === 2 ? "text-gs-bg" : ""}`}>
                  {c.puntos.map((p) => (
                    <li key={p} className="flex gap-2 font-semibold">
                      <span aria-hidden="true" className={`mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-sm ${i === 2 ? "bg-gs-bg" : "bg-white"}`} /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="gs-light pb-16 md:pb-24">
        <div className="gs-container">
          <p className="gs-eyebrow text-gs-copper-tx">Qué incluye el servicio</p>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {servicio.incluye.map((i) => (
              <li key={i} className="flex gap-3 rounded-gs border border-gs-gray-100 p-4 text-gs-ink">
                <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-gs-copper" /> {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-gs-navy gs-section">
        <div className="gs-container">
          <Proceso pasos={PROCESO_ETIQUETADO} />
        </div>
      </section>

      {SECTORES_VISIBLES.length > 0 && (
        <section className="gs-section bg-gs-bg">
          <div className="gs-container">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <h2 className="text-3xl md:text-4xl">Qué pide cada sector</h2>
              <Link href="/sectores" className="font-display text-lg font-bold uppercase tracking-wide text-gs-copper-lt hover:text-white">
                Ver catálogo completo
              </Link>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SECTORES_VISIBLES.slice(0, 3).map((s) => (
                <SectorCard key={s.slug} sector={s} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaCobre
        eyebrow="Evaluación de etiqueta"
        titulo="Mándanos tu etiqueta actual y te decimos qué le falta para cumplir."
        ubicacion="etiquetado-cta"
        mensajeWa="diagnostico"
      />
      <JsonLd data={schemaServicio(servicio.nombre, servicio.resumen, "/diseno-de-etiquetado")} />
    </>
  );
}
