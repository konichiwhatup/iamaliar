export const runtime = "edge";
export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { getJournals } from "@/lib/queries";
import { mockJournals } from "@/data/mock-products";
import JournalListClient from "./JournalListClient";

export const metadata: Metadata = {
  title: "Journal — IAMALIAR",
  description: "A record of process, philosophy, and exhibitions.",
};

export default async function JournalPage() {
  const journals = await getJournals();
  // Sanity にまだ記事が無い場合はデモ記事を表示
  return <JournalListClient journals={journals.length ? journals : mockJournals} />;
}
