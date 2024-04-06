import React from "react";

const Option = () => {
  return (
    <div className=" max-w-[60vw] mx-auto grid justify-center items-center gap-4 lg:grid-cols-4 md:gap-1 mt-[2rem] mb-[2rem]">
      <button className="max-w-[9rem] rounded-full border-2 border-gray px-4 py-2 bg-gray-200 hover:border-gray-400 focus:outline-none focus:border-blue-500 ">
        Mountain
      </button>
      <button className="max-w-[9rem]  rounded-full border-2 border-gray px-4 py-2 bg-gray-200 hover:border-gray-400 focus:outline-none focus:border-blue-500 ">
        Beaches
      </button>
      <button className="max-w-[9rem]  rounded-full border-2 border-gray px-4 py-2 bg-gray-200 hover:border-gray-400 focus:outline-none focus:border-blue-500 ">
        Birds
      </button>
      <button className="max-w-[9rem]  rounded-full border-2 border-gray px-4 py-2 bg-gray-200 hover:border-gray-400 focus:outline-none focus:border-blue-500 ">
        Food
      </button>
    </div>
  );
};
export default Option;
