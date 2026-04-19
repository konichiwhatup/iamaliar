"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    category: "商品・購入",
    items: [
      {
        q: "すべての商品は一点物ですか？",
        a: "はい、IAMALIARの作品はすべて一点物です。古着や既製品を素材として再構築しているため、同じものは存在しません。Made to Orderの場合は、ご要望に合わせてオーダーで制作いたします。",
      },
      {
        q: "Sold（売り切れ）の作品を購入することはできますか？",
        a: "Sold作品はすでに購入者のもとに届いています。同様のテーマや技法でのオーダー制作は可能ですので、ご相談ください。過去作品はアーカイブとして参照いただけます。",
      },
      {
        q: "サイズはどう確認すればよいですか？",
        a: "各商品ページに採寸を掲載しています。ご不明な点はContactフォームやLINEからお気軽にご質問ください。",
      },
    ],
  },
  {
    category: "オーダー・制作",
    items: [
      {
        q: "Made to Orderとは何ですか？",
        a: "Made to Orderは、オーダーを受けてから制作する形式です。サイズ、素材の好み、イメージなどをヒアリングした上で、一点物として制作します。",
      },
      {
        q: "オーダーの納期はどのくらいですか？",
        a: "制作物により異なりますが、通常4〜8週間が目安です。詳細はContactよりご相談ください。",
      },
      {
        q: "展示・スタイリング・コラボレーションの相談はできますか？",
        a: "はい、ぜひご相談ください。ギャラリー展示、スタイリング提供、ブランドコラボなど、幅広くお受けしています。",
      },
    ],
  },
  {
    category: "配送・返品",
    items: [
      {
        q: "配送はどのくらいかかりますか？",
        a: "ご注文から2〜5営業日以内に発送いたします。配送業者はヤマト運輸または佐川急便を使用します。",
      },
      {
        q: "返品・交換はできますか？",
        a: "一点物の作品性上、基本的に返品・交換はお受けしていません。ただし、商品に重大な欠陥がある場合は対応いたします。購入前にサイズや素材についてご不明な点はお問い合わせください。",
      },
      {
        q: "海外発送はできますか？",
        a: "現在は国内発送のみ対応しています。海外からのご注文については、個別にご相談ください。",
      },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#E5E2DC]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
      >
        <span className="text-sm text-[#111111] leading-relaxed">{q}</span>
        <span className="shrink-0 mt-0.5 text-[#9CA3AF]">
          {open ? <Minus size={16} strokeWidth={1.5} /> : <Plus size={16} strokeWidth={1.5} />}
        </span>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-400",
          open ? "max-h-96 pb-5" : "max-h-0"
        )}
      >
        <p className="text-sm text-[#6B7280] leading-relaxed pl-0">{a}</p>
      </div>
    </div>
  );
}

export default function FaqPage() {
  return (
    <div className="pt-24 md:pt-32 pb-20">
      <div className="container-site max-w-3xl">
        <FadeIn>
          <div className="mb-16">
            <p className="text-xs tracking-[0.25em] uppercase text-[#9CA3AF] mb-3">IAMALIAR</p>
            <h1 className="font-serif text-4xl md:text-5xl text-[#111111] font-light">FAQ</h1>
            <p className="mt-4 text-sm text-[#6B7280] leading-relaxed">
              よくあるご質問をまとめました。解決しない場合はContactよりお問い合わせください。
            </p>
          </div>
        </FadeIn>

        <div className="space-y-12 md:space-y-16">
          {faqs.map((section, i) => (
            <FadeIn key={section.category} delay={i * 0.1}>
              <h2 className="text-xs tracking-[0.2em] uppercase text-[#111111] mb-6 pb-3 border-b border-[#E5E2DC]">
                {section.category}
              </h2>
              <div>
                {section.items.map((item) => (
                  <FaqItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
