"use client";

import Image from "next/image";
import GradientText from "@/components/GradientText";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const imageRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const blurInUpVariant = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-purple-50 relative">
      {/* Full circle separator */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 h-24 bg-black rounded-full z-10 w-full"></div>

      <div className="mx-auto px-4 py-24 pt-32">
        {/* Title overlay centered above image */}
        <motion.h2 className="text-3xl md:text-4xl font-bold italic text-center mb-6" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={blurInUpVariant}>
          Your business deserves the best developer team
        </motion.h2>

        <motion.p className="text-purple/80 text-center mt-4 max-w-2xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={blurInUpVariant} transition={{ delay: 0.2 }}>
          We help entrepreneurs like you ditch the ordinary and claim the premium brand presence you've always wanted. We build fast, accessible, and beautiful web experiences.
        </motion.p>

        {/* Layout: on md+ show side text blocks overlapping image; on small screens stack */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Left text block */}
          <motion.div className="w-full md:w-auto text-center md:text-right" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={blurInUpVariant} transition={{ delay: 0.4 }}>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm inline-block flex flex-col items-end">
              <GradientText colors={["#3c0366", "#8660faff", "#a855f7ff", "#8400ffff", "#a855f7ff", "#3c0366"]} animationSpeed={15} showBorder={false} className="text-6xl md:text-left !justify-end !m-0 !w-full !font-bold">
                Alfredo
              </GradientText>
              <div className="mt-4">
                <a href="#contact" className="inline-block px-4 py-2 bg-white text-black rounded-md">
                  See my portfolio
                </a>
              </div>
            </div>
          </motion.div>

          {/* Center image block */}
          <motion.div className="relative md:w-[800px] flex justify-center" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={blurInUpVariant} transition={{ delay: 0.6 }}>
            <Image src="/back-to-back-b.webp" alt="About image" width={1200} height={1200} quality={100} className="w-full max-w-[800px] object-cover" priority sizes="(max-width: 768px) 100vw, 600px" />

            {/* Title on top of image (absolute) */}
            {/* <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <h4 className=" text-2xl font-semibold drop-shadow-lg">Galaxshi LLC</h4>
              </div> */}
          </motion.div>

          {/* Right text block */}
          <motion.div className="w-full md:w-auto text-center md:text-left" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={blurInUpVariant} transition={{ delay: 0.8 }}>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm inline-block">
              <GradientText colors={["#3c0366", "#8660faff", "#a855f7ff", "#8400ffff", "#a855f7ff", "#3c0366"]} animationSpeed={15} showBorder={false} className="text-6xl md:text-left justify-start !m-0 !font-bold">
                Sheila
              </GradientText>
              <div className="mt-4">
                <a href="#portfolio" className="inline-block px-4 py-2 bg-white text-black rounded-md">
                  See my portfolio
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
