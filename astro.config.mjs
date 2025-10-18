import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
	site: 'https://heritechie.my.id',
	i18n: {
		defaultLocale: 'id',
		locales: ['id', 'en'],
	},
	vite: {
		plugins: [tailwind()],
	},
	adapter: cloudflare(),
});
