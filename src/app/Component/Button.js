import React from "react";
import Text from "./Text";
import { ArrowRight } from "./Icons";
const Button = ({ children }) => {
  return (
    <button className="px-[24px] group py-[12px] items-center rounded-full  bg-gradient-to-r from-[#9CADFF] to-[#4D6BFF] cursor-pointer flex gap-[12px]">
      <Text className="text-white">{children}</Text>
      <div className="w-[24px] group-hover:-rotate-45 transition-all duration-300  rounded-full aspect-square bg-white flex items-center justify-center">
        <ArrowRight />
      </div>
    </button>
  );
};

export default Button;
