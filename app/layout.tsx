import type { Metadata, Viewport } from "next";
import { Inter, Rajdhani } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFlotante } from "@/components/Enlaces";
import { Analitica } from "@/components/Analitica";
import { JsonLd, SCHEMA_NEGOCIO } from "@/lib/schema";
import { SITE } from "@/content/site";

// Respaldo mientras llegan las licencias de Nexa (texto) y Bitsumishi (títulos).
// Cuando estén en public/fonts/, cambiar a next/font/local.
const display = Rajdhani({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.tituloBase, template: `%s | ${SITE.nombre}` },
  description: SITE.descripcion,
  applicationName: SITE.nombre,
  authors: [{ name: SITE.nombre }],
  openGraph: { type: "website", siteName: SITE.nombre, locale: SITE.locale, url: SITE.url },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#161729", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-gs focus:bg-white focus:px-4 focus:py-2 focus:text-gs-navy">
          Saltar al contenido
        </a>
        <Navbar />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFlotante />
        <JsonLd data={SCHEMA_NEGOCIO} />
        <Analitica />
      </body>
    </html>
  );
}
