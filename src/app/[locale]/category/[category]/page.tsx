import { getStaticT } from '@/lib/i18n-server'
import { notFound } from "next/navigation"
import { products, getProductsByCategory } from "@/lib/products"
import { ProductCard } from "@/components/ProductCard"
import Link from "next/link"
import type { Metadata } from "next"

interface Props {
  params: Promise<{ category: string; locale: string }>
}

export async function generateStaticParams() {
  const cats = [...new Set(products.map((p) => p.category))]
  const params: { category: string; locale: string }[] = []
  for (const c of cats) {
    for (const l of ["en", "zh"]) {
      params.push({ category: c.toLowerCase().replace(/\s+/g, "-"), locale: l })
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, locale } = await params
  const t = getStaticT(locale, "meta")
  const catName = category.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())
  return {
    title: `${catName} — ${t("title")}`,
    description: `${t("description").split(".")[0]} — Browse ${catName} reviews.`,
    alternates: {
      canonical: `https://lootnestx.com/${locale}/category/${category}`,
    },
  }
}

export default async function CategoryPage({ params }: Props) {
  const { category, locale } = await params
  const t = getStaticT(locale, "breadcrumb")
  const th = getStaticT(locale, "home")

  const catProducts = getProductsByCategory(category)
  if (catProducts.length === 0) notFound()

  const catName = category.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-8 flex items-center gap-2 text-sm text-muted">
        <Link href={`/${locale}`} className="hover:text-foreground transition-colors">{t("home")}</Link>
        <span>/</span>
        <span className="text-foreground">{catName}</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight mb-2">{catName}</h1>
      <p className="text-muted mb-8">
        {locale === "zh" ? `${catName} 相关评测` : `Reviews of ${catName.toLowerCase()} products`}
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {catProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  )
}