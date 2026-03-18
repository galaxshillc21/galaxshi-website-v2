"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutSection() {
  return (
    <section id="About" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: image card */}
          <div className="w-full flex items-center justify-center">
            <div className="w-full max-w-[520px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/Portrait.jpg" alt="Portrait" width={1400} height={900} className="w-full h-full object-cover block" priority />
            </div>
          </div>

          {/* Right: content */}
          <div>
            <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full mb-4">Sobre nosotros</span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">Especialistas en analítica digital con experiencia comprobada</h2>

            <p className="text-slate-600 mt-6">Somos un equipo de ingenieros y analistas especializados en implementaciones técnicas de GA4, Google Tag Manager y arquitecturas de datos.</p>

            <p className="text-slate-600 mt-4">Con más de 5 años de experiencia y más de 150 proyectos completados, hemos ayudado a empresas de ecommerce, SaaS, marketplaces y medios digitales a construir sistemas de analítica confiables y escalables.</p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  {/* Badge icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 2l2.09 6.26L20 9l-5 3.64L16.18 20 12 16.9 7.82 20 9 12.64 4 9l5.91-.74L12 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Certificados</div>
                  <div className="text-sm text-slate-500">Google Analytics &amp; GTM</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  {/* Clients icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M17 20v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Clientes</div>
                  <div className="text-sm text-slate-500">+80 empresas</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  {/* Lightning / experience icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Experiencia</div>
                  <div className="text-sm text-slate-500">+5 años</div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/about">
                <button className="bg-slate-900 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transition">Conoce al equipo</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
