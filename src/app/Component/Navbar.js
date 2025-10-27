"use client";

import React, { useEffect, useState } from "react";
import Animatedlink from "./Animatedlink";
import { motion } from "framer-motion";

const Navbar = ({ children, className }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const container = document.querySelector(".scroll-container");

    if (!container) return;

    const handleScroll = () => {
      setScrolled(container.scrollTop > 80);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -300 }}
      animate={{ y: 0 }}
      transition={{
        delay: 2.2,
        type: "spring",
        stiffness: 600,
        damping: 40,
      }}
      className={` flex w-full 
         
            px-[32px] lg:px-[96px] text-black"
         backdrop-blur-sm rounded-[12px]  justify-between py-[24px] lg:py-[12px]`}
    >
      <img src="/Icon.png" className="w-[44px]" />
      <div className="gap-[32px] hidden items-center lg:flex">
        <Animatedlink href="#work" underlineColor="white">
          Work
        </Animatedlink>
        <Animatedlink href="#faq" underlineColor="white">
          Questions
        </Animatedlink>
      </div>
    </motion.div>
  );
};

export default Navbar;
