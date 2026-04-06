"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { SiteDictionary } from "@/utils/i18n";

type FAQProps = {
  content: SiteDictionary["faq"];
};

export default function FAQ({ content }: FAQProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="FAQ" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full mb-4">{content.badge}</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">{content.title}</h2>
        <p className="text-center text-slate-500 mt-3">{content.description}</p>

        <div className="mt-10 max-w-3xl mx-auto space-y-4">
          {content.items.map((it, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-xl shadow-sm border-[2px] transition-all duration-300 hover:border-blue-300 hover:shadow-lg">
              <button type="button" onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between px-6 py-4 text-left" aria-expanded={open === i} aria-controls={`faq-${i}`}>
                <span className="text-slate-700">{it.question}</span>
                <span className="ml-4 flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600">
                  <Plus className={`h-4 w-4 transform transition-transform ${open === i ? "rotate-45" : "rotate-0"}`} />
                </span>
              </button>

              <div id={`faq-${i}`} className={`px-6 pb-4 text-slate-600 transition-all ${open === i ? "block" : "hidden"}`}>
                {it.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
