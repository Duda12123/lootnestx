#!/usr/bin/env node

/**
 * Quick review creator for LootNest
 * Usage: node scripts/new-review.js "My Product" kitchen
 *
 * Creates a  content/products/my-product.mdx  from the template,
 * pre-filling the slug, title, category, and today's date.
 */

const fs = require("fs")
const path = require("path")

const title = process.argv[2]
const category = process.argv[3] || "Kitchen"

if (!title) {
  console.log(`\n  Usage: node scripts/new-review.js "Product Name" [category]\n`)
  console.log("  Categories: Kitchen | Tech | Tools | Smart Home | Everyday Carry\n")
  console.log("  Example: node scripts/new-review.js \"Self-Stirring Mug\" Kitchen\n")
  process.exit(0)
}

const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, "")
  .replace(/\s+/g, "-")
  .replace(/-+/g, "-")
  .replace(/^-|-$/g, "")

const date = new Date().toISOString().slice(0, 10)
const image = `https://placehold.co/600x400/1a1a1a/f59e0b?text=${encodeURIComponent(title.replace(/\s+/g, "+"))}`

const template = `---
title: "${title}"
slug: "${slug}"
tagline: "One-line catchy tagline"
tagline_zh: "简短中文标语"
price: "$XX.XX"
image: "${image}"
category: "${category}"
buyUrl: "https://amazon.com/dp/XXXXX"
rating: 4.0
featured: false
date: "${date}"
pros:
  - "Pro point 1"
  - "Pro point 2"
  - "Pro point 3"
pros_zh:
  - "优点 1"
  - "优点 2"
  - "优点 3"
cons:
  - "Con point 1"
  - "Con point 2"
cons_zh:
  - "缺点 1"
  - "缺点 2"
verdict: "One-paragraph final verdict"
verdict_zh: "一段中文总结"
description: "Two-sentence product overview for SEO and previews"
description_zh: "两句话的产品概述，用于 SEO 和预览"
---

## Overview

Start writing your review here...

## First Impressions

What you noticed right away.

## What We Loved

- Best feature 1
- Best feature 2
- Best feature 3

## What Could Be Better

- Issue 1
- Issue 2

## Bottom Line

Who should buy this? Final verdict.
`

const outPath = path.join(process.cwd(), "content", "products", `${slug}.mdx`)

if (fs.existsSync(outPath)) {
  console.log(`\n  ⚠ File already exists: content/products/${slug}.mdx\n`)
  process.exit(1)
}

fs.writeFileSync(outPath, template)
console.log(`\n  ✅ Created content/products/${slug}.mdx\n`)
console.log(`  📝 Open this file and fill in the review content\n`)
console.log(`  🚀 Then run:  vercel deploy --prod\n`)