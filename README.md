# Northride Logistics — onepage demo

Premium React/Vite-onepager voor een Nederlands transport- en logistiekbedrijf. `Northride Logistics` is een tijdelijke merknaam en kan samen met de contactgegevens worden vervangen zodra de definitieve huisstijl beschikbaar is.

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

De map `dist/` kan direct naar Netlify, Vercel of GitHub Pages. `base: './'` in `vite.config.js` houdt assets bruikbaar onder een GitHub Pages-subpad.

## Aanpassen

- Huisstijl, typografie, radii, schaduwen en spacing: `src/styles.css` onder `:root`.
- Teksten, telefoonnummers, diensten en placeholder-logo: `src/main.jsx`.
- SEO-title en meta description: `index.html`.
- Formulierkoppeling: zoek in `src/main.jsx` naar `KOPPELPUNT` en vervang de demo-`onSubmit` door Netlify Forms, Formspree, EmailJS of een eigen API.

De pagina bevat geen externe fotografie; de hero gebruikt een lichte, code-native logistieke visual. Daardoor blijft de eerste demo snel en rechtenvrij.
