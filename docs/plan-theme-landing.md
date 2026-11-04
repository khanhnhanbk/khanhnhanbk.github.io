# Plan: theme-landing (branch `theme-landing`)

Goal: same look as the student landing page (lam-web-sinh-vien.vercel.app), keeping all content and i18n and the liquid glass effect.

Done:
- Tokens in `app/globals.css` (light + dark): bg, card, ink, muted, line, brand, brand-ink, soft, accent, plus glass tints. Tailwind colors map to them.
- `.card` (16px radius, 1px line border), `.btn` / `.btn-ghost` (pill), `.pill` tag; `.glass` retinted green, GlassPointer kept.
- Indigo/violet gradients replaced with brand green; hero blobs now soft green.
- Layout rules: `text-wrap: balance` on headings, `pretty` on text; section titles break after a comma; hero headline kept on one line.
- Print: A4, header/footer/CTAs/floating Zalo hidden, desktop grids forced, titles never split from content.

Checked: `npm run lint`, `npm run build`, screenshots at 390px and 1200px (light/dark, VI/EN), print to PDF (6 pages).

Next: merge into `main` to publish (GitHub Pages workflow deploys on push to main).
