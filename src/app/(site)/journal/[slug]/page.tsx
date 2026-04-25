export const runtime = "edge";

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getJournalBySlug } from "@/data/mock-products";
import JournalDetailClient from "./JournalDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getJournalBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Journal — IAMALIAR`,
    description: post.excerpt,
  };
}

export default async function JournalDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getJournalBySlug(slug);
  if (!post) notFound();

  return <JournalDetailClient post={post} />;
}
