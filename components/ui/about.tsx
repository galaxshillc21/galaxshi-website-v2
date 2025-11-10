import Image from "next/image";
import GradientText from "@/components/GradientText";

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto px-4">
        {/* Title overlay centered above image */}
        <h2 className=" text-3xl md:text-4xl font-bold italic text-center mb-6">Your business deserves the best developer team</h2>
        <p className="text-purple/80 text-center mt-4 max-w-2xl mx-auto">We help entrepreneurs like you ditch the ordinary and claim the premium brand presence you’ve always wanted. We build fast, accessible, and beautiful web experiences.</p>

        {/* Layout: on md+ show side text blocks overlapping image; on small screens stack */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Left text block */}
          <div className="w-full md:w-1/4 text-center md:text-right">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm inline-block flex flex-col items-end">
              <GradientText colors={["#3c0366", "#8660faff", "#a855f7ff", "#8400ffff", "#a855f7ff", "#3c0366"]} animationSpeed={15} showBorder={false} className="text-6xl md:text-left !justify-end !m-0 !w-full !font-bold">
                Alfredo
              </GradientText>

              <p className="/80 mt-2">A married developer duo building thoughtful, performant websites and apps.</p>
              <div className="mt-4">
                <a href="#contact" className="inline-block px-4 py-2 bg-white text-black rounded-md">
                  See my portfolio
                </a>
              </div>
            </div>
          </div>

          {/* Center image block */}
          <div className="relative md:w-2/4 flex justify-center">
            <Image src="/back-to-back-b.webp" alt="About image" width={600} height={600} className="w-full max-w-[600px]  object-cover" priority />

            {/* Title on top of image (absolute) */}
            {/* <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <h4 className=" text-2xl font-semibold drop-shadow-lg">Galaxshi LLC</h4>
              </div> */}
          </div>

          {/* Right text block */}
          <div className="w-full md:w-1/4 text-center md:text-left">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm inline-block">
              <GradientText colors={["#3c0366", "#8660faff", "#a855f7ff", "#8400ffff", "#a855f7ff", "#3c0366"]} animationSpeed={15} showBorder={false} className="text-6xl md:text-left justify-start !m-0 !font-bold">
                Sheila
              </GradientText>
              <p className="/80 mt-2">Design, build, and ship modern frontends and pragmatic backends tailored to your users.</p>
              <div className="mt-4">
                <a href="#portfolio" className="inline-block px-4 py-2 bg-white text-black rounded-md">
                  See my portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
