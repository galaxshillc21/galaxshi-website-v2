"use client";

import Image from "next/image";
import Link from "next/link";
// Vortex removed for static hero background

export default function Hero() {
  return (
    <div id="Hero" className="w-full mx-auto h-screen overflow-hidden flex items-center justify-center bg-[#0F2642]">
      {/* Static background wrapper (Vortex removed) */}
      <div className="w-full h-full relative">
        {/* subtle tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#072b4a99] via-[#05204a99] to-[#031022cc] pointer-events-none" />

        <div className="relative z-10 flex items-center justify-center h-full px-6 md:px-12">
          <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left column */}
            <div className="text-white py-12 md:py-24 px-2 md:px-0">
              <span className="inline-block mb-6 px-4 py-2 bg-[#0b63ff22] text-[#cfe9ff] rounded-full text-sm font-medium">Expertos en Analítica Digital</span>

              <h1 className="mt-4 text-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                Implementamos
                <span className="block">GA4/GTM</span>
                <span className="block">Para Todas las Plataformas</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg text-white/85">Soluciones de analítica profesional para medir con precisión y sin errores.</p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="#contact" className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#1687ff] to-[#0b63ff] hover:from-[#0b63ff] hover:to-[#0666d6] text-white rounded-full shadow-2xl transition">
                  Solicitar auditoría gratuita
                </Link>
                <Link href="#services" className="inline-flex items-center gap-3 px-5 py-3 border border-white/20 text-white rounded-full">
                  Ver servicios
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6 max-w-xs md:max-w-md">
                <div className="text-center">
                  <div className="text-white text-2xl font-semibold">+150</div>
                  <div className="text-white/70 text-sm">Proyectos</div>
                </div>
                <div className="text-center">
                  <div className="text-white text-2xl font-semibold">99.9%</div>
                  <div className="text-white/70 text-sm">Precisión</div>
                </div>
                <div className="text-center">
                  <div className="text-white text-2xl font-semibold">100%</div>
                  <div className="text-white/70 text-sm">Satisfacción</div>
                </div>
              </div>
            </div>

            {/* Right column: image card */}
            <div className="flex items-center justify-center px-2">
              {/* <div className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 border border-white/5 bg-gradient-to-br from-[#07142a] to-transparent">
                <Image src="/images/hero-portrait-t.webp" alt="Analytic dashboard" width={1400} height={900} className="w-full h-full object-cover block" priority />
              </div> */}
              <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
                <Image src="/images/hero-portrait-t.webp" alt="Analytic dashboard" width={1400} height={900} className="w-full h-full object-cover block" priority />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-transparent to-white/5 pointer-events-none" />
    </div>
  );
}
