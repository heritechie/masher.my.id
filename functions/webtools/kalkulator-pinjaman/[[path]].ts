/// <reference types="@cloudflare/workers-types" />

const TARGET_ORIGIN = 'https://kalkulator-pinjaman.pages.dev/';
const BASE_PATH = '/webtools/kalkulator-pinjaman';

const normalizeSuffix = (pathname: string, paramsPath?: string | string[]): string => {
	if (Array.isArray(paramsPath)) {
		return paramsPath.join('/');
	}
	if (typeof paramsPath === 'string' && paramsPath.length > 0) {
		return paramsPath;
	}
	if (pathname.startsWith(BASE_PATH)) {
		return pathname.slice(BASE_PATH.length).replace(/^\/+/, '');
	}
	return '';
};

export const onRequest: PagesFunction = async ({ request, params }) => {
	const incomingUrl = new URL(request.url);
	const suffix = normalizeSuffix(incomingUrl.pathname, params?.path);
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

	// Clone headers to detach from the original response
	const responseHeaders = new Headers(proxiedResponse.headers);
	responseHeaders.set('access-control-allow-origin', incomingUrl.origin);

	return new Response(proxiedResponse.body, {
		status: proxiedResponse.status,
		statusText: proxiedResponse.statusText,
		headers: responseHeaders,
	});
};
