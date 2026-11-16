"use client";

import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "miguellynndube18@gmail.com";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="w-full max-w-5xl mx-auto px-6 md:px-12 pt-12 pb-20"
    >
      
      <div
        id="credentials"
        className="bg-[#F9C6B3] rounded-2xl px-6 sm:px-8 py-6 grid grid-cols-1 sm:grid-cols-2 gap-6 shadow-xs"
      >
        <div>
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#E87A54] bg-white/80 px-2.5 py-0.5 rounded-full mb-2">
            Availability
          </span>
          <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-[#111111]">
            OPEN TO OPPORTUNITIES
          </h3>
          <p className="text-xs sm:text-sm text-[#222222] leading-relaxed mt-1">
            Digital Marketing Internships,
            <br />
            Collaborations And Exciting Projects.
          </p>
        </div>

        <div className="sm:border-l sm:border-[#111111]/15 sm:pl-6">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#E87A54] bg-white/80 px-2.5 py-0.5 rounded-full mb-2">
            Core Pillars
          </span>
          <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-[#111111]">
            PORTFOLIO FOCUS
          </h3>
          <p className="text-xs sm:text-sm font-medium text-[#222222] leading-relaxed mt-1">
            Strategy <span className="text-[#E87A54] mx-1">•</span> Content{" "}
            <span className="text-[#E87A54] mx-1">•</span> Design{" "}
            <span className="text-[#E87A54] mx-1">•</span> Growth
          </p>
        </div>
      </div>

     
      <div className="mt-10">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-[#111111]">
          LET&apos;S CREATE SOMETHING IMPACTFUL TOGETHER
          <span className="text-[#E87A54]">.</span>
        </h2>
        <p className="text-xs sm:text-sm text-[#333333] leading-relaxed mt-1.5 max-w-xl">
          I&apos;m Open To Opportunities To Learn, Contribute And Collaborate
          With Brands Looking To Strengthen Their Digital Presence.
        </p>
      </div>

   
      <div className="mt-6 border border-[#222222] rounded-2xl overflow-hidden grid grid-cols-1 sm:grid-cols-2 bg-white/40">
        
        <div className="group p-6 border-b border-[#222222] sm:border-r hover:bg-[#FCEBE3]/70 transition-colors flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <p className="text-sm sm:text-base font-bold text-[#111111]">
              Email
            </p>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="text-[11px] font-semibold px-2.5 py-1 rounded-full border border-[#222222]/30 text-[#111111] hover:bg-[#111111] hover:text-white transition-all cursor-pointer"
            >
              {copied ? "Copied ✓" : "Copy"}
            </button>
          </div>
          <a
            href={`mailto:${email}`}
            className="mt-2 inline-flex items-center justify-between gap-2 text-xs sm:text-sm text-[#333333] group-hover:text-[#E87A54] font-medium transition-colors break-all"
          >
            <span>{email}</span>
            <span className="text-base transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>
        </div>

        
        <div className="p-6 border-b border-[#222222] hover:bg-[#FCEBE3]/70 transition-colors flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <p className="text-sm sm:text-base font-bold text-[#111111]">
              Location
            </p>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#222222]/75">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available Remote &amp; On-site
            </span>
          </div>
          <p className="mt-2 text-xs sm:text-sm font-medium text-[#333333]">
            Zimbabwe, Victoria Falls
          </p>
        </div>

       
        <a
          href="https://www.linkedin.com/in/miguel-dube-2474b5400/"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-6 border-b sm:border-b-0 sm:border-r border-[#222222] hover:bg-[#FCEBE3]/70 transition-colors flex flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm sm:text-base font-bold text-[#111111]">
              LinkedIn
            </p>
            <span className="text-base text-[#111111] group-hover:text-[#E87A54] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </div>
          <p className="mt-2 text-xs sm:text-sm font-medium text-[#333333] group-hover:text-[#E87A54] underline underline-offset-4 transition-colors">
            linkedin.com/in/miguel-dube
          </p>
        </a>

        
        <a
          href="https://canva.link/cw0jxxkly2kxwus"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-6 hover:bg-[#FCEBE3]/70 transition-colors flex flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm sm:text-base font-bold text-[#111111]">CV</p>
            <span className="text-base text-[#111111] group-hover:text-[#E87A54] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </div>
          <p className="mt-2 text-xs sm:text-sm font-medium text-[#333333] group-hover:text-[#E87A54] underline underline-offset-4 transition-colors">
            View Curriculum Vitae (Canva)
          </p>
        </a>
      </div>
    </section>
  );
}
