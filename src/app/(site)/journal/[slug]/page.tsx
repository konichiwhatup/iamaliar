export const runtime = "edge";
export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getJournalBySlug } from "@/lib/queries";
import { mockJournals } from "@/data/mock-products";
import JournalDetailClient from "./JournalDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

async function loadJournal(slug: string) {
  const fromSanity = await getJournalBySlug(slug);
  if (fromSanity) return fromSanity;
  // Sanity に該当記事が無ければデモ記事をフォールバックで表示
  return mockJournals.find((j) => j.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await loadJournal(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Journal — IAMALIAR`,
    description: post.excerpt,
  };
}

export default async function JournalDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = await loadJournal(slug);
  if (!post) notFound();

  return <JournalDetailClient post={post} />;
}
