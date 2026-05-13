# Jonas & Cassie — Swiss German site

This folder is a **duplicate** of the English wedding site (`../Website`), with **Swiss German copy**, **no “More fun” / Weekend block**, and an **updated Gifts** section (IBAN placeholder). **Layout, styling, and Formspree endpoint match the English project.**

## Deploy (separate domain)

1. Create a **new** Vercel project (or other host) pointing at this directory / its own Git repo.
2. Build command: `npm run build` — output directory: `dist`.
3. Point your **German domain** DNS to that deployment.

Do **not** replace the existing English deployment; run this as its own project.

### Link previews (WhatsApp / iMessage)

`index.html` uses `https://jonasandcassie-de.vercel.app` for `canonical`, `og:url`, and `og:image`. If your production URL is a **custom domain**, replace those three URLs in `index.html` so previews match your live site.

## Local dev

```bash
cd Website-de
npm install
npm run dev
```

## English site

The original English site lives in **`../Website`** and was restored to match the last committed version (no `/de` routing, full English content including Weekend).
