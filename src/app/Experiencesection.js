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
          header="AI Research Team Lead"
          text="@ Rochester Institute of Technology"
          underline
        >
          <p className="text-[14px] text-black/50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </Experience>
        <div className="w-full h-[1px] bg-black/10" />
        <Experience header="UI/UX Designer" text="@ Tiger Snack Box">
          <p className="text-[14px] text-black/50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </Experience>
      </div>
    </div>
  );
};

export default Experiencesection;
