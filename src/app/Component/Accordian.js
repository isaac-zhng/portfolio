"use client";
import { useState } from "react";
import Text from "./Text";
const Accordian = ({ label, children, isOpen, onToggle }) => {
  return (
    <div>
      <button
        onClick={onToggle}
        className="py-[24px] group cursor-pointer gap-[48px] border-b border-black/20 justify-between w-full flex items-center"
      >
        <Text className="text-left">{label}</Text>
        <div
          className={`${
            isOpen
              ? "bg-[url(/Bluegradient.png)] bg-cover border-white"
              : "border-black"
          } w-[28px] aspect-square relative border group-hover:bg-gray-200 rounded-full flex items-center justify-center`}
        >
          <div
            className={`${
              isOpen ? "rotate-0 " : "rotate-90 bg-black"
            } w-[12px] h-[1px] transition-all rounded-full duration-300 absolute `}
          ></div>
          <div className="w-[12px] absolute h-[1px] rounded-full bg-black"></div>
        </div>
      </button>
      <div
        className={`${
          isOpen ? "max-h-[240px] py-[24px]" : "h-0"
        } overflow-hidden bg-gray-50 transition-all duration-300 px-[24px] w-full`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordian;
