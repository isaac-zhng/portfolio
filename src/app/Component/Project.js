"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Lock } from "./Icons";
import ProjectVideo from "./ProjectVideo";
import OSSDashboardGate from "./OSSDashboardGate";

const Project = ({
  imgsrc,
  videoSrc,
  header,
  text,
  link,
  comingSoon,
  figmaLink,
  tags,
  imagePosition = "center 70%",
  imageOverlay,
  gatedDemo = false,
}) => {
  const [demoAccessGranted, setDemoAccessGranted] = useState(false);
  // Call sites pass the cover as a single-element array; next/image needs one
  // concrete source.
  const cover = Array.isArray(imgsrc) ? imgsrc[0] : imgsrc;

  return (
    <div className="flex flex-col md:flex-row px-[24px] sm:px-[32px] md:px-[40px] lg:px-[64px] xl:px-[32px] md:gap-[32px] lg:gap-[64px] xl:gap-[108px]">
      <div className="md:w-1/2 py-[32px] md:py-[48px] lg:py-[64px] xl:py-[80px] xl:px-[20px] flex flex-col gap-[12px]">
        <div className="flex gap-[12px]">
          {tags.map((tag) => (
            <div
              key={tag}
              className="text-[12px] px-[12px] py-[8px] bg-white/10 rounded-[12px] w-fit text-white/90"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-[4px]">
          <h3 className="text-[32px] font-semibold">{header}</h3>
          <p className="text-[14px] text-white/80 ">{text}</p>
        </div>
        {gatedDemo ? (
          <div className="flex flex-wrap gap-[12px]">
            {demoAccessGranted ? (
              <>
                <a href="/api/oss-dashboard-demo" target="_blank" rel="noopener noreferrer" className="group flex w-fit items-center justify-center gap-0 rounded-[12px] border border-white/10 bg-white px-[24px] py-[16px] text-[#1E1E35] transition-all hover:gap-[8px] hover:bg-white/90">
                  Demo <ArrowRight className="scale-0 text-[0px] transition-all duration-300 group-hover:scale-100 group-hover:text-[16px]" />
                </a>
                <Link href="/projects/oss-dashboard" className="group flex w-fit items-center justify-center gap-0 rounded-[12px] border border-white/20 px-[24px] py-[16px] text-white transition-all hover:gap-[8px] hover:bg-white/10">
                  Case Study <ArrowRight className="scale-0 text-[0px] transition-all duration-300 group-hover:scale-100 group-hover:text-[16px]" />
                </Link>
              </>
            ) : (
              <>
                <button type="button" disabled aria-disabled="true" className="flex w-fit cursor-not-allowed items-center justify-center gap-[8px] rounded-[12px] border border-white/10 bg-white/70 px-[24px] py-[16px] text-[#1E1E35]/70">
                  Demo <Lock />
                </button>
                <button type="button" disabled aria-disabled="true" className="flex w-fit cursor-not-allowed items-center justify-center gap-[8px] rounded-[12px] border border-white/20 px-[24px] py-[16px] text-white/60">
                  Case Study <Lock />
                </button>
              </>
            )}
          </div>
        ) : (
          <div className="flex gap-[12px]">
            {!comingSoon ? (
              <Link
                href={link}
                target={link.startsWith("/") ? undefined : "_blank"}
                rel={link.startsWith("/") ? undefined : "noopener noreferrer"}
                className="text-[#1E1E35]  bg-white border group gap-[0px] hover:gap-[8px] transition-all duration-300 border-white/10 backdrop-blur-sm w-fit px-[24px] py-[16px] rounded-[12px]  flex items-center justify-center"
              >
                Case Study
                <span className="group-hover:scale-100 scale-0 text-[0px] group-hover:text-[16px] transition-all duration-300">
                  <ArrowRight />
                </span>
              </Link>
            ) : (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1E1E35] opacity-70 cursor-not-allowed bg-white border group gap-[0px] hover:gap-[12px] transition-all duration-300 border-white/10 backdrop-blur-sm w-fit px-[24px] py-[16px] rounded-[12px]  flex items-center justify-center"
              >
                Coming Soon
                <span className="group-hover:scale-100 scale-0 text-[0px] group-hover:text-[16px] transition-all duration-300">
                  <Lock />
                </span>
              </a>
            )}
            {!comingSoon && (
              <a
                href={figmaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white   border group gap-[0px] hover:gap-[8px] transition-all duration-300 border-white/10 backdrop-blur-sm w-fit px-[24px] py-[16px] rounded-[12px]  flex items-center justify-center"
              >
                Figma File
                <span className="group-hover:scale-100 scale-0 text-[0px] group-hover:text-[16px] transition-all duration-300">
                  <ArrowRight />
                </span>
              </a>
            )}
          </div>
        )}
      </div>
      <div className="md:w-1/2 relative flex overflow-hidden p-[16px] bg-black/20 rounded-[12px] md:p-[16px] lg:p-[24px] md:rounded-[12px] md:border-l md:border-r border-white/20">
        <div
          className={`inset-[24px] z-4000 absolute bg-gray-500/5 ${videoSrc || gatedDemo ? "pointer-events-none" : ""}`}
        />
        {gatedDemo ? (
          <OSSDashboardGate onAccessChange={setDemoAccessGranted} />
        ) : videoSrc ? (
          <ProjectVideo
            src={videoSrc}
            poster="/oss-dashboard-thumbnail.png"
            label={`${header} project video`}
            className="h-[220px] flex-1 shadow-lg sm:h-[260px] md:h-[320px] lg:h-[360px] xl:h-[400px] rounded-[8px] md:rounded-[12px] z-[3000]"
          />
        ) : cover ? (
          <Image
            src={cover}
            alt={header}
            width={2000}
            height={1000}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover flex-1 h-[220px] sm:h-[260px] md:h-[320px] lg:h-[360px] xl:h-[400px] shadow-lg rounded-[8px] md:rounded-[12px] z-[3000]"
          />
        ) : (
          <div className="relative flex-1 h-[220px] sm:h-[260px] md:h-[320px] lg:h-[360px] xl:h-[400px] overflow-hidden gap-[12px] rounded-[12px] flex flex-col items-center justify-center">
            <Image
              src="/isaac.jpg"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover brightness-95"
              style={{ objectPosition: imagePosition }}
            />
            {imageOverlay && (
              <div className={`absolute inset-0 ${imageOverlay}`} aria-hidden="true" />
            )}
            <div className="relative z-10 flex flex-col items-center justify-center gap-[12px]">
              <Lock className="text-white text-[32px]" />
              <p className="shadow-lg">Project Coming Soon</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
