import Image from "next/image";
import Link from "next/link";
import Marquee from "./components/marquee";
import About from "./components/about";
import Skills from "./components/skills";
import Work from "./components/work";
import Contact from "./components/contact";

export default function HomePage() {
  return (
    <main className="w-full min-h-screen bg-[#FAF6F4] text-[#111111]">
      
      <section className="w-full bg-linear-to-br from-[#FFFFFF] via-[#FCEBE3] to-[#F4B89E]">
        

        <div className="w-full max-w-6xl mx-auto px-6 md:px-12 pt-8 pb-14 md:py-16 grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
          
          <div className="lg:col-span-7 space-y-5">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#111111] bg-white/80 border border-[#222222]/10 px-3 py-1 rounded-full shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#E87A54]" />
              Available For Opportunities
            </span>

            <div className="leading-[1.06]">
              <h1 className="text-4xl sm:text-5xl md:text-[62px] font-bold tracking-tight text-[#111111]">
                Hi, I&apos;m
              </h1>
              <h2 className="text-4xl sm:text-5xl md:text-[62px] font-bold tracking-tight text-[#E87A54]">
                Miguel Dube<span className="text-[#111111]">.</span>
              </h2>
            </div>

            <p className="text-base sm:text-xl font-semibold text-[#222222]">
              Digital Marketer &amp; Graphic Designer
            </p>

            <p className="text-xs sm:text-sm md:text-base text-[#333333] max-w-lg leading-relaxed">
              I Help Brands Grow Their Online Presence Through Creative Content,
              Strategic Digital Marketing And Compelling Visual Designs.
            </p>

            
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="#work"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#E87A54] text-white text-xs sm:text-sm font-semibold shadow-sm hover:bg-[#d96b45] transition-all"
              >
                <span>View My Projects</span>
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-[#1E1E1E] bg-white/40 text-[#111111] text-xs sm:text-sm font-semibold hover:bg-[#111111] hover:text-white transition-all"
              >
                Let&apos;s Connect
              </Link>
            </div>
          </div>

         
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-100 h-100 sm:w-100 sm:h-100 md:w-100 md:h-100 rounded-full overflow-hidden shadow-lg ring-4 ring-white/80 bg-[#E6C5B5]">
              <Image
                src="/miguel.jpeg"
                alt="Miguel Dube - Digital Marketer and Graphic Designer"
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

     
      <Marquee />
      <About />
      <Skills />
      <Work />
      <Marquee />
      <Contact />
    </main>
  );
}
