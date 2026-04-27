export const runtime = "edge";
export const dynamic = "force-dynamic";

import { getHomeHero } from "@/lib/queries";
import HomeClient from "./HomeClient";

export default async function HomePage() {
  const hero = await getHomeHero();
  return <HomeClient hero={hero} />;
}
