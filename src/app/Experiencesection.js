"use client";
import Experience from "./Component/Experience";
import { ArrowRight } from "./Component/Icons";
import { motion } from "framer-motion";
const Experiencesection = () => {
  return (
    <div
      id="experience"
      className="py-[32px] md:py-[40px] lg:py-[48px] relative bg-white px-[24px] sm:px-[32px] md:px-[48px] lg:px-[64px] xl:px-[128px] font-light flex border-t border-b border-black/10 flex-col gap-[40px] md:gap-[48px]"
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
        <h2 className="text-[32px] md:text-[48px] xl:text-[64px] leading-none font-bold">
          EXPERIENCE
        </h2>
        <p className="text-black/90 md:w-1/2">
          Most recently, I worked as a Technical Product Manager at IBM, and
          before that as an Accessibility & AI Research Team Lead at Rochester
          Institute of Technology.
        </p>
        <a
          href="/isaac_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1E1E35]  border group gap-[0px] hover:gap-[8px] transition-all duration-300 border-white/10 backdrop-blur-sm w-fit px-[24px] py-[16px] rounded-[12px] text-white flex items-center justify-center"
        >
          View Resume
          <span className="group-hover:scale-100 scale-0 text-[0px] group-hover:text-[16px] transition-all duration-300">
            <ArrowRight />
          </span>
        </a>
      </div>

      <div className="flex flex-col gap-[20px] xl:p-[24px] xl:rounded-[12px] xl:border border-[#5A56A2]/20">
        <Experience
          header="Technical Product Manager"
          text="@ IBM"
          underline
        >
          <p className="text-[14px] text-black/50">
            At IBM, I owned the end-to-end lifecycle of OSS Dashboard, a
            centralized tool that gives cross-functional teams visibility into
            community engagement and project health across 10+ open-source
            products — cutting manual data retrieval time by 68%. I authored
            the Q4 2026 Apache Camel release PRFAQ, translating complex strategy
            into a vision spanning AI-driven SDLC automation, post-quantum
            cryptography, and Quarkus 4 / Spring Boot 4 upgrades, which aligned
            7 engineering teams and accelerated release planning by 40%. I also
            built an IBM Bob competitive-analysis skill, now adopted across Red
            Hat Application Services teams, that automates market research,
            win/loss scenario planning, and strengths/weaknesses benchmarking.
          </p>
        </Experience>
        <div className="w-full h-[1px] bg-black/10" />
        <Experience
          header="Accessibility & AI Research Team Lead"
          text="@ Rochester Institute of Technology"
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
      </div>
    </div>
  );
};

export default Experiencesection;
