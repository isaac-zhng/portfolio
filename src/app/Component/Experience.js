"use client";
import { useState } from "react";
import { ChevronDown } from "./Icons";
const Experience = ({ header, text, children, underline }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`${isOpen ? "gap-[20px]" : ""} flex flex-col`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex  ${
          underline ? "" : ""
        } justify-between items-center cursor-pointer group w-full`}
      >
        <div className="flex flex-col justify-start items-start gap-[8px]">
          <p className="text-left">{header}</p>
          <p className="text-[12px] text-black/50">{text}</p>
        </div>
        <div
          className="relative cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <ChevronDown
            className={`cursor-pointer text-black hover:scale-110 transition-all duration-300 ${
              isOpen ? "rotate-180" : "group-hover:-rotate-90"
            }`}
          />
          <div className="w-[32px] opacity-0 group-hover:opacity-100 transition-all duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[32px] bg-black/10 rounded-full flex items-center justify-center" />
        </div>
      </button>
      <div
        className={`${
          isOpen ? "max-h-[240px] py-[24px]" : "h-0"
        } overflow-hidden bg-gray-50 transition-all duration-300 px-[24px] w-full`}
      >
        <div className="-ml-[24px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Experience;
