import type { Product, Lookbook, JournalPost } from "@/types/product";

export const mockProducts: Product[] = [
  {
    id: "p001",
    slug: "reconstructed-levis-501-indigo",
    status: "active",
    title: "Reconstructed 501",
    artworkTitle: "夜の海、沈みかけた船",
    subtitle: "Levi's 501 再構築",
    description:
      "90年代のLevi's 501を素材として、ウエスト部分に刺し子技法を施した一点物。着ることへの問いを、布の上に刻む。",
    story:
      "フリーマーケットで出会ったこの一本は、誰かの記憶を宿していた。色褪せたインディゴ、擦り切れたポケット。それを壊すのではなく、新たな層を重ねることを選んだ。刺し子のステッチは、過去と現在が交わる縫い目だ。",
    conceptNote:
      "着るのか、飾るのか。その問いに答えを出さないこと自体が、このブランドの態度である。",
    category: "pants",
    tags: ["denim", "reconstructed", "sashiko", "indigo", "one-of-a-kind"],
    baseMaterial: "Levi's 501 (1994年製)",
    materialDetails: ["デニム 100%", "刺し子糸: 綿 100%"],
    craftsmanship: ["刺し子", "ウエスト再構築", "裾カット"],
    eraSource: "1990s",
    sourceBrand: "Levi's",
    price: 42000,
    currency: "JPY",
    sizes: [
      {
        label: "W30 L30",
        measurements: { waist: 78, rise: 28, inseam: 76, thigh: 28, hem: 16 },
        stock: 1,
      },
    ],
    madeToOrder: false,
    featuredImage: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=90",
      "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=800&q=90",
      "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=800&q=90",
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800&q=90",
    ],
    detailShots: [
      {
        image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=90",
        caption: "刺し子ステッチ詳細",
        focusType: "stitch",
      },
      {
        image: "https://images.unsplash.com/photo-1600185652960-a3e7fc3bff47?w=600&q=90",
        caption: "素材感・インディゴの退色",
        focusType: "fabric",
      },
    ],
    publishedAt: "2025-03-01",
    updatedAt: "2025-03-01",
  },
  {
    id: "p002",
    slug: "patchwork-jacket-nostalgia",
    status: "active",
    title: "Patchwork Field Jacket",
    artworkTitle: "記憶の縫い合わせ",
    subtitle: "パッチワーク再構築ジャケット",
    description:
      "3着の古着ジャケットを解体し、再縫製した一点物。異なる時代の布が、ひとつの服として存在する。",
    story:
      "解体するとき、服が持つ時間の密度を感じた。パッチワークは破壊ではなく、翻訳だ。",
    category: "jacket",
    tags: ["patchwork", "reconstructed", "jacket", "one-of-a-kind"],
    baseMaterial: "複数古着ジャケット",
    materialDetails: ["コットン 80%", "ポリエステル 20%"],
    craftsmanship: ["解体縫製", "パッチワーク", "補強ステッチ"],
    eraSource: "1980s-1990s",
    price: 68000,
    currency: "JPY",
    sizes: [
      {
        label: "M相当",
        measurements: { shoulder: 46, chest: 102, sleeve: 62, length: 72 },
        stock: 1,
      },
    ],
    featuredImage: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=90",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=90",
      "https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=800&q=90",
    ],
    detailShots: [
      {
        image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=90",
        caption: "パッチワーク縫製部",
        focusType: "patchwork",
      },
    ],
    publishedAt: "2025-02-15",
    updatedAt: "2025-02-15",
  },
  {
    id: "p003",
    slug: "distressed-wide-denim-ocean",
    status: "sold",
    title: "Distressed Wide Denim",
    artworkTitle: "海岸線の記憶",
    subtitle: "ダメージ加工ワイドデニム",
    description:
      "波に洗われた石のように、時間をかけてダメージを入れた一点物。既に誰かの元へ旅立った。",
    category: "pants",
    tags: ["denim", "distressed", "wide", "sold"],
    price: 38000,
    currency: "JPY",
    sizes: [
      {
        label: "W32 L28",
        measurements: { waist: 82, rise: 30, inseam: 71, thigh: 32 },
        stock: 0,
      },
    ],
    featuredImage: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=800&q=90",
    gallery: ["https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=800&q=90"],
    detailShots: [],
    publishedAt: "2025-01-10",
    updatedAt: "2025-01-20",
  },
  {
    id: "p004",
    slug: "sashiko-shirt-reconstruction",
    status: "active",
    title: "Sashiko Work Shirt",
    artworkTitle: "職人の手",
    subtitle: "刺し子ワークシャツ",
    description:
      "古いワークシャツに日本伝統の刺し子を施した。作業着として生まれた服が、作品になる瞬間。",
    story: "刺し子は修繕の技術から生まれた。壊れたものを直す行為が、装飾へと昇華された歴史。それをもう一度、現代の服に重ねる。",
    category: "shirt",
    tags: ["sashiko", "workwear", "japanese", "reconstructed"],
    baseMaterial: "ビンテージワークシャツ",
    materialDetails: ["コットン 100%"],
    craftsmanship: ["刺し子", "補修"],
    price: 52000,
    currency: "JPY",
    sizes: [
      {
        label: "L相当",
        measurements: { shoulder: 48, chest: 108, sleeve: 64, length: 74 },
        stock: 1,
      },
    ],
    madeToOrder: true,
    leadTime: "4〜6週間",
    featuredImage: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=90",
      "https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e?w=800&q=90",
    ],
    detailShots: [
      {
        image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=90",
        caption: "刺し子パターン",
        focusType: "stitch",
      },
    ],
    publishedAt: "2025-03-10",
    updatedAt: "2025-03-10",
  },
  {
    id: "p005",
    slug: "indigo-reconstructed-trousers",
    status: "made_to_order",
    title: "Indigo Reconstructed Trousers",
    artworkTitle: "藍染の哲学",
    subtitle: "インディゴ再構築トラウザーズ",
    description: "複数のデニム素材を組み合わせた再構築パンツ。インディゴの深みが服の思想を語る。",
    category: "pants",
    tags: ["indigo", "reconstructed", "trousers", "made-to-order"],
    price: 56000,
    currency: "JPY",
    madeToOrder: true,
    leadTime: "6〜8週間",
    sizes: [
      { label: "W28", measurements: { waist: 72 }, stock: 0 },
      { label: "W30", measurements: { waist: 78 }, stock: 0 },
      { label: "W32", measurements: { waist: 83 }, stock: 0 },
    ],
    featuredImage: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=90",
    gallery: ["https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=90"],
    detailShots: [],
    publishedAt: "2025-03-12",
    updatedAt: "2025-03-12",
  },
  {
    id: "p006",
    slug: "archive-oversized-coat",
    status: "archived",
    title: "Oversized Reconstruction Coat",
    artworkTitle: "廃墟の美",
    subtitle: "オーバーサイズ再構築コート",
    description: "解体したコートを再構成。着用者の身体を包む空間ごと設計した一点物。（アーカイブ）",
    category: "other",
    tags: ["coat", "oversized", "archived"],
    price: 85000,
    currency: "JPY",
    sizes: [{ label: "Free", measurements: {}, stock: 0 }],
    featuredImage: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=90",
    gallery: ["https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=90"],
    detailShots: [],
    publishedAt: "2024-11-01",
    updatedAt: "2024-12-01",
  },
];

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
