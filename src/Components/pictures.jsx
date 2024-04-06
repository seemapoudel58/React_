import React from "react";

const Pictures = ({ photoList }) => {
  return (
    <div>
      <h3 className="mt-[1rem] text-3xl font-semibold">Pictures</h3>
      <ul className="grid grid-cols-2 mt-[2rem] gap-5 max-w-[80vw] md:grid-cols-3 lg:grid-cols-4 mx-auto">
        {photoList.map((photo, index) =>{
          return(
            <li key={index} className='h-[10rem] rounded overflow-hidden shadow-lg transition-transform duration-300 ease-in-out   hover:scale-105  cursor-pointer md:h-[14rem] lg:h-[20rem]'>
              <img src={photo.urls.regular} className="h-[100%]  w-[100%] object-cover" />
            </li>
          )
        })}
      </ul>  
    </div>
  );
};

export default Pictures;
