import type { APIRoute } from 'astro';

export const prerender = false;

const TARGET_ORIGIN = 'https://kalkulator-pinjaman.pages.dev/';

export const all: APIRoute = async ({ request, params }) => {
	const incomingUrl = new URL(request.url);
	const capturedPath = params.path ?? '';
	const targetPath = capturedPath ? `${capturedPath.replace(/^\//, '')}` : '';
	const targetUrl = new URL(targetPath, TARGET_ORIGIN);
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

	const response = await fetch(proxiedRequest);

	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers: response.headers,
	});
};
