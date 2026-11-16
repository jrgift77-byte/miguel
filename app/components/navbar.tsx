"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Credentials", href: "#credentials" },
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
          ? "bg-[#FAF6F4]/90 backdrop-blur-md border-b border-[#222222]/10 py-3.5 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link
          href="/"
          className="group inline-flex items-center gap-1 text-2xl sm:text-[28px] font-black tracking-tight text-[#111111]"
        >
          <span>MD</span>
          <span className="text-[#E87A54] transition-transform duration-300 group-hover:scale-125">
            .
          </span>
        </Link>

        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-10 lg:gap-12 text-sm font-medium text-[#222222]"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative py-1.5 hover:text-[#111111] transition-colors"
            >
              <span>{link.label}</span>
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-0.5 w-full origin-right scale-x-0 bg-[#E87A54] transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100"
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="group hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#111111] text-[#FAF6F4] text-xs sm:text-sm font-semibold shadow-xs hover:bg-[#E87A54] hover:text-white transition-all duration-300"
          >
            <span>Let&apos;s Talk</span>
            <span
              aria-hidden="true"
              className="text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              ↗
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-[#222222]/15 bg-white/70 text-[#111111] hover:border-[#E87A54] hover:text-[#E87A54] transition-colors cursor-pointer"
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
          className="md:hidden mx-6 mt-3 p-5 rounded-2xl border border-[#222222]/10 bg-[#FAF6F4]/98 backdrop-blur-md shadow-lg space-y-3"
        >
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-[#111111] hover:bg-[#FCEBE3] hover:text-[#E87A54] transition-colors"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#E87A54]">✳</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="pt-2 border-t border-[#222222]/10">
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#E87A54] text-white text-xs font-semibold shadow-xs hover:bg-[#d96b45] transition-all"
            >
              <span>Let&apos;s Talk</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
