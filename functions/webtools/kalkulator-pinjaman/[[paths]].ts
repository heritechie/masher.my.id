export const onRequest: PagesFunction = async (ctx) => {
  const { request } = ctx;
  const url = new URL(request.url);

  // Ambil sisa path setelah prefix
  const subpath = url.pathname.replace(/^\/webtools\/kalkulator-pinjaman/, "");
  const target = new URL(
    subpath + url.search,
    "https://kalkulator-pinjaman.pages.dev"
  );

  // Teruskan method, headers, dan body (kecuali GET/HEAD)
  const init: RequestInit = {
    method: request.method,
    headers: new Headers(request.headers),
    body:
      request.method === "GET" || request.method === "HEAD"
        ? undefined
        : request.body,
    redirect: "manual",
  };

  const resp = await fetch(target.toString(), init);

  // Kembalikan response apa adanya (status, headers, body)
  return new Response(resp.body, {
    status: resp.status,
    statusText: resp.statusText,
    headers: resp.headers,
  });
};
