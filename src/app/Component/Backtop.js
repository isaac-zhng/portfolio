import Arrow from "./Arrow";

const Backtop = () => {
  return (
    <a
      href="#home"
      className="flex items-center p-[20px] flex-col rounded-[12px] group cursor-pointer text-white  overflow-hidden bg-[url('/musicbg.png')] bg-cover bg-center justify-center gap-[12px]"
    >
      <Arrow />
      {/* <p>To Top</p> */}
    </a>
  );
};

export default Backtop;
