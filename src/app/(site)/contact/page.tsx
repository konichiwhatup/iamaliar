import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Contact — IAMALIAR",
  description: "For inquiries about works and orders, please reach out via LINE.",
};

export default function ContactPage() {
  return <ContactClient />;
}
