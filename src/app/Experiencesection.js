"use client";
import Experience from "./Component/Experience";
import { motion } from "framer-motion";
const Experiencesection = () => {
  return (
    <div
      id="experience"
      className="py-[32px] lg:py-[48px] relative bg-white lg:px-[64px] xl:px-[128px] px-[32px] font-light flex border-t border-b border-black/10 flex-col gap-[48px]"
    >
      <div className="absolute top-0  hidden xl:block left-0 w-full h-full px-[64px] pointer-events-none">
        <motion.div
          initial={{
            scaleY: 0,
            width: 0,
            borderTopWidth: 1,
            borderBottomWidth: 1,
          }}
          whileInView={{
            scaleY: 1,
            width: "100%",
            borderTopWidth: 0,
            borderBottomWidth: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 40,
          }}
          viewport={{ once: true, amount: 1 }}
          className="border-l border-r h-full origin-center border-black/10 "
        ></motion.div>
      </div>
      <div className="flex flex-col md:gap-[16px] gap-[20px]">
        <h2 className="text-[32px] xl:text-[64px] leading-none font-bold">
          EXPERIENCE
        </h2>
        <p className="text-black/90 md:w-1/2">
          Isaac has had real-world experience in design, research, and visual
          development. Recently, Isaac worked as an Accessibility & AI Research
          Team Lead at Rochester Institute of Technology.
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
          header="Accessibility & AI Research Team Lead"
          text="@ Rochester Institute of Technology"
          underline
        >
          <p className="text-[14px] text-black/50">
            At Rochester Institute of Technology, I led a multidisciplinary
            research team of over five members exploring how AI tools can
            enhance accessibility for ESL, deaf/hard-of-hearing, and
            neurodivergent students. I co-authored the foundational writing and
            structure of a research paper focusing on how AI can specifically
            support DHH students in classroom settings. My work involved
            synthesizing data from literature, surveys, and interviews to
            identify barriers in existing tools. I collaborated with professors
            and fellow researchers to refine experimental design and ensure
            academic rigor. This role strengthened my leadership, research
            communication, and accessibility-focused design skills.
          </p>
        </Experience>
        <div className="w-full h-[1px] bg-black/10" />
        <Experience header="UI/UX Designer" text="@ Tiger Snack Box">
          <p className="text-[14px] text-black/50">
            At Tiger Snack Box, I led a user experience research initiative for
            the company’s mobile puzzle game, PACK!, designed to extend the
            brand’s identity through interactive engagement. I conducted a full
            UX case study identifying user pain points, creating actionable
            design solutions, and testing prototypes. I distributed and analyzed
            a user survey with 30+ participants to evaluate usability and
            aesthetics, revealing key insights into user flow efficiency and
            visual clarity. My competitive analysis of similar games informed
            redesigns that improved timed user flows by 23%. This role deepened
            my understanding of user-centered design and iterative testing in a
            real-world product context.
          </p>
        </Experience>
        <div className="w-full h-[1px] bg-black/10" />
        <Experience
          header="Graphic Designer"
          text="@ Infinity Educational Programs"
        >
          <p className="text-[14px] text-black/50">
            At Infinity Educational Programs, I designed digital and print
            marketing materials that supported brand communication across
            multiple platforms. Using Adobe Illustrator and Photoshop, I
            produced graphics, infographics, and promotional ads optimized for
            social media, email, and print. I maintained visual consistency
            while adapting layouts to different media, ensuring cohesive
            campaigns across channels. Collaboration with the product manager
            and design team accelerated project turnaround and improved design
            workflow efficiency. This experience honed my visual design,
            branding, and cross-platform adaptation skills.
          </p>
        </Experience>
      </div>
    </div>
  );
};

export default Experiencesection;
