"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import type { Product } from "@/lib/content"

export function RelatedProducts({ products, locale }: { products: Product[]; locale: string }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product, idx) => (
        <motion.div
          key={product.slug}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: idx * 0.08 }}
        >
          <Link
            href={`/${locale}/products/${product.slug}`}
            className="group block overflow-hidden rounded-xl border border-card-border bg-card-bg transition-all duration-300 hover:border-accent/15"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-card-border/50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <span className="absolute right-3 top-3 rounded-lg bg-accent px-2.5 py-1 text-xs font-bold text-black">
                {product.price}
              </span>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-1 mb-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`h-3 w-3 ${i < Math.round(product.rating) ? "text-accent" : "text-card-border"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-sm font-semibold leading-tight text-foreground transition-colors group-hover:text-accent">
                {product.title}
              </h3>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}