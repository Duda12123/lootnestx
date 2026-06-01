import { getStaticT } from '@/lib/i18n-server'
import { notFound } from "next/navigation"
import { getProductBySlug, getProducts, localStr, localArr } from "@/lib/content"
import Link from "next/link"
import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { DisqusComments } from "@/components/DisqusComments"
import { ShareButtons } from "@/components/ShareButtons"
import { AdSlot } from "@/components/AdSlot"
import { MarkdownContent } from "@/components/MarkdownContent"
import { ProductSchema, BreadcrumbSchema } from "@/components/StructuredData"

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

  if (!product) notFound()

  const desc = localStr(product, "description", locale)
  const verdict = localStr(product, "verdict", locale)
  const pros = localArr(product, "pros", locale)
  const cons = localArr(product, "cons", locale)
  const tagline = localStr(product, "tagline", locale)
  const pageUrl = `https://lootnestx.com/${locale}/products/${slug}`

  const breadcrumbItems = [
    { name: locale === "zh" ? "首页" : "Home", href: `/${locale}` },
    { name: product.category, href: `/${locale}/category/${product.category.toLowerCase().replace(/\s+/g, "-")}` },
    { name: product.title },
  ]

  return (
    <>
      {/* Schema.org Structured Data */}
      <BreadcrumbSchema items={breadcrumbItems.map((b) => ({ name: b.name, url: b.href ? `https://lootnestx.com${b.href}` : `https://lootnestx.com/${locale}/products/${slug}` }))} />
      <ProductSchema
        title={product.title}
        description={tagline}
        image={product.image}
        rating={product.rating}
        price={product.price}
        url={pageUrl}
        date={product.date}
        pros={pros}
        cons={cons}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        <article>
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                {product.category}
              </span>
              <span className="text-xs text-muted">{product.date}</span>
              <span className="text-xs text-muted">·</span>
              <div className="flex items-center gap-1">
                <svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-semibold text-foreground">{product.rating}</span>
              </div>
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{product.title}</h1>
            <p className="mt-3 text-lg text-muted">{tagline}</p>
          </header>

          <div className="mb-10 overflow-hidden rounded-2xl border border-card-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={product.image} alt={product.title} className="w-full object-cover" />
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">{t("theBreakdown")}</h2>
                <p className="text-muted leading-relaxed">{desc}</p>
              </section>

              {/* Rich markdown review body */}
              {product.content && (
                <section>
                  <MarkdownContent content={product.content} />
                </section>
              )}

              {/* In-content Ad Slot */}
              <AdSlot type="in-content" />

              <section className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-green-400 mb-3">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {t("pros")}
                  </h3>
                  <ul className="space-y-2">
                    {pros.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted">
                        <span className="mt-0.5 text-green-400">+</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-red-400 mb-3">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {t("cons")}
                  </h3>
                  <ul className="space-y-2">
                    {cons.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted">
                        <span className="mt-0.5 text-red-400">-</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="rounded-2xl border border-accent/20 bg-accent/5 p-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-accent mb-3">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  {t("finalVerdict")}
                </h3>
                <p className="text-muted leading-relaxed">{verdict}</p>
              </section>

              {/* Share Buttons */}
              <div className="border-t border-card-border pt-6">
                <ShareButtons title={product.title} url={pageUrl} />
              </div>

              {/* Disqus Comments */}
              <DisqusComments slug={product.slug} title={product.title} url={pageUrl} />
            </div>

            <aside className="space-y-6">
              {/* Sidebar Ad */}
              <AdSlot type="sidebar" />

              <div className="space-y-4 rounded-2xl border border-card-border bg-card-bg p-6">
                <div className="text-center">
                  <p className="text-sm text-muted">{t("price")}</p>
                  <p className="text-3xl font-bold text-accent">{product.price}</p>
                </div>

                <div className="space-y-3 border-t border-card-border pt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted">{t("category")}</span>
                    <span className="font-medium">{product.category}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted">{t("rating")}</span>
                    <span className="font-medium">{product.rating} / 5.0</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted">{t("published")}</span>
                    <span className="font-medium">{product.date}</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </article>
      </div>
    </>
  )
}