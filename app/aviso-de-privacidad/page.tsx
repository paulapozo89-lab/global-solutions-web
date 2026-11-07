import type { Metadata } from "next";
import { Encabezado } from "@/components/Encabezado";
import { Migas } from "@/components/Migas";
import { CONTACTO } from "@/content/contacto";
import { esProduccion } from "@/lib/entorno";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description: "Aviso de privacidad de Global Solutions S&L.",
  alternates: { canonical: "/aviso-de-privacidad" },
  robots: { index: false, follow: true },
};

/**
 * PENDIENTE_GS: texto legal que entrega GS. La página existe para que los formularios enlacen a ella.
 * El sitio no se lanza sin este texto.
 */
export default function AvisoPrivacidad() {
  return (
    <>
      <Encabezado eyebrow="Legal" titulo="Aviso de privacidad">
        <div className="mt-6">
          <Migas items={[{ nombre: "Aviso de privacidad", href: "/aviso-de-privacidad" }]} />
        </div>
      </Encabezado>
      <section className="gs-light gs-section">
        <div className="gs-container max-w-3xl text-lg leading-relaxed text-gs-ink">
          <p>
            Responsable del tratamiento de datos personales: Global Solutions S&L, con domicilio en {CONTACTO.direccionLinea} Contacto: {CONTACTO.email}.
          </p>
          {!esProduccion && (
            <div className="mt-8 rounded-gs border-2 border-gs-copper bg-gs-copper/10 p-5 text-base">
              <p className="font-display text-lg font-bold uppercase text-gs-copper-tx">PENDIENTE_GS</p>
              <p className="mt-1 text-gs-ink-soft">
                Falta el texto completo del aviso de privacidad (finalidades, datos recabados, derechos ARCO, medios para ejercerlos, transferencias y cambios al aviso). Lo entrega GS. El sitio no se lanza sin él.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
