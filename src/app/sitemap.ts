import type { MetadataRoute } from "next"
import { getProducts } from "@/lib/content"

export default function sitemap(): MetadataRoute.Sitemap {
  const products = getProducts()
  const baseUrl = "https://lootnestx.com"
  const locales = ["en", "zh"]
  const categories = [...new Set(products.map((p) => p.category))]

  const staticPages = [
    "", "about", "contact", "submit", "privacy", "affiliate-disclosure",
    "terms", "dmca", "accessibility",
  ]

  const entries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    for (const page of staticPages) {
      entries.push({
        url: page ? `${baseUrl}/${locale}/${page}` : `${baseUrl}/${locale}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "daily" : "weekly",
        priority: page === "" ? 1.0 : 0.5,
      })
    }
    for (const cat of categories) {
      entries.push({
        url: `${baseUrl}/${locale}/category/${cat.toLowerCase().replace(/\s+/g, "-")}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      })
    }
    for (const p of products) {
      entries.push({
        url: `${baseUrl}/${locale}/products/${p.slug}`,
        lastModified: new Date(p.date),
        changeFrequency: "monthly",
        priority: 0.8,
      })
    }
  }

  return entries
}