"use client";

import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#111111] text-[#FAF6F4] border-t border-white/10">
      <div className="w-full max-w-5xl mx-auto px-6 md:px-12 pt-14 pb-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/15">
          
          <div className="md:col-span-5 space-y-3">
            <Link
              href="/"
              className="inline-block text-2xl sm:text-3xl font-black tracking-tight text-white"
            >
              Miguel<span className="text-[#E87A54]">.</span>
            </Link>
            <p className="text-xs sm:text-sm font-medium text-[#F9C6B3]">
              Miguel Dube — Digital Marketer &amp; Graphic Designer
            </p>
            <p className="text-xs text-white/70 max-w-xs leading-relaxed">
              Helping brands grow their online presence through creative
              content, strategic marketing, and compelling visual design.
            </p>
          </div>

          
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#E87A54]">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-white/80">
              <li>
                <Link
                  href="#about"
                  className="hover:text-[#E87A54] transition-colors"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="hover:text-[#E87A54] transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#work"
                  className="hover:text-[#E87A54] transition-colors"
                >
                  Selected Work
                </Link>
              </li>
              <li>
                <Link
                  href="#credentials"
                  className="hover:text-[#E87A54] transition-colors"
                >
                  Credentials
                </Link>
              </li>
            </ul>
          </div>

         
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#E87A54]">
              Let&apos;s Connect
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              Based in Zimbabwe. Open to digital marketing internships,
              freelance design, and brand collaborations.
            </p>
            <div className="pt-1 flex flex-wrap items-center gap-3">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E87A54] text-white text-xs font-semibold hover:opacity-90 transition-all"
              >
                <span>Get In Touch</span>
                <span aria-hidden="true">↗</span>
              </Link>

              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-white/25 text-xs font-medium text-white/90 hover:border-[#E87A54] hover:text-[#E87A54] transition-all cursor-pointer"
              >
                <span>Back to Top</span>
                <span aria-hidden="true">↑</span>
              </button>
            </div>
          </div>
        </div>

        
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-white/60">
          <p>
             Miguel Dube. All rights reserved.
          </p>
          <p className="tracking-wide text-white/70">
            Strategy <span className="text-[#E87A54] mx-1">✳</span> Content{" "}
            <span className="text-[#E87A54] mx-1">✳</span> Design{" "}
            <span className="text-[#E87A54] mx-1">✳</span> Growth
          </p>
        </div>
      </div>
    </footer>
  );
}
