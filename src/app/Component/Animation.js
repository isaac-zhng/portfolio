import React from "react";
import { motion } from "framer-motion";
import Animatedname from "./Animatedname";
import { useState, useEffect } from "react";
import Rounded from "./Rounded";
const Animation = () => {
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAtEnd(true), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      initial={{ padding: "0px" }}
      animate={{ padding: "var(--radius)" }}
      transition={{
        delay: 3,
        type: "spring",
        stiffness: 200,
        damping: 40,
      }}
      className="w-full bg-white dynamic-radius"
    >
      <motion.div
        initial={{
          height: "100dvh",
          borderRadius: "0px",
        }}
        animate={{
          height: "90dvh",
          borderRadius: "12px",
        }}
        transition={{
          delay: 3,
          type: "spring",
          stiffness: 200,
          damping: 40,
        }}
        className="w-full overflow-hidden dynamic-radius justify-end pb-[64px] relative xl:gap-[24px] gap-[12px]  flex-col flex  xl:px-[128px] lg:px-[64px] lg:pb-[64px] px-[32px]  bg-[url('/isaac.png')] bg-cover bg-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 3,
            type: "spring",
            stiffness: 200,
            damping: 40,
          }}
          className="flex absolute top-0 left-0 origin-top-left "
        >
          <div className="relative items-start flex flex-col">
            <div className="w-fit bg-white h-fit md:pb-[12px] pr-[8px] pb-[8px]  md:pr-[12px] rounded-br-[12px] ">
              <div className="w-[64px] h-[64px] bg-[url('/profilepic.png')] bg-cover bg-center rounded-[12px]" />
            </div>
            <Rounded
              width={24}
              height={24}
              fill="white"
              className="rotate-270"
            />
          </div>
          <Rounded width={24} height={24} fill="white" className="rotate-270" />
        </motion.div>
        <motion.div
          initial={{ bottom: "50%", transform: "translateY(50%)" }}
          animate={{ bottom: "0%", transform: "translateY(0%)" }}
          transition={{
            delay: 3,
            type: "spring",
            stiffness: 200,
            damping: 40,
          }}
          className="absolute font-light w-full xl:px-[128px] lg:px-[64px] lg:pb-[64px] px-[32px] py-[64px] left-0 flex flex-col gap-[24px] justify-end items-starth-full"
        >
          <motion.div
            initial={{ y: -200, opacity: 0, height: "0px" }}
            animate={{ y: 0, opacity: 100, height: "44px" }}
            transition={{
              delay: 3,
              type: "spring",
              stiffness: 200,
              damping: 40,
            }}
            className=" border border-white/24 text-[12px] w-fit px-[16px] py-[12px] rounded-[12px] text-white flex items-center justify-center"
          >
            Hey There 👋
          </motion.div>

          <div className="w-full">
            <Animatedname fill="white" />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 300, height: "0px" }}
            animate={{ opacity: 100, y: 0, height: "auto" }}
            transition={{
              delay: 3,
              type: "spring",
              stiffness: 200,
              damping: 40,
            }}
            className="text-white/90 md:w-1/2"
          >
            A Product Designer and Researcher studying Human Centered Computing
            @ RIT. I specialize in design, research, and visual development.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 300, height: "0px" }}
            animate={{ opacity: 100, y: 0, height: "auto" }}
            transition={{
              delay: 3.1,
              type: "spring",
              stiffness: 200,
              damping: 40,
            }}
          >
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=iz5183@g.rit.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5A56A2]/36 border group gap-[0px] hover:gap-[8px] transition-all duration-300 border-white/10 backdrop-blur-sm w-fit px-[24px] py-[16px] rounded-[12px] text-white flex items-center justify-center"
            >
              Contact Me
              <span className="group-hover:scale-100 scale-0 text-[0px] group-hover:text-[16px] transition-all duration-300">
                {"->"}
              </span>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Animation;
