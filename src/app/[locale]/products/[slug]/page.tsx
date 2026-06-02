import { getStaticT } from '@/lib/i18n-server'
import { notFound } from "next/navigation"
import { getProductBySlug, getProducts, localStr, localArr } from "@/lib/content"
import Link from "next/link"
import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { MarkdownContent } from "@/components/MarkdownContent"
import { ReadingProgress } from "@/components/ReadingProgress"
import { ProductSchema, BreadcrumbSchema } from "@/components/StructuredData"
import { ProductSidebar } from "./ProductSidebar"
import { RelatedProducts } from "./RelatedProducts"

interface Props {
  params: Promise<{ slug: string; locale: string }>
}

export async function generateStaticParams() {
  const params: { slug: string; locale: string }[] = []
  const allProducts = getProducts()
  for (const p of allProducts) {
    params.push({ slug: p.slug, locale: "en" })
    params.push({ slug: p.slug, locale: "zh" })
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}
  const tagline = localStr(product, "tagline", locale)
  return {
    title: `${product.title} Review — LootNest`,
    description: tagline,
    alternates: {
      canonical: `https://lootnestx.com/${locale}/products/${slug}`,
      languages: { en: `https://lootnestx.com/en/products/${slug}`, zh: `https://lootnestx.com/zh/products/${slug}` },
    },
    openGraph: {
      title: `${product.title} — LootNest Review`,
      description: tagline,
      type: "article",
      images: [product.image],
      url: `https://lootnestx.com/${locale}/products/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} — LootNest Review`,
      description: tagline,
      images: [product.image],
    },
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug, locale } = await params
  const product = getProductBySlug(slug)
  const t = getStaticT(locale, "product")
  const allProducts = getProducts()

  if (!product) notFound()

  const desc = localStr(product, "description", locale)
  const verdict = localStr(product, "verdict", locale)
  const pros = localArr(product, "pros", locale)
  const cons = localArr(product, "cons", locale)
  const tagline = localStr(product, "tagline", locale)
  const pageUrl = `https://lootnestx.com/${locale}/products/${slug}`

  // Related: same category, excluding current
  const related = allProducts
    .filter(p => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3)

  const breadcrumbItems = [
    { name: locale === "zh" ? "首页" : "Home", href: `/${locale}` },
    { name: product.category, href: `/${locale}/category/${product.category.toLowerCase().replace(/\s+/g, "-")}` },
    { name: product.title },
  ]

  return (
    <>
      {/* Schema.org */}
      <BreadcrumbSchema items={breadcrumbItems.map((b) => ({ name: b.name, url: b.href ? `https://lootnestx.com${b.href}` : `https://lootnestx.com/${locale}/products/${slug}` }))} />
      <ProductSchema title={product.title} description={tagline} image={product.image} rating={product.rating} price={product.price} url={pageUrl} date={product.date} pros={pros} cons={cons} />

      <ReadingProgress />

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <Breadcrumbs items={breadcrumbItems} />

        <article className="mt-6">
          {/* Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                {product.category}
              </span>
              <span className="text-xs text-muted-soft">{product.date}</span>
              <span className="text-xs text-muted-soft">·</span>
              <div className="flex items-center gap-1">
                <svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-semibold text-foreground">{product.rating}</span>
                <span className="text-xs text-muted-soft">/ 5.0</span>
              </div>
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {product.title}
            </h1>
            <p className="mt-3 text-lg text-muted">{tagline}</p>
          </header>

          {/* Featured Image */}
          <div className="mb-12 overflow-hidden rounded-2xl border border-card-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={product.image} alt={product.title} className="w-full object-cover" />
          </div>

          {/* Video */}
          {product.video && (
            <div className="mb-12 flex justify-center">
              <div className="overflow-hidden rounded-2xl border border-card-border max-w-sm w-full">
                <video
                  src={product.video}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full aspect-[3/4] object-contain bg-black"
                  poster={product.image}
                >
                  <track kind="captions" />
                </video>
              </div>
            </div>
          )}

          {/* Main content + sidebar */}
          <div className="grid gap-12 lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_320px]">
            {/* Main content */}
            <div className="min-w-0 space-y-10">
              <section>
                <h2 className="text-xl font-semibold mb-5">{t("theBreakdown")}</h2>
                <p className="text-muted leading-relaxed text-lg">{desc}</p>
              </section>

              {/* Rich markdown */}
              {product.content && (
                <section>
                  <MarkdownContent content={product.content} />
                </section>
              )}

              {/* Pros & Cons */}
              <section className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-green-500/15 bg-green-500/[0.04] p-6">
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-green-400 mb-4">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {t("pros")}
                  </h3>
                  <ul className="space-y-2.5">
                    {pros.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-muted">
                        <span className="mt-0.5 shrink-0 font-bold text-green-400">+</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-red-500/15 bg-red-500/[0.04] p-6">
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-red-400 mb-4">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {t("cons")}
                  </h3>
                  <ul className="space-y-2.5">
                    {cons.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-muted">
                        <span className="mt-0.5 shrink-0 font-bold text-red-400">−</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Verdict */}
              <section className="rounded-2xl border border-accent/10 bg-accent/3 p-6">
                <h3 className="flex items-center gap-2.5 text-lg font-semibold text-accent mb-3">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  {t("finalVerdict")}
                </h3>
                <p className="text-muted leading-relaxed">{verdict}</p>
              </section>
            </div>

            {/* Sidebar — client component for sticky */}
            <ProductSidebar product={product} />
          </div>

          {/* Related Products */}
          {related.length > 0 && (
            <section className="mt-20 border-t border-card-border pt-16">
              <h2 className="text-2xl font-bold tracking-tight mb-8">
                {locale === "zh" ? "更多同类产品" : "More in "}{product.category}
              </h2>
              <RelatedProducts products={related} locale={locale} />
            </section>
          )}
        </article>
      </div>
    </>
  )
}