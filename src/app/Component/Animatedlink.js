import React from "react";
import Link from "next/link";
const Animatedlink = ({
  children,
  onClick,
  underlineColor = "black",
  active = false,
  href = "#",
}) => {
  return (
    <Link
      href={href}
      className="group cursor-pointer font-light text-[14px] relative w-fit"
      onClick={onClick}
    >
      <span>{children}</span>
      <div
        className={`h-full group-hover:w-full translate-y-[2px] transition-all duration-300 w-[0px] border-b absolute top-0 left-0 ${
          active && "w-full"
        }`}
        style={{ borderBottomColor: underlineColor }}
      ></div>
    </Link>
  );
};

export default Animatedlink;
