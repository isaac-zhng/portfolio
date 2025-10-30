const Project = ({
  imgsrc,
  header,
  text,
  link,
  comingSoon,
  figmaLink,
  tags,
}) => {
  return (
    <div className="flex flex-col lg:flex-row px-[32px] lg:px-[64px] xl:px-[32px] lg:gap-[108px]">
      <div className="lg:w-1/2 py-[32px] md:py-[48px] lg:py-[80px]   xl:px-[20px] flex flex-col gap-[12px]">
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
              className="text-white   border group gap-[0px] hover:gap-[8px] transition-all duration-300 border-white/10 backdrop-blur-sm w-fit px-[24px] py-[16px] rounded-[12px]  flex items-center justify-center"
            >
              Figma File
              <span className="group-hover:scale-100 scale-0 text-[0px] group-hover:text-[16px] transition-all duration-300">
                {"->"}
              </span>
            </a>
          )}
        </div>
      </div>
      <div className="lg:w-1/2 relative flex overflow-hidden md:p-[24px] md:bg-black/20 md:rounded-t-[12px] lg:rounded-none lg:border-l lg:border-r border-white/20">
        <div className="inset-[24px] z-4000 absolute bg-gray-500/5" />
        {imgsrc ? (
          <img
            src={imgsrc}
            alt={header}
            className=" object-cover flex-1 h-[240px] md:h-[280px] lg:h-full shadow-lg xl:rounded-[12px] rounded-t-[8px] z-[3000] "
          />
        ) : (
          <div className="flex-1 bg-[url('/isaac.png')] h-[240px] md:h-[280px] lg:h-full  flex-col gap-[12px] bg-cover bg-center rounded-[12px] flex items-center justify-center">
            <i className="fa-solid fa-lock text-white text-[32px]"></i>
            <p className="shadow-lg">Project Coming Soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
