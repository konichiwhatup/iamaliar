export const runtime = "edge";
export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { getJournals } from "@/lib/queries";
import JournalListClient from "./JournalListClient";

export const metadata: Metadata = {
  title: "Journal — IAMALIAR",
  description: "A record of process, philosophy, and exhibitions.",
};

export default async function JournalPage() {
  const journals = await getJournals();
  return <JournalListClient journals={journals} />;
}
