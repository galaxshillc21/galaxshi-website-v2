import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import Problems from "@/components/Problems";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Process />

      <Technologies />

      <Services />

      <Problems />

      {/* About Section */}
      <div id="About" className="w-full mx-auto  bg-white">
        <div className="container mx-auto w-2/3 flex flex-col md:flex-row items-center justify-center gap-5">
          {/* Left column: Title and paragraph */}
          <div className="flex flex-col md:w-3/5 w-full items-start justify-center px-4">
            <h3 className="text-violet-500 text-l md:text-xl font-bold mb-6">About Us</h3>
            <h2 className="text-violet-500 text-3xl md:text-5xl font-bold mb-6">We&apos;re Web Designers &amp; Developers</h2>

            <p className="text-slate-600 text-lg md:text-xl max-w-2xl">We&apos;re Alfredo and Sheila, and we&apos;re not just business partners—we&apos;re a team of two passionate developers dedicated to building modern, functional, and beautiful websites for clients of all sizes. We combine our dual expertise to offer a unique, integrated approach.</p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-5xl">
            {/* Analytics */}
            <div className="flex flex-col items-center justify-center bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition">
              <span className="text-5xl mb-4">
                {/* Chart Bar Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m-7 0h10" />
                </svg>
              </span>
              <h3 className="text-xl font-semibold text-black mb-2 text-center">Analytics</h3>
              <p className="text-gray-700 text-center">Your website data is powerful—but only if you know how to use it. We provide in-depth analytics that reveal what’s working and what isn’t. From visitor behavior to traffic sources, we help you uncover insights that drive results.</p>
            </div>
            {/* Website Creation */}
            <div className="flex flex-col items-center justify-center bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition">
              <span className="text-5xl mb-4">
                {/* Globe Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16 text-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </span>
              <h3 className="text-xl font-semibold text-black mb-2 text-center">Website Creation</h3>
              <p className="text-gray-700 text-center">We don’t just build websites—we build experiences. Every site we create is responsive, secure, and tailored to your brand. Whether you’re starting fresh or need a redesign, our team makes sure your online presence works for you, not against you.</p>
            </div>
            {/* A/B Testing */}
            <div className="flex flex-col items-center justify-center bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition">
              <span className="text-5xl mb-4">
                {/* Adjustments Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16 text-purple-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </span>
              <h3 className="text-xl font-semibold text-black mb-2 text-center">A/B Testing</h3>
              <p className="text-gray-700 text-center">Small changes can make a big difference. With Galaxshi’s A/B testing, we help you compare different versions of your website elements to see what performs best. From headlines and layouts to buttons and images, we use data to guide optimization.</p>
            </div>
            {/* Design */}
            <div className="flex flex-col items-center justify-center bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition">
              <span className="text-5xl mb-4">
                {/* Pencil Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16 text-pink-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13l6.232-6.232a2 2 0 112.828 2.828L11.828 15.828a2 2 0 01-2.828 0L9 13z" />
                </svg>
              </span>
              <h3 className="text-xl font-semibold text-black mb-2 text-center">Design</h3>
              <p className="text-gray-700 text-center">Design is more than looks—it’s how your users experience your brand. At Galaxshi, we design clean, professional, and user-centered websites that make your business shine.</p>
            </div>
            {/* SEO Optimization */}
            <div className="flex flex-col items-center justify-center bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition">
              <span className="text-5xl mb-4">
                {/* Magnifying Glass Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16 text-yellow-500">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <h3 className="text-xl font-semibold text-black mb-2 text-center">SEO Optimization</h3>
              <p className="text-gray-700 text-center">Boost your visibility and reach with proven SEO strategies.</p>
            </div>
            {/* E-Commerce Solutions */}
            <div className="flex flex-col items-center justify-center bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition">
              <span className="text-5xl mb-4">
                {/* Shopping Cart Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16 text-orange-500">
                  <circle cx="9" cy="21" r="1" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="20" cy="21" r="1" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61l1.38-7.39H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </span>
              <h3 className="text-xl font-semibold text-black mb-2 text-center">E-Commerce Solutions</h3>
              <p className="text-gray-700 text-center">Robust online stores with seamless shopping experiences.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <div className="w-full bg-gradient-to-r from-violet-600 to-blue-500 py-12 flex items-center justify-center">
        <div className="container mx-auto flex flex-col items-center justify-center px-4">
          <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-4">Why Work With Us?</h2>
          <p className="text-white md:text-xl text-lg text-center max-w-2xl">When you hire us, you&apos;re not just getting two freelancers—we&apos;re getting a dedicated, cohesive team with a shared vision for your success.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-4xl">
            {/* Integration */}
            <div className="flex flex-col items-center justify-center">
              <span className="text-5xl mb-4">
                {/* Example icon: Chart Bar */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m-7 0h10" />
                </svg>
              </span>
              <h3 className="text-xl font-semibold text-black mb-2 text-center">Seamless Integration</h3>
              <p className="text-gray-700 text-center">The strategists and the builders are the same people. This means your design is always informed by data, and your analytics are built into the site from day one. No silos, just results.</p>
            </div>
            {/* Experience */}
            <div className="flex flex-col items-center justify-center">
              <span className="text-5xl mb-4">
                {/* Example icon: Globe */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16 text-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </span>
              <h3 className="text-xl font-semibold text-black mb-2 text-center">Great Experience</h3>
              <p className="text-gray-700 text-center">Despite our age, we bring a wealth of practical experience from high-stakes projects, ensuring enterprise-level quality and insight into every build.</p>
            </div>
            {/* Personal Investment */}
            <div className="flex flex-col items-center justify-center">
              <span className="text-5xl mb-4">
                {/* Example icon: Adjustments */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16 text-purple-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </span>
              <h3 className="text-xl font-semibold text-black mb-2 text-center">Personal Investment</h3>
              <p className="text-gray-700 text-center">This is our livelihood and our passion. We treat your business with the same care and commitment we put into our own.</p>
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
            <p className="text-blue-900 text-lg md:text-2xl max-w-md">We&apos;d love to hear from you! Fill out the form and we&apos;ll get back to you as soon as possible.</p>
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
