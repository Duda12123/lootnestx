import "server-only"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface Product {
  slug: string
  title: string
  tagline: string
  tagline_zh?: string
  description: string
  description_zh?: string
  price: string
  image: string
  video?: string
  category: string
  buyUrl: string
  rating: number
  pros: string[]
  pros_zh?: string[]
  cons: string[]
  cons_zh?: string[]
  verdict: string
  verdict_zh?: string
  date: string
  featured?: boolean
  /** Raw markdown body — use a markdown renderer in the component */
  content: string
}

const PRODUCTS_DIR = path.join(process.cwd(), "content", "products")

function readAllProducts(): Product[] {
  if (!fs.existsSync(PRODUCTS_DIR)) return []

  const files = fs
    .readdirSync(PRODUCTS_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))

  return files
    .map((filename) => {
      const filePath = path.join(PRODUCTS_DIR, filename)
      const raw = fs.readFileSync(filePath, "utf-8")
      const { data, content } = matter(raw)

      // Validate required fields
      const required = ["title", "slug", "tagline", "description", "price", "category", "buyUrl", "date"]
      for (const key of required) {
        if (!(key in data)) {
          console.warn(`⚠ ${filename}: missing required field "${key}", skipping`)
          return null
        }
      }

      return {
        ...data,
        // Defaults
        image: data.image || `/images/products/placeholder.svg`,
        rating: typeof data.rating === "number" ? data.rating : 4.0,
        pros: Array.isArray(data.pros) ? data.pros : [],
        cons: Array.isArray(data.cons) ? data.cons : [],
        verdict: data.verdict || data.description,
        content,
      } as Product
    })
    .filter((p): p is Product => p !== null)
    // Sort by date descending (newest first)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// Cache products in memory (only re-read on dev server restart)
let _cache: Product[] | null = null

function _clearCache() {
  _cache = null
}

export function getProducts(): Product[] {
  // In production build, read once
  if (_cache) return _cache
  _cache = readAllProducts()
  return _cache
}

export function getFeaturedProducts(): Product[] {
  return getProducts().filter((p) => p.featured)
}

export function getProductBySlug(slug: string): Product | undefined {
  return getProducts().find((p) => p.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  const normalised = category.replace(/-/g, " ").toLowerCase()
  return getProducts().filter((p) => p.category.toLowerCase() === normalised)
}

export function getCategories(): string[] {
  return [...new Set(getProducts().map((p) => p.category))]
}

// Helper: get localized string
export function localStr(
  product: Product,
  field: "tagline" | "description" | "verdict",
  locale: string
): string {
  if (locale === "zh") {
    const key = `${field}_zh` as keyof Product
    const val = product[key] as string | undefined
    if (val) return val
  }
  return product[field]
}

// Helper: get localized array
export function localArr(
  product: Product,
  field: "pros" | "cons",
  locale: string
): string[] {
  if (locale === "zh") {
    const key = `${field}_zh` as keyof Product
    const arr = product[key] as string[] | undefined
    if (arr && arr.length > 0) return arr
  }
  return product[field] as string[]
}