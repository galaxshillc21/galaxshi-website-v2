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
					<h1 className="text-white text-2xl md:text-6xl font-bold text-center">
						GALAXSHI LLC
					</h1>
					<p className="text-white text-center md:text-2xl max-w-xl mt-6">
						We are a dynamic duo of married developers, passionate about
						crafting functional and beautiful websites.
					</p>
					<div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
						{/* <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
							Order now
						</button> */}
						<div className="px-4 py-2  text-white text-center">
							<p className="text-sm  max-w-xl text-center">
								Our site is currently in development.
							</p>
							<p className="text-sm  max-w-xl text-center">
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
