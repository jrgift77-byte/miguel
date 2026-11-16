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
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF6F4]/85 backdrop-blur-md border-b border-[#111111]/10 py-3.5 shadow-[0_2px_16px_rgba(0,0,0,0.04)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between gap-6">
        <Link
          href="/"
          className="text-2xl sm:text-[28px] font-black tracking-tight text-[#111111] hover:opacity-80 transition-opacity"
        >
          MD<span className="text-[#E87A54]">.</span>
        </Link>

        <div className="flex items-center gap-8 lg:gap-10">
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-8 lg:gap-9 text-xs sm:text-sm font-semibold text-[#111111]"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative py-1 flex items-baseline gap-1.5 hover:text-[#E87A54] transition-colors"
              >
                <span className="text-[10px] font-mono text-[#E87A54]/80 font-bold">
                  {link.num}
                </span>
                <span>{link.label}</span>
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#E87A54] transition-all duration-300 group-hover:w-full"
                />
              </Link>
            ))}
          </nav>

          <span
            aria-hidden="true"
            className="hidden md:inline-block h-5 w-1px bg-[#111111]/15"
          />

          <Link
            href="#contact"
            className="group hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#111111] text-[#FAF6F4] text-xs sm:text-sm font-semibold hover:bg-[#E87A54] hover:text-white transition-all duration-300"
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
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[#111111]/15 bg-white/60 text-[#111111] hover:border-[#E87A54] hover:text-[#E87A54] transition-colors cursor-pointer"
          >
            <span className="text-base leading-none font-bold">
              {menuOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="md:hidden mx-6 mt-3 p-5 rounded-xl border border-[#111111]/10 bg-[#FAF6F4]/98 backdrop-blur-md shadow-xl space-y-4"
        >
          <ul className="divide-y divide-[#111111]/10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-3 text-sm font-bold text-[#111111] hover:text-[#E87A54] transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="text-[11px] font-mono text-[#E87A54]">
                      {link.num}
                    </span>
                    <span>{link.label}</span>
                  </span>
                  <span className="text-xs text-[#E87A54]">↗</span>
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#111111] text-[#FAF6F4] text-xs font-bold hover:bg-[#E87A54] transition-colors"
          >
            <span>Let&apos;s Talk</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      )}
    </header>
  );
}
