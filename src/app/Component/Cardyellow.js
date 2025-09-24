import React from "react";
import Text from "./Text";

const WorkCard = ({ imgsrc, profilesrc, header, children }) => {
  return (
    <div className="px-[12px] lg:px-[24px] relative h-full w-full overflow-hidden cursor-pointer hover:translate-y-[-24px] hover:rotate-2 transition-all duration-300   rounded-[24px] py-[12px] lg:py-[24px] border flex flex-col gap-[12px] items-center justify-center border-black/10">
      <div
        className="w-full h-full p-[24px] gap-[16px] justify-between flex flex-col rounded-[16px] bg-cover bg-center"
        style={{ backgroundImage: `url(${imgsrc})` }}
      >
        <div className=" bg-black/5 absolute inset-0" />
        {/* {children} */}
        <img
          src={profilesrc}
          className="w-[56px] hidden lg:block border border-white/90 h-[56px] aspect-square  bg-black rounded-full"
        ></img>
        {/* <Text className="text-white">{children}</Text> */}
        <div className="w-full h-fit flex flex-col gap-[4px] lg:bg-white/10 text-white lg:p-[12px] rounded-[12px] ">
          <p className="font-medium">{header}</p>
          <Text className="text-white/90">{children}</Text>
        </div>
      </div>
      <div className="absolute group-hover:max-h-100 max-h-0 gap-[4px] flex justify-between items-end overflow-hidden bottom-0 left-0 w-full bg-white group-hover:py-[24px] transition-all duration-300 px-[24px]">
        <div className="flex flex-col gap-[4px]">
          <p>Focused Uniqlo Redesign</p>
          <Text>A focused redesign on the current Uniqlo Wesbite</Text>
        </div>
        <p className="group-hover:-rotate-45 group-hover:delay-400 transition-all duration-200">
          {"->"}
        </p>
      </div>
    </div>
  );
};

export default WorkCard;
