export const CONTACTO = {
  whatsappNumero: "525574166209",
  telefonoVisible: "(55) 7416 6209",
  telefonoTel: "+525574166209",
  email: "info@globalsolutionssl.mx",
  horario: "Lunes a viernes, 9:00 a 18:00",
  direccion: {
    calle: "Av. Camino Real de la Plata 102-A, 5to. Nivel",
    edificio: "Torre Pletora Urban Center",
    colonia: "Zona Plateada",
    cp: "42084",
    ciudad: "Pachuca de Soto",
    estado: "Hgo.",
    estadoLargo: "Hidalgo",
    pais: "MX",
  },
  direccionLinea:
    "Av. Camino Real de la Plata 102-A, 5to. Nivel, Torre Pletora Urban Center, Zona Plateada, C.P. 42084, Pachuca de Soto, Hgo.",
  mapaUrl:
    "https://www.google.com/maps/search/?api=1&query=Torre+Pletora+Urban+Center%2C+Av.+Camino+Real+de+la+Plata+102-A%2C+Zona+Plateada%2C+42084+Pachuca+de+Soto%2C+Hgo.",
  mapaEmbed:
    "https://www.google.com/maps?q=Torre+Pletora+Urban+Center%2C+Av.+Camino+Real+de+la+Plata+102-A%2C+Zona+Plateada%2C+42084+Pachuca+de+Soto%2C+Hgo.&output=embed",
  // PENDIENTE_GS: URL de la página de empresa en LinkedIn. El sitio actual apunta a un perfil personal.
  linkedin: null as string | null,
} as const;

export const MENSAJES_WA = {
  general: "Hola, me gustaría más información.",
  diagnostico: "Hola, me gustaría un diagnóstico normativo.",
  aduana: "Hola, tengo producto retenido en aduana.",
  impresion: "Hola, quiero cotizar la impresión de etiquetas.",
} as const;

export function urlWhatsApp(texto: string = MENSAJES_WA.general) {
  return `https://wa.me/${CONTACTO.whatsappNumero}?text=${encodeURIComponent(texto)}`;
}
