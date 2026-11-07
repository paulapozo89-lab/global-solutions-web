import type { Metadata } from "next";
import Image from "next/image";
import { Encabezado } from "@/components/Encabezado";
import { Migas } from "@/components/Migas";
import { Proceso } from "@/components/Proceso";
import { CtaCobre } from "@/components/CtaCobre";
import { FaqLista } from "@/components/Faq";
import { Boton } from "@/components/Boton";
import { PORQUE, PROCESO_CERTIFICACION, SERVICIOS } from "@/content/servicios";
import { FAQ_GENERAL } from "@/content/faq";
import { JsonLd, schemaServicio } from "@/lib/schema";

const servicio = SERVICIOS[0];

export const metadata: Metadata = {
  title: "Certificación NOM: Certificado de Conformidad, cartas de validación y DGN",
  description:
    "Gestionamos la certificación NOM ante organismos certificadores: Certificado de Conformidad, carta de justificación técnica, carta de validación para liberación aduanal, renovaciones y resolución técnica ante DGN.",
  alternates: { canonical: "/certificacion-nom" },
  openGraph: { title: "Certificación NOM", url: "/certificacion-nom" },
};

const DOCUMENTOS = [
  {
    nombre: "Certificado de Conformidad (CC)",
    texto: "Avala que tu producto cumple la NOM.",
  },
  {
    nombre: "Carta de justificación técnica",
    texto: "Sustenta el cumplimiento normativo.",
  },
  {
    nombre: "Carta de validación",
    texto: "Permite liberar una muestra en aduana. Aplica con un máximo de 3 muestras.",
  },
  {
    nombre: "Resolución técnica ante DGN",
    texto: "Gestión del trámite ante la Dirección General de Normas.",
  },
  {
    nombre: "Modificaciones, renovaciones y ampliaciones",
    texto: "Mantenemos vigente tu certificado cuando cambia el producto, el modelo o el alcance.",
  },
];

export default function CertificacionNom() {
  return (
    <>
      <Encabezado
        eyebrow={`Servicio ${servicio.numero}`}
        titulo="Certificación NOM: un proceso, un responsable, un resultado."
        texto={servicio.resumen}
      >
        <div className="mt-6">
          <Migas items={[{ nombre: "Certificación NOM", href: "/certificacion-nom" }]} />
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Boton href="/contacto">Solicitar diagnóstico gratuito</Boton>
          <Boton href="/producto-retenido-en-aduana" variante="borde">
            Tengo producto retenido
          </Boton>
        </div>
      </Encabezado>

      <section className="gs-light gs-section">
        <div className="gs-container grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div>
            <p className="gs-eyebrow text-gs-copper-tx">Qué incluye</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Documentos que gestionamos</h2>
            <ul className="mt-7 divide-y divide-gs-gray-100 rounded-gs-lg border border-gs-gray-100">
              {DOCUMENTOS.map((d) => (
                <li key={d.nombre} className="flex gap-4 p-5">
                  <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-gs-copper" />
                  <div>
                    <h3 className="text-xl text-gs-navy">{d.nombre}</h3>
                    <p className="mt-1 text-[0.9375rem] text-gs-ink-soft">{d.texto}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[0.9375rem] text-gs-ink-soft">
              Diagnóstico normativo: identificamos qué NOMs aplican. Asesoría inicial sin costo.
            </p>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-gs-xl bg-gs-navy">
            <Image src="/img/documentos-revision.webp" alt="Revisión de documentos normativos sobre un escritorio" fill sizes="(min-width:1024px) 540px, 100vw" className="object-cover" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-gs-navy via-gs-navy/30 to-transparent" />
            <div className="absolute bottom-0 p-7 text-white">
              <p className="gs-eyebrow text-gs-copper-lt">Tiempos</p>
              <p className="mt-2 text-lg leading-snug">
                El plazo estimado de certificación es de <strong>10 a 15 días hábiles</strong> una vez completada la documentación. Depende de la NOM, el tipo de trámite y el organismo certificador.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gs-navy gs-section">
        <div className="gs-container">
          <Proceso pasos={PROCESO_CERTIFICACION} titulo="El proceso de certificación" />
        </div>
      </section>

      <section className="gs-light gs-section">
        <div className="gs-container">
          <p className="gs-eyebrow text-gs-copper-tx">¿Por qué Global Solutions S&L?</p>
          <h2 className="mt-3 max-w-3xl text-3xl md:text-4xl">No solo tramitamos. Resolvemos de principio a fin.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {PORQUE.map((p) => (
              <div key={p.titulo} className="rounded-gs-lg border border-gs-gray-100 bg-white p-6 shadow-gs-card">
                <h3 className="text-xl text-gs-navy">{p.titulo}</h3>
                <p className="mt-2 text-[0.9375rem] text-gs-ink-soft">{p.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqLista items={FAQ_GENERAL.filter((f) => !f.pregunta.includes("impresión"))} />

      <CtaCobre
        eyebrow="Diagnóstico normativo gratuito"
        titulo="Te decimos qué NOMs aplican a tu producto, qué necesitas y cuánto toma."
        ubicacion="certificacion-cta"
        mensajeWa="diagnostico"
      />
      <JsonLd data={schemaServicio(servicio.nombre, servicio.resumen, "/certificacion-nom")} />
    </>
  );
}
