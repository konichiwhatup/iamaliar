import { getClient } from './sanity'
import type { Product, JournalPost } from '@/types/product'

// 開発環境では fetch キャッシュを完全に無効化(Studio での変更を即時反映)
// 本番では Next.js のデフォルト挙動に任せる
function cacheOpt() {
  if (process.env.NODE_ENV === 'production') return undefined
  return { cache: 'no-store' as const, next: { revalidate: 0 } }
}

// ── 型変換ヘルパー ────────────────────────────────────────────
function toImageUrl(image: any): string {
  if (!image?.asset?._ref) return ''
  const ref = image.asset._ref as string
  const [, id, dimensions, format] = ref.split('-')
  return `https://cdn.sanity.io/images/22x23c52/productionenabled/${id}-${dimensions}.${format}`
}

function toProduct(doc: any): Product {
  return {
    id: doc._id,
    slug: doc.slug?.current ?? '',
    status: doc.status,
    category: doc.category,
    title: doc.title,
    description: doc.description ?? '',
    story: doc.story,
    material: doc.material,
    price: doc.price ?? 0,
    sizes: doc.sizes ?? [],
    featuredImage: toImageUrl(doc.featuredImage),
    gallery: (doc.gallery ?? []).map(toImageUrl),
    publishedAt: doc.publishedAt ?? doc._createdAt,
  }
}

function toJournal(doc: any): JournalPost {
  const bodyText = (doc.body ?? [])
    .filter((b: any) => b._type === 'block')
    .map((b: any) => b.children?.map((c: any) => c.text).join('') ?? '')
    .join('\n\n')

  return {
    id: doc._id,
    slug: doc.slug?.current ?? '',
    title: doc.title,
    excerpt: doc.excerpt,
    category: doc.category,
    tags: doc.tags ?? [],
    coverImage: doc.coverImage ? toImageUrl(doc.coverImage) : undefined,
    body: bodyText,
    relatedProducts: (doc.relatedProducts ?? []).map((p: any) => p._id),
    author: doc.author,
    publishedAt: doc.publishedAt ?? doc._createdAt,
    updatedAt: doc._updatedAt,
  }
}

// ── Products ────────────────────────────────────────────────
export async function getProducts(): Promise<Product[]> {
  try {
    const c = await getClient()
    const docs = await c.fetch(
      `*[_type == "product"] | order(publishedAt desc)`,
      {},
      cacheOpt(),
    )
    return docs.map(toProduct)
  } catch {
    return []
  }
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  try {
    const c = await getClient()
    const doc = await c.fetch(
      `*[_type == "product" && slug.current == $slug][0]`,
      { slug },
      cacheOpt(),
    )
    return doc ? toProduct(doc) : undefined
  } catch {
    return undefined
  }
}

export async function getRelatedProducts(product: Product): Promise<Product[]> {
  try {
    const c = await getClient()
    const docs = await c.fetch(
      `*[_type == "product" && category == $category && _id != $id] | order(publishedAt desc)[0...3]`,
      { category: product.category, id: product.id },
      cacheOpt(),
    )
    return docs.map(toProduct)
  } catch {
    return []
  }
}

// ── Journals ────────────────────────────────────────────────
export async function getJournals(): Promise<JournalPost[]> {
  try {
    const c = await getClient()
    const docs = await c.fetch(`*[_type == "journal"] | order(publishedAt desc)`)
    return docs.map(toJournal)
  } catch {
    return []
  }
}

export async function getJournalBySlug(slug: string): Promise<JournalPost | undefined> {
  try {
    const c = await getClient()
    const doc = await c.fetch(`*[_type == "journal" && slug.current == $slug][0]`, { slug })
    return doc ? toJournal(doc) : undefined
  } catch {
    return undefined
  }
}
