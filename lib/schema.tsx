import { CONTACTO } from "@/content/contacto";
import { SITE } from "@/content/site";

/** LocalBusiness (ProfessionalService) con los datos del sitio actual más dirección, teléfono y horario. */
export const SCHEMA_NEGOCIO = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE.url}/#negocio`,
  name: SITE.nombre,
  description: SITE.descripcion,
  url: SITE.url,
  email: CONTACTO.email,
  telephone: CONTACTO.telefonoTel,
  image: `${SITE.url}/opengraph-image`,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${CONTACTO.direccion.calle}, ${CONTACTO.direccion.edificio}, ${CONTACTO.direccion.colonia}`,
    addressLocality: CONTACTO.direccion.ciudad,
    addressRegion: CONTACTO.direccion.estadoLargo,
    postalCode: CONTACTO.direccion.cp,
    addressCountry: CONTACTO.direccion.pais,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  areaServed: { "@type": "Country", name: "México" },
  serviceType: ["Certificación NOM", "Diseño de etiquetado", "Impresión de etiquetas", "Consultoría normativa"],
  knowsAbout: ["NOM-003-SCFI", "NOM-024-SCFI", "Normas Oficiales Mexicanas", "Certificado de Conformidad", "Etiquetado normativo", "PROFECO"],
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 2 },
  ...(CONTACTO.linkedin ? { sameAs: [CONTACTO.linkedin] } : {}),
};

export function schemaServicio(nombre: string, descripcion: string, ruta: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: nombre,
    description: descripcion,
    url: `${SITE.url}${ruta}`,
    provider: { "@id": `${SITE.url}/#negocio` },
    areaServed: { "@type": "Country", name: "México" },
  };
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
