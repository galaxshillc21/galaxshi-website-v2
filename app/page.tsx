import { Vortex } from "@/components/ui/vortex";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div id="Hero" className="w-full mx-auto h-screen overflow-hidden flex bg-white items-center justify-center">
        <div className="container rounded-3xl overflow-hidden h-[600px]">
          <Vortex backgroundColor="black" rangeY={100} particleCount={200} baseHue={200} className="flex items-center justify-center px-2 md:px-10 py-4 w-full h-full">
            <div className="flex flex-col md:flex-row w-full h-full items-center justify-center">
              {/* Left column: Hero content */}
              <div className="flex flex-col items-center">
                <h1 className="text-white text-2xl md:text-6xl font-bold text-center">Transform Your Website Today</h1>
                <h2>We don't just build websites; we build scalable, data-driven platforms designed for growth.</h2>
                <p className="text-white text-center md:text-2xl max-w-2xl mt-6">Our mission is to build digital platforms that don't just look incredible, they perfom. We are modern web developers and strategists dedicated to your bottom line. Stop guessing, start growing.</p>
                <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mt-6">
                  {/* <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
                  Order now
                </button> */}
                </div>
                <button className="rounded-full bg-white px-[45px] py-[10px] bg-violet-500 text-violet-50">Get Started</button>
              </div>
            </div>
          </Vortex>
        </div>
      </div>

      {/* About Section */}
      <div id="About" className="w-full mx-auto  bg-white">
        <div className="container mx-auto w-2/3 flex flex-col md:flex-row items-center justify-center gap-5">
          {/* Left column: Title and paragraph */}
          <div className="flex flex-col md:w-3/5 w-full items-start justify-center px-4">
            <h3 className="text-violet-500 text-l md:text-xl font-bold mb-6">About Us</h3>
            <h2 className="text-violet-500 text-3xl md:text-5xl font-bold mb-6">We're Web Designers & Developers</h2>
            <h3 className="text-violet-500 text-2xl md:text-4xl font-bold mb-6">The Couple Behind the Code</h3>
            <p className="text-slate-600 text-lg md:text-xl max-w-2xl">We're Alfredo and Sheila, and we're not just business partners-we're a team of two passionate developers dedicated to building modern, functional, and beautiful websites for clients of all sizes. We combine our dual expertise to offer a unique, integrated approach.</p>
            {/* Button link to another page */}
            <Link href="/about">
              <button className="mt-8 px-6 py-3 bg-violet-500 hover:bg-violet-600 text-white font-semibold rounded-full transition duration-200">Learn More About Us</button>
            </Link>
          </div>
          {/* Right column: Photo */}
          <div className="flex items-center justify-center md:w-2/5 w-full px-4">
            <div className="w-64 h-64 rounded-full flex items-center justify-center overflow-hidden">
              <Image src="/images/alfredoysheila.jpg" alt="About Galaxshi" width={256} height={256} className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div id="Experience" className="w-full py-20 bg-white">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <h2 className="text-black text-3xl md:text-5xl font-bold mb-10 text-center">Our Experience</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-4xl">
            {/* Analytics */}
            <div className="flex flex-col items-center justify-center">
              <span className="text-5xl mb-4">
                {/* Example icon: Chart Bar */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m-7 0h10" />
                </svg>
              </span>
              <h3 className="text-xl font-semibold text-black mb-2 text-center">Analytics</h3>
              <p className="text-gray-700 text-center">Data-driven insights to help your business grow.</p>
            </div>
            {/* Website Creation */}
            <div className="flex flex-col items-center justify-center">
              <span className="text-5xl mb-4">
                {/* Example icon: Globe */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16 text-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </span>
              <h3 className="text-xl font-semibold text-black mb-2 text-center">Website Creation</h3>
              <p className="text-gray-700 text-center">Modern, responsive websites tailored to your needs.</p>
            </div>
            {/* A/B Testing */}
            <div className="flex flex-col items-center justify-center">
              <span className="text-5xl mb-4">
                {/* Example icon: Adjustments */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16 text-purple-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </span>
              <h3 className="text-xl font-semibold text-black mb-2 text-center">A/B Testing</h3>
              <p className="text-gray-700 text-center">Optimize your site with data-backed experiments.</p>
            </div>
            {/* Design */}
            <div className="flex flex-col items-center justify-center">
              <span className="text-5xl mb-4">
                {/* Example icon: Pencil */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16 text-pink-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13l6.232-6.232a2 2 0 112.828 2.828L11.828 15.828a2 2 0 01-2.828 0L9 13z" />
                </svg>
              </span>
              <h3 className="text-xl font-semibold text-black mb-2 text-center">Design</h3>
              <p className="text-gray-700 text-center">Creative and user-focused design solutions.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="Contact" className="w-full py-20 bg-blue-50 flex items-center justify-center">
        <div className="container mx-auto bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-center px-6 py-12 max-w-4xl">
          {/* Left column: Title and paragraph */}
          <div className="flex flex-col md:w-1/2 w-full items-start justify-center px-4 mb-10 md:mb-0">
            <h2 className="text-blue-700 text-3xl md:text-5xl font-bold mb-6">Contact Us</h2>
            <p className="text-blue-900 text-lg md:text-2xl max-w-md">We'd love to hear from you! Fill out the form and we'll get back to you as soon as possible.</p>
          </div>
          {/* Right column: Contact Form */}
          <form className="flex flex-col md:w-1/2 w-full gap-4 px-4">
            <input type="text" placeholder="Your Name" className="px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300" required />
            <input type="email" placeholder="Your Email" className="px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300" required />
            <textarea placeholder="Your Message" className="px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300" rows={4} required />
            <button type="submit" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200 shadow">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
