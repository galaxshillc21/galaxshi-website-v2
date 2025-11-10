"use client";

import Image from "next/image";
import GradientText from "@/components/GradientText";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import {
	SiWordpress,
	SiNextdotjs,
	SiReact,
	SiTailwindcss,
	SiSass,
	SiGoogleanalytics,
	SiGoogletagmanager,
	SiAdobeillustrator,
	SiAdobephotoshop,
	SiFirebase,
	SiGooglebigquery,
} from "react-icons/si";

export default function About() {
	const imageRef = useRef<HTMLDivElement>(null);
	const sectionRef = useRef<HTMLElement>(null);

	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	// Scroll-based parallax
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});

	// Different parallax rates for each column
	const leftColumnY = useTransform(scrollYProgress, [0, 1], [100, -100]);
	const rightColumnY = useTransform(scrollYProgress, [0, 1], [150, -150]);

	// Heading split parallax - slides from opposite sides to meet in middle
	const leftHeadingX = useTransform(scrollYProgress, [0, 0.3], [-200, 0]);
	const rightHeadingX = useTransform(scrollYProgress, [0, 0.3], [200, 0]);

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
		<section ref={sectionRef} className="bg-purple-50 relative">
			{/* Full circle separator */}
			<div className="absolute -top-12 left-1/2 -translate-x-1/2 h-24 bg-black rounded-full z-10 w-full"></div>

			<div className="mx-auto px-4 py-24 pt-32">
				<motion.h2 className="motion-heading-split flex flex-col text-8xl font-bold justify-center items-center gap-2 mb-6 overflow-hidden">
					<motion.span style={{ x: leftHeadingX }} className="block">
						Meet Your
					</motion.span>
					<motion.span style={{ x: rightHeadingX }} className="block">
						Dev Team
					</motion.span>
				</motion.h2>
				{/* Title overlay centered above image */}
				<motion.h2
					className="text-3xl md:text-4xl font-bold italic text-center mb-6"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={blurInUpVariant}
				>
					Your business deserves the best developer team
				</motion.h2>

				<motion.p
					className="text-purple/80 text-center mt-4 max-w-2xl mx-auto"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={blurInUpVariant}
					transition={{ delay: 0.2 }}
				>
					We help entrepreneurs like you ditch the ordinary and claim the premium brand presence
					you've always wanted. We build fast, accessible, and beautiful web experiences.
				</motion.p>

				{/* Layout: on md+ show side text blocks overlapping image; on small screens stack */}
				<div className="flex flex-col md:flex-row items-start justify-center gap-6">
					{/* Left text block */}
					<motion.div
						className="w-full h-full md:w-auto text-center relative top-24"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						variants={blurInUpVariant}
						transition={{ delay: 0.4 }}
					>
						<motion.div style={{ y: leftColumnY }} className="motion-col-parallax">
							<GradientText
								colors={["#3c0366", "#8660faff", "#a855f7ff", "#8400ffff", "#a855f7ff", "#3c0366"]}
								animationSpeed={15}
								showBorder={false}
								className="text-8xl !font-bold p-1"
							>
								Alfredo
							</GradientText>
							<p className="text-3xl">Full Stack Developer</p>
							{/* Tech Stack Icons */}
							<div className="flex items-center  justify-between gap-3 mt-4 flex-wrap">
								<span className="inline-block transition-transform duration-200 ease-out hover:scale-110 cursor-pointer">
									<SiNextdotjs className="text-black" size={40} title="Next.js" />
								</span>
								<span className="inline-block transition-transform duration-200 ease-out hover:scale-110 cursor-pointer">
									<SiWordpress className="text-[#21759b]" size={40} title="WordPress" />
								</span>
								<span className="inline-block transition-transform duration-200 ease-out hover:scale-110 cursor-pointer">
									<SiReact className="text-[#61dafb]" size={40} title="React" />
								</span>
								<span className="inline-block transition-transform duration-200 ease-out hover:scale-110 cursor-pointer">
									<SiTailwindcss className="text-[#06b6d4]" size={40} title="Tailwind CSS" />
								</span>
								<span className="inline-block transition-transform duration-200 ease-out hover:scale-110 cursor-pointer">
									<SiSass className="text-[#cc6699]" size={40} title="Sass" />
								</span>
								<span className="inline-block transition-transform duration-200 ease-out hover:scale-110 cursor-pointer">
									<SiGoogleanalytics
										className="text-[#e37400]"
										size={40}
										title="Google Analytics 4"
									/>
								</span>
								<span className="inline-block transition-transform duration-200 ease-out hover:scale-110 cursor-pointer">
									<SiGoogletagmanager
										className="text-[#246fdb]"
										size={40}
										title="Google Tag Manager"
									/>
								</span>
							</div>

							<div className="mt-4">
								<a
									href="#contact"
									className="inline-block px-4 py-2 bg-white text-black rounded-md"
								>
									See my portfolio
								</a>
							</div>
						</motion.div>
					</motion.div>

					{/* Center image block */}
					<motion.div
						className="relative md:w-[800px] flex justify-center"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						variants={blurInUpVariant}
						transition={{ delay: 0.6 }}
					>
						<Image
							src="/back-to-back-b.webp"
							alt="About image"
							width={1200}
							height={1200}
							quality={100}
							className="w-full max-w-[800px] object-cover"
							priority
							sizes="(max-width: 768px) 100vw, 600px"
						/>

						{/* Title on top of image (absolute) */}
						{/* <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <h4 className=" text-2xl font-semibold drop-shadow-lg">Galaxshi LLC</h4>
              </div> */}
					</motion.div>

					{/* Right text block */}
					<motion.div
						className="w-full h-full md:w-auto text-center flex flex-col gap-1 align-center relative top-[14rem]"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						variants={blurInUpVariant}
						transition={{ delay: 0.4 }}
					>
						<motion.div style={{ y: rightColumnY }} className="motion-col-parallax">
							<GradientText
								colors={["#3c0366", "#8660faff", "#a855f7ff", "#8400ffff", "#a855f7ff", "#3c0366"]}
								animationSpeed={15}
								showBorder={false}
								className="text-8xl !font-bold p-1"
							>
								Sheila
							</GradientText>
							<p className="text-3xl mb-10">Designer & Data Analyst</p>

							{/* Tech Stack Icons */}
							<div className="flex items-center justify-between gap-3 mt-4 flex-wrap">
								<span className="inline-block transition-transform duration-200 ease-out hover:scale-110 cursor-pointer">
									<SiAdobeillustrator
										className="text-[#ff9a00]"
										size={40}
										title="Adobe Illustrator"
									/>
								</span>
								<span className="inline-block transition-transform duration-200 ease-out hover:scale-110 cursor-pointer">
									<SiAdobephotoshop className="text-[#31a8ff]" size={40} title="Adobe Photoshop" />
								</span>
								<span className="inline-block transition-transform duration-200 ease-out hover:scale-110 cursor-pointer">
									<SiGoogleanalytics
										className="text-[#e37400]"
										size={40}
										title="Google Analytics 4"
									/>
								</span>
								<span className="inline-block transition-transform duration-200 ease-out hover:scale-110 cursor-pointer">
									<SiGoogletagmanager
										className="text-[#246fdb]"
										size={40}
										title="Google Tag Manager"
									/>
								</span>
								<span className="inline-block transition-transform duration-200 ease-out hover:scale-110 cursor-pointer">
									<SiFirebase className="text-[#ffca28]" size={40} title="Firebase" />
								</span>
								<span className="inline-block transition-transform duration-200 ease-out hover:scale-110 cursor-pointer">
									<SiGooglebigquery className="text-[#669df6]" size={40} title="BigQuery" />
								</span>
							</div>

							<div className="mt-4">
								<a
									href="#contact"
									className="inline-block px-4 py-2 bg-white text-black rounded-md"
								>
									See my portfolio
								</a>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
