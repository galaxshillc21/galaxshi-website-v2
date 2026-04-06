"use client";

import Link from "next/link";
import { Locale, dictionaries } from "@/utils/i18n";

type LanguageSwitchProps = {
  lang: Locale;
};

export default function LanguageSwitch({ lang }: LanguageSwitchProps) {
  const nextLang: Locale = lang === "en" ? "es" : "en";
  const href = nextLang === "es" ? "/es" : "/";
  const label = nextLang === "es" ? dictionaries[lang].switch.toSpanish : dictionaries[lang].switch.toEnglish;

  const setPreferredLanguage = () => {
    document.cookie = `preferred_lang=${nextLang}; Path=/; Max-Age=31536000; SameSite=Lax`;
  };

  return (
    <Link href={href} onClick={setPreferredLanguage} className="inline-flex items-center rounded-full border border-white/35 px-4 py-2 text-sm font-medium text-white/95 transition hover:border-white/60 hover:bg-white/10">
      {label}
    </Link>
  );
}
