const Project = ({ imgsrc, header, text, link, comingSoon, figmaLink }) => {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="px-[32px] xl:px-[64px] flex xl:flex-row xl:justify-between flex-col gap-[12px]">
        <div className="flex flex-col gap-[4px]">
          <h3 className="text-[20px] font-medium">{header}</h3>
          <p className="text-[12px] ">{text}</p>
        </div>
        <div className="flex gap-[12px]">
          {!comingSoon ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1E1E35]  bg-white border group gap-[0px] hover:gap-[8px] transition-all duration-300 border-white/10 backdrop-blur-sm w-fit px-[24px] py-[16px] rounded-[12px]  flex items-center justify-center"
            >
              Case Study
              <span className="group-hover:scale-100 scale-0 text-[0px] group-hover:text-[16px] transition-all duration-300">
                {"->"}
              </span>
            </a>
          ) : (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1E1E35] opacity-70 cursor-not-allowed bg-white border group gap-[0px] hover:gap-[12px] transition-all duration-300 border-white/10 backdrop-blur-sm w-fit px-[24px] py-[16px] rounded-[12px]  flex items-center justify-center"
            >
              Coming Soon
              <span className="group-hover:scale-100 scale-0 text-[0px] group-hover:text-[16px] transition-all duration-300">
                <i className="fa-solid fa-lock"></i>
              </span>
            </a>
          )}
          {!comingSoon && (
            <a
              href={figmaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white  border-white border group gap-[0px] hover:gap-[8px] transition-all duration-300 border-white/10 backdrop-blur-sm w-fit px-[24px] py-[16px] rounded-[12px]  flex items-center justify-center"
            >
              Figma File
              <span className="group-hover:scale-100 scale-0 text-[0px] group-hover:text-[16px] transition-all duration-300">
                {"->"}
              </span>
            </a>
          )}
        </div>
      </div>
      {!comingSoon && (
        <div className="relative">
          {/* <div className="top-1/2 opacity-24 z-[20] -translate-y-1/2 w-[32px] h-[32px] bg-[#5A56A2] rounded-[12px] flex items-center justify-center right-[24px]  absolute">
            <i className="fa-solid fa-arrow-right"></i>
          </div> */}
          <div className="overflow-x-scroll  relative scrollbar-hide ">
            <div className="gap-[16px] px-[32px] xl:px-[64px] w-fit flex">
              {imgsrc.map((img, index) => (
                <div
                  key={index}
                  className="w-[300px] xl:w-full h-[280px] bg-black/80 rounded-[12px]"
                >
                  <img
                    src={img}
                    alt={header}
                    className="w-full h-full object-cover rounded-[12px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
