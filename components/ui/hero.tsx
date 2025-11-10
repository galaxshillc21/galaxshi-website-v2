"use client";

import { useEffect, useRef, useState } from "react";
import { Vortex } from "@/components/ui/vortex";
import SpotlightCard from "@/components/SpotlightCard";

export default function Hero() {
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const start = 0; // start immediately
      const local = Math.max(0, scrollY - start);
      const factor = 0.2; // services move up at 20% of scroll distance
      setParallax(local * factor);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative h-[180vh]">
      {/* Fixed hero background + content (keeps the Vortex background visible while scrolling) */}
      <div className="sticky top-0 h-[100vh] w-[100vw] overflow-hidden top-0 left-0 z-0">
        <Vortex backgroundColor="black" rangeY={200} particleCount={200} baseHue={200} className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
          <div className="hero-copy">
            <h1 className="text-2xl md:text-9xl font-bold text-center white-glow animate-[blur-in_1.2s_ease-out_forwards]">
              GALAX<span className="italic">SHI</span>
            </h1>
            <p className="text-white text-center md:text-2xl max-w-2xl mt-6 opacity-0 animate-[fade-in_0.8s_ease-out_0.6s_forwards]">We build web experiences that look stunning, perform flawlessly, and grow with your business.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 hero-button opacity-0 animate-[fade-in_0.8s_ease-out_1s_forwards]">
              <a href="mailto:galaxshi.llc@gmail.com" className="bg-[#170d27ff] px-6 py-3 rounded-xl text-[#b19eefff] font-medium hover:opacity-95 transition border border-purple-50/20 hover:border-purple-50/40 caret-transparent" aria-label="Contact Galaxshi">
                Contact us
              </a>
            </div>
          </div>
        </Vortex>
      </div>
      <section className="py-20 absolute z-10 bottom-0 left-0 right-0">
        <div className="max-w-6xl mx-auto px-4">
          <div ref={servicesRef} style={{ transform: `translateY(${-parallax}px)` }} className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow-lg backdrop-blur-sm">
            <SpotlightCard className="mx-auto" spotlightColor="rgba(132, 0, 255, 0.3)">
              <h2 className="text-white text-3xl md:text-4xl font-semibold text-center">Our Services</h2>
              <p className="text-white/80 text-center mt-4 max-w-2xl mx-auto">Full-stack web development and design that elevate your brand’s look, user experience, and performance. Our services blend design, strategy, and technology to help your business grow online.</p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg bg-white/3">
                  <h3 className="text-white font-semibold">Design & UX</h3>
                  <p className="text-white/80 text-sm mt-2">Polished interfaces focused on clarity and conversion.</p>
                </div>
                <div className="p-4 rounded-lg bg-white/3">
                  <h3 className="text-white font-semibold">Frontend Development</h3>
                  <p className="text-white/80 text-sm mt-2">React/Next.js implementations with performance in mind.</p>
                </div>
                <div className="p-4 rounded-lg bg-white/3">
                  <h3 className="text-white font-semibold">Backend & APIs</h3>
                  <p className="text-white/80 text-sm mt-2">Lightweight, secure services and integrations tailored to your needs.</p>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg bg-white/3">
                  <h3 className="text-white font-semibold">Design & UX</h3>
                  <p className="text-white/80 text-sm mt-2">Polished interfaces focused on clarity and conversion.</p>
                </div>
                <div className="p-4 rounded-lg bg-white/3">
                  <h3 className="text-white font-semibold">Frontend Development</h3>
                  <p className="text-white/80 text-sm mt-2">React/Next.js implementations with performance in mind.</p>
                </div>
                <div className="p-4 rounded-lg bg-white/3">
                  <h3 className="text-white font-semibold">Backend & APIs</h3>
                  <p className="text-white/80 text-sm mt-2">Lightweight, secure services and integrations tailored to your needs.</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a href="#contact" className="inline-block px-6 py-3 rounded-md bg-white text-black font-medium">
                  Get in touch
                </a>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Spacer to allow scrolling past the fixed hero */}
      {/* <div style={{ height: "100vh" }} aria-hidden /> */}

      {/* Services section (below the fold) with parallax transform */}

      {/* About section */}
      {/* <About /> */}
    </div>
  );
}
