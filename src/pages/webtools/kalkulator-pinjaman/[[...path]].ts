import type { APIRoute } from 'astro';

export const prerender = false;

const TARGET_ORIGIN = 'https://kalkulator-pinjaman.pages.dev/';
const BASE_PATH = '/webtools/kalkulator-pinjaman';

export const all: APIRoute = async ({ request, params }) => {
	const incomingUrl = new URL(request.url);

	const pathParam = params.path;
	const pathSegments = Array.isArray(pathParam)
		? pathParam
		: typeof pathParam === 'string' && pathParam.length > 0
			? [pathParam]
			: [];

	// Fallback to calculating suffix from pathname to ensure trailing slashes are preserved.
	const suffixFromParams = pathSegments.join('/');
	const suffixFromPathname = incomingUrl.pathname.startsWith(BASE_PATH)
		? incomingUrl.pathname.slice(BASE_PATH.length).replace(/^\/+/, '')
		: '';

	const suffix = suffixFromParams || suffixFromPathname;
	const targetUrl = new URL(suffix, TARGET_ORIGIN);
	targetUrl.search = incomingUrl.search;

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

	const proxiedRequest = new Request(targetUrl.toString(), {
		method,
		headers,
		body,
		redirect: 'manual',
	});

	const proxiedResponse = await fetch(proxiedRequest);
	const responseHeaders = new Headers(proxiedResponse.headers);

	return new Response(proxiedResponse.body, {
		status: proxiedResponse.status,
		statusText: proxiedResponse.statusText,
		headers: responseHeaders,
	});
};
