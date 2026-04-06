"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { Locale } from "@/utils/i18n";

type LocaleSwitcherSelectProps = {
  lang: Locale;
};

const localeMeta: Record<Locale, { flagPath: string; label: string }> = {
  en: { flagPath: "/flags/4x3/en.svg", label: "English" },
  es: { flagPath: "/flags/4x3/es.svg", label: "Espanol" },
};

export default function LocaleSwitcherSelect({ lang }: LocaleSwitcherSelectProps) {
  const router = useRouter();
  const pathname = usePathname();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  const currentLocale: Locale = lang;
  const targetLocale: Locale = currentLocale === "en" ? "es" : "en";

  const toLocalePath = (locale: Locale) => {
    if (locale === "es") {
      if (pathname === "/") return "/es";
      if (pathname.startsWith("/es")) return pathname;
      return `/es${pathname}`;
    }

    if (pathname === "/es") return "/";
    if (pathname.startsWith("/es/")) return pathname.replace(/^\/es/, "");
    return pathname;
  };

  const onSelectLocale = (nextLocale: Locale) => {
    const nextPath = toLocalePath(nextLocale);
    document.cookie = `preferred_lang=${nextLocale}; Path=/; Max-Age=31536000; SameSite=Lax`;
    setOpen(false);
    router.push(nextPath || "/");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={rootRef} className="relative">
      <button type="button" onClick={() => setOpen((prev) => !prev)} className="inline-flex items-center gap-2 rounded-full border border-white/35 px-3 py-2 text-sm font-medium text-white/95 transition hover:border-white/60 hover:bg-white/10" aria-expanded={open} aria-haspopup="menu">
        <Image src={localeMeta[currentLocale].flagPath} alt={`${localeMeta[currentLocale].label} flag`} width={20} height={15} className="h-4 w-5 rounded-sm" />
        <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : "rotate-0"}`} />
      </button>

      {open ? (
        <div className="absolute right-0 mt-2 min-w-[150px] overflow-hidden rounded-xl border border-white/15 bg-slate-900/95 p-1 shadow-xl backdrop-blur-md" role="menu" aria-label="Language selector">
          <button type="button" className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-white/95 transition hover:bg-white/10" onClick={() => onSelectLocale(targetLocale)} role="menuitem">
            <Image src={localeMeta[targetLocale].flagPath} alt={`${localeMeta[targetLocale].label} flag`} width={20} height={15} className="h-4 w-5 rounded-sm" />
            <span>{localeMeta[targetLocale].label}</span>
          </button>
        </div>
      ) : null}
    </div>
  );
}
