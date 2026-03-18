"use client";

import React from "react";
import Link from "next/link";

export default function AuditForm() {
  return (
    <section id="Contact" className="py-20 bg-gradient-to-b from-[#0b2a44] to-[#0b2133] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <span className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm text-blue-200 rounded-full mb-4 border border-blue-400/30">Contacto</span>

          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Solicita tu auditoría gratuita</h2>
          <p className="text-white/80 max-w-2xl">Revisaremos tu implementación actual y te enviaremos un reporte detallado con recomendaciones</p>
        </div>

        <div className="mt-10 max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-2xl text-slate-700">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col">
                  <span className="text-sm text-slate-600 mb-2">Nombre completo</span>
                  <input type="text" placeholder="Tu nombre" className="px-4 py-3 rounded-lg border border-slate-100 bg-white/90 focus:outline-none" />
                </label>

                <label className="flex flex-col">
                  <span className="text-sm text-slate-600 mb-2">Email</span>
                  <input type="email" placeholder="tu@email.com" className="px-4 py-3 rounded-lg border border-slate-100 bg-white/90 focus:outline-none" />
                </label>
              </div>

              <div>
                <label className="flex flex-col">
                  <span className="text-sm text-slate-600 mb-2">Plataforma</span>
                  <select className="w-full rounded-lg border border-slate-100 px-4 py-3 bg-white/90 focus:outline-none">
                    <option>Selecciona tu plataforma</option>
                    <option>WordPress / WooCommerce</option>
                    <option>Next.js / React</option>
                    <option>Shopify</option>
                    <option>Otro</option>
                  </select>
                </label>
              </div>

              <div>
                <label className="flex flex-col">
                  <span className="text-sm text-slate-600 mb-2">Mensaje</span>
                  <textarea placeholder="Cuéntanos sobre tu proyecto y qué necesitas..." rows={6} className="w-full rounded-lg border border-slate-100 p-4 bg-white/90 focus:outline-none" />
                </label>
              </div>

              <div>
                <button type="submit" className="w-full inline-flex items-center justify-center gap-3 bg-[#1e63ff] hover:bg-[#1552d6] text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 5l7 7-7 7M5 12h14" />
                  </svg>
                  Quiero mi auditoría gratuita
                </button>
              </div>

              <p className="text-center text-sm text-slate-500">Respuesta en menos de 24 horas</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
