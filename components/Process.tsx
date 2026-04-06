"use client";

import { BadgeCheck, Lightbulb, Search, Settings2, GraduationCap } from "lucide-react";
import { SiteDictionary } from "@/utils/i18n";

type ProcessProps = {
  content: SiteDictionary["process"];
};

export default function Process({ content }: ProcessProps) {
  return (
    <section id="Process" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full mb-4">{content.badge}</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">{content.title}</h2>
        <p className="text-center text-slate-500 mt-3 max-w-2xl mx-auto">{content.description}</p>

        <div className="relative mt-12">
          <div className="hidden lg:block absolute left-8 right-8 top-16 h-0.5 bg-slate-200" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 items-start">
            {content.steps.map((s, idx) => (
              <div key={idx} className="flex flex-col items-center text-center px-4 lg:px-0">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-blue-500 flex items-center justify-center shadow-lg">
                    {idx === 0 && <Search className="h-8 w-8 text-white" strokeWidth={2} />}
                    {idx === 1 && <Lightbulb className="h-8 w-8 text-white" strokeWidth={2} />}
                    {idx === 2 && <Settings2 className="h-8 w-8 text-white" strokeWidth={2} />}
                    {idx === 3 && <BadgeCheck className="h-8 w-8 text-white" strokeWidth={2} />}
                    {idx === 4 && <GraduationCap className="h-8 w-8 text-white" strokeWidth={2} />}
                  </div>
                </div>

                <div className="mt-4 text-sm text-blue-500 font-medium">{s.number}</div>
                <h3 className="mt-2 text-base font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-3 text-sm text-slate-500 max-w-xs">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
