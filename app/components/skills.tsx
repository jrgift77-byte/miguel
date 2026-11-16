const leftSkills = [
  "Social Media Marketing",
  "Email Marketing",
  "Influencer Marketing",
];

const rightSkills = [
  "SEO & Content Marketing",
  "Graphic Design",
  "Paid Advertising",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full max-w-5xl mx-auto px-6 md:px-12 pt-12"
    >
      <div className="flex items-center justify-between">
        <div>
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#E87A54] bg-[#FCEBE3] px-2.5 py-0.5 rounded-full mb-1.5">
            Core Expertise
          </span>
          <h2 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-[#111111]">
            DIGITAL MARKETING SKILLS
            <span className="text-[#E87A54]">.</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-x-6 max-w-3xl mt-5 text-xs sm:text-sm font-medium text-[#111111]">
        
        <ul className="space-y-3">
          {leftSkills.map((skill) => (
            <li
              key={skill}
              className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-[#222222]/15 bg-white/60 hover:border-[#E87A54] hover:bg-[#FCEBE3]/70 transition-all"
            >
              <span className="text-[#E87A54] text-sm transition-transform group-hover:rotate-45">
                ✳
              </span>
              <span>{skill}</span>
            </li>
          ))}
        </ul>

        
        <ul className="space-y-3">
          {rightSkills.map((skill) => (
            <li
              key={skill}
              className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-[#222222]/15 bg-white/60 hover:border-[#E87A54] hover:bg-[#FCEBE3]/70 transition-all"
            >
              <span className="text-[#E87A54] text-sm transition-transform group-hover:rotate-45">
                ✳
              </span>
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
