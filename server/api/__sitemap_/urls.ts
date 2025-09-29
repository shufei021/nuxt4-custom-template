// server/api/__sitemap__/urls.ts
import type { SitemapUrlInput } from "#sitemap/types";
import { list } from "../../data";

export default defineSitemapEventHandler(() => {
  return list.map((v) => {
    return {
      loc: `/posts/${v.id}`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 0.8,
      _sitemap: "pages",
    };
  }) satisfies SitemapUrlInput[];
});