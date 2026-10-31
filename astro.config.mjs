import { defineConfig } from 'astro/config';

// SITE и BASE_PATH задаются при сборке.
// Демо на GitHub Pages: SITE=https://dogide2gis-cloud.github.io BASE_PATH=/sveti-site
// Боевой хостинг со своим доменом: SITE=https://ваш-домен.ru BASE_PATH=/
export default defineConfig({
  site: process.env.SITE || 'https://dogide2gis-cloud.github.io',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  build: { format: 'directory' }
});
