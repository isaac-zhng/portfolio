import React from "react";
import Text from "./Text";
import { ArrowRight } from "./Icons";

const WorkCard = ({ imgsrc, profilesrc, header, children, link, disabled }) => {
  return (
    <div className="h-fit md:h-full lg:px-[24px] bg-white relative md:w-full overflow-hidden cursor-pointer hover:translate-y-[-24px]  transition-all duration-300   rounded-[24px]  lg:py-[24px] border flex flex-col gap-[12px] items-center justify-center border-black/10">
      <div className="w-full md:h-full h-fit p-[12px] md:p-[24px] gap-[16px] justify-between flex flex-col rounded-[16px] bg-cover bg-center">
        {/* {children} */}
        <img
          src={imgsrc}
          className="w-full md:h-full  object-cover rounded-[12px]"
        />
        {/* <Text className="text-white">{children}</Text> */}
        <div className="w-full h-fit flex bg-black flex-col gap-[12px]  text-white p-[24px] rounded-[12px] ">
          <p className="font-medium">{header}</p>
          <Text className="text-white/90">{children}</Text>
          {!disabled ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 text-black hover:bg-white w-full flex justify-center items-center py-[12px] rounded-[12px]"
            >
              View Case Study
            </a>
          ) : (
            <a className="bg-white text-black opacity-75 cursor-not-allowed w-full flex justify-center items-center py-[12px] rounded-[12px]">
              Case Study Coming Soon
            </a>
          )}
        </div>
      </div>
      <div className="absolute group-hover:max-h-100 max-h-0 gap-[4px] flex justify-between items-end overflow-hidden bottom-0 left-0 w-full bg-white group-hover:py-[24px] transition-all duration-300 px-[24px]">
        <div className="flex flex-col gap-[4px]">
          <p>Focused Uniqlo Redesign</p>
          <Text>A focused redesign on the current Uniqlo Wesbite</Text>
        </div>
        <p className="group-hover:-rotate-45 group-hover:delay-400 transition-all duration-200">
          <ArrowRight />
        </p>
      </div>
    </div>
  );
};

export default WorkCard;
