import React from "react";
import Link from "next/link";
import Animatedlink from "./Animatedlink";
import Text from "./Text";
import SecondaryButton from "./SecondaryButton";
const Footer = () => {
  return (
    <footer className="z-[1] sticky  flex flex-col bg-black justify-center text-[14px]  items-center text-white gap-[28px]">
      <div className="px-[32px] lg:px-[64px] py-[40px] w-full gap-[36px] flex flex-col">
        <div className="flex lg:flex-row flex-col justify-between w-full items-start gap-[24px] lg:items-center">
          <Text className="lg:w-[40%] text-white">
            By Isaac. For you. Isaac strives to make the complex simple, with
            the core question of “why” echoed through every choice of his work.
          </Text>
          <SecondaryButton>Contact Me</SecondaryButton>
        </div>
        <div className="flex w-full justify-between items-end">
          <div className="flex w-fit items-end gap-[64px]">
            <div className="flex flex-col gap-[8px]">
              <Animatedlink
                underlineColor="white"
                href="/Junheng_SWE_Resume.pdf"
              >
                Resume
              </Animatedlink>
              <Animatedlink
                underlineColor="white"
                href="https://www.linkedin.com/in/junhengzheng"
              >
                Linkedin
              </Animatedlink>
              <Animatedlink
                underlineColor="white"
                href="https://www.linkedin.com/in/junhengzheng"
              >
                Instagram
              </Animatedlink>
            </div>
            <div className="flex flex-col gap-[8px]">
              <Animatedlink
                underlineColor="white"
                href="https://github.com/junheng-zheng"
              >
                Home
              </Animatedlink>
              <Animatedlink
                underlineColor="white"
                href="https://www.instagram.com/juhnegg"
              >
                Works
              </Animatedlink>
              <Animatedlink
                underlineColor="white"
                href="https://www.instagram.com/juhnegg"
              >
                Experience
              </Animatedlink>
            </div>
          </div>
          <Animatedlink
            href="/#top"
            underlineColor="white"
            className="underline  underline-offset-12"
          >
            Designed by ZH_
          </Animatedlink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
