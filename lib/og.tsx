import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const OG_SIZE = { width: 1200, height: 630 };

/** og:image sobre navy, con logo y título. */
export async function imagenOg(titulo: string, subtitulo?: string) {
  const logo = await readFile(path.join(process.cwd(), "public", "logo-white.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(160deg, #1F2036 0%, #161729 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="" width={360} height={115} style={{ width: 360, height: 115, objectFit: "contain" }} />
          <div style={{ display: "flex", background: "#C4733F", color: "#fff", padding: "10px 20px", fontSize: 24, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>
            NOM
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", fontSize: titulo.length > 48 ? 56 : 68, fontWeight: 800, lineHeight: 1.02, textTransform: "uppercase", letterSpacing: 1 }}>
            {titulo}
          </div>
          {subtitulo && <div style={{ display: "flex", fontSize: 28, color: "#9AADDA" }}>{subtitulo}</div>}
          <div style={{ display: "flex", fontSize: 24, color: "#D1936B", letterSpacing: 2 }}>globalsolutionssl.mx</div>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
