import { NextResponse } from "next/server";
import { Resend } from "resend";
import { validarLead, type Lead } from "@/lib/leads";

export const runtime = "nodejs";

const LEADS_TO = process.env.LEADS_TO || "info@globalsolutionssl.mx";
const LEADS_FROM = process.env.LEADS_FROM || "Sitio web Global Solutions <web@globalsolutionssl.mx>";

function esc(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);
}

function fila(k: string, v: string) {
  return `<tr><td style="padding:6px 12px 6px 0;color:#555366;white-space:nowrap;vertical-align:top"><strong>${esc(k)}</strong></td><td style="padding:6px 0;color:#2A2A3E">${esc(v) || "—"}</td></tr>`;
}

function render(lead: Lead) {
  const comunes = [fila("Nombre", lead.nombre), fila("Empresa", lead.empresa), fila("Email", lead.email), fila("Teléfono", lead.telefono)];
  const propias =
    lead.tipo === "diagnostico"
      ? [fila("Sector", lead.sector), fila("Situación", lead.situacion), fila("Sobre el producto", lead.producto)]
      : [fila("Material", lead.material), fila("Color", lead.color), fila("Formato", lead.formato), fila("Cantidad aproximada", lead.cantidad), fila("Comentarios", lead.comentarios)];
  const titulo = lead.tipo === "diagnostico" ? "Nueva solicitud de diagnóstico gratuito" : "Nueva solicitud de cotización de impresión";
  const html = `<div style="font-family:Inter,Arial,sans-serif;max-width:600px"><h2 style="color:#1F2036;margin:0 0 12px">${titulo}</h2><table style="border-collapse:collapse;font-size:15px">${[...comunes, ...propias].join("")}</table><p style="margin-top:20px;font-size:12px;color:#7B8FBF">Enviado desde globalsolutionssl.mx. El remitente aceptó el aviso de privacidad.</p></div>`;
  const texto = [titulo, "", ...[...comunes, ...propias].map((f) => f.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim())].join("\n");
  const asunto = lead.tipo === "diagnostico" ? `Diagnóstico gratuito · ${lead.empresa}` : `Cotización de impresión · ${lead.empresa}`;
  return { html, texto, asunto };
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Solicitud inválida." }, { status: 400 });
  }

  const v = validarLead(body);
  if (!v.ok) {
    if (v.error === "spam") return NextResponse.json({ ok: true }); // honeypot: respuesta neutra
    return NextResponse.json({ ok: false, error: v.error }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[leads] Falta RESEND_API_KEY");
    return NextResponse.json({ ok: false, error: "El envío no está disponible en este momento." }, { status: 503 });
  }

  const { html, texto, asunto } = render(v.lead);
  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: LEADS_FROM,
      to: LEADS_TO.split(",").map((s) => s.trim()).filter(Boolean),
      replyTo: v.lead.email,
      subject: asunto,
      html,
      text: texto,
    });
    if (error) {
      console.error("[leads] Resend:", error.message);
      return NextResponse.json({ ok: false, error: "No pudimos enviar tu solicitud." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[leads]", e);
    return NextResponse.json({ ok: false, error: "No pudimos enviar tu solicitud." }, { status: 502 });
  }
}
