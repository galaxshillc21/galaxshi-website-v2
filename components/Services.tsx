"use client";

import Link from "next/link";
import { AppWindow, ArrowRight, BarChart3, Layers3, Tags } from "lucide-react";
import { SiteDictionary } from "@/utils/i18n";

const serviceIcons = [BarChart3, Tags, Layers3, AppWindow];

type ServicesProps = {
  content: SiteDictionary["services"];
};

export default function Services({ content }: ServicesProps) {
  return (
    <section id="Services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full mb-4">{content.badge}</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">{content.title}</h2>
        <p className="text-center text-slate-500 mt-3">{content.description}</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.items.map((s, i) => {
            const Icon = serviceIcons[i] ?? BarChart3;

            return (
              <article key={i} className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-3xl border border-slate-200 hover:border-blue-300 hover:shadow-2xl border-[2px] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#e6f0ff] flex items-center justify-center text-[#1e63ff]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-slate-900 font-semibold text-lg">{s.title}</h3>
                    <p className="text-slate-500 mt-2 text-sm">{s.description}</p>

                    <ul className="mt-3 list-disc ml-5 text-slate-500 text-sm space-y-1">
                      {s.bullets.map((b, idx) => (
                        <li key={idx}>{b}</li>
                      ))}
                    </ul>

                    <div className="mt-4">
                      <Link href="#" className="text-[#1e63ff] text-sm font-medium inline-flex items-center gap-2">
                        {content.learnMore}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
