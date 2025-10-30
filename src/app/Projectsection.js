import Project from "./Component/Project";
import Rounded from "./Component/Rounded";
import Mediancard from "./Component/Mediancard";
import { motion } from "framer-motion";
const Projectsection = () => {
  return (
    <motion.div
      initial={{ padding: "0px" }}
      whileInView={{ padding: "var(--radius)" }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 40,
      }}
      viewport={{ once: true, amount: 0.2 }}
      id="projects"
      className=" overflow-hidden bg-white dynamic-radius lg:rounded-b-[24px]"
    >
      <div className="xl:px-[64px] lg:px-[64px] overflow-hidden relative xl:rounded-[12px] lg:py-[64px] xl:gap-[64px] lg:gap-[48px] flex flex-col  bg-[url('/isaac.png')] bg-cover bg-center">
        <div className="absolute top-0 left-0 w-full h-full bg-[#1D1D28]/60 pointer-events-none" />
        <div className="hidden z-20  xl:flex absolute top-0 right-0">
          <Rounded width={24} height={24} fill="white" />
          <div className="relative items-end flex flex-col">
            <div className=" bg-white pl-[12px] pb-[12px] rounded-bl-[12px] ">
              <Mediancard />
            </div>
            <Rounded width={24} height={24} fill="white" />
          </div>
        </div>
        <div className="py-[32px] lg:py-[0px] xl:gap-[20px]  z-1   text-white lg:px-[0px] px-[32px] font-light flex flex-col gap-[16px]">
          <h2 className="text-[32px] xl:text-[64px] leading-none font-bold">
            PROJECTS{" "}
          </h2>
          <p className="text-white/90 md:w-1/2">
            A Product Designer and Researcher studying Human Centered Computing
            @ RIT. I specialize in design, research, and visual development.
          </p>
        </div>
        <div className=" xl:gap-[48px] xl:py-[64px] xl:border z-1 border-white/10 bg-[#8B8EAC]/10 backdrop-blur-xs lg:rounded-[16px] xl:rounded-[24px] py-[32px] flex flex-col gap-[20px] font-light text-white ">
          <Project
            imgsrc={[
              "/Pack/cover1.png",
              "/Pack/cover2.png",
              "/Pack/cover3.png",
            ]}
            header="PACK!"
            text="A Mobile Puzzle Game for Tiger Snack Box, an international snack box company"
            link="https://medium.com/@iz5183/pack-9956b14dfe0c"
            figmaLink="https://www.figma.com/design/ncwvxsxmQiO9UKTgyYNWeJ/PACK--Mobile-Game?node-id=302-84498&t=8lEYesEWfz0EjCzO-1"
          />
          <Project
            imgsrc={[
              "/Pack/cover1.png",
              "/Pack/cover2.png",
              "/Pack/cover3.png",
            ]}
            header="Fixing Uniqlo's Navigation Flow"
            text="A focused redesign on the current Uniqlo Wesbite"
            comingSoon
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Projectsection;
