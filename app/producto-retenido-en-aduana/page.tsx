import type { Metadata } from "next";
import { Sello } from "@/components/Sello";
import { Migas } from "@/components/Migas";
import { Boton } from "@/components/Boton";
import { EnlaceTelefono, EnlaceWhatsApp, IconoWhatsApp } from "@/components/Enlaces";
import { CONTACTO } from "@/content/contacto";
import { JsonLd, schemaServicio } from "@/lib/schema";

export const metadata: Metadata = {
  title: "¿Producto retenido en aduana? Cartas de validación NOM",
  description:
    "Tramitamos cartas de validación para liberar tu producto retenido en aduana por falta de certificación NOM o etiqueta incorrecta. Aplica con un máximo de 3 muestras. Atención directa por WhatsApp.",
  alternates: { canonical: "/producto-retenido-en-aduana" },
  openGraph: { title: "Producto retenido en aduana", url: "/producto-retenido-en-aduana" },
};

const PASOS = [
  "Escríbenos por WhatsApp con el tipo de producto y el motivo de la retención.",
  "Revisamos qué NOM aplica y qué documento necesitas.",
  "Tramitamos la carta de validación para liberar la muestra.",
];

export default function Aduana() {
  return (
    <>
      <section className="relative overflow-hidden bg-gs-copper text-white">
        <Sello opacidad={0.08} />
        <div className="gs-container relative py-16 md:py-24">
          <Migas items={[{ nombre: "Producto retenido en aduana", href: "/producto-retenido-en-aduana" }]} tono="cobre" />
          <p className="gs-eyebrow mt-8 text-gs-bg">Urgencia</p>
          <h1 className="mt-3 max-w-4xl text-4xl md:text-6xl">¿Producto retenido en aduana?</h1>
          <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-gs-bg md:text-xl">
            Tu embarque llegó a México pero no puede liberarse por falta de certificación NOM o etiquetado incorrecto. Cada día retenido son costos de almacenaje y oportunidades perdidas. Tramitamos cartas de validación para liberar tu producto.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <EnlaceWhatsApp
              ubicacion="aduana-hero"
              mensaje="aduana"
              className="inline-flex items-center justify-center gap-2 rounded-gs bg-white px-6 py-4 font-display text-xl font-bold uppercase leading-none tracking-wide text-gs-navy hover:bg-gs-gray-50"
            >
              <IconoWhatsApp /> WhatsApp {CONTACTO.telefonoVisible}
            </EnlaceWhatsApp>
            <EnlaceTelefono className="inline-flex items-center justify-center gap-2 rounded-gs border-2 border-white/60 px-6 py-4 font-display text-xl font-bold uppercase leading-none tracking-wide text-white hover:border-white">
              Llamar {CONTACTO.telefonoVisible}
            </EnlaceTelefono>
          </div>
          <p className="mt-6 inline-block rounded-gs bg-gs-navy px-4 py-2 font-display text-base font-bold uppercase tracking-wide">
            Solo aplica cuando es un máximo de 3 muestras
          </p>
        </div>
      </section>

      <section className="gs-light gs-section">
        <div className="gs-container grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl">Qué hacemos</h2>
            <ol className="mt-6 space-y-4">
              {PASOS.map((p, i) => (
                <li key={p} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gs-copper font-display text-xl font-bold text-white">{i + 1}</span>
                  <p className="pt-1.5 text-lg text-gs-ink">{p}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-gs-xl bg-gs-gray-50 p-7 md:p-9">
            <h2 className="text-2xl text-gs-ink-soft md:text-3xl">CC, justificación técnica y carta de validación</h2>
            <dl className="mt-5 space-y-4 text-gs-ink">
              <div>
                <dt className="font-display text-lg font-bold uppercase text-gs-navy">Certificado de Conformidad (CC)</dt>
                <dd className="text-[0.9375rem] text-gs-ink-soft">Avala que tu producto cumple la NOM.</dd>
              </div>
              <div>
                <dt className="font-display text-lg font-bold uppercase text-gs-navy">Carta de justificación técnica</dt>
                <dd className="text-[0.9375rem] text-gs-ink-soft">Sustenta el cumplimiento normativo.</dd>
              </div>
              <div>
                <dt className="font-display text-lg font-bold uppercase text-gs-navy">Carta de validación</dt>
                <dd className="text-[0.9375rem] text-gs-ink-soft">Permite liberar una muestra en aduana. Aplica con máximo 3 muestras.</dd>
              </div>
            </dl>
            <div className="mt-7">
              <Boton href="/certificacion-nom" variante="borde-claro">
                Ver certificación NOM
              </Boton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gs-navy gs-section">
        <div className="gs-container text-center">
          <p className="gs-eyebrow text-gs-copper-lt">Atención directa</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl md:text-4xl">Hablas directamente con quienes gestionan tu trámite.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gs-mist">Sin call centers, sin burocracia. {CONTACTO.horario}.</p>
          <div className="mt-8 flex justify-center">
            <EnlaceWhatsApp
              ubicacion="aduana-cierre"
              mensaje="aduana"
              className="inline-flex items-center justify-center gap-2 rounded-gs bg-gs-copper px-7 py-4 font-display text-xl font-bold uppercase leading-none tracking-wide text-white shadow-gs-copper hover:bg-gs-copper-hover"
            >
              <IconoWhatsApp /> Escribir ahora
            </EnlaceWhatsApp>
          </div>
        </div>
      </section>
      <JsonLd data={schemaServicio("Carta de validación para liberación aduanal", "Tramitamos cartas de validación para liberar producto retenido en aduana. Aplica con un máximo de 3 muestras.", "/producto-retenido-en-aduana")} />
    </>
  );
}
