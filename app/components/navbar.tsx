"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { num: "01", label: "About", href: "#about" },
  { num: "02", label: "Work", href: "#work" },
  { num: "03", label: "Skills", href: "#skills" },
  { num: "04", label: "Credentials", href: "#credentials" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF6F4]/90 backdrop-blur-xl border-[#111111]/15 shadow-[0_6px_30px_rgba(17,17,17,0.05)]"
          : "bg-[#FAF6F4]/40 backdrop-blur-md border-[#111111]/10"
      }`}
    >
      <div className="w-full max-w-6xl mx-auto flex items-stretch justify-between h-16 sm:h-18">
        <div className="flex items-center px-6 md:px-10 border-r border-[#111111]/10">
          <Link
            href="/"
            className="text-2xl sm:text-[28px] font-black tracking-tighter text-[#111111] hover:opacity-75 transition-opacity"
          >
            MD<span className="text-[#E87A54]">.</span>
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-2.5 px-6 border-r border-[#111111]/10 text-[11px] font-mono uppercase tracking-widest text-[#111111]/70">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full bg-[#E87A54] opacity-75" />
            <span className="relative inline-flex h-2 w-2 bg-[#E87A54]" />
          </span>
          <span>Available 2026</span>
        </div>

        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex flex-1 items-stretch justify-end"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative flex items-center gap-2 px-6 lg:px-7 border-l border-[#111111]/10 text-xs sm:text-sm font-semibold text-[#111111] `hover:bg-[#111111]/3 transition-colors overflow-hidden"
            >
              <span className="text-[10px] font-mono font-bold text-[#E87A54]">
                /{link.num}
              </span>
              <span className="relative overflow-hidden h-5 flex items-center">
                <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                  {link.label}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute inset-0 block translate-y-full text-[#E87A54] transition-transform duration-300 group-hover:translate-y-0"
                >
                  {link.label}
                </span>
              </span>
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-0.75 w-full scale-x-0 origin-left bg-[#E87A54] transition-transform duration-300 group-hover:scale-x-100"
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-stretch">
          <Link
            href="#contact"
            className="group hidden sm:inline-flex items-center gap-2.5 px-7 md:px-8 border-l border-[#111111]/10 bg-[#111111] text-[#FAF6F4] text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#E87A54] hover:text-white transition-colors duration-300"
          >
            <span>Let&apos;s Talk</span>
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              ↗
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden inline-flex items-center justify-center w-16 border-l border-[#111111]/10 bg-transparent text-[#111111] hover:bg-[#E87A54] hover:text-white transition-colors cursor-pointer"
          >
            <span className="text-lg leading-none font-bold">
              {menuOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="md:hidden border-t border-[#111111]/15 bg-[#FAF6F4] shadow-2xl"
        >
          <ul className="divide-y divide-[#111111]/10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between px-6 py-4 text-sm font-bold uppercase tracking-wide text-[#111111] hover:bg-[#E87A54]/10 hover:text-[#E87A54] transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#E87A54]">
                      /{link.num}
                    </span>
                    <span>{link.label}</span>
                  </span>
                  <span className="text-sm text-[#E87A54]">↗</span>
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#111111] text-[#FAF6F4] text-xs font-bold uppercase tracking-widest hover:bg-[#E87A54] transition-colors"
          >
            <span>Let&apos;s Talk</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      )}
    </header>
  );
}
