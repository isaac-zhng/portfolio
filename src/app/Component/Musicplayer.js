const Musicplayer = () => {
  return (
    <div className="flex items-center text-white rounded-[12px] overflow-hidden bg-[url('/musicbg.png')] bg-cover bg-center justify-center gap-[12px]">
      <div className="p-[20px] backdrop-blur-xs flex items-center justify-center gap-[12px]">
        <div className="w-[80px] aspect-square bg-white rounded-[8px]" />
        <div className="flex flex-col gap-[12px]">
          <div className="flex flex-col gap-[4px] ">
            <p className="font-medium text-white">Music</p>
            <p className="text-[12px] text-white/50">Artist</p>
          </div>
          <div className="flex gap-[64px]">
            <div className="flex gap-[12px]  ">
              <i className="fa-solid cursor-pointer hover:scale-110 transition-all duration-300 fa-backward"></i>
              <i className="fa-solid cursor-pointer hover:scale-110 transition-all duration-300 fa-pause"></i>
              <i className="fa-solid cursor-pointer hover:scale-110 transition-all duration-300 fa-forward"></i>
            </div>
            <i className="fa-solid cursor-pointer hover:scale-110 transition-all duration-300 fa-list"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Musicplayer;
