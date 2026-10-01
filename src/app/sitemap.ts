import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.applaoverseas.com";
  return ["", "/about", "/wovica", "/products", "/bedsheets", "/manufacturing", "/export", "/quality", "/certifications", "/quote", "/gallery", "/contact"].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
  }));
}
