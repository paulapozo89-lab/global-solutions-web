import type { Metadata } from "next";
import { Encabezado } from "@/components/Encabezado";
import { Migas } from "@/components/Migas";
import { CONTACTO } from "@/content/contacto";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description: "Aviso de privacidad integral de Global Solutions S&L conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.",
  alternates: { canonical: "/aviso-de-privacidad" },
};

/**
 * Versión inicial redactada por GROW el 7 de noviembre de 2026 con los datos públicos de GS,
 * por decisión de Paula para no lanzar sin aviso. GS debe revisarla y confirmar la razón social completa.
 */
const ULTIMA_ACTUALIZACION = "7 de noviembre de 2026";

export default function AvisoPrivacidad() {
  return (
    <>
      <Encabezado eyebrow="Legal" titulo="Aviso de privacidad" texto={`Última actualización: ${ULTIMA_ACTUALIZACION}`}>
        <div className="mt-6">
          <Migas items={[{ nombre: "Aviso de privacidad", href: "/aviso-de-privacidad" }]} />
        </div>
      </Encabezado>
      <section className="gs-light gs-section">
        <div className="gs-container max-w-3xl space-y-8 text-[1.0625rem] leading-relaxed text-gs-ink">
          <div>
            <h2 className="text-2xl">Responsable</h2>
            <p className="mt-3">
              {SITE.nombre}, con domicilio en {CONTACTO.direccionLinea} (en adelante, &quot;Global Solutions&quot;), es responsable del tratamiento de los datos personales que nos proporcionas, conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, su Reglamento y los Lineamientos del Aviso de Privacidad.
            </p>
          </div>

          <div>
            <h2 className="text-2xl">Datos personales que recabamos</h2>
            <p className="mt-3">Cuando nos escribes por WhatsApp, correo electrónico o teléfono desde este sitio, podemos recabar: nombre, empresa, correo electrónico, número telefónico y la información que nos compartas sobre tu producto, sector y situación normativa. No recabamos datos personales sensibles.</p>
          </div>

          <div>
            <h2 className="text-2xl">Finalidades</h2>
            <p className="mt-3">Finalidades primarias, necesarias para el servicio que solicitas:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Atender tu solicitud de diagnóstico normativo, cotización o información.</li>
              <li>Contactarte para dar seguimiento a tu solicitud.</li>
              <li>Prestar los servicios de certificación NOM, diseño de etiquetado e impresión de etiquetas que contrates.</li>
              <li>Cumplir obligaciones legales, fiscales y contractuales.</li>
            </ul>
            <p className="mt-3">Finalidad secundaria: enviarte información sobre normatividad y servicios de Global Solutions. Si no deseas recibirla, escríbenos a {CONTACTO.email} y lo registramos sin afectar la atención de tu solicitud.</p>
          </div>

          <div>
            <h2 className="text-2xl">Transferencias</h2>
            <p className="mt-3">No vendemos ni cedemos tus datos personales. Solo podrán compartirse con autoridades competentes cuando exista obligación legal, y con proveedores que nos prestan servicios tecnológicos (alojamiento del sitio, mensajería y correo electrónico) exclusivamente para las finalidades aquí descritas, bajo obligaciones de confidencialidad.</p>
          </div>

          <div>
            <h2 className="text-2xl">Derechos ARCO y revocación del consentimiento</h2>
            <p className="mt-3">
              Tienes derecho a acceder, rectificar y cancelar tus datos personales, así como a oponerte a su tratamiento o revocar el consentimiento que nos hayas otorgado. Para ejercerlos, envía una solicitud a {CONTACTO.email} indicando tu nombre, un medio para responderte, los datos sobre los que ejerces el derecho y, en su caso, documentos que acrediten tu identidad. Responderemos en los plazos que marca la ley.
            </p>
          </div>

          <div>
            <h2 className="text-2xl">Limitación del uso o divulgación</h2>
            <p className="mt-3">Puedes limitar el uso o divulgación de tus datos escribiendo a {CONTACTO.email}.</p>
          </div>

          <div>
            <h2 className="text-2xl">Cookies y medición</h2>
            <p className="mt-3">Este sitio puede usar herramientas de medición de tráfico que recaban datos técnicos de navegación de forma agregada y sin identificarte. Puedes desactivar las cookies desde la configuración de tu navegador.</p>
          </div>

          <div>
            <h2 className="text-2xl">Cambios al aviso</h2>
            <p className="mt-3">Cualquier cambio a este aviso se publicará en esta misma página, con la fecha de su última actualización.</p>
          </div>

          <div>
            <h2 className="text-2xl">Contacto</h2>
            <p className="mt-3">
              {CONTACTO.email} · {CONTACTO.telefonoVisible} · {CONTACTO.horario}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
