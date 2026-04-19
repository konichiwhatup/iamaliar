export const runtime = "edge";

import { getProducts } from "@/lib/queries";
import CollectionClient from "./CollectionClient";

export default async function CollectionPage() {
  const products = await getProducts();
  return <CollectionClient products={products} />;
}
