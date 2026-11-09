# globalsolutionssl.mx — Rediseño 2026

Sitio público de Global Solutions S&L. Next.js 16 (App Router) + TypeScript + Tailwind 4, estático, en Vercel.

- Rama de trabajo: `rediseno-2026`. `main` conserva el `index.html` estático que hoy está en Hostinger.
- Contenido en datos: `content/sectores/<slug>.ts`, `content/servicios.ts`, `content/cifras.ts`, `content/contacto.ts`, `content/faq.ts`, `content/nosotros.ts`.
- Reglas de producción: `lib/entorno.ts`. En Vercel producción (o `GS_ENTORNO=produccion`) se excluyen sectores y cifras con `validadoGS: false` y todo `PENDIENTE_GS`.
- Formularios: retirados el 9 nov 2026 (decisión de Paula). Contacto directo en `components/ContactoDirecto.tsx` (WhatsApp, llamada, mailto). `lib/leads.ts` conserva la validación por si se reactiva el envío por correo.
- Fuentes del cliente en `_fuentes/` (ignorado). Respaldo del sitio anterior en `_respaldo/`.
- QA: capturas en `_qa/capturas/`, reportes Lighthouse en `_qa/lighthouse/`.
- Lanzamiento: `LANZAMIENTO.md`.

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
GS_ENTORNO=produccion npm run build   # simula el build de producción
```
