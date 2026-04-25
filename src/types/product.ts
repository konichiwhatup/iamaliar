export type ProductStatus = "active" | "sold" | "archived" | "made_to_order";
export type ProductCategory = "pants" | "jacket" | "shirt" | "other";

export type Product = {
  id: string;
  slug: string;
  status: ProductStatus;
  category: ProductCategory;
  title: string;
  description: string;
  story?: string;
  material?: string;
  price: number;
  sizes: string[];
  featuredImage: string;
  gallery: string[];
  publishedAt?: string;
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
