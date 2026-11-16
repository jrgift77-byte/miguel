"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Credentials", href: "#credentials" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative w-full max-w-6xl mx-auto px-6 md:px-12 pt-6 pb-4 ">
      <div className="flex items-center justify-between gap-4">
        
        <Link
          href="/"
          className="text-2xl sm:text-[28px] font-black tracking-tight text-[#111111] hover:opacity-80 transition-opacity"
        >
          MD.
        </Link>

       
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-12 lg:gap-16 px-10 py-3 rounded-full bg-linear-to-br from-[#FFFFFF] via-[#FCEBE3] to-[#F4B89E] border-white/50 shadow-[0_4px_12px_rgba(0,0,0,0.08)] backdrop-blur-sm text-xs sm:text-sm font-bold text-[#111111]"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#E87A54] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

       
        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#FAF6F4] shadow-[0_4px_12px_rgba(0,0,0,0.10)] text-xs sm:text-sm font-bold text-[#111111] hover:bg-white hover:text-[#E87A54] transition-all"
          >
            Let&apos;s Talk
          </Link>

          
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FAF6F4] shadow-[0_4px_10px_rgba(0,0,0,0.08)] text-[#111111] hover:text-[#E87A54] transition-colors cursor-pointer"
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
          className="md:hidden mt-4 p-5 rounded-2xl border border-white/60 bg-[#FAF6F4]/95 backdrop-blur-md shadow-lg space-y-3"
        >
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-1.5 text-sm font-bold text-[#111111] hover:text-[#E87A54] transition-colors"
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
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded-full bg-[#E87A54] text-white text-xs font-bold shadow-xs hover:bg-[#d96b45] transition-all"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
