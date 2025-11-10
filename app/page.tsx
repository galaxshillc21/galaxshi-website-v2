"use client";
import Hero from "@/components/ui/hero";
import About from "@/components/ui/about";
import ClickSpark from "@/components/ClickSpark";

export default function Home() {
	return (
		<ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
			<main className="bg-[#060010]">
				<Hero />
				<About />
			</main>
		</ClickSpark>
	);
}
