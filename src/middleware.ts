import { defineMiddleware } from 'astro/middleware';

const TARGET_ORIGIN = 'https://kalkulator-pinjaman.pages.dev/';
const BASE_PATH = '/webtools/kalkulator-pinjaman';

export const onRequest = defineMiddleware(async (context, next) => {
	const { request, url } = context;

	if (!url.pathname.startsWith(BASE_PATH)) {
		return next();
	}

	const suffix = url.pathname.slice(BASE_PATH.length).replace(/^\/+/, '');
	const targetUrl = new URL(suffix, TARGET_ORIGIN);
	targetUrl.search = url.search;

	const headers = new Headers(request.headers);
	headers.delete('host');
	headers.delete('cf-connecting-ip');
	headers.delete('cf-ipcountry');

	const method = request.method.toUpperCase();
	let body: BodyInit | undefined;

	if (method !== 'GET' && method !== 'HEAD') {
		const clone = request.clone();
		body = await clone.arrayBuffer();
	}

	const proxiedResponse = await fetch(targetUrl.toString(), {
		method,
		headers,
		body,
		redirect: 'manual',
	});

	return proxiedResponse;
});
