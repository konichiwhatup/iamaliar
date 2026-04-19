export type ProductStatus = "active" | "sold" | "archived" | "made_to_order";
export type ProductCategory = "pants" | "jacket" | "shirt" | "other";

export type Measurement = {
  waist?: number;
  rise?: number;
  inseam?: number;
  thigh?: number;
  hem?: number;
  shoulder?: number;
  chest?: number;
  sleeve?: number;
  length?: number;
};

export type SizeInfo = {
  label: string;
  measurements: Measurement;
  stock: number;
  sku?: string;
};

export type DetailShot = {
  image: string;
  caption?: string;
  focusType?: "stitch" | "patchwork" | "fabric" | "distress" | "silhouette" | "other";
};

export type Product = {
  id: string;
  slug: string;
  status: ProductStatus;
  title: string;
  artworkTitle?: string;
  subtitle?: string;
  description: string;
  story?: string;
  conceptNote?: string;
  category: ProductCategory;
  tags: string[];
  baseMaterial?: string;
  materialDetails?: string[];
  craftsmanship?: string[];
  eraSource?: string;
  sourceBrand?: string;
  price: number;
  compareAtPrice?: number;
  currency: "JPY";
  sizes: SizeInfo[];
  availabilityText?: string;
  madeToOrder?: boolean;
  leadTime?: string;
  featuredImage: string;
  gallery: string[];
  detailShots: DetailShot[];
  lookbookReferences?: string[];
  journalReferences?: string[];
  publishedAt: string;
  updatedAt: string;
};

export type Lookbook = {
  id: string;
  slug: string;
  title: string;
  season?: string;
  theme?: string;
  description?: string;
  coverImage: string;
  images: Array<{
    image: string;
    caption?: string;
    linkedProducts?: string[];
  }>;
  publishedAt: string;
};

export type JournalPost = {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  category: "process" | "concept" | "archive" | "exhibition" | "note";
  tags: string[];
  coverImage?: string;
  body: string;
  relatedProducts?: string[];
  relatedLookbooks?: string[];
  author?: string;
  publishedAt: string;
  updatedAt?: string;
};
