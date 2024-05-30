import { Vortex } from "@/components/ui/vortex";

export default function Home() {
	return (
		<main className="">
			<div className="w-[100%] mx-auto h-screen overflow-hidden">
				<Vortex
					backgroundColor="black"
					rangeY={200}
					particleCount={200}
					baseHue={200}
					className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
				>
					<h2 className="text-white text-2xl md:text-6xl font-bold text-center">
						GALAXSHI LLC
					</h2>
					<p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
						We are a married couple of developers, passionate about creating
						funcitonal websites.
					</p>
					<div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
						{/* <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
							Order now
						</button> */}
						<div className="px-4 py-2  text-white text-center">
							<p>Our site is currently in development.</p>
							<p>
								Please contact us at{" "}
								<a href="mailto:galaxshi.llc@gmail.com">
									<u>galaxshi.llc@gmail.com</u>
								</a>
							</p>
						</div>
					</div>
				</Vortex>
			</div>
		</main>
	);
}
