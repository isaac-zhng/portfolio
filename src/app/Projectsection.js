import Project from "./Component/Project";
import Rounded from "./Component/Rounded";
import Mediancard from "./Component/Mediancard";
import { motion } from "framer-motion";
const Projectsection = () => {
  return (
    <motion.div
      initial={{ padding: "0px" }}
      whileInView={{ padding: "var(--spacing)" }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 40,
      }}
      viewport={{ once: true, amount: 0.2 }}
      id="projects"
      className="relative overflow-hidden  bg-white  dynamic-spacing-project lg:rounded-b-[24px]"
    >
      <div className="  overflow-hidden relative lg:rounded-[12px] lg:py-[64px]  lg:gap-[48px] flex flex-col  bg-gray-900 bg-cover bg-center">
        <div className="absolute z-4000 top-0  hidden xl:block left-0 w-full h-full px-[64px] pointer-events-none">
          <div className="w-full h-full border-l border-r border-white/10"></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[#1D1D28]/60 pointer-events-none" />
        <div className="hidden z-20  lg:flex absolute top-0 right-0">
          <Rounded width={24} height={24} fill="white" />
          <div className="relative items-end flex flex-col">
            <div className=" bg-white pl-[12px] w-[180px] h-[96px] pb-[12px] rounded-bl-[24px] ">
              {/* <Mediancard /> */}
            </div>
            <Rounded width={24} height={24} fill="white" />
          </div>
        </div>

        <div className="py-[32px] md:py-[40px] lg:py-[0px] xl:gap-[20px] z-1 text-white px-[24px] sm:px-[32px] md:px-[48px] lg:px-[64px] xl:px-[128px] font-light flex flex-col gap-[16px]">
          <h2 className="text-[32px] md:text-[48px] xl:text-[64px] leading-none font-bold">
            PROJECTS{" "}
          </h2>
          <p className="text-white/90 md:w-1/2">
            I bring teams together to turn complex ideas into shipped
            products—aligning strategy, engineering, and design from early
            planning through development and delivery.
          </p>
        </div>
        <div className="md:px-[24px] lg:px-[48px] xl:px-[128px] xl:border border-white/10 bg-[#8B8EAC]/10 backdrop-blur-xs flex flex-col font-light text-white">
          <Project
            imgsrc={[
              "/Pack/cover1.png",
              //   "/Pack/cover2.png",
              //   "/Pack/cover3.png",
            ]}
            header="PACK!"
            text="A Mobile Puzzle Game for Tiger Snack Box, an international snack box company. I was hired as a UI/UX Designer to design the game and the website."
            link="/projects/pack"
            figmaLink="https://www.figma.com/design/ncwvxsxmQiO9UKTgyYNWeJ/PACK--Mobile-Game?node-id=302-84498&t=8lEYesEWfz0EjCzO-1"
            tags={["UI/UX Design", "Mobile Game", "UX Research"]}
          />
          <div className="w-full h-[1px] bg-white/10" />
          <Project
            header="WorthIt?"
            text="A React Native expense-tracking app built with Expo and TypeScript, featuring a route-based gas cost optimizer that ranks stations along driving routes by true net savings."
            imagePosition="center 60%"
            imageOverlay="bg-[#5A56A2]/20 mix-blend-multiply"
            comingSoon
            tags={["React Native", "Expo", "TypeScript"]}
          />
          <a
            href="/dashboardproject/index.html"
            className="group mx-[24px] mb-[24px] flex items-center justify-between rounded-[12px] border border-white/15 bg-white/5 p-[24px] text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span className="flex flex-col gap-[4px]">
              <span className="text-[20px] font-semibold">dashboardproject</span>
              <span className="text-[14px] text-white/70">Open my personal dashboard</span>
            </span>
            <span aria-hidden="true" className="text-[24px] transition-transform group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projectsection;
