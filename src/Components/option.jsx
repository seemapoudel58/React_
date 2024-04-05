import React from 'react';

const Option = () => {
  return (
    <div className='flex justify-center  items-center flex-col md:flex-row mt-[2rem] md:space-x-10'>
      <button className='max-w-[9rem] rounded-full border-2 border-gray px-4 py-2 bg-gray-200 hover:border-gray-400 focus:outline-none focus:border-blue-500 mb-[1rem] md:mb-[none]'>Mountain</button>
      <button className='max-w-[9rem]  rounded-full border-2 border-gray px-4 py-2 bg-gray-200 hover:border-gray-400 focus:outline-none focus:border-blue-500 mb-[1rem] md:mb-[none]'>Beaches</button>
      <button className='max-w-[9rem]  rounded-full border-2 border-gray px-4 py-2 bg-gray-200 hover:border-gray-400 focus:outline-none focus:border-blue-500 mb-[1rem] md:mb-[none]'>Birds</button>
      <button className='max-w-[9rem]  rounded-full border-2 border-gray px-4 py-2 bg-gray-200 hover:border-gray-400 focus:outline-none focus:border-blue-500 mb-[1rem] md:mb-[none]'>Food</button>
    </div>
  );
};
export default Option;
