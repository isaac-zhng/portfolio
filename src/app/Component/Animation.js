import Image from "next/image";
import Animatedname from "./Animatedname";
import Rounded from "./Rounded";
import { ArrowRight } from "./Icons";

// The hero renders in its final state.
//
// It used to run an entrance sequence: the page shipped a mostly-free white
// screen while a badge slid in, the hero's corner radius tweened, the name
// drew itself stroke by stroke and the copy faded up on staggered delays.
// Functionally that was a loading animation sitting in front of the page, and
// its timings lived in ../timing.js. All of it is gone.
//
// The classes below are the exact values those animations used to settle on,
// so the static layout is identical to the old resting layout:
//   border-radius 12px, overlay opacity 0.3, scale 1, no offset, opacity 1.
// Moving those into CSS also means there is no intro work on the main thread
// at all -- previously every one of those properties was written per frame.
const Animation = () => {
  return (
    <div id="about" className="w-full bg-white dynamic-radius p-[var(--radius)]">
      <div className="w-full h-[90dvh] overflow-hidden rounded-[12px] justify-end pb-[64px] relative xl:gap-[24px] gap-[12px]  flex-col flex xl:px-[128px] lg:px-[64px] lg:pb-[64px] px-[32px]">
        {/* Was a CSS background, so the browser always pulled the full 1.5 MB
            PNG. Going through next/image lets the server send a right-sized
            AVIF/WebP instead. `priority` because this is the hero. */}
        <Image
          src="/isaac.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_70%] brightness-95"
        />
        <div className="absolute hidden lg:flex gap-[24px] justify-between items-center top-0 left-0 w-full h-full p-[20px] opacity-30">
          <div className="gap-[24px] h-full flex flex-col justify-between">
            <div className=" border-l-1 border-t-1  border-lime-500 rounded-tl-[4px] w-[20px] h-[20px] " />
            <div className="h-full w-[1px] bg-lime-500" />
            <div className=" border-l-1 border-b-1  border-lime-500 rounded-bl-[4px] w-[20px] h-[20px] " />
          </div>
          <div className="h-full w-full flex flex-col justify-between">
            <div className="h-[1px] w-full bg-lime-500" />
            <div className="h-[1px] w-full bg-lime-500" />
          </div>
          <div className="gap-[24px] h-full items-end  flex flex-col justify-between ">
            <div className=" border-r-1 border-t-1  border-lime-500 rounded-tr-[4px] w-[20px] h-[20px] " />
            <div className="h-full w-[1px] bg-lime-500" />
            <div className=" border-r-1 border-b-1  border-lime-500 rounded-br-[4px] w-[20px] h-[20px] " />
          </div>
        </div>
        <div className="flex absolute top-0 left-0 origin-top-left ">
          <div className="relative items-start flex flex-col">
            <div className="w-fit bg-white h-fit md:pb-[12px] pr-[8px] pb-[8px]  md:pr-[12px] rounded-br-[12px] ">
              <Image
                src="/profilepic.png"
                alt=""
                width={64}
                height={64}
                className="w-[64px] h-[64px] rounded-[12px] object-cover"
              />
            </div>
            <Rounded
              width={24}
              height={24}
              fill="white"
              className="rotate-270"
            />
          </div>
          <Rounded width={24} height={24} fill="white" className="rotate-270" />
        </div>
        <div className="absolute bottom-0 font-light w-full xl:px-[128px] lg:px-[64px] lg:pb-[64px] px-[32px] py-[64px] left-0 flex flex-col gap-[20px] justify-end">
          <div className=" border border-white/24 text-[12px] gap-[8px] w-fit px-[16px] py-[12px] rounded-[12px] text-white flex items-center justify-center">
            <div className="w-[12px] aspect-square rounded-full bg-lime-500" />
            Available for Work
          </div>

          {/* Kept as a sizing wrapper: `--width` is the width the old animation
              settled on, and the name SVG is `w-full h-full`, so it needs a
              box to fill. */}
          <div className="dynamic-text" style={{ width: "var(--width, 100%)" }}>
            <Animatedname fill="white" />
          </div>
          <p className="text-white/90 md:w-1/2">
            A Product Manager and Researcher studying Human-Centered Computing
            @ RIT. I specialize in management, research, and design.
          </p>
          <div>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=isaaclfzhang@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5A56A2]/36 border group gap-[0px] hover:gap-[8px] transition-all duration-300 border-white/10 w-fit px-[24px] py-[16px] rounded-[12px] text-white flex items-center justify-center"
            >
              Contact Me
              <span className="group-hover:scale-100 scale-0 text-[0px] group-hover:text-[16px] transition-all duration-300">
                <ArrowRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animation;
