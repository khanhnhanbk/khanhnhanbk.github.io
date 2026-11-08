// Portfolio tĩnh: Astro + Tailwind. Tiếng Việt ở "/", tiếng Anh ở "/en/".
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://khanhnhanbk.github.io',
  trailingSlash: 'ignore',
  vite: { plugins: [tailwindcss()] },
});
