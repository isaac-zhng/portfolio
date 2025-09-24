import React from "react";

const WelcomeCard = ({ imgsrc, text }) => {
  return (
    <div className="h-fit w-fit group transition-all duration-300 rounded-[24px] relative flex flex-col gap-[12px] items-center justify-center ">
      {/* <p className="text-black/30  font-light text-[12px]">{text}</p> */}
      <img
        src={imgsrc}
        className="w-[240px] md:w-[200px] xl:w-[280px] lg:w-[240px] aspect-square"
      />
    </div>
  );
};

export default WelcomeCard;
