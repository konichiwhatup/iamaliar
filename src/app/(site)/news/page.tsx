export const runtime = "edge";
export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { getNewsPosts } from "@/lib/queries";
import NewsListClient from "./NewsListClient";

export const metadata: Metadata = {
  title: "News — IAMALIAR",
  description: "New releases, events & announcements from IAMALIAR.",
};

export default async function NewsPage() {
  const posts = await getNewsPosts();
  return <NewsListClient posts={posts} />;
}
