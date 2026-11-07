export const runtime = "edge";
export const dynamic = "force-dynamic";

import { getProducts } from "@/lib/queries";
import GalleryClient from "./GalleryClient";

export default async function GalleryPage() {
  const products = await getProducts();
  return <GalleryClient products={products} />;
}
