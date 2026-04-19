import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "IAMALIARのブランドストーリー。量産された衣服に新たな物語を。",
};

const sections = [
  {
    number: "01",
    heading: "IAMALIARとは",
    body: `"I AM A LIAR"——私は嘘つきだ。\n\n服が「ただの服」ではないと言うとき、それは嘘かもしれない。でも、その嘘が作品を生む。IAMALIARは、その嘘を誠実に追求するブランドだ。`,
  },
  {
    number: "02",
    heading: "ブランド哲学",
    body: `量産された衣服に対して新たな物語を与え、服と作品の境界を曖昧にする。\n\n「着るのか、飾るのか」という問いに答えを出さないこと自体が、このブランドの態度である。解釈を受け手に委ねることが、最も重要な思想になっている。`,
  },
  {
    number: "03",
    heading: "なぜ既製品を再構築するのか",
    body: `既製品への違和感から始まった。\n\nどこかで見たことのある形、誰でも着られる服。それが悪いわけではない。ただ、均質な美しさには物足りなさがある。既製品を素材として選ぶのは、最も「普通」のものに固有の物語を与えるためだ。`,
  },
  {
    number: "04",
    heading: "なぜデニムなのか",
    body: `デニムは最も量産されてきた素材だ。Levi'sの501は、何百万本も作られた。\n\nその中の一本に固有の物語を与えること。インディゴの退色、擦り切れたポケット、誰かが過ごした時間——それらを新たな文脈で再解釈する。`,
  },
  {
    number: "05",
    heading: "服と作品のあいだ",
    body: `服は消費財であると同時に、作品でもある。\n\n刺し子の縫い目は手仕事の時間を刻む。パッチワークは複数の記憶を縫い合わせる。着用できるが、飾ることもできる。その曖昧さを残すことが、IAMALIARの核心だ。`,
  },
  {
    number: "06",
    heading: "目指す場所",
    body: `絵画のように扱われる服。コレクション対象としての衣服。資産価値を持つ一点物。\n\nギャラリー、美術館、コレクターの文脈に接続する存在として。消費物ではなく、長く持つ価値・飾る価値・語る価値を持つ服を作り続ける。`,
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32 pb-20">
      <div className="container-site">
        {/* Header */}
        <FadeIn>
          <div className="mb-20 md:mb-28 max-w-2xl">
            <p className="text-xs tracking-[0.25em] uppercase text-[#555555] mb-4">Brand Story</p>
            <h1 className="font-serif text-4xl md:text-6xl text-[#E8E5DF] font-light leading-tight mb-8">
              IAMALIARは、量産された衣服に対して新たな物語を与え、
              服と作品の境界を曖昧にするブランドである。
            </h1>
            <div className="h-px w-20 bg-[#020202]" />
          </div>
        </FadeIn>

        {/* Sections */}
        <div className="space-y-20 md:space-y-28">
          {sections.map((section, i) => (
            <FadeIn key={section.number} delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
                <div className="md:col-span-2">
                  <span className="font-mono-custom text-[#2E2E2E] text-xs">
                    {section.number}
                  </span>
                </div>
                <div className="md:col-span-10 md:max-w-2xl">
                  <h2 className="font-serif text-2xl md:text-3xl text-[#E8E5DF] font-light mb-6">
                    {section.heading}
                  </h2>
                  <div className="space-y-4">
                    {section.body.split("\n\n").map((para, j) => (
                      <p key={j} className={`text-sm leading-relaxed ${j === 0 ? "font-serif text-lg text-[#E8E5DF] font-light" : "text-[#888888]"}`}>
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              {i < sections.length - 1 && (
                <div className="mt-20 md:mt-28 border-b border-[#1C1C1C]" />
              )}
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.1}>
          <div className="mt-20 md:mt-28 pt-12 border-t border-[#1C1C1C] flex flex-col sm:flex-row gap-6">
            <Link
              href="/collection"
              className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase bg-[#E8E5DF] text-[#080808] px-8 py-4 hover:bg-[#C8B490] transition-colors"
            >
              View Collection
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase border border-[#1C1C1C] text-[#E8E5DF] px-8 py-4 hover:border-[#E8E5DF] transition-colors"
            >
              Contact
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
