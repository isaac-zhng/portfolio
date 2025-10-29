"use client";
import Experience from "./Component/Experience";
const Experiencesection = () => {
  return (
    <div
      id="experience"
      className="py-[32px] lg:py-[48px] relative bg-white lg:px-[64px] xl:px-[128px] px-[32px] font-light flex border-t border-b border-black/10 flex-col gap-[48px]"
    >
      <div className="absolute top-0  hidden xl:block left-0 w-full h-full px-[64px] pointer-events-none">
        <div className="w-full h-full border-l border-r border-black/10"></div>
      </div>
      <div className="flex flex-col md:gap-[16px] gap-[20px]">
        <h2 className="text-[32px] xl:text-[64px] leading-none font-bold">
          EXPERIENCE{" "}
        </h2>
        <p className="text-black/90 md:w-1/2">
          A Product Designer and Researcher studying Human Centered Computing @
          RIT. I specialize in design, research, and visual development.
        </p>
        <a
          href="/isaac_ux_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1E1E35]  border group gap-[0px] hover:gap-[8px] transition-all duration-300 border-white/10 backdrop-blur-sm w-fit px-[24px] py-[16px] rounded-[12px] text-white flex items-center justify-center"
        >
          View Resume
          <span className="group-hover:scale-100 scale-0 text-[0px] group-hover:text-[16px] transition-all duration-300">
            {"->"}
          </span>
        </a>
      </div>

      <div className="flex flex-col gap-[20px] xl:p-[24px] xl:rounded-[12px] xl:border border-[#5A56A2]/20">
        <Experience
          header="Accessibility and AI Research Team Lead"
          text="@ Rochester Institute of Technology"
          underline
        >
          <p className="text-[14px] text-black/50">
            Led a 5+ member research team at RIT investigating how AI tools
            enhance accessibility for ESL, deaf/hard-of-hearing, and
            neurodivergent students. Authored and structured 60% of a research
            paper focusing on AI-driven support for DHH learners. Coordinated
            collaboration across 3+ research teams and 2 faculty advisors to
            align accessibility research goals. Contributed to a project that
            advanced institutional understanding of inclusive AI applications,
            influencing 4 ongoing accessibility initiatives.
          </p>
        </Experience>
        <div className="w-full h-[1px] bg-black/10" />
        <Experience header="UI/UX Designer" text="@ Tiger Snack Box">
          <p className="text-[14px] text-black/50">
            Conducted a UX case study that improved the usability of Tiger Snack
            Box’s mobile game, increasing task completion speed by 23%. Designed
            and distributed a survey gathering 30+ user responses, identifying
            three key usability pain points and design opportunities. Analyzed
            10+ competitor games to benchmark interface trends and inform design
            strategy. Delivered insights that boosted user engagement and visual
            appeal across the game’s main interface.
          </p>
        </Experience>
        <div className="w-full h-[1px] bg-black/10" />
        <Experience
          header="Graphic Designer"
          text="@ Infinity Educational Programs"
        >
          <p className="text-[14px] text-black/50">
            Produced 100+ digital and print graphics, including social media
            campaigns, flyers, and web banners, maintaining 100% brand
            consistency across platforms. Increased social media engagement by
            18% through optimized layouts and cohesive visual systems.
            Collaborated with a 4-person product team to accelerate design
            delivery, reducing asset turnaround time by 25%. Supported multiple
            marketing campaigns that enhanced brand visibility across email and
            social platforms.
          </p>
        </Experience>
      </div>
    </div>
  );
};

export default Experiencesection;
