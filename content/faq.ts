export type Faq = { pregunta: string; respuesta: string };

/** Sitio actual. Sin precios. "¿Son más caros?" se queda porque no menciona montos. */
export const FAQ_GENERAL: Faq[] = [
  {
    pregunta: "¿Cuánto tiempo toma la certificación NOM?",
    respuesta:
      "El plazo estimado es de 10 a 15 días hábiles una vez completada la documentación. Depende de la NOM, el tipo de trámite y el organismo certificador. En el diagnóstico gratuito te damos un timeline específico.",
  },
  {
    pregunta: "¿Son más caros que otros proveedores?",
    respuesta:
      "Nuestro servicio incluye diagnóstico, gestión completa, diseño de etiqueta y hasta impresión con infraestructura propia. Otros cobran cada fase por separado. Cuando comparas el costo total, el servicio integral es más eficiente.",
  },
  {
    pregunta: "¿La impresión es con infraestructura propia?",
    respuesta:
      "Sí. Contamos con infraestructura propia, lo que nos permite controlar calidad, tiempos y costos sin depender de terceros.",
  },
  {
    pregunta: "¿Pueden atender en toda la república?",
    respuesta:
      "Sí. Operamos de forma remota y presencial. Los trámites ante organismos son digitales y coordinamos envíos de etiquetas a cualquier punto del país.",
  },
  {
    pregunta: "¿Qué diferencia hay entre CC, carta de justificación técnica y Carta de Validación?",
    respuesta:
      "CC: avala que tu producto cumple la NOM. Carta de justificación técnica: sustenta el cumplimiento normativo. Carta de Validación: permite liberar una muestra en aduana (aplica con máximo 3 muestras).",
  },
  {
    pregunta: "Ya tengo proveedor. ¿Qué valor agregan?",
    respuesta:
      "Aseguramos el cumplimiento normativo y de información comercial. Además de certificar, diseñamos tu etiqueta y la imprimimos con infraestructura propia. Un solo punto de contacto.",
  },
  {
    pregunta: "¿Qué es la certificación NOM y por qué la necesito?",
    respuesta:
      "La certificación NOM (Norma Oficial Mexicana) es un requisito legal para comercializar ciertos productos en México. Sin ella, tu producto puede ser retenido en aduana o sancionado por PROFECO.",
  },
];

export const FAQ_IMPRESION: Faq[] = [
  {
    pregunta: "¿Cuánto tarda la impresión de etiquetas?",
    respuesta:
      "El tiempo estimado es de 3 a 5 días hábiles. Incluye pre-prensa, producción con control de calidad y logística de entrega a cualquier punto de la república.",
  },
];
