"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations, type Locale, type Translations } from "@/lib/i18n";

interface LanguageContextValue {
  locale: Locale;
  t: Translations;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: "ja",
  t: translations.ja,
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ja");

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved === "en" || saved === "ja") setLocale(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "ja" ? "ja" : "en";
  }, [locale]);

  const toggle = () => {
    setLocale((prev) => {
      const next = prev === "ja" ? "en" : "ja";
      localStorage.setItem("locale", next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale] as Translations, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
