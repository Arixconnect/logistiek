# EDOX Logistics

Premium meertalige React/Vite-onepager voor EDOX Logistics: transportcapaciteit, CE-bestuurders, chauffeursdiensten en internationale chauffeur-werving.

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

- Merk, telefoon, e-mail, socials en hero-afbeelding: `SITE` bovenaan `src/main.jsx`.
- Nederlandse, Engelse en Russische teksten: `translations` in `src/main.jsx`.
- Kleuren, fonts, spacing, radii en schaduwen: `:root` in `src/styles.css`.
- SEO, Open Graph, Twitter Card, canonical en hreflang: `index.html`.
- Formulierkoppelingen: zoek in `src/main.jsx` naar `KOPPELPUNT`.
- Beelden: `public/assets/images/`.

Talen gebruiken voorlopig een centrale dictionary met `?lang=en` en `?lang=ru`. Zodra aparte statische routes worden uitgerold, kunnen de hreflang-links worden omgezet naar `/en/` en `/ru/`.
