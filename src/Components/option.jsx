import React from "react";

const Option = ({office}) => {
  return (
    <div className=" max-w-[60vw] mx-auto grid justify-center items-center gap-4 lg:grid-cols-4 md:gap-1 mt-[2rem] ">
      <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-3xl border border-slate-200 p-[2px]">
        <div className="moving-border absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)]"></div>
        <button 
        onClick={office}
        className="relative z-20 flex justify-center items-center w-full rounded-3xl  border-2 border-gray px-4 py-2 bg-gray-200  ">
        
          office
        </button>
      </div>

      <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-3xl border border-slate-200 p-[2px]">
        <div className="moving-border absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)]"></div>
        <button className="relative z-20 flex justify-center items-center w-full rounded-3xl  border-2 border-gray px-4 py-2 bg-gray-200  ">
          Beaches
        </button>
      </div>

      <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-3xl border border-slate-200 p-[2px]">
        <div className="moving-border absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)]"></div>

        <button className="relative z-20 flex justify-center items-center w-full rounded-3xl  border-2 border-gray px-4 py-2 bg-gray-200 item-center ">
          Birds
        </button>
      </div>

      <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-3xl border border-slate-200 p-[2px]">
        <div className="moving-border absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)]"></div>

        <button className="relative z-20 flex justify-center items-center w-full rounded-3xl  border-2 border-gray px-4 py-2 bg-gray-200">
          Food
        </button>
      </div>
    </div>
  );
};
export default Option;
