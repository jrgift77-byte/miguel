export default function About() {
  return (
    <section
      id="about"
      className="w-full max-w-5xl mx-auto px-6 md:px-12 pt-14"
    >
     
      <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#E87A54] bg-[#FCEBE3] px-2.5 py-0.5 rounded-full mb-2">
        About Me
      </span>

      
      <h2 className="text-2xl sm:text-3xl md:text-[34px] leading-[1.15] font-bold tracking-tight text-[#111111]">
        Creative Thinking.{" "}
        <span className="text-[#E87A54]">Strategic Marketing.</span>
        <br />
        Meaningful Connections.
      </h2>

     
      <p className="text-xs sm:text-sm leading-relaxed text-[#333333] max-w-2xl mt-3.5">
        I&apos;m An Emerging Digital Marketing Professional With A Growing
        Background In Content Creation, Social Media Marketing, SEO, Email
        Marketing And Graphic Design. Through My Learning Journey At{" "}
        <span className="font-semibold text-[#111111]">Uncommon Org</span> And{" "}
        <span className="font-semibold text-[#111111]">Coursera</span>,
        I&apos;ve Developed Practical Skills In Digital Marketing, Creative
        Communication And Problem-Solving.
      </p>

      
      <div className="relative overflow-hidden bg-[#F9C6B3] rounded-2xl border-l-4 border-[#E87A54] px-6 sm:px-8 py-6 mt-7 shadow-xs">
        <span
          aria-hidden="true"
          className="absolute -top-3 right-5 text-7xl font-serif text-[#E87A54]/25 select-none pointer-events-none"
        >
          &ldquo;
        </span>

        <div className="relative z-10">
          <div className="flex items-center gap-2">
            <span className="text-[#E87A54] text-2xl">✳</span>
            <p className="text-2xl sm:text-sm font-bold uppercase tracking-wider text-[#111111]">
              MY APPROACH
            </p>
          </div>

          <p className="text-2xl sm:text-sm leading-relaxed text-[#222222] mt-2 max-w-3xl">
            &quot;Good Marketing Is More Than Just Posting Content. It&apos;s
            About Understanding Audiences, Creating Meaningful Connections And
            Turning Creative Ideas Into Strategies That Help Brands Grow.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
