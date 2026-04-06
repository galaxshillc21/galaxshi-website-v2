"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BadgeCheck, Building2, Zap } from "lucide-react";

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
                  <BadgeCheck className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Certificados</div>
                  <div className="text-sm text-slate-500">Google Analytics &amp; GTM</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Clientes</div>
                  <div className="text-sm text-slate-500">+80 empresas</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  <Zap className="h-6 w-6" />
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
