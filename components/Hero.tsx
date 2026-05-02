"use client";

import Image from "next/image";
import Link from "next/link";
import { Vortex } from "./ui/vortex";
import { SiteDictionary } from "@/utils/i18n";

type HeroProps = {
  content: SiteDictionary["hero"];
};

export default function Hero({ content }: HeroProps) {
  return (
    <div id="Hero" className="w-full mx-auto h-screen overflow-hidden flex items-center justify-center bg-[#0F2642]">
      <div className="w-full h-full relative">
        <Vortex className="absolute inset-0 z-0 bg-transparent" containerClassName="absolute inset-0 h-full pointer-events-none bg-transparent" particleCount={200} rangeY={300} baseRadius={1.5} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#072b4a99] via-[#05204a99] to-[#031022cc] pointer-events-none" />
        <div className="container mx-auto left-0 right-0 px-4 absolute top-0 w-full z-10 h-full">
          <div className="flex items-center justify-center h-full">
            <div className="w-full mx-auto items-center">
              <div className="text-white py-12 md:py-24 px-2 md:px-0">
                <span className="inline-block mb-6 px-4 py-2 bg-[#0b63ff22] text-[#cfe9ff] rounded-full text-sm font-medium">{content.badge}</span>

                <h1 className="mt-4 text-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                  {content.titleLine1}
                  <span className="block">{content.titleLine2}</span>
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
              </div>{" "}
            </div>
          </div>
        </div>

        <div className="hidden absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-transparent to-white/5 pointer-events-none" />
      </div>
    </div>
  );
}
