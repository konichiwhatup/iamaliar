export type Locale = "ja" | "en";

export const translations = {
  ja: {
    nav: {
      home: "Home",
      philosophy: "Philosophy",
      gallery: "Gallery",
      news: "News",
      contact: "Contact",
    },
    footer: {
      brandDesc: "",
      pages: "Pages",
      follow: "Follow",
      tagline: "Old, yet new — myself.",
    },
    home: {
      heroTagline: "解釈はあなたが決めてください。",
      brandStoryLabel: "Brand Story",
      brandStoryHeading: "「古くて、新しい、私」",
      sections: [
        {
          heading: `"I AM A LIAR"——「私は嘘つきです」`,
          body: `その一言から、全ての矛盾は始まる。`,
          imageAlt: "藍染の布",
        },
        {
          heading: "「衝撃を、纏う。」",
          body: `アートに突き動かされた衝動を、服として再構築する。\n\nあの作品を観た時の、あの衝撃。身体に残ったその感情の欠片を繋ぎ合わせ、服として具現化する。`,
          imageAlt: "日本の田舎風景",
        },
        {
          heading: "額縁に飾れる服作り",
          body: `壁に掛ければ芸術になり、身に纏えば日常になる。\n\n飾るためなのか、それとも着るためのものなのか、その解釈はあなたに委ねます。`,
          imageAlt: "美術館の額縁",
        },
        {
          heading: "既製品を物語のある一点ものに変換する",
          body: `新しい生命を吹き込む。\n\n既製品として生まれ、誰かに消費され、いつか忘れ去られたもの。いつしか呼吸を止めた「かつての服」私たちはその静止した時間に新しい物語を書き加える。`,
          imageAlt: "手仕事をする職人",
        },
        {
          heading: "「刺し子」",
          body: `同じものは、二度と縫えない。\n\nかつて、大切な布を長く、強く使うために生まれた「刺し子」。私たちは、その伝統を受け継ぎ、ひと針ひと針に想いを込めて縫い上げます。均一ではない、あなただけの一点もの。`,
          imageAlt: "刺し子の生地",
        },
      ],
      ctaCollection: "Collection を見る",
      ctaLine: "LINE で問い合わせる",
    },
    gallery: {
      subtitle: "量産された服に新しい物語を与えた、一点物の作品たち。",
      comingSoonText: "作品を準備中です",
      ctaText: "作品についての問い合わせはLINEから",
      ctaButton: "LINE で問い合わせる",
    },
    contact: {
      label: "Contact",
      heading: "あなたの解釈を聞かせてください。",
      subtext:
        "作品についての質問、オーダーの相談など、お気軽にLINEからご連絡ください。",
      lineOpen: "公式LINEはこちらから",
      instagramOpen: "Instagramを見る",
      items: [
        {
          label: "作品について",
          body: "コレクションの詳細、素材、サイズ感など、気になることはなんでもどうぞ。",
        },
        {
          label: "オーダー",
          body: "一点物のため、在庫状況や納期はLINEにて確認いたします。",
        },
      ],
      faq: {
        label: "FAQ",
        items: [
          {
            q: "商品の購入をしたい場合はどうすればいいですか",
            a: "問い合わせよりお願いします。InstagramまたはLINEからご連絡いただけます。",
          },
        ],
      },
    },
    news: {
      subtitle: "新作リリース・イベント・お知らせ。",
      backToList: "← すべてのニュースへ",
      readMore: "Read →",
      comingSoonText: "ニュースを準備中です",
    },
    product: {
      backToGallery: "← Gallery",
      status: {
        active: "販売中",
        sold: "Sold",
        made_to_order: "受注制作",
        archived: "アーカイブ",
      },
      priceLabel: "PRICELESS.",
      priceNote: "価格についてはお問い合わせください",
      inquireLine: "LINEから問い合わせる⇨",
      taxNote: "JPY (税込)",
      ctaLine: "LINE で問い合わせる",
      sizeLabel: "Size",
      story: "Story",
      material: "Material",
      relatedWorks: "Related Works",
    },
    philosophy: {
      eyebrow: "I AM A LIAR",
      title: "NOT FOR WEARING.",
      subtitle: "AN INTERVIEW ABOUT CREATION, TIME AND INTERPRETATION.",
      closing: "I AM A LIAR.",
      intro: `I AM A LIAR は、同じ学校で服づくりを学んだ2人によって、2024年に始まった。

アトリエで、海外で選び抜いた古布や、お客様から預かった思い出の品を素材に、1着ずつ制作している。

ミシンと手縫いを合わせて20を超える工程。1着の完成までにおよそ3週間。

すべて1点もの。
同じものを、と言われても、作ることはできない。`,
      qa: [
        {
          q: "Q. I AM A LIAR という名前には、どのような意味がありますか？",
          en: "",
          a: `名前が生まれたのは、学校を卒業する少し前のことです。

友人と2人で話しながら、僕は作りたいブランドのことを、まだ形にならない言葉のまま投げかけていました。それを友人がまとめて、「これはどうだ」と出してきたのが、この名前でした。

迷いはありませんでした。僕たちが作りたいのはこれだ、と。

単語そのものに、意味はありません。

「私は嘘つきです」

もしこれが本当なら、私は嘘つきなので、この言葉は嘘になる。
もし嘘なら、私は正直者なので、この言葉は本当になる。

本当とも、嘘とも決められない。答えの出ない問い。
それが、この名前です。`,
        },
        {
          q: "Q. NOT FOR WEARING. という言葉には、どのような意味が込められていますか？",
          en: "",
          a: `着ることを否定したいわけではありません。

ただ、僕たちの作品を、衣服というひとつのカテゴリーに閉じ込めたくないんです。

服なのか、作品なのか。
美しいのか、醜いのか。
完成なのか、未完成なのか。

その境界線は、見る人によって異なるものだと思っています。

身につける人もいれば、作品として眺める人もいる。どちらでもない、まったく別の何かとして受け取る人もいるかもしれません。

そのどれもが、間違いではありません。

NOT FOR WEARING. は、作品の存在を「着る」という目的だけに限定しないための言葉です。`,
        },
        {
          q: "Q. なぜ、古いものや既に存在しているものを素材として選ぶのでしょうか？",
          en: "",
          a: `既に存在しているものには、それまでに過ごしてきた時間があります。

誰かが着ていた時間、使われていた時間、傷ついた時間。そうした背景は、素材そのものに刻まれていると思います。

新品には新品の美しさがあります。けれど古いものには、新しく作ることのできない表情があります。

そこに僕たちが手を加えることで、過去と、今の僕たちの表現が重なり合う。

過去を消して新しいものを作るのではなく、過去を残したまま、その先にある別の可能性を探しています。`,
        },
        {
          q: "Q. 刺し子という技法には、どのような意味を感じていますか？",
          en: "",
          a: `刺し子は、僕たちの表現の根底にあるものです。

1針1針、布に針を通し、糸を重ねていく。その繰り返しによって、布の表情は少しずつ変わっていきます。

ひとつの傷だったものが、針を重ねることで別の表情を持ち始める。強度だけでなく、見た目も、質感も、そこにある意味さえも変わっていく。

僕たちにとって刺し子は、単なる装飾や補強ではありません。何かを覆い隠すのではなく、そこにあるものと向き合い、新たな痕跡を重ねていく行為です。

1針ごとに何かが変わり、その積み重ねから、最初には想像していなかった姿が生まれる。

その変化そのものに、強く惹かれています。`,
        },
        {
          q: "Q. 襤褸、そして均一ではないものの美しさについて、どう考えていますか？",
          en: "",
          a: `僕たちは、襤褸を最初から完成形として目指しているわけではありません。

刺し子を重ね、布と向き合い続けた結果として、襤褸という姿が現れる。そこが大切だと思っています。

傷やほころび、重なり合った布、揃わない縫い目。同じ素材を使っても、同じものは2度と生まれません。

それらを欠点として取り除くのではなく、そのものの存在として受け入れる。

均一であることや、整っていることだけが美しさではないと思います。人も物も、時間とともに変わっていく。その途中にある不完全さや矛盾の中にこそ、そのものだけの表情があるのではないでしょうか。

壊れたものを元に戻すことだけが修復ではない。傷を抱えたまま、新しい存在へと変わっていくことも、ひとつの再生なのかもしれません。`,
        },
        {
          q: "Q. 最後に、I AM A LIAR が目指すものを教えてください。",
          en: "",
          a: `明確な完成形はありません。

僕たちが作るものに、ひとつの意味や価値を与えるつもりもありません。素材も、技法も、作品の形も、これから変わっていくと思います。

特定のメッセージを伝えたいわけでも、すべてを理解してもらいたいわけでもない。

同じ作品を見て、美しさを感じる人もいれば、違和感を覚える人もいる。何も感じなくてもいい。そこで生まれる感情や考えは、その人自身のものです。

僕たちはただ、まだ見たことのない表情や、まだ名前のない存在を生み出していきたい。

僕たちは定義しない。
僕たちは押し付けない。

正解を用意することなく、問い続ける。

ただ、創り続ける。`,
        },
      ],
    },
    notFound: {
      message: "お探しのページは見つかりませんでした。",
      returnHome: "Return Home",
    },
  },
  en: {
    nav: {
      home: "Home",
      philosophy: "Philosophy",
      gallery: "Gallery",
      news: "News",
      contact: "Contact",
    },
    footer: {
      brandDesc: "",
      pages: "Pages",
      follow: "Follow",
      tagline: "Old, yet new — myself.",
    },
    home: {
      heroTagline: "The interpretation is yours to decide.",
      brandStoryLabel: "Brand Story",
      brandStoryHeading: '"Old, yet new — myself."',
      sections: [
        {
          heading: "I AM A LIAR",
          body: "From those very words, every contradiction begins.",
          imageAlt: "Indigo-dyed fabric",
        },
        {
          heading: '"Wear the impact."',
          body: `Reconstructing the impulse driven by art into a garment.\n\nThat shock felt when encountering a work. We gather the emotional fragments left in the body and give them form as clothing.`,
          imageAlt: "Japanese countryside",
        },
        {
          heading: "Clothing worthy of a frame",
          body: `Hung on a wall, it becomes art. Worn on the body, it becomes everyday life.\n\nWhether it is meant to be displayed or worn — the interpretation is yours.`,
          imageAlt: "Museum frame",
        },
        {
          heading: "Transforming the ordinary into a story",
          body: `Breathing new life into the forgotten.\n\nBorn as mass-produced items, consumed by someone, and eventually forgotten — garments that once stopped breathing. We write new stories into that still moment.`,
          imageAlt: "Artisan at work",
        },
        {
          heading: '"Sashiko"',
          body: `No two pieces can ever be stitched the same.\n\nOnce born to extend the life of precious fabric, sashiko is a tradition we carry forward — stitch by stitch, with intention. An uneven, unrepeatable piece made only for you.`,
          imageAlt: "Sashiko fabric",
        },
      ],
      ctaCollection: "View Collection",
      ctaLine: "Contact via LINE",
    },
    gallery: {
      subtitle:
        "One-of-a-kind works that give new narratives to mass-produced garments.",
      comingSoonText: "Works are being prepared",
      ctaText: "Enquiries about works via LINE",
      ctaButton: "Contact via LINE",
    },
    contact: {
      label: "Contact",
      heading: "Tell us\nyour interpretation.",
      subtext:
        "Questions about our works, order enquiries — feel free to reach out via LINE.",
      lineOpen: "Contact via LINE",
      instagramOpen: "View Instagram",
      items: [
        {
          label: "About the works",
          body: "Details about the collection, materials, sizing — ask us anything.",
        },
        {
          label: "Orders",
          body: "As all pieces are one-of-a-kind, please check availability and lead times via LINE.",
        },
      ],
      faq: {
        label: "FAQ",
        items: [
          {
            q: "How do I purchase an item?",
            a: "Please reach out via the contact form — Instagram or LINE are both welcome.",
          },
        ],
      },
    },
    news: {
      subtitle: "New releases, events & announcements.",
      backToList: "← All news",
      readMore: "Read →",
      comingSoonText: "News is being prepared",
    },
    product: {
      backToGallery: "← Gallery",
      status: {
        active: "Available",
        sold: "Sold",
        made_to_order: "Made to order",
        archived: "Archived",
      },
      priceLabel: "PRICELESS.",
      priceNote: "PRICE ON REQUEST",
      inquireLine: "CONTACT via LINE →",
      taxNote: "JPY (tax incl.)",
      ctaLine: "Contact via LINE",
      sizeLabel: "Size",
      story: "Story",
      material: "Material",
      relatedWorks: "Related Works",
    },
    philosophy: {
      eyebrow: "I AM A LIAR",
      title: "NOT FOR WEARING.",
      subtitle: "AN INTERVIEW ABOUT CREATION, TIME AND INTERPRETATION.",
      closing: "I AM A LIAR.",
      intro: `I AM A LIAR was founded in 2024 by two people who studied garment making at the same school.

In their atelier, each piece is made from fabrics selected abroad, or from cherished belongings entrusted by clients.

More than twenty processes, by machine and by hand. About three weeks for a single piece.

Every piece is one of a kind.
Even if asked, the same piece can never be made again.`,
      qa: [
        {
          q: "Q. What does the name I AM A LIAR mean?",
          en: "",
          a: `The name was born shortly before we graduated.

Two of us were talking. I was putting into words, still abstract and unformed, the kind of brand I wanted to create. My friend gathered them together and said, "What about this?"

There was no hesitation. This was exactly what we wanted to make.

The words themselves carry no meaning.

"I am a liar."

If this is true, then I am a liar, and the statement is false.
If it is false, then I am honest, and the statement is true.

Neither true nor false. A question with no answer.
That is what this name is.`,
        },
        {
          q: "Q. What does the phrase NOT FOR WEARING. mean to you?",
          en: "",
          a: `It is not a rejection of wearing.

We simply do not want to confine our work to the single category of clothing.

Is it clothing or art?
Is it beautiful or ugly?
Is it complete or incomplete?

We believe these boundaries differ from person to person.

Some will wear it. Some will view it as a work of art. Others may see it as something else entirely.

None of these are wrong.

NOT FOR WEARING. is our way of refusing to limit our work to the purpose of being worn.`,
        },
        {
          q: "Q. Why do you choose to work with old and pre-existing materials?",
          en: "",
          a: `Everything that already exists carries time within it.

The time someone spent wearing it, the moments it was used, the marks left by years of wear. We believe these are embedded in the material itself.

New things have their own beauty. But older materials hold a character that cannot be created from scratch.

When we add our own hand, the past and our present expression begin to overlap.

Rather than erasing the past to make something new, we preserve what was there and explore the possibilities that lie beyond it.`,
        },
        {
          q: "Q. What does Sashiko mean to you as a form of expression?",
          en: "",
          a: `Sashiko lies at the foundation of our expression.

One stitch at a time, a needle passes through the fabric and thread is layered upon thread. Through this repetition, the character of the fabric slowly changes.

What was once a single tear begins to take on a different face as the stitches accumulate. Not only its strength, but its appearance, its texture, even its meaning begin to change.

To us, Sashiko is more than decoration or reinforcement. It is not about concealing what is there, but about facing it and leaving new traces upon it.

With every stitch, something changes. From that accumulation, a form emerges that we could never have imagined at the start.

It is this transformation itself that draws us in.`,
        },
        {
          q: "Q. What do Boro and the beauty of the irregular mean to you?",
          en: "",
          a: `We do not set out to create Boro as a finished form.

Boro emerges as the result of layering Sashiko and continuing to engage with the fabric over time. That distinction matters to us.

Tears, fraying, overlapping fabrics, uneven stitches. Even from the same material, no two pieces will ever be the same.

Rather than removing these as imperfections, we accept them as part of the object's existence.

We do not believe beauty lives only in what is uniform or orderly. People and objects alike change with time. Perhaps it is within the imperfections and contradictions along the way that something's own character appears.

Restoration is not only a return to the original state. Becoming something new while still carrying one's wounds may be another form of renewal.`,
        },
        {
          q: "Q. Finally, what does I AM A LIAR aspire to become?",
          en: "",
          a: `There is no definitive final form.

Nor do we intend to assign a single meaning or value to what we create. Our materials, techniques, and forms will continue to change.

We do not seek to deliver a specific message, or to have everything understood.

Looking at the same piece, one person may find beauty, another may feel unease. You may feel nothing at all. Whatever arises in that moment belongs to you.

We simply want to keep bringing into the world faces we have never seen, and things that have yet to be named.

We do not define.
We do not impose.

We keep questioning, without providing answers.

We simply keep creating.`,
        },
      ],
    },
    notFound: {
      message: "The page you are looking for could not be found.",
      returnHome: "Return Home",
    },
  },
} as const;

export type Translations = typeof translations.ja;
