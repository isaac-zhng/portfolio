import { ArrowRight } from "./Icons";

const Mediancard = () => {
  return (
    <a
      href="https://medium.com/@iz5183"
      target="_blank"
      className="flex items-center  rounded-[12px] group cursor-pointer text-white  overflow-hidden bg-gray-800 bg-cover bg-center justify-center gap-[12px]"
    >
      <div className="p-[20px] flex items-center justify-center gap-[12px]">
        <div className="w-[64px] h-[64px] bg-[url('/medium.png')] bg-cover bg-center rounded-[8px]" />
        <div className="flex flex-col gap-[12px]">
          <div className="flex flex-col gap-[4px] ">
            <p className="text-[12px] text-white/50">Note</p>
            <div className="flex items-center gap-[4px]">
              <p className="font-medium text-white">View my Medium </p>
              <span className="text-white -rotate-45 group-hover:rotate-0 transition-all duration-300">
                <ArrowRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Mediancard;
