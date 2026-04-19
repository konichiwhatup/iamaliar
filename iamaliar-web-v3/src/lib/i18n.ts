export type Locale = "ja" | "en";

export const translations = {
  ja: {
    nav: {
      home: "Home",
      collection: "Collection",
      journal: "Journal",
      contact: "Contact",
    },
    footer: {
      brandDesc: "",
      pages: "Pages",
      follow: "Follow",
      tagline: "wear it or frame it.",
    },
    home: {
      heroTagline: "解釈はあなたが決めてください。",
      brandStoryLabel: "Brand Story",
      brandStoryHeading: "「アートに食らった感情を服に変換する。」",
      sections: [
        {
          heading: "I AM A LIAR"——「私は嘘つきです」",
          body: `"「古くて、新しい、私」`,
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
          body: `新しい生命を吹き込む。\n\n既製品として生まれ、誰かに消費され、いつか忘れ去られたもの。いつしか呼吸を止めた「かつての服」。私たちはその静止した時間に新しい物語を書き加える。`,
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
    collection: {
      subtitle: "量産された服に新しい物語を与えた、一点物の作品たち。",
      comingSoonText: "作品を準備中です",
      ctaText: "作品についての問い合わせはLINEから",
      ctaButton: "LINE で問い合わせる",
    },
    contact: {
      label: "Contact",
      heading: "あなたの解釈を、\n聞かせてください。",
      subtext:
        "作品についての質問、オーダーの相談、コラボレーションのご提案など、お気軽にLINEからご連絡ください。",
      lineOpen: "LINE を開く",
      items: [
        {
          label: "作品について",
          body: "コレクションの詳細、素材、サイズ感など、気になることはなんでもどうぞ。",
        },
        {
          label: "オーダー",
          body: "一点物のため、在庫状況や納期はLINEにて確認いたします。",
        },
        {
          label: "その他",
          body: "コラボレーション、取材、その他のご相談もお気軽に。",
        },
      ],
    },
  },
  en: {
    nav: {
      home: "Home",
      collection: "Collection",
      journal: "Journal",
      contact: "Contact",
    },
    footer: {
      brandDesc: "",
      pages: "Pages",
      follow: "Follow",
      tagline: "wear it or frame it.",
    },
    home: {
      heroTagline: "The interpretation is yours to decide.",
      brandStoryLabel: "Brand Story",
      brandStoryHeading: '"Converting the shock of art into clothing."',
      sections: [
        {
          heading: "What is IAMALIAR",
          body: `"I AM A LIAR" — a single phrase where all contradictions begin.\n\nIAMALIAR expresses those contradictions through clothing.`,
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
    collection: {
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
        "Questions about our works, order enquiries, collaboration proposals — feel free to reach out via LINE.",
      lineOpen: "Open LINE",
      items: [
        {
          label: "About the works",
          body: "Details about the collection, materials, sizing — ask us anything.",
        },
        {
          label: "Orders",
          body: "As all pieces are one-of-a-kind, please check availability and lead times via LINE.",
        },
        {
          label: "Other",
          body: "Collaborations, press enquiries, and any other matters are welcome.",
        },
      ],
    },
  },
} as const;

export type Translations = typeof translations.ja;
