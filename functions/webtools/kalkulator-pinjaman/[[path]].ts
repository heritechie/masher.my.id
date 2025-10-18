/// <reference types="@cloudflare/workers-types" />

const TARGET_ORIGIN = 'https://kalkulator-pinjaman.pages.dev/';

export const onRequest: PagesFunction = async ({ request }) => {
	const incomingUrl = new URL(request.url);
	const pathSuffix = incomingUrl.pathname.replace(/^\/webtools\/kalkulator-pinjaman\/?/, '');
	const targetUrl = new URL(pathSuffix, TARGET_ORIGIN);
	targetUrl.search = incomingUrl.search;

	const headers = new Headers(request.headers);
	// Remove hop-by-hop headers that should not be forwarded.
	headers.delete('host');
	headers.delete('cf-connecting-ip');
	headers.delete('cf-ipcountry');

	const method = request.method.toUpperCase();
	let body: BodyInit | undefined;

	if (method !== 'GET' && method !== 'HEAD') {
		const clone = request.clone();
		const buffer = await clone.arrayBuffer();
		body = buffer;
	}

	const proxiedRequest = new Request(targetUrl.toString(), {
		method,
		headers,
		body,
		redirect: 'manual',
	});

	const response = await fetch(proxiedRequest);

	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers: response.headers,
	});
};
