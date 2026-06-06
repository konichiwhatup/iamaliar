export const runtime = "edge";
export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import { getNewsBySlug } from "@/lib/queries";
import NewsDetailClient from "./NewsDetailClient";

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getNewsBySlug(slug);
  if (!post) notFound();
  return <NewsDetailClient post={post} />;
}
