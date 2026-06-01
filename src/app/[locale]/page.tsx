import { getProducts, getCategories } from "@/lib/content"
import { HomeContent } from "./HomeContent"

export default function Home() {
  const products = getProducts()
  const categories = getCategories()
  return <HomeContent products={products} categories={categories} />
}