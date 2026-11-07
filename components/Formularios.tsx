"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/ga";
import { COLORES_FORM, FORMATOS_FORM, MATERIALES_FORM, SECTORES_FORM, SITUACIONES_FORM } from "@/lib/leads";
import { EnlaceWhatsApp, IconoWhatsApp } from "./Enlaces";
import { cn } from "@/lib/utils";

type Estado = { fase: "idle" | "enviando" | "ok" | "error"; mensaje?: string };

const inputCls =
  "w-full rounded-gs border border-gs-gray-200 bg-white px-4 py-3 text-[0.9375rem] text-gs-ink placeholder:text-gs-ink-soft/60 focus:border-gs-copper focus:outline-none focus:ring-2 focus:ring-gs-copper/30";
const labelCls = "mb-1.5 block font-display text-sm font-semibold uppercase tracking-[0.12em] text-gs-navy";

function Campo({ id, label, children, requerido }: { id: string; label: string; children: React.ReactNode; requerido?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className={labelCls}>
        {label} {requerido && <span aria-hidden="true" className="text-gs-copper-tx">*</span>}
      </label>
      {children}
    </div>
  );
}

function Honeypot() {
  return (
    <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
      <label htmlFor="website">Sitio web</label>
      <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}

function Aviso({ id }: { id: string }) {
  return (
    <label htmlFor={id} className="flex items-start gap-3 text-sm text-gs-ink-soft">
      <input id={id} name="aceptaAviso" type="checkbox" required className="mt-1 h-4 w-4 accent-gs-copper" />
      <span>
        He leído y acepto el{" "}
        <Link href="/aviso-de-privacidad" className="font-semibold text-gs-copper-tx underline">
          aviso de privacidad
        </Link>
        . <span aria-hidden="true" className="text-gs-copper-tx">*</span>
      </span>
    </label>
  );
}

function Resultado({ estado, mensajeWa }: { estado: Estado; mensajeWa: "diagnostico" | "impresion" }) {
  if (estado.fase === "ok") {
    return (
      <div role="status" className="rounded-gs border border-gs-navy/15 bg-gs-gray-50 p-6 text-center">
        <p className="font-display text-2xl font-bold uppercase text-gs-navy">Recibimos tu solicitud</p>
        <p className="mt-2 text-gs-ink-soft">Te respondemos por correo o WhatsApp en horario de atención.</p>
      </div>
    );
  }
  if (estado.fase === "error") {
    return (
      <div role="alert" className="rounded-gs border-2 border-gs-copper bg-gs-copper/10 p-5">
        <p className="font-display text-lg font-bold uppercase text-gs-copper-tx">No pudimos enviar tu solicitud</p>
        <p className="mt-1 text-sm text-gs-ink-soft">{estado.mensaje ?? "Inténtalo de nuevo o escríbenos directo por WhatsApp."}</p>
        <EnlaceWhatsApp
          ubicacion={`form-error-${mensajeWa}`}
          mensaje={mensajeWa}
          className="mt-4 inline-flex items-center gap-2 rounded-gs bg-gs-navy px-5 py-3 font-display text-lg font-bold uppercase text-white"
        >
          <IconoWhatsApp /> Escribir por WhatsApp
        </EnlaceWhatsApp>
      </div>
    );
  }
  return null;
}

async function enviar(payload: Record<string, unknown>): Promise<Estado> {
  try {
    const r = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    const data = (await r.json().catch(() => ({}))) as { ok?: boolean; error?: string };
    if (r.ok && data.ok) return { fase: "ok" };
    return { fase: "error", mensaje: data.error };
  } catch {
    return { fase: "error" };
  }
}

function datos(form: HTMLFormElement) {
  const fd = new FormData(form);
  const o: Record<string, unknown> = {};
  fd.forEach((v, k) => (o[k] = typeof v === "string" ? v : ""));
  o.aceptaAviso = fd.get("aceptaAviso") === "on";
  return o;
}

export function FormDiagnostico({ className }: { className?: string }) {
  const [estado, setEstado] = useState<Estado>({ fase: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setEstado({ fase: "enviando" });
    const res = await enviar({ tipo: "diagnostico", ...datos(form) });
    setEstado(res);
    if (res.fase === "ok") {
      trackEvent("form_diagnostico_enviado");
      form.reset();
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate={false} className={cn("relative space-y-4", className)} aria-busy={estado.fase === "enviando"}>
      <Honeypot />
      <div className="grid gap-4 sm:grid-cols-2">
        <Campo id="d-nombre" label="Nombre" requerido>
          <input id="d-nombre" name="nombre" required maxLength={120} autoComplete="name" className={inputCls} />
        </Campo>
        <Campo id="d-empresa" label="Empresa" requerido>
          <input id="d-empresa" name="empresa" required maxLength={160} autoComplete="organization" className={inputCls} />
        </Campo>
        <Campo id="d-email" label="Email" requerido>
          <input id="d-email" name="email" type="email" required maxLength={160} autoComplete="email" className={inputCls} />
        </Campo>
        <Campo id="d-telefono" label="Teléfono">
          <input id="d-telefono" name="telefono" type="tel" maxLength={40} autoComplete="tel" className={inputCls} />
        </Campo>
        <Campo id="d-sector" label="Sector">
          <select id="d-sector" name="sector" className={inputCls} defaultValue="">
            <option value="">Selecciona una opción</option>
            {SECTORES_FORM.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Campo>
        <Campo id="d-situacion" label="Situación">
          <select id="d-situacion" name="situacion" className={inputCls} defaultValue="">
            <option value="">Selecciona una opción</option>
            {SITUACIONES_FORM.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Campo>
      </div>
      <Campo id="d-producto" label="Sobre tu producto">
        <textarea id="d-producto" name="producto" rows={4} maxLength={2000} className={inputCls} placeholder="Ej: Importo focos LED de China y necesito certificar para vender en México..." />
      </Campo>
      <Aviso id="d-aviso" />
      <button
        type="submit"
        disabled={estado.fase === "enviando"}
        className="w-full rounded-gs bg-gs-copper px-6 py-4 font-display text-[1.1875rem] font-bold uppercase leading-none tracking-wide text-white shadow-gs-copper hover:bg-gs-copper-hover disabled:opacity-60"
      >
        {estado.fase === "enviando" ? "Enviando…" : "Solicitar diagnóstico gratuito"}
      </button>
      <Resultado estado={estado} mensajeWa="diagnostico" />
    </form>
  );
}

export function FormCotizacion({ className }: { className?: string }) {
  const [estado, setEstado] = useState<Estado>({ fase: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setEstado({ fase: "enviando" });
    const res = await enviar({ tipo: "cotizacion", ...datos(form) });
    setEstado(res);
    if (res.fase === "ok") {
      trackEvent("form_cotizacion_enviado");
      form.reset();
    }
  }

  return (
    <form onSubmit={onSubmit} className={cn("relative space-y-4", className)} aria-busy={estado.fase === "enviando"}>
      <Honeypot />
      <div className="grid gap-4 sm:grid-cols-2">
        <Campo id="c-nombre" label="Nombre" requerido>
          <input id="c-nombre" name="nombre" required maxLength={120} autoComplete="name" className={inputCls} />
        </Campo>
        <Campo id="c-empresa" label="Empresa" requerido>
          <input id="c-empresa" name="empresa" required maxLength={160} autoComplete="organization" className={inputCls} />
        </Campo>
        <Campo id="c-email" label="Email" requerido>
          <input id="c-email" name="email" type="email" required maxLength={160} autoComplete="email" className={inputCls} />
        </Campo>
        <Campo id="c-telefono" label="Teléfono">
          <input id="c-telefono" name="telefono" type="tel" maxLength={40} autoComplete="tel" className={inputCls} />
        </Campo>
        <Campo id="c-material" label="Material">
          <select id="c-material" name="material" className={inputCls} defaultValue="">
            <option value="">Selecciona una opción</option>
            {MATERIALES_FORM.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Campo>
        <Campo id="c-color" label="Color">
          <select id="c-color" name="color" className={inputCls} defaultValue="">
            <option value="">Selecciona una opción</option>
            {COLORES_FORM.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Campo>
        <Campo id="c-formato" label="Formato">
          <select id="c-formato" name="formato" className={inputCls} defaultValue="">
            <option value="">Selecciona una opción</option>
            {FORMATOS_FORM.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Campo>
        <Campo id="c-cantidad" label="Cantidad aproximada">
          <input id="c-cantidad" name="cantidad" maxLength={80} className={inputCls} placeholder="Ej: 5,000 etiquetas" />
        </Campo>
      </div>
      <Campo id="c-comentarios" label="Comentarios">
        <textarea id="c-comentarios" name="comentarios" rows={4} maxLength={2000} className={inputCls} placeholder="Medidas, producto, si ya tienes el arte…" />
      </Campo>
      <Aviso id="c-aviso" />
      <button
        type="submit"
        disabled={estado.fase === "enviando"}
        className="w-full rounded-gs bg-gs-copper px-6 py-4 font-display text-[1.1875rem] font-bold uppercase leading-none tracking-wide text-white shadow-gs-copper hover:bg-gs-copper-hover disabled:opacity-60"
      >
        {estado.fase === "enviando" ? "Enviando…" : "Cotizar la impresión"}
      </button>
      <Resultado estado={estado} mensajeWa="impresion" />
    </form>
  );
}
