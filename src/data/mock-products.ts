import type { Product, Lookbook, JournalPost } from "@/types/product";

// ── CMS移行用テンプレート ────────────────────────────────────────────
// 以下のフォーマットで作品を追加してください。
// CMS（Sanity等）導入後はこのファイルごと置き換える想定。
//
// {
//   id: "p001",                          // ユニークID
//   slug: "作品のURL slug",               // /collection/[slug] に使用
//   status: "active",                    // "active" | "sold" | "made_to_order" | "archived"
//   title: "作品タイトル (英)",
//   artworkTitle: "作品タイトル (日)",
//   subtitle: "サブタイトル",
//   description: "説明文",
//   story: "制作ストーリー",              // optional
//   conceptNote: "コンセプトノート",      // optional
//   category: "pants",                   // "pants" | "jacket" | "shirt" | "other"
//   tags: ["tag1", "tag2"],
//   baseMaterial: "素材ベース",
//   materialDetails: ["コットン 100%"],
//   craftsmanship: ["手法1", "手法2"],
//   eraSource: "1990s",                  // optional
//   sourceBrand: "Levi's",               // optional
//   price: 42000,
//   currency: "JPY",
//   sizes: [
//     {
//       label: "W30 L30",
//       measurements: { waist: 78, rise: 28, inseam: 76, thigh: 28, hem: 16 },
//       stock: 1,
//     },
//   ],
//   madeToOrder: false,
//   leadTime: "4〜6週間",                // madeToOrder: true の場合
//   featuredImage: "/images/p001/main.jpg",
//   gallery: [
//     "/images/p001/main.jpg",
//     "/images/p001/02.jpg",
//   ],
//   detailShots: [
//     {
//       image: "/images/p001/detail-stitch.jpg",
//       caption: "キャプション",
//       focusType: "stitch",             // "stitch" | "fabric" | "patchwork" | etc.
//     },
//   ],
//   publishedAt: "2025-03-01",
//   updatedAt: "2025-03-01",
// }

export const mockProducts: Product[] = [];

export const mockLookbooks: Lookbook[] = [
  {
    id: "lb001",
    slug: "ss2025-between-fiction-reality",
    title: "Between Fiction and Reality",
    season: "SS2025",
    theme: "現実と虚構のあいだ",
    description:
      "海沿いの廃屋で撮影。服が背景と溶け合う瞬間を捉えた。着ているのか、飾られているのか。",
    coverImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=90",
    images: [
      {
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=90",
        caption: "夜明け前の海岸",
        linkedProducts: ["p001"],
      },
      {
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=90",
        caption: "廃屋の壁と服の対話",
        linkedProducts: ["p002"],
      },
      {
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=90",
        caption: "光と影の境界",
        linkedProducts: ["p004"],
      },
      {
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=90",
        caption: "素材が語る時間",
      },
    ],
    publishedAt: "2025-03-01",
  },
  {
    id: "lb002",
    slug: "fw2024-nostalgia-archive",
    title: "Nostalgia Archive",
    season: "FW2024",
    theme: "ノスタルジックアーカイブ",
    description: "過去の服の記憶を、現在の身体に纏わせる試み。",
    coverImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=90",
    images: [
      {
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=90",
        caption: "冬の光",
      },
      {
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=90",
        caption: "骨格と布",
        linkedProducts: ["p003"],
      },
    ],
    publishedAt: "2024-10-15",
  },
];

export const mockJournals: JournalPost[] = [
  {
    id: "j001",
    slug: "why-i-reconstruct-denim",
    title: "なぜデニムを再構築するのか",
    excerpt:
      "既製品に対する違和感から始まった。量産されたものが持つ、均質な美しさへの疑問。",
    category: "concept",
    tags: ["denim", "philosophy", "reconstruction"],
    coverImage: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=90",
    body: `既製品に対する違和感から始まった。

量産されたものが持つ、均質な美しさへの疑問。どこかで見たことのある形、誰でも着られる服。それが悪いわけではない。ただ、私にはそれが物足りなかった。

デニムを選んだのは偶然ではない。デニムは最も「普通」の象徴として、最も量産されてきた素材だ。Levi'sの501は、何百万本も作られた。その中の一本に、固有の物語を与えること。それがIAMALIARの始まりだった。

再構築とは破壊ではない。翻訳だ。`,
    relatedProducts: ["p001"],
    author: "IAMALIAR",
    publishedAt: "2025-03-05",
  },
  {
    id: "j002",
    slug: "sashiko-technique-and-philosophy",
    title: "刺し子という技法と思想",
    excerpt: "日本の伝統的な修繕技術が、現代の服にどう接続するか。",
    category: "process",
    tags: ["sashiko", "technique", "japanese-craft"],
    coverImage: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=90",
    body: `刺し子は本来、布を強化するための技術だった。

江戸時代、庶民は高価な布を大切に使うために、糸を幾重にも重ねてステッチを施した。それがいつしか、装飾的な美しさを持つようになった。

壊れたものを直す行為が、美に昇華された。

私がデニムに刺し子を施すとき、その歴史的な文脈を意識している。現代の量産品に、手仕事の時間を刻むこと。それは批評であり、敬意でもある。`,
    relatedProducts: ["p001", "p004"],
    author: "IAMALIAR",
    publishedAt: "2025-02-20",
  },
  {
    id: "j003",
    slug: "exhibition-notes-gallery-yokohama",
    title: "展示記録 — ギャラリー横浜",
    excerpt: "初めての展示で気づいたこと。服が空間と対話するとき。",
    category: "exhibition",
    tags: ["exhibition", "gallery", "record"],
    coverImage: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=90",
    body: `展示という形式を選んだのは、服をギャラリーの文脈に置きたかったからだ。

ハンガーに掛けられた服と、ガラスケースに入れられた絵画。どちらが「作品」で、どちらが「商品」なのか。

来場者の多くは服に触れず、しばらく眺めていた。それが正解だと思った。`,
    author: "IAMALIAR",
    publishedAt: "2025-01-30",
  },
  {
    id: "j004",
    slug: "the-value-of-one-piece",
    title: "一点物の価値について",
    excerpt: "売れた服がブランドの証拠になる。Soldを消してはいけない理由。",
    category: "note",
    tags: ["one-of-a-kind", "value", "philosophy"],
    coverImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=90",
    body: `一点物のブランドにとって、Soldになった作品は「終わり」ではない。

売れた服は、誰かの元で生き続ける。その事実がブランドの信頼になる。

だからこそ、Soldになった作品をアーカイブとして見せ続けることが重要だ。消えた作品が積み重なって、ブランドの世界観に厚みが生まれる。`,
    author: "IAMALIAR",
    publishedAt: "2025-01-15",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return mockProducts.find((p) => p.slug === slug);
}

export function getLookbookBySlug(slug: string): Lookbook | undefined {
  return mockLookbooks.find((l) => l.slug === slug);
}

export function getJournalBySlug(slug: string): JournalPost | undefined {
  return mockJournals.find((j) => j.slug === slug);
}

export function getRelatedProducts(product: Product): Product[] {
  return mockProducts
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);
}
