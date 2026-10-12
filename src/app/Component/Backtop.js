import Image from "next/image";
import Arrow from "./Arrow";

const Backtop = () => {
  return (
    <a
      href="#home"
      className="relative flex items-center p-[20px] flex-col rounded-[12px] group cursor-pointer text-white overflow-hidden justify-center gap-[12px]"
    >
      {/* This 858x344 background is displayed behind a 48px arrow, so pull a
          small variant rather than the full 292 KB PNG. */}
      <Image
        src="/musicbg.png"
        alt=""
        fill
        sizes="120px"
        className="object-cover object-center"
      />
      <div className="relative z-10">
        <Arrow />
      </div>
      {/* <p>To Top</p> */}
    </a>
  );
};

export default Backtop;
