import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sello } from "@/components/Sello";
import { Hero } from "@/components/Hero";
import { Proceso } from "@/components/Proceso";
import { SectorCard } from "@/components/SectorCard";
import { CtaCobre } from "@/components/CtaCobre";
import { FaqLista } from "@/components/Faq";
import { PROBLEMAS, PROCESO_ETIQUETADO, SERVICIOS, CICLO } from "@/content/servicios";
import { SECTORES_VISIBLES } from "@/content/sectores";
import { FAQ_GENERAL } from "@/content/faq";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: SITE.tituloBase,
  description: SITE.descripcion,
  alternates: { canonical: "/" },
  openGraph: { title: SITE.tituloBase, description: SITE.descripcion, url: "/" },
};

export default function Inicio() {
  return (
    <>
      <Hero />

      {/* Tres líneas de servicio */}
      <section className="gs-light gs-section">
        <div className="gs-container">
          <p className="gs-eyebrow text-gs-copper-tx">Qué hacemos</p>
          <h2 className="mt-3 max-w-3xl text-3xl md:text-5xl">
            De la evaluación <span className="text-gs-copper-tx">a la etiqueta impresa</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gs-ink-soft">
            <strong className="text-gs-navy">Un solo proveedor para todo el ciclo:</strong> evaluamos tu etiquetado, lo diseñamos conforme a norma y lo imprimimos con infraestructura propia.
          </p>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {SERVICIOS.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="group flex flex-col rounded-gs-lg border border-gs-gray-100 bg-white p-7 shadow-gs-card transition-transform hover:-translate-y-1"
              >
                <span className="font-display text-6xl font-bold leading-none text-gs-slate">{s.numero}</span>
                <h3 className="mt-3 text-2xl text-gs-navy">{s.nombre}</h3>
                <p className="mt-2 text-[0.9375rem] text-gs-ink-soft">{s.resumen}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-gs-ink-soft">
                  {s.incluye.slice(0, 4).map((i) => (
                    <li key={i} className="flex gap-2">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-gs-copper" />
                      {i}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto pt-6 font-display text-base font-bold uppercase tracking-wide text-gs-copper-tx group-hover:underline">
                  Ver servicio
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Problemas */}
      <section className="relative overflow-hidden bg-gs-navy">
        <Image src="/img/documentos-revision.webp" alt="" fill sizes="100vw" className="object-cover opacity-20" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-gs-navy/80 to-gs-navy" />
        <div className="gs-container relative gs-section">
          <p className="gs-eyebrow text-center text-gs-copper-lt">¿Por qué importa?</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-center text-3xl md:text-5xl">
            El etiquetado correcto <span className="bg-white px-2 text-gs-navy">protege tu marca</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-gs-mist">
            En México, la información comercial de un producto, su etiqueta, instructivo y garantía, no es un trámite: es lo que permite venderlo legalmente y lo que genera confianza en el consumidor. Una etiqueta conforme a la NOM evita multas, retenciones y devoluciones, y comunica calidad desde el primer vistazo.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {PROBLEMAS.map((p) => (
              <div key={p.titulo} className="rounded-gs-lg border border-white/10 bg-gs-bg/80 p-6">
                <h3 className="text-xl">{p.titulo}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-gs-mist">{p.texto}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/producto-retenido-en-aduana" className="font-display text-lg font-bold uppercase tracking-wide text-gs-copper-lt hover:text-white">
              ¿Producto retenido en aduana? Atención directa
            </Link>
          </div>
        </div>
      </section>

      {/* Ciclo 01 02 03 */}
      <section className="gs-light gs-section">
        <div className="gs-container">
          <div className="grid gap-4 lg:grid-cols-3">
            {CICLO.map((c, i) => (
              <div
                key={c.numero}
                className={
                  i === 2
                    ? "rounded-gs-lg bg-gs-copper p-7 text-white"
                    : "rounded-gs-lg bg-gs-navy p-7 text-white"
                }
              >
                <span className={`font-display text-6xl font-bold leading-none ${i === 2 ? "text-gs-bg" : "text-gs-mist"}`}>{c.numero}</span>
                <h3 className="mt-2 text-2xl text-white">{c.titulo}</h3>
                <p className={i === 2 ? "mt-2 font-medium text-gs-bg" : "mt-2 text-gs-mist"}>{c.texto}</p>
                <ul className={`mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm font-semibold ${i === 2 ? "text-gs-bg" : ""}`}>
                  {c.puntos.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectores */}
      <section className="relative overflow-hidden bg-gs-bg gs-section">
        <Sello />
        <div className="gs-container relative">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="gs-eyebrow text-gs-copper-lt">Catálogo por sector</p>
              <h2 className="mt-3 text-3xl md:text-5xl">Etiquetado industria por industria</h2>
            </div>
            <Link href="/sectores" className="font-display text-lg font-bold uppercase tracking-wide text-gs-copper-lt hover:text-white">
              Ver todos los sectores
            </Link>
          </div>
          {SECTORES_VISIBLES.length > 0 ? (
            <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
              {SECTORES_VISIBLES.map((s) => (
                <SectorCard key={s.slug} sector={s} />
              ))}
            </div>
          ) : (
            <p className="mt-8 text-gs-mist">Si no sabes qué norma aplica a tu producto, el diagnóstico gratuito te lo resuelve.</p>
          )}
        </div>
      </section>

      {/* Proceso */}
      <section className="gs-light gs-section">
        <div className="gs-container">
          <Proceso pasos={PROCESO_ETIQUETADO} claro />
        </div>
      </section>

      <FaqLista items={FAQ_GENERAL} titulo="Lo que nos preguntan antes de empezar" />

      <CtaCobre
        eyebrow="Diagnóstico normativo gratuito"
        titulo="Cuéntanos sobre tu producto y en 48 horas te decimos qué necesitas para cumplir."
        ubicacion="home-cta"
        mensajeWa="diagnostico"
      />

    </>
  );
}
