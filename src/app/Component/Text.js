import React from "react";

const Text = ({ children, className }) => {
  return <p className={`font-light text-[14px] ${className}`}>{children}</p>;
};

export default Text;
