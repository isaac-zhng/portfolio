import Rounded from "./Component/Rounded";
import Musicplayer from "./Component/Musicplayer";
const Landing = () => {
  return (
    <div
      id="about"
      className="xl:p-[24px] p-[8px] lg:p-[16px] md:p-[12px] bg-white relative"
    >
      <div className="pt-[320px] md:rounded-[8px] xl:rounded-[12px] rounded-[8px] xl:pt-[320px] relative  bg-[url('/isaac.png')] bg-cover bg-center xl:px-[128px] lg:px-[64px] lg:pb-[64px] px-[32px] font-light flex flex-col xl:gap-[24px] gap-[16px] bg-black pb-[32px]">
        {/* <div className="hidden lg:flex absolute top-0 right-0">
          <Rounded width={24} height={24} fill="white" />
          <div className="relative items-end flex flex-col">
            <div className=" bg-white md:pl-[12px] md:pb-[12px] pl-[24px] pb-[24px] rounded-bl-[12px] ">
              <Musicplayer />
            </div>
            <Rounded width={24} height={24} fill="white" />
          </div>
        </div> */}
        <div className="flex absolute top-0 left-0">
          <div className="relative items-start flex flex-col">
            <div className="w-fit bg-white h-fit md:pb-[12px] pr-[8px] pb-[8px]  md:pr-[12px] rounded-br-[12px] ">
              <div className="w-[64px] h-[64px] bg-[url('/profilepic.png')] bg-cover bg-center rounded-[12px]" />
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
        <div className=" border border-white/24 text-[12px] w-fit px-[16px] py-[12px] rounded-[12px] text-white flex items-center justify-center">
          Hey There 👋
        </div>
        <img src="/text.png" alt="text" />
        <p className="text-white/90 md:w-1/2">
          A Product Designer and Researcher studying Human Centered Computing @
          RIT. I specialize in design, research, and visual development.
        </p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=iz5183@g.rit.edu"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#5A56A2]/36 border group gap-[0px] hover:gap-[8px] transition-all duration-300 border-white/10 backdrop-blur-sm w-fit px-[24px] py-[16px] rounded-[12px] text-white flex items-center justify-center"
        >
          Contact Me
          <span className="group-hover:scale-100 scale-0 text-[0px] group-hover:text-[16px] transition-all duration-300">
            {"->"}
          </span>
        </a>
      </div>
    </div>
  );
};

export default Landing;
