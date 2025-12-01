// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://anrg.in',
  markdown: {
    shikiConfig: {
      themes: {
        dark: 'everforest-dark',
        light: 'everforest-light'
      }
    }
  },

  vite: {
    plugins: [tailwindcss()]
  }
});