import React from "react";

const Pictures = ({ photoList, loading }) => {
  return (
    <div>
      {loading ? (
        <p>Loading.....</p>
      ) : (
        <>
          <h3 className="mt-[1rem] text-2xl font-semibold">Pictures</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 mt-[2rem] gap-5 max-w-[80vw] md:grid-cols-3 lg:grid-cols-4 mx-auto">
            {photoList.map((photo, index) => {
              return (
                <li
                  key={index}
                  className="overflow-hidden w-full aspect-[3/3.5] relative rounded-3xl  shadow-lg cursor-pointer flex justify-center items-end group"
                >
                  <div className="h-full w-full">
                    <img
                      src={photo.urls.regular}
                      alt={photo.alt_description || "No Caption"}
                      className="w-full h-full rounded-3xl hover:brightness-[.2] object-cover transition-transform duration-300 ease-in-out"
                    />
                  </div>
                  <p className="hidden absolute italic mb-4 px-2 z-20 group-hover:block transition-all duration-300 ease-in-out capitalize text-white text-md">
                    {photo.alt_description}
                  </p>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default Pictures;
