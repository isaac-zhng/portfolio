import React from "react";
import { motion } from "framer-motion";
const Animation = () => {
  return (
    <div className="w-full flex justify-center items-center h-[100dvh] z-[2] relative bg-white">
      <motion.div
        initial={{ width: "auto", opacity: 100 }}
        animate={{ width: 0, opacity: 0 }}
        transition={{
          delay: 1.5,
          type: "spring",
          stiffness: 800,
          damping: 40,
        }}
        className="translate-x-1/2  -translate-y-1/2 absolute top-[50%] right-[50%]"
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: -180 }}
          transition={{
            delay: 1,
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
          className="flex gap-[16px]"
        >
          <motion.div
            initial={{ rotate: 0, scale: 0, x: 96 }}
            animate={{ rotate: -90, scale: 1, x: 0 }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className="w-[64px] lg:w-[96px] rounded-[8px] bg-white z-[0] aspect-square bg-[url(/musicbg.png)] bg-cover "
          />
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 90 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className="w-[64px] lg:w-[96px] rounded-[8px] bg-white z-[2] aspect-square bg-[url(/musicbg.png)] bg-cover "
          />
          <motion.div
            initial={{ rotate: 0, scale: 0, x: -96 }}
            animate={{ rotate: 180, scale: 1, x: 0 }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className="w-[64px] lg:w-[96px] rounded-[8px] bg-white z-[0] aspect-square bg-[url(/musicbg.png)] bg-cover "
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 600 }}
        animate={{ opacity: 100, x: 0 }}
        transition={{
          delay: 1.5,
          type: "spring",
          stiffness: 200,
          damping: 40,
        }}
        className="lg:text-[96px] text-[42px]  z-1 font-bold"
      >
        ISAAC ZHANG
      </motion.div>
    </div>
  );
};

export default Animation;
