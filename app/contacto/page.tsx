import type { Metadata } from "next";
import { Encabezado } from "@/components/Encabezado";
import { Migas } from "@/components/Migas";
import { FormDiagnostico } from "@/components/Formularios";
import { EnlaceEmail, EnlaceTelefono, EnlaceWhatsApp, IconoWhatsApp } from "@/components/Enlaces";
import { CONTACTO } from "@/content/contacto";
import { esProduccion } from "@/lib/entorno";

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
        <div className="gs-container grid gap-10 lg:grid-cols-[1.25fr_1fr]">
          <div id="diagnostico" className="rounded-gs-xl border border-gs-gray-100 bg-white p-6 shadow-gs-card md:p-8">
            <h2 className="text-2xl md:text-3xl">Solicita tu diagnóstico gratuito</h2>
            <div className="mt-6">
              <FormDiagnostico />
            </div>
          </div>

          <aside className="space-y-7">
            <div>
              <p className="gs-eyebrow text-gs-copper-tx">WhatsApp</p>
              <EnlaceWhatsApp
                ubicacion="contacto"
                mensaje="diagnostico"
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-gs-navy px-5 py-3 font-display text-xl font-bold text-white"
              >
                <IconoWhatsApp /> {CONTACTO.telefonoVisible}
              </EnlaceWhatsApp>
            </div>
            <div>
              <p className="gs-eyebrow text-gs-copper-tx">Teléfono</p>
              <EnlaceTelefono className="mt-1 block text-lg text-gs-ink hover:underline" />
            </div>
            <div>
              <p className="gs-eyebrow text-gs-copper-tx">Email</p>
              <EnlaceEmail className="mt-1 block text-lg text-gs-ink hover:underline" />
            </div>
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
              !esProduccion && <p className="text-xs font-semibold uppercase text-gs-copper-tx">PENDIENTE_GS: URL de LinkedIn de empresa</p>
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
