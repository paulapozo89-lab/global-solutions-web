import Link from "next/link";
import Image from "next/image";
import { CONTACTO } from "@/content/contacto";
import { SERVICIOS } from "@/content/servicios";
import { SECTORES_VISIBLES } from "@/content/sectores";
import { EnlaceEmail, EnlaceTelefono, EnlaceWhatsApp } from "./Enlaces";
import { esProduccion } from "@/lib/entorno";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gs-bg">
      <div className="gs-container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image src="/logo-white.png" alt="Global Solutions S&L" width={190} height={61} className="h-12 w-auto" />
          <p className="mt-5 max-w-xs text-[0.9375rem] leading-relaxed text-gs-mist">
            Expertos en servicios normativos: certificación NOM, etiquetado e impresión en un solo proceso.
          </p>
        </div>

        <div>
          <p className="gs-eyebrow text-gs-copper-lt">Servicios</p>
          <ul className="mt-4 space-y-2.5">
            {SERVICIOS.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="text-[0.9375rem] text-white/85 hover:text-white">
                  {s.corto}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/producto-retenido-en-aduana" className="text-[0.9375rem] text-white/85 hover:text-white">
                Producto retenido en aduana
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="gs-eyebrow text-gs-copper-lt">Sectores</p>
          <ul className="mt-4 grid grid-cols-1 gap-2.5">
            {SECTORES_VISIBLES.map((s) => (
              <li key={s.slug}>
                <Link href={`/sectores/${s.slug}`} className="text-[0.9375rem] text-white/85 hover:text-white">
                  {s.nombre}
                </Link>
              </li>
            ))}
            {SECTORES_VISIBLES.length === 0 && (
              <li>
                <Link href="/sectores" className="text-[0.9375rem] text-white/85 hover:text-white">
                  Ver sectores
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div>
          <p className="gs-eyebrow text-gs-copper-lt">Contacto</p>
          <ul className="mt-4 space-y-3 text-[0.9375rem] text-white/85">
            <li>
              <EnlaceWhatsApp ubicacion="footer" className="hover:text-white">
                WhatsApp {CONTACTO.telefonoVisible}
              </EnlaceWhatsApp>
            </li>
            <li>
              <EnlaceTelefono className="hover:text-white" />
            </li>
            <li>
              <EnlaceEmail className="hover:text-white" />
            </li>
            <li className="text-gs-mist">{CONTACTO.horario}</li>
            <li className="leading-relaxed text-gs-mist">{CONTACTO.direccionLinea}</li>
            {CONTACTO.linkedin ? (
              <li>
                <a href={CONTACTO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  LinkedIn
                </a>
              </li>
            ) : (
              !esProduccion && <li className="text-xs text-gs-copper-lt">PENDIENTE_GS: URL de LinkedIn empresa</li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="gs-container flex flex-col gap-3 py-6 text-sm text-gs-mist sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Global Solutions S&L. Todos los derechos reservados.</p>
          <nav aria-label="Legal" className="flex gap-5">
            <Link href="/aviso-de-privacidad" className="hover:text-white">
              Aviso de privacidad
            </Link>
            <Link href="/contacto" className="hover:text-white">
              Contacto
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
