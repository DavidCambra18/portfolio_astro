// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  // output: 'server'
  site: 'https://davidcambra18.github.io/portfolio_astro/',
  outDir: './docs',
  base: '/portfolio_astro/',
});