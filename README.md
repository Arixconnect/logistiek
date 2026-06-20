# EDOX Logistics

Premium Nederlandstalige React/Vite-onepager voor EDOX Logistics: transportcapaciteit, CE-bestuurders, chauffeursdiensten en internationale chauffeur-werving.

## Lokaal starten

```bash
npm install
npm run dev
```

Productiebuild:

```bash
npm run build
npm run preview
```

De map `dist/` wordt via `.github/workflows/deploy-pages.yml` automatisch naar GitHub Pages gepubliceerd.

## Centraal aanpassen

- Merk, telefoon, e-mail en socials: `SITE` in `src/siteConfig.js`.
- Alle beeldsloten: `IMAGES` in `src/siteConfig.js`.
- Nederlandse websiteteksten: `T` en de componenten in `src/main.jsx`.
- Kleuren, fonts, spacing, radii en schaduwen: `:root` in `src/styles.css`.
- SEO, Open Graph, Twitter Card, canonical en Nederlandse hreflang: `index.html`.
- Formulierkoppelingen: zoek in `src/main.jsx` naar `KOPPELPUNT`.
- Beelden: `public/assets/images/`.

De taalwisselaar is bewust verborgen totdat de Engelse en Russische vertalingen volledig en afzonderlijk getest zijn.
