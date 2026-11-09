import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

/**
 * og:image: isotipo grande centrado sobre navy, nombre y título de la página.
 * El isotipo va en vector (medidas del archivo oficial) para que salga nítido.
 */
export async function imagenOg(titulo: string, subtitulo?: string) {
  const esInicio = titulo === "__inicio__";
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(160deg, #1F2036 0%, #161729 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Franja cobre inferior */}
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 14, background: "#C4733F", display: "flex" }} />

        <svg width={esInicio ? 260 : 210} height={esInicio ? 260 : 210} viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#ffffff"
            fillRule="evenodd"
            d="M40 0 H210 A40 40 0 0 1 250 40 V210 A40 40 0 0 1 210 250 H40 A40 40 0 0 1 0 210 V40 A40 40 0 0 1 40 0 Z M75 51 L175 51 L212 88 L212 162 L175 199 L75 199 L38 162 L38 88 Z"
          />
          <rect x="75" y="88" width="100" height="74" fill="#ffffff" />
        </svg>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 34 }}>
          <div style={{ display: "flex", fontSize: 44, fontWeight: 800, letterSpacing: 6, textTransform: "uppercase" }}>
            Global Solutions S&L
          </div>
          {!esInicio && (
            <div style={{ display: "flex", marginTop: 14, fontSize: 30, color: "#9AADDA", textAlign: "center", maxWidth: 1000 }}>
              {titulo}
            </div>
          )}
          <div style={{ display: "flex", marginTop: esInicio ? 16 : 12, fontSize: 24, color: "#D1936B", letterSpacing: 3 }}>
            {subtitulo ?? "Certificación NOM · Etiquetado · Impresión"}
          </div>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
