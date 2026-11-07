# Lanzamiento globalsolutionssl.mx — martes 1 de diciembre de 2026

Checklist para Paula. Nada de esto se ejecuta sin su confirmación.

## Antes del día

- [ ] GS entregó y validó: NOM de cada sector (empezando por NOM-004), cifras públicas, aviso de privacidad, URL de LinkedIn de empresa.
- [ ] Marcar `validadoGS: true` en `content/sectores/<slug>.ts` y en `content/cifras.ts` solo lo que GS confirmó. Lo no validado **no sale** en producción.
- [ ] Pegar el texto del aviso de privacidad en `app/aviso-de-privacidad/page.tsx`. Sin él no se lanza.
- [ ] Correr `GS_ENTORNO=produccion npm run build` y revisar que no quede ningún `PENDIENTE_GS` visible: `GS_ENTORNO=produccion npm run build && grep -rl PENDIENTE_GS .next/server/app | wc -l` debe dar 0.
- [ ] Variables en Vercel (producción): `RESEND_API_KEY`, `LEADS_TO`, `LEADS_FROM`, `NEXT_PUBLIC_GA_ID`. Capturarlas con `read -s`, por ejemplo:
  `read -s RESEND_API_KEY && printf %s "$RESEND_API_KEY" | npx vercel env add RESEND_API_KEY production && unset RESEND_API_KEY`
- [ ] Verificar el dominio `globalsolutionssl.mx` en Resend. Resend pide registros **TXT y CNAME propios** (DKIM/SPF para su subdominio de envío). Se agregan en el DNS de Hostinger **sin tocar** los MX ni los TXT existentes del correo.
- [ ] Probar los dos formularios en el preview y confirmar que llega el correo a info@.
- [ ] Hacer merge de la rama `rediseno-2026` a `main` y conectar el repo `paulapozo89-lab/global-solutions-web` al proyecto de Vercel (rama de producción: `main`).

## El día

1. **Respaldo** del `index.html` actual de Hostinger (ya hay copia en `_respaldo/2026-11-07_index.html`; descargar una nueva ese día por si cambió).
2. En el DNS de Hostinger, cambiar **solo** los registros **A** de `@` y **CNAME** de `www` a los valores que indique Vercel al agregar el dominio al proyecto.
3. **No tocar los registros MX ni los TXT de SPF/DKIM/DMARC** del correo (info@, abigail.martinez@).
4. **No mover los nameservers.** Si se mueven, el correo se cae.
5. Ese mismo día: verificar SSL en Vercel (candado en https://globalsolutionssl.mx y https://www.globalsolutionssl.mx), enviar y recibir un correo en info@, probar los dos formularios en producción.
6. Registrar el sitio en Google Search Console (propiedad de dominio) y enviar `https://globalsolutionssl.mx/sitemap.xml`.

## Después

- [ ] Revisar en GA4 que lleguen los eventos: `form_diagnostico_enviado`, `form_cotizacion_enviado`, `click_whatsapp`, `click_telefono`, `click_email`.
- [ ] Cuando lleguen las licencias de Nexa y Bitsumishi, colocar los archivos en `public/fonts/` (ignorado por git hasta tener licencia) y cambiar `app/layout.tsx` a `next/font/local`.
- [ ] Fotos reales de impresora, rollos, taller y equipo: reemplazar la foto del catálogo en `/impresion-de-etiquetas` y llenar `NOSOTROS.fotos`.
- [ ] Escalar con Higgsfield las fotos de sector que están a 1024 px (electrónica, recubrimientos, productos en general, belleza, alimentos, bebidas alcohólicas, eficiencia) solo si no tienen texto legible en la etiqueta.
