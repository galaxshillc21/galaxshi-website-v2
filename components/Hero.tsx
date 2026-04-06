"use client";

import Image from "next/image";
import Link from "next/link";
import LanguageSwitch from "@/components/LanguageSwitch";
import { Locale, SiteDictionary } from "@/utils/i18n";

type HeroProps = {
  lang: Locale;
  content: SiteDictionary["hero"];
};

export default function Hero({ lang, content }: HeroProps) {
  return (
    <div id="Hero" className="w-full mx-auto h-screen overflow-hidden flex items-center justify-center bg-[#0F2642]">
      <div className="w-full h-full relative">
        <div className="container mx-auto px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-[#072b4a99] via-[#05204a99] to-[#031022cc] pointer-events-none" />

          <div className="relative z-10 flex items-center justify-center h-full px-6 md:px-12">
            <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-white py-12 md:py-24 px-2 md:px-0">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span className="inline-block px-4 py-2 bg-[#0b63ff22] text-[#cfe9ff] rounded-full text-sm font-medium">{content.badge}</span>
                  <LanguageSwitch lang={lang} />
                </div>

                <h1 className="mt-4 text-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                  {content.titleLine1}
                  <span className="block">{content.titleLine2}</span>
                  <span className="block">{content.titleLine3}</span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg text-white/85">{content.description}</p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link href="#Contact" className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#1687ff] to-[#0b63ff] hover:from-[#0b63ff] hover:to-[#0666d6] text-white rounded-full shadow-2xl transition">
                    {content.primaryCta}
                  </Link>
                  <Link href="#Services" className="inline-flex items-center gap-3 px-5 py-3 border border-white/20 text-white rounded-full">
                    {content.secondaryCta}
                  </Link>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-6 max-w-xs md:max-w-md">
                  {content.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-white text-2xl font-semibold">{stat.value}</div>
                      <div className="text-white/70 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center px-2">
                <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
                  <Image src="/images/hero-portrait-t.webp" alt={content.imageAlt} width={1400} height={900} className="w-full h-full object-cover block pointer-events-none brightness-90" priority />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-transparent to-white/5 pointer-events-none" />
    </div>
  );
}
