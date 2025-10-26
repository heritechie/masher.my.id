import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const contents = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/contents" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.optional(z.string()),
    date: z.optional(z.coerce.date()),
    status: z.optional(z.enum(["draft", "published"])),
    tags: z.optional(z.array(z.string())),
    cover: z.optional(z.union([z.string(), z.any()])),
    thumb: z.optional(z.union([z.string(), z.any()])),
  }),
});

export const collections = { contents };
