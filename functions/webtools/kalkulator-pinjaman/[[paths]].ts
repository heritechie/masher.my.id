const TARGET_ORIGIN = "https://kalkulator-pinjaman.pages.dev/";
const BASE_PATH = "/webtools/kalkulator-pinjaman";

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
  "cf-visitor"
] as const;

export const onRequest: PagesFunction = async ({ request }) => {
  const incomingUrl = new URL(request.url);
  const suffix = incomingUrl.pathname.startsWith(BASE_PATH)
    ? incomingUrl.pathname.slice(BASE_PATH.length).replace(/^\/+/, "")
    : "";
  const targetUrl = new URL(suffix || "/", TARGET_ORIGIN);
  targetUrl.search = incomingUrl.search;

  const headers = new Headers(request.headers);
  hopByHopHeaders.forEach((header) => headers.delete(header));

  const method = request.method.toUpperCase();
  let body: BodyInit | undefined;

  if (method !== "GET" && method !== "HEAD") {
    const clone = request.clone();
    body = await clone.arrayBuffer();
  }

  const proxiedRequest = new Request(targetUrl.toString(), {
    method,
    headers,
    body,
    redirect: "manual"
  });

  const proxiedResponse = await fetch(proxiedRequest);
  const responseHeaders = new Headers(proxiedResponse.headers);

  return new Response(proxiedResponse.body, {
    status: proxiedResponse.status,
    statusText: proxiedResponse.statusText,
    headers: responseHeaders
  });
};
