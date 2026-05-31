export function StructuredData({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Organization schema
export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LootNest",
    url: "https://lootnestx.com",
    logo: "https://lootnestx.com/favicon.ico",
    description: "Discovering and reviewing the coolest products from around the web. Honest reviews, real opinions.",
    sameAs: [
      "https://twitter.com/lootnestx",
      "https://instagram.com/lootnestx",
    ],
  }
  return <StructuredData data={data} />
}

// Breadcrumb schema
export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
  return <StructuredData data={data} />
}

// Product review schema
export function ProductSchema({
  title,
  description,
  image,
  rating,
  price,
  url,
  date,
  pros,
  cons,
}: {
  title: string
  description: string
  image: string
  rating: number
  price: string
  url: string
  date: string
  pros: string[]
  cons: string[]
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: title,
    description,
    image,
    url,
    offers: {
      "@type": "Offer",
      price: price.replace("$", ""),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating,
      bestRating: "5",
      reviewCount: 1,
    },
    review: {
      "@type": "Review",
      reviewBody: description,
      datePublished: date,
      author: {
        "@type": "Organization",
        name: "LootNest",
      },
      positiveNotes: {
        "@type": "ItemList",
        itemListElement: pros.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: p,
        })),
      },
      negativeNotes: {
        "@type": "ItemList",
        itemListElement: cons.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c,
        })),
      },
    },
  }
  return <StructuredData data={data} />
}