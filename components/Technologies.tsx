"use client";

import React from "react";
import { AppWindow, BarChart3, Layers3, ShoppingBag, Tags, Workflow } from "lucide-react";

const techs = [
  { name: "Google Analytics 4", key: "ga4" },
  { name: "Google Tag Manager", key: "gtm" },
  { name: "Data Layer", key: "dl" },
  { name: "WordPress", key: "wp" },
  { name: "WooCommerce", key: "wc" },
  { name: "Next.js", key: "next" },
  { name: "React", key: "react" },
];

function Icon({ keyName }: { keyName: string }) {
  switch (keyName) {
    case "ga4":
      return <BarChart3 className="h-7 w-7 text-orange-500" strokeWidth={1.8} />;
    case "gtm":
      return <Tags className="h-7 w-7 text-blue-600" strokeWidth={1.8} />;
    case "dl":
      return <Layers3 className="h-7 w-7 text-violet-500" strokeWidth={1.8} />;
    case "wp":
      return <Workflow className="h-7 w-7 text-slate-900" strokeWidth={1.8} />;
    case "wc":
      return <ShoppingBag className="h-7 w-7 text-violet-400" strokeWidth={1.8} />;
    case "next":
      return <AppWindow className="h-7 w-7 text-slate-900" strokeWidth={1.8} />;
    case "react":
      return <Workflow className="h-7 w-7 text-cyan-500" strokeWidth={1.8} />;
    default:
      return null;
  }
}

export default function Technologies() {
  return (
    <section id="Technologies" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <span className="inline-block px-4 py-2 bg-green-50 text-green-600 rounded-full mb-4">Tecnologías</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">Expertos en las herramientas que usas</h2>

        <div className="mt-8">
          <div className="flex gap-6 items-stretch justify-center overflow-x-auto py-6 px-2">
            {techs.map((t) => (
              <div key={t.key} className="min-w-[140px] flex-shrink-0 bg-white rounded-xl border border-slate-100 shadow-sm px-6 py-8 flex flex-col items-center text-center border-[2px] transition-all duration-300 hover:border-green-400 hover:shadow-lg">
                <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center mb-4">
                  <Icon keyName={t.key} />
                </div>
                <div className="text-sm text-slate-600">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
