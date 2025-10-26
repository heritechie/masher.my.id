import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://masher.my.id",
  i18n: {
    defaultLocale: "id",
    locales: ["id", "en"],
  },
  vite: {
    plugins: [tailwind()],
  },
  integrations: [mdx()],
});
