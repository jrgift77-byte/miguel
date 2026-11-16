const marqueeItems = [
  "DESIGN",
  "DIGITAL MARKETING",
  "GRAPHICS",
  "SOCIAL MEDIA",
  "SEO",
  "EMAIL MARKETING",
  "INFLUENCER MARKETING",
  "PAID ADVERTISING",
];

function MarqueeTrack({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden}
      className="flex shrink-0 items-center whitespace-nowrap"
    >
      {marqueeItems.map((label, index) => (
        <div key={`${label}-${index}`} className="flex items-center">
          <span className="text-[#E87A54] hover:text-[#FAF6F4] transition-colors font-bold tracking-[0.14em] text-xs sm:text-sm md:text-base uppercase px-6 sm:px-9">
            {label}
          </span>
          <span
            className={`text-base sm:text-lg leading-none ${
              index % 2 === 0 ? "text-[#F9C6B3]" : "text-[#E87A54]"
            }`}
          >
            ✳
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="relative w-full bg-[#111111] border-y border-white/10 py-4 overflow-hidden select-none">
      
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-20 bg-linear-to-r from-[#111111] to-transparent z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-20 bg-linear-to-l from-[#111111] to-transparent z-10"
      />

      
      <div className="animate-marquee flex items-center">
        <MarqueeTrack />
        <MarqueeTrack hidden />
      </div>
    </div>
  );
}
