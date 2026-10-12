import React from "react";
import Link from "next/link";
import Animatedlink from "./Animatedlink";
import Text from "./Text";
import SecondaryButton from "./SecondaryButton";
import Rounded from "./Rounded";
import Backtop from "./Backtop";
import { ArrowRight } from "./Icons";
import { motion } from "framer-motion";
import Image from "next/image";
import Animatedname from "./Animatedname";
const Footer = () => {
  return (
    <div className="xl:p-[12px] lg:p-[12px] md:p-[12px]">
      <footer className="z-[1] relative px-[32px] lg:px-[64px] xl:px-[128px]  py-[40px] xl:gap-[128px] xl:py-[64px]  md:rounded-[8px] xl:rounded-[12px] overflow-hidden  flex flex-col justify-center text-[14px]  items-center text-white gap-[64px]">
        <Image
          src="/isaac.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_70%] brightness-95"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#1D1D28]/0 pointer-events-none" />
        <div className="hidden z-20 items-end md:flex absolute bottom-0 right-0">
          <Rounded
            width={24}
            height={24}
            fill="#E3E5F6"
            className="rotate-90"
          />
          <div className="relative items-end  flex flex-col">
            <Rounded
              width={24}
              height={24}
              fill="#E3E5F6"
              className="rotate-90"
            />
            <div className="bg-[#E3E5F6] md:pl-[12px] md:pt-[12px] pl-[24px] pt-[24px] rounded-tl-[12px] ">
              <Backtop />
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[#1D1D28]/60 pointer-events-none" />
        <Animatedname fill="white" />

        <div className="  w-full gap-[36px] z-[1] flex flex-col">
          {/* <div className="flex lg:flex-row flex-col justify-between w-full items-start gap-[24px] lg:items-center">
            <Text className="lg:w-[40%] text-white">
              Made by me, for you. I strive to make the complex simple, with
              the core question of “why” echoed through every choice of my
              work.
            </Text>
            <a href="mailto:isaaclfzhang@gmail.com">
              <SecondaryButton>Contact Me</SecondaryButton>
            </a>
          </div> */}
          <div className="flex flex-col gap-[24px]">
            <div className="px-[16px] py-[12px] text-[14px] w-fit flex items-center gap-[8px] rounded-[12px] border border-white/10 backdrop-blur-sm">
              <div className="w-[12px] aspect-square rounded-full bg-lime-500" />
              <p>Portfolio Online</p>
            </div>
            <div className="flex w-fit items-end gap-[64px]">
              <div className="flex flex-col gap-[8px]">
                <Animatedlink
                  underlineColor="white"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=isaaclfzhang@gmail.com"
                  newTab={true}
                >
                  Email
                </Animatedlink>
                <Animatedlink
                  target="_blank"
                  underlineColor="white"
                  newTab={true}
                  href="/isaac_resume.pdf"
                >
                  Resume
                </Animatedlink>
                <Animatedlink
                  underlineColor="white"
                  href="https://www.linkedin.com/in/isaaczhng"
                  newTab={true}
                >
                  Linkedin
                </Animatedlink>
              </div>

              <div className="flex flex-col gap-[8px]">
                <Animatedlink underlineColor="white" href="#about">
                  About
                </Animatedlink>
                <Animatedlink underlineColor="white" href="#experience">
                  Experience
                </Animatedlink>
                <Animatedlink underlineColor="white" href="#projects">
                  Projects
                </Animatedlink>
              </div>
            </div>
            {/* <Animatedlink
              href="/#top"
              underlineColor="white"
              className="underline  underline-offset-12"
            >
              Designed by ZH_
            </Animatedlink> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
