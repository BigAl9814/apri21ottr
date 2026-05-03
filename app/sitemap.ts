import { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";
import { CITIES } from "@/lib/cities";
import { POSTS } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.plumr.ca";
  const now = new Date().toISOString();

  const static_pages = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/service-areas`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.7 },
  ];

  const service_pages = SERVICES.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const city_pages = CITIES.map((c) => ({
    url: `${base}/service-areas/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const service_city_pages = SERVICES.flatMap((s) =>
    CITIES.map((c) => ({
      url: `${base}/services/${s.slug}/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }))
  );

  const posts = POSTS.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: p.publishedAt ? new Date(p.publishedAt).toISOString() : now,
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [...static_pages, ...service_pages, ...city_pages, ...service_city_pages, ...posts];
}
