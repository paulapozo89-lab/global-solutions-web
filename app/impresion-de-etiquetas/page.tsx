import type { Metadata } from "next";
import Image from "next/image";
import { Encabezado } from "@/components/Encabezado";
import { Migas } from "@/components/Migas";
import { Proceso } from "@/components/Proceso";
import { ContactoDirecto } from "@/components/ContactoDirecto";
import { FaqLista } from "@/components/Faq";
import { Boton } from "@/components/Boton";
import { EnlaceWhatsApp, IconoWhatsApp } from "@/components/Enlaces";
import { IMPRESION_ESPECIFICACIONES, PROCESO_ETIQUETADO, SERVICIOS } from "@/content/servicios";
import { CONTACTO } from "@/content/contacto";
import { FAQ_IMPRESION } from "@/content/faq";
import { JsonLd, schemaServicio } from "@/lib/schema";

const servicio = SERVICIOS[2];
const E = IMPRESION_ESPECIFICACIONES;

export const metadata: Metadata = {
  title: "Impresión de etiquetas NOM: industrial, a tu medida",
  description:
    "Producción propia con equipo térmico de alta definición. Papel térmico, polipropileno o poliéster; blanco, gris o transparente; adhesivo estándar, semiagresivo o agresivo. Cotiza tu impresión.",
  alternates: { canonical: "/impresion-de-etiquetas" },
  openGraph: { title: "Impresión de etiquetas", url: "/impresion-de-etiquetas" },
};

export default function ImpresionEtiquetas() {
  return (
    <>
      <Encabezado eyebrow="Especificaciones de impresión" titulo="Impresión industrial a tu medida" texto={E.intro}>
        <div className="mt-6">
          <Migas items={[{ nombre: "Impresión de etiquetas", href: "/impresion-de-etiquetas" }]} />
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Boton href="#cotizar">Cotizar la impresión</Boton>
          <EnlaceWhatsApp
            ubicacion="impresion-hero"
            mensaje="impresion"
            className="inline-flex items-center justify-center gap-2 rounded-gs border-2 border-white/40 px-6 py-3.5 font-display text-[1.1875rem] font-bold uppercase leading-none tracking-wide text-white hover:border-white"
          >
            <IconoWhatsApp /> {CONTACTO.telefonoVisible}
          </EnlaceWhatsApp>
        </div>
      </Encabezado>

      <section className="bg-gs-navy pb-16 md:pb-24">
        <div className="gs-container">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {E.grupos.map((g) => (
              <div key={g.titulo} className="rounded-gs-xl bg-gs-navy-2 p-7">
                <h2 className="text-2xl text-gs-copper-lt md:text-3xl">{g.titulo}</h2>
                <ul className="mt-4 space-y-2 text-lg">
                  {g.opciones.map((o) => (
                    <li key={o} className="flex gap-2">
                      <span aria-hidden="true" className="text-gs-copper-lt">•</span> {o}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-lg text-gs-mist">{E.incluye}</p>
          <p className="mt-3 inline-block rounded-gs border-l-4 border-gs-copper bg-gs-bg px-4 py-3 font-display text-base font-bold uppercase tracking-wide text-white">
            {E.plazo}
          </p>
        </div>
      </section>

      <section className="relative bg-gs-navy">
        <figure className="relative">
          <figcaption className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 w-max max-w-[calc(100%-2rem)] rounded-full bg-white px-5 py-2 text-center font-display text-sm font-bold uppercase tracking-[0.12em] text-gs-navy">
            {E.fotoPie}
          </figcaption>
          <Image
            src="/img/rollos-etiquetas.webp"
            alt="Rollos de etiquetas NOM impresas sobre una mesa, junto a una impresora térmica"
            width={1600}
            height={810}
            sizes="100vw"
            className="h-auto w-full"
          />
        </figure>
      </section>

      <section className="gs-light gs-section">
        <div className="gs-container">
          <p className="gs-eyebrow text-gs-copper-tx">Qué incluye el servicio</p>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {servicio.incluye.map((i) => (
              <li key={i} className="flex gap-3 rounded-gs border border-gs-gray-100 p-4 text-gs-ink">
                <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-gs-copper" /> {i}
              </li>
            ))}
          </ul>
          <div className="mt-14">
            <Proceso pasos={PROCESO_ETIQUETADO} claro />
          </div>
        </div>
      </section>

      <section id="cotizar" className="gs-light border-t border-gs-gray-100 gs-section scroll-mt-24">
        <div className="gs-container grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="gs-eyebrow text-gs-copper-tx">Cotiza tu impresión</p>
            <h2 className="mt-3 text-3xl md:text-5xl">
              Imprime tus etiquetas <span className="bg-gs-copper px-2 text-white">con nosotros</span>
            </h2>
            <p className="mt-5 text-lg text-gs-ink-soft">
              Etiquetas NOM listas para anaquel y aduana. Envíanos tu producto o tu arte y cotizamos la impresión hoy mismo.
            </p>
            <EnlaceWhatsApp
              ubicacion="impresion-cotizar"
              mensaje="impresion"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gs-navy px-6 py-3.5 font-display text-xl font-bold text-white"
            >
              <IconoWhatsApp /> {CONTACTO.telefonoVisible}
            </EnlaceWhatsApp>
          </div>
          <ContactoDirecto
            titulo="Cotiza la impresión"
            texto="Dinos material, color, formato y cantidad aproximada, o mándanos tu arte o una foto del producto."
            mensajeWa="impresion"
            asunto="Cotización de impresión de etiquetas"
            cuerpo={"Hola, quiero cotizar la impresión de etiquetas.\n\nNombre:\nEmpresa:\nTeléfono:\nMaterial (papel térmico, polipropileno, poliéster):\nColor (blanco, gris, transparente):\nFormato:\nCantidad aproximada:\nComentarios:\n"}
            ubicacion="impresion-directo"
          />
        </div>
      </section>

      <FaqLista items={FAQ_IMPRESION} titulo="Sobre la impresión" />
      <JsonLd data={schemaServicio(servicio.nombre, servicio.resumen, "/impresion-de-etiquetas")} />
    </>
  );
}
