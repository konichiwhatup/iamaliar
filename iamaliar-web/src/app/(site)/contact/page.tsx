"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const inquiryTypes = [
  { value: "product", label: "商品について" },
  { value: "custom_order", label: "オーダー相談" },
  { value: "styling", label: "スタイリング / 衣装提供" },
  { value: "exhibition", label: "展示 / コラボレーション" },
  { value: "other", label: "その他" },
] as const;

type InquiryType = (typeof inquiryTypes)[number]["value"];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "product" as InquiryType,
    message: "",
    preferredContact: "email" as "email" | "line",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="pt-24 md:pt-32 pb-20">
      <div className="container-site">
        <FadeIn>
          <div className="mb-16">
            <p className="text-xs tracking-[0.25em] uppercase text-[#9CA3AF] mb-3">IAMALIAR</p>
            <h1 className="font-serif text-4xl md:text-5xl text-[#111111] font-light">
              Order / Contact
            </h1>
            <p className="mt-4 text-sm text-[#6B7280] max-w-md leading-relaxed">
              作品のオーダー相談、スタイリング、展示・コラボレーションのご相談はこちらから。
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          {/* Form */}
          <div className="md:col-span-7">
            {submitted ? (
              <FadeIn>
                <div className="py-16 text-center">
                  <div className="w-12 h-12 border border-[#111111] flex items-center justify-center mx-auto mb-6">
                    <span className="text-xl">✓</span>
                  </div>
                  <h2 className="font-serif text-2xl text-[#111111] font-light mb-4">
                    お問い合わせありがとうございます
                  </h2>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    2〜3営業日以内にご連絡いたします。
                  </p>
                </div>
              </FadeIn>
            ) : (
              <FadeIn>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Inquiry Type */}
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-[#111111] mb-4">
                      お問い合わせ種別
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {inquiryTypes.map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() =>
                            setFormData((f) => ({ ...f, inquiryType: type.value }))
                          }
                          className={cn(
                            "text-xs tracking-[0.1em] px-4 py-2 border transition-colors",
                            formData.inquiryType === type.value
                              ? "bg-[#111111] text-white border-[#111111]"
                              : "text-[#6B7280] border-[#E5E2DC] hover:border-[#111111] hover:text-[#111111]"
                          )}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-[#111111] mb-2">
                      お名前 <span className="text-[#9CA3AF]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData((f) => ({ ...f, name: e.target.value }))}
                      className="w-full border-b border-[#E5E2DC] bg-transparent py-3 text-sm text-[#111111] outline-none focus:border-[#111111] transition-colors placeholder:text-[#D4D0C8]"
                      placeholder="山田 太郎"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-[#111111] mb-2">
                      Email <span className="text-[#9CA3AF]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData((f) => ({ ...f, email: e.target.value }))}
                      className="w-full border-b border-[#E5E2DC] bg-transparent py-3 text-sm text-[#111111] outline-none focus:border-[#111111] transition-colors placeholder:text-[#D4D0C8]"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-[#111111] mb-2">
                      メッセージ <span className="text-[#9CA3AF]">*</span>
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData((f) => ({ ...f, message: e.target.value }))}
                      className="w-full border border-[#E5E2DC] bg-transparent p-4 text-sm text-[#111111] outline-none focus:border-[#111111] transition-colors placeholder:text-[#D4D0C8] resize-none"
                      placeholder="ご質問やご要望をお書きください"
                    />
                  </div>

                  {/* Preferred Contact */}
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-[#111111] mb-3">
                      ご希望の連絡方法
                    </label>
                    <div className="flex gap-4">
                      {(["email", "line"] as const).map((method) => (
                        <button
                          key={method}
                          type="button"
                          onClick={() =>
                            setFormData((f) => ({ ...f, preferredContact: method }))
                          }
                          className={cn(
                            "text-xs tracking-[0.1em] uppercase px-4 py-2 border transition-colors",
                            formData.preferredContact === method
                              ? "bg-[#111111] text-white border-[#111111]"
                              : "text-[#6B7280] border-[#E5E2DC] hover:border-[#111111]"
                          )}
                        >
                          {method === "email" ? "Email" : "LINE"}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase bg-[#111111] text-white px-10 py-4 hover:bg-[#1B2A4A] transition-colors disabled:opacity-50"
                  >
                    {loading ? "送信中..." : "送信する"}
                    {!loading && <ArrowRight size={14} strokeWidth={1.5} />}
                  </button>
                </form>
              </FadeIn>
            )}
          </div>

          {/* Side Info */}
          <div className="md:col-span-5">
            <FadeIn delay={0.2}>
              <div className="space-y-10">
                {/* LINE */}
                <div className="border border-[#E5E2DC] p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageCircle size={18} strokeWidth={1.5} className="text-[#111111]" />
                    <h3 className="text-xs tracking-[0.2em] uppercase text-[#111111]">
                      LINE で相談
                    </h3>
                  </div>
                  <p className="text-xs text-[#6B7280] leading-relaxed mb-5">
                    お急ぎの方や、気軽に相談したい方はLINEからどうぞ。
                  </p>
                  <a
                    href="https://line.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[#111111] hover:opacity-60 transition-opacity link-underline"
                  >
                    LINE を開く
                    <ArrowRight size={12} strokeWidth={1.5} />
                  </a>
                </div>

                {/* Instagram */}
                <div>
                  <h3 className="text-xs tracking-[0.2em] uppercase text-[#111111] mb-3">
                    Instagram
                  </h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed mb-3">
                    作品の制作過程や新作情報はInstagramでも発信しています。
                  </p>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#9CA3AF] hover:text-[#111111] transition-colors tracking-wide link-underline"
                  >
                    @iamaliar
                  </a>
                </div>

                {/* Response time */}
                <div className="border-l-2 border-[#E5E2DC] pl-4">
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">
                    通常2〜3営業日以内にご返信いたします。<br />
                    オーダー相談の場合は、詳細をヒアリングさせていただきます。
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
