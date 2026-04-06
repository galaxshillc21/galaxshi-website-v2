"use client";

import React from "react";
import { AlertTriangle, ArrowRightLeft, CircleX, Layers3, ShoppingCart } from "lucide-react";

const cards = [
  {
    title: "GA4 no recoge datos",
    desc: "Tu propiedad de GA4 está configurada pero no recibes información",
    icon: CircleX,
  },
  {
    title: "Eventos duplicados",
    desc: "Múltiples disparos del mismo evento distorsionan tus métricas",
    icon: AlertTriangle,
  },
  {
    title: "Migración incompleta desde Universal Analytics",
    desc: "Perdiste funcionalidad crítica en la transición a GA4",
    icon: ArrowRightLeft,
  },
  {
    title: "Ecommerce tracking roto",
    desc: "No puedes medir conversiones ni ingresos correctamente",
    icon: ShoppingCart,
  },
  {
    title: "Falta de Data Layer",
    desc: "Datos desorganizados e imposibles de aprovechar estratégicamente",
    icon: Layers3,
  },
];

export default function Problems() {
  return (
    <section id="Problems" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <span className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full mb-4">Problemas comunes</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">¿Te suena familiar?</h2>
        <p className="text-center text-slate-500 mt-3">Estos errores de implementación pueden costarte decisiones equivocadas y oportunidades perdidas</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* first row: 3 cards */}
          {cards.slice(0, 5).map((c, i) => (
            <article key={i} className={`rounded-xl bg-white p-6 min-h-[140px] transform transition-transform duration-200 border border-slate-100 hover:shadow-lg border-[2px] hover:border-red-200 `}>
              <div className="flex flex-col items-start gap-3">
                <div className="w-12 h-12 rounded-lg bg-[#fff0f2] flex items-center justify-center text-pink-600">
                  <c.icon className="h-6 w-6" strokeWidth={1.8} />
                </div>

                <h3 className="text-slate-900 font-semibold text-lg">{c.title}</h3>
                <p className="text-slate-500 text-sm">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
