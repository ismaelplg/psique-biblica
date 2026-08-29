# Psique Bíblica — sitio web (Astro) · diseño

## Objetivo
Replicar el rediseño de psiquebiblica.com (prototipo Open Design) como sitio estático con SEO técnico completo, CTA a Calendly, y un blog Markdown preparado para CMS.

## Stack
Astro 7 (estático, cero JS salvo el toggle de moneda) · CSS plano con tokens del brand-spec · `@astrojs/sitemap` + `@astrojs/rss`. Hosting: sin decidir; `dist/` se sirve en cualquier CDN/cPanel.

## Estructura
- `src/site.config.ts` — nombre, autor, Calendly, WhatsApp, redes, descripción. Único lugar editable.
- `src/layouts/Base.astro` — `<head>` SEO (title, description, canonical, OG/Twitter, JSON-LD opcional), nav, footer.
- `src/pages/index.astro` — landing: hero, servicios (toggle MXN/USD), proceso, enfoque (tabla), áreas, testimonio, FAQ, CTA. JSON-LD `ProfessionalService` + `FAQPage`.
- `src/content/blog/*.md` — colección `blog` (title, description ≤160, pubDate, updatedDate?, draft).
- `src/pages/blog/index.astro`, `src/pages/blog/[slug].astro` (JSON-LD `Article`), `src/pages/rss.xml.ts`.
- `public/robots.txt`, `public/og.png` (pendiente), favicon.

## Conversión
Botones "Agendar" → `site.calendly` (nueva pestaña). WhatsApp en nav y footer → `site.whatsapp`.

## Fuera de alcance (sprints siguientes)
CMS (Keystatic/Decap sobre la misma colección), formulario de contacto, elección de hosting, foto real y testimonios reales, imagen OG.

## Verificación
`npm run check` (astro check) y `npm run build` sin errores; `scripts/verify-seo.mjs` comprueba que `dist/` tenga sitemap, robots, canonical, description y JSON-LD en la home.
