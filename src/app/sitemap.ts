import type { MetadataRoute } from "next";
import { mainNavLinks, siteConfig } from "@/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return mainNavLinks.map((link) => ({
    url: `${siteConfig.url}${link.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: link.href === "/" ? 1 : 0.7,
  }));
}
