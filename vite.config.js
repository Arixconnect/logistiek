import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relatieve assets maken dezelfde build bruikbaar op Netlify, Vercel en GitHub Pages.
  base: './',
});
