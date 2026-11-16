import Image from "next/image";

const projects = [
  {
    number: "01",
    title: "VICTORIA FALLS DISTILLING CO.",
    subtitle: "Brand & Content Strategy",
    details: [
      "Brand Positioning, Audience Insights,",
      "Content Themes And Campaign Planning",
    ],
    image: "/botanical.jpeg",
    alt: "Welcome to Victoria Falls Distilling",
  },
  {
    number: "02",
    title: "AFRICA TRAVEL VICTORIA FALLS",
    subtitle: "Influencer Marketing Strategy",
    details: [
      "Tourism Content Direction,",
      "Influencer Selection And Campaign Planning",
    ],
    image: "/impala.jpeg",
    alt: "Africa Travel Victoria Falls Email Marketing Campaign",
  },
  {
    number: "03",
    title: "EDGARS STORES ZIMBABWE",
    subtitle: "Paid Advertising Campaign",
    details: [
      "Creative Ad Concept, Campaign Structure,",
      "Audience Targeting And Performance KPIs",
    ],
    image: "/edgars.jpeg",
    alt: "Edgars Stores Zimbabwe Paid Ad Campaign",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="w-full max-w-5xl mx-auto px-6 md:px-12 pt-14 pb-16"
    >
     
      <div>
        <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#E87A54] bg-[#FCEBE3] px-2.5 py-0.5 rounded-full mb-1.5">
          Portfolio
        </span>
        <h2 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-[#111111]">
          SELECTED WORK<span className="text-[#E87A54]">.</span>
        </h2>
        <p className="text-xs sm:text-sm text-[#333333] mt-1 max-w-xl leading-relaxed">
          Creative Strategies That Help Brands Grow. Selected Portfolio And
          Concept Projects.
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-7">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col rounded-2xl border border-[#222222]/15 bg-white/60 p-4 hover:border-[#E87A54] hover:bg-[#FCEBE3]/40 hover:shadow-md transition-all duration-300"
          >
            
            <div className="relative w-full aspect-16/10 rounded-xl overflow-hidden bg-[#E6C5B5]/40">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-3 left-3 text-[10px] font-bold tracking-wider uppercase bg-[#111111]/85 text-[#FAF6F4] px-2.5 py-1 rounded-full backdrop-blur-xs">
                {project.number}
              </span>
            </div>

            
            <div className="pt-4 px-1 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xs sm:text-sm font-bold uppercase tracking-tight text-[#111111] group-hover:text-[#E87A54] transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-[#111111]/60 group-hover:text-[#E87A54] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </div>

                <span className="inline-block text-[11px] font-semibold text-[#E87A54] bg-[#FCEBE3] px-2.5 py-0.5 rounded-full mt-2">
                  {project.subtitle}
                </span>

                <div className="text-[11px] sm:text-xs text-[#444444] leading-relaxed mt-2.5">
                  {project.details.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
