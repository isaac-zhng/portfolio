import React from "react";
import Text from "./Text";
import { ArrowRight } from "./Icons";
const SecondaryButton = ({ children }) => {
  return (
    <button className="px-[24px] py-[12px] items-center rounded-full bg-white text-black cursor-pointer flex gap-[12px]">
      <Text className="text-black">{children}</Text>
      <div className="w-[24px]  rounded-full aspect-square bg-black text-white flex items-center justify-center">
        <ArrowRight />
      </div>
    </button>
  );
};

export default SecondaryButton;
