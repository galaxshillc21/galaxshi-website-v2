"use client";

import { Locale } from "@/utils/i18n";
import LocaleSwitcherSelect from "@/components/ui/LocaleSwitcherSelect";

type LocaleSwitcherProps = {
  lang: Locale;
};

export default function LocaleSwitcher({ lang }: LocaleSwitcherProps) {
  return <LocaleSwitcherSelect lang={lang} />;
}
