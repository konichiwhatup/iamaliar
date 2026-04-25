import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Contact — IAMALIAR",
  description: "作品についての問い合わせ・オーダーはLINEから。",
};

export default function ContactPage() {
  return <ContactClient />;
}
