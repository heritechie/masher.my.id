/// <reference types="@cloudflare/workers-types" />

const PREFIX = "/webtools/kalkulator-pinjaman";
const ORIGIN = "https://kalkulator-pinjaman.pages.dev/";

const hopByHopHeaders = [
	"connection",
	"keep-alive",
	"proxy-authenticate",
	"proxy-authorization",
	"te",
	"trailers",
	"transfer-encoding",
	"upgrade",
	"host",
	"content-length",
	"cf-connecting-ip",
	"cf-ipcountry",
	"cf-ray",
	"cf-visitor",
] as const;

const ensurePrefixedPath = (path: string) => {
	if (path.startsWith(PREFIX)) return path;
	if (path.startsWith("/")) return `${PREFIX}${path}`;
	return `${PREFIX}/${path}`;
};

const rewriteHtml = (html: string) =>
	html
		.replace(
			/(href|src|action)\s*=\s*(['"])(\/(?!\/))/gi,
			(_, attr: string, quote: string, path: string) =>
				`${attr}=${quote}${ensurePrefixedPath(path)}`,
		)
		.replace(/url\(\s*(['"]?)\/(?!\/)/gi, (_match, quote: string) => `url(${quote}${PREFIX}/`);

const rewriteCss = (css: string) =>
	css
		.replace(/url\(\s*(['"]?)\/(?!\/)/gi, (_match, quote: string) => `url(${quote}${PREFIX}/`)
		.replace(
			/@import\s+(url\()?['"]\/(?!\/)/gi,
			(_match, maybeUrl: string | undefined) => `@import ${maybeUrl ?? ""}"${PREFIX}/`,
		);

export const onRequest: PagesFunction = async ({ request }) => {
	const incomingUrl = new URL(request.url);
	const suffix = incomingUrl.pathname.startsWith(PREFIX)
		? incomingUrl.pathname.slice(PREFIX.length).replace(/^\/+/, "")
		: incomingUrl.pathname.replace(/^\//, "");

	const targetUrl = new URL(suffix || "", ORIGIN);
	targetUrl.search = incomingUrl.search;

	const headers = new Headers(request.headers);
	hopByHopHeaders.forEach((header) => headers.delete(header));

	const method = request.method.toUpperCase();
	let body: BodyInit | undefined;

	if (method !== "GET" && method !== "HEAD") {
		const clone = request.clone();
		body = await clone.arrayBuffer();
	}

	const upstreamResponse = await fetch(targetUrl.toString(), {
		method,
		headers,
		body,
		redirect: "manual",
	});

	const responseHeaders = new Headers(upstreamResponse.headers);
	const location = responseHeaders.get("location");
	if (location) {
		try {
			const locationUrl = new URL(location, ORIGIN);
			if (location.startsWith("/") || locationUrl.origin === new URL(ORIGIN).origin) {
				const nextPath = `${locationUrl.pathname}${locationUrl.search}${locationUrl.hash}`;
				responseHeaders.set("location", ensurePrefixedPath(nextPath));
			}
		} catch {
			// Ignore unparsable location headers.
		}
	}

	const contentType = responseHeaders.get("content-type") ?? "";
	if (contentType.includes("text/html")) {
		const html = rewriteHtml(await upstreamResponse.text());
		responseHeaders.delete("content-length");
		responseHeaders.set("content-type", "text/html; charset=utf-8");
		responseHeaders.set("x-proxy-by", "cf-pages-functions");
		return new Response(html, {
			status: upstreamResponse.status,
			statusText: upstreamResponse.statusText,
			headers: responseHeaders,
		});
	}

	if (contentType.includes("text/css")) {
		const css = rewriteCss(await upstreamResponse.text());
		responseHeaders.delete("content-length");
		responseHeaders.set("content-type", "text/css; charset=utf-8");
		responseHeaders.set("x-proxy-by", "cf-pages-functions");
		return new Response(css, {
			status: upstreamResponse.status,
			statusText: upstreamResponse.statusText,
			headers: responseHeaders,
		});
	}

	return new Response(upstreamResponse.body, {
		status: upstreamResponse.status,
		statusText: upstreamResponse.statusText,
		headers: responseHeaders,
	});
};
