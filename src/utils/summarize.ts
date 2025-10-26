// src/utils/summarize.ts
/**
 * Safe extractor: jika argumen bukan string, coba ambil property yang umum
 * (raw, rawContent, content, body). Jika tetap bukan string -> return ''.
 */
function extractRaw(input: unknown): string {
  if (!input && input !== "") return "";
  if (typeof input === "string") return input;

  try {
    // common fields produced by various MD/MDX loaders
    const obj = input as any;
    if (typeof obj.raw === "string" && obj.raw.trim()) return obj.raw;
    if (typeof obj.rawContent === "string" && obj.rawContent.trim())
      return obj.rawContent;
    if (typeof obj.content === "string" && obj.content.trim())
      return obj.content;
    if (typeof obj.body === "string" && obj.body.trim()) return obj.body;
    // some setups put markdown source on default property (rare)
    if (obj.default && typeof obj.default === "string" && obj.default.trim())
      return obj.default;
  } catch (e) {
    // ignore and fallback to empty
  }
  return "";
}

export function summarizeFromMarkdown(markdownInput: unknown, maxChars = 150) {
  const markdown = extractRaw(markdownInput);
  if (!markdown) return "";

  const normalized = markdown.replace(/\r\n/g, "\n");
  const paragraphs = normalized
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  // Ambil paragraf pertama yang bukan heading atau blockquote
  const candidate =
    paragraphs.find((p) => !/^(#{1,6}\s)|^>/.test(p)) || paragraphs[0] || "";

  const plain = candidate
    .replace(/!\[.*?\]\(.*?\)/g, "") // gambar
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // link -> label
    .replace(/`{1,3}.*?`{1,3}/g, "") // inline code
    .replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, "$1") // emphasis
    .replace(/(^>+\s?)/gm, "") // blockquote >
    .replace(/(^#+\s?)/gm, "") // headings
    .replace(/\n/g, " ")
    .replace(/<\/?[^>]+(>|$)/g, "") // HTML tags
    .replace(/\s+/g, " ")
    .trim();

  if (plain.length <= maxChars) return plain;

  const truncated = plain.slice(0, maxChars).replace(/\s+\S*$/, "");
  return `${truncated}…`;
}
