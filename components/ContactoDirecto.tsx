import { CONTACTO } from "@/content/contacto";
import { EnlaceCorreo, EnlaceTelefono, EnlaceWhatsApp, IconoWhatsApp } from "./Enlaces";

type Props = {
  titulo: string;
  texto: string;
  mensajeWa: "diagnostico" | "impresion";
  asunto: string;
  cuerpo: string;
  ubicacion: string;
};

/**
 * Sustituye a los formularios (decisión de Paula, 9 nov 2026): sin envío de correo desde el sitio,
 * el usuario escribe por WhatsApp, llama o abre su correo con el mensaje ya armado.
 */
export function ContactoDirecto({ titulo, texto, mensajeWa, asunto, cuerpo, ubicacion }: Props) {
  return (
    <div className="rounded-gs-xl border border-gs-gray-100 bg-white p-6 shadow-gs-card md:p-8">
      <h2 className="text-2xl md:text-3xl">{titulo}</h2>
      <p className="mt-3 text-gs-ink-soft">{texto}</p>
      <div className="mt-6 grid gap-3">
        <EnlaceWhatsApp
          ubicacion={ubicacion}
          mensaje={mensajeWa}
          className="flex items-center justify-between gap-3 rounded-gs bg-gs-copper px-5 py-4 font-display text-xl font-bold uppercase leading-tight text-white shadow-gs-copper hover:bg-gs-copper-hover"
        >
          <span className="flex items-center gap-3">
            <IconoWhatsApp className="h-6 w-6" /> WhatsApp
          </span>
          <span className="text-base font-semibold normal-case tracking-normal text-white/90">{CONTACTO.telefonoVisible}</span>
        </EnlaceWhatsApp>
        <EnlaceTelefono className="flex items-center justify-between gap-3 rounded-gs border-2 border-gs-navy px-5 py-4 font-display text-xl font-bold uppercase leading-tight text-gs-navy hover:bg-gs-navy hover:text-white">
          <span>Llamar</span>
          <span className="text-base font-semibold normal-case tracking-normal">{CONTACTO.telefonoVisible}</span>
        </EnlaceTelefono>
        <EnlaceCorreo
          asunto={asunto}
          cuerpo={cuerpo}
          className="flex items-center justify-between gap-3 rounded-gs border-2 border-gs-gray-200 px-5 py-4 font-display text-xl font-bold uppercase leading-tight text-gs-navy hover:border-gs-navy"
        >
          <span>Correo</span>
          <span className="truncate text-base font-semibold normal-case tracking-normal text-gs-ink-soft">{CONTACTO.email}</span>
        </EnlaceCorreo>
      </div>
      <p className="mt-5 text-sm text-gs-ink-soft">
        {CONTACTO.horario}. Al escribirnos aceptas nuestro{" "}
        <a href="/aviso-de-privacidad" className="font-semibold text-gs-copper-tx underline">
          aviso de privacidad
        </a>
        .
      </p>
    </div>
  );
}
