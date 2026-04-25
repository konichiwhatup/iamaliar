export const runtime = "edge";

import type { Metadata } from "next";
import JournalListClient from "./JournalListClient";

export const metadata: Metadata = {
  title: "Journal — IAMALIAR",
  description: "A record of process, philosophy, and exhibitions.",
};

export default function JournalPage() {
  return <JournalListClient />;
}
