import type { Metadata } from "next";
import { Encabezado } from "@/components/Encabezado";
import { Migas } from "@/components/Migas";
import { ContactoDirecto } from "@/components/ContactoDirecto";
import { CONTACTO } from "@/content/contacto";
import { mostrarPendientes } from "@/lib/entorno";

export const metadata: Metadata = {
  title: "Contacto: diagnóstico normativo gratuito en 48 h",
  description:
    "Cuéntanos sobre tu producto y en 48 horas te decimos qué necesitas para cumplir. WhatsApp (55) 7416 6209, info@globalsolutionssl.mx. Pachuca de Soto, Hidalgo.",
  alternates: { canonical: "/contacto" },
  openGraph: { title: "Contacto", url: "/contacto" },
};

export default function Contacto() {
  return (
    <>
      <Encabezado
        eyebrow="Contacto"
        titulo="Empieza con un diagnóstico normativo gratuito."
        texto="Cuéntanos sobre tu producto y en 48 horas te decimos exactamente qué necesitas para cumplir. Sin compromiso."
      >
        <div className="mt-6">
          <Migas items={[{ nombre: "Contacto", href: "/contacto" }]} />
        </div>
      </Encabezado>

      <section className="gs-light gs-section">
        <div className="gs-container grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div id="diagnostico">
            <ContactoDirecto
              titulo="Solicita tu diagnóstico gratuito"
              texto="Cuéntanos qué producto es, de dónde viene y en qué situación está. Te decimos qué NOM aplica y qué necesitas."
              mensajeWa="diagnostico"
              asunto="Diagnóstico normativo gratuito"
              cuerpo={"Hola, quiero un diagnóstico normativo gratuito.\n\nNombre:\nEmpresa:\nTeléfono:\nSector:\nSituación (retenido en aduana, producto nuevo, renovación, etiquetado, impresión, no sé qué NOM aplica):\nSobre mi producto:\n"}
              ubicacion="contacto-directo"
            />
          </div>

          <aside className="space-y-7">
            <div>
              <p className="gs-eyebrow text-gs-copper-tx">Horario</p>
              <p className="mt-1 text-lg text-gs-ink">{CONTACTO.horario}</p>
            </div>
            <div>
              <p className="gs-eyebrow text-gs-copper-tx">Dirección</p>
              <address className="mt-1 text-lg not-italic leading-relaxed text-gs-ink">
                {CONTACTO.direccion.calle}
                <br />
                {CONTACTO.direccion.edificio}, {CONTACTO.direccion.colonia}
                <br />
                C.P. {CONTACTO.direccion.cp}, {CONTACTO.direccion.ciudad}, {CONTACTO.direccion.estado}
              </address>
              <a href={CONTACTO.mapaUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-display text-base font-bold uppercase tracking-wide text-gs-copper-tx hover:underline">
                Abrir en Google Maps
              </a>
            </div>
            {CONTACTO.linkedin ? (
              <div>
                <p className="gs-eyebrow text-gs-copper-tx">LinkedIn</p>
                <a href={CONTACTO.linkedin} target="_blank" rel="noopener noreferrer" className="mt-1 block text-lg text-gs-ink hover:underline">
                  Página de empresa
                </a>
              </div>
            ) : (
              mostrarPendientes && <p className="text-xs font-semibold uppercase text-gs-copper-tx">PENDIENTE_GS: URL de LinkedIn de empresa</p>
            )}
          </aside>
        </div>
      </section>

      <section className="gs-light pb-16 md:pb-24">
        <div className="gs-container">
          <div className="overflow-hidden rounded-gs-xl border border-gs-gray-100">
            <iframe
              title="Ubicación de Global Solutions S&L en Google Maps"
              src={CONTACTO.mapaEmbed}
              width="100%"
              height="380"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
