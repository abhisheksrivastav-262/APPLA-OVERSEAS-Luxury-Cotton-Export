import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.applaoverseas.com";
  return ["", "/about", "/products", "/manufacturing", "/export", "/quality", "/gallery", "/contact"].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
  }));
}
