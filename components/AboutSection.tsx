"use client";

import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Building2, Zap } from "lucide-react";
import { SiteDictionary } from "@/utils/i18n";

type AboutSectionProps = {
  content: SiteDictionary["about"];
};

export default function AboutSection({ content }: AboutSectionProps) {
  return (
    <section id="About" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="w-full flex items-center justify-center">
            <div className="w-full max-w-[520px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/Portrait.jpg" alt={content.imageAlt} width={1400} height={900} className="w-full h-full object-cover block" priority />
            </div>
          </div>

          <div>
            <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full mb-4">{content.badge}</span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">{content.title}</h2>

            <p className="text-slate-600 mt-6">{content.paragraph1}</p>

            <p className="text-slate-600 mt-4">{content.paragraph2}</p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-4 p-4 rounded-lg border border-slate-100 border-[2px] transition-all duration-300 hover:border-blue-300 hover:shadow-md">
                <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <BadgeCheck className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{content.stats[0]?.title}</div>
                  <div className="text-sm text-slate-500">{content.stats[0]?.description}</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg border border-slate-100 border-[2px] transition-all duration-300 hover:border-blue-300 hover:shadow-md">
                <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{content.stats[1]?.title}</div>
                  <div className="text-sm text-slate-500">{content.stats[1]?.description}</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg border border-slate-100 border-[2px] transition-all duration-300 hover:border-blue-300 hover:shadow-md">
                <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{content.stats[2]?.title}</div>
                  <div className="text-sm text-slate-500">{content.stats[2]?.description}</div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link href="#Contact">
                <button className="bg-slate-900 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transition">{content.teamButton}</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
