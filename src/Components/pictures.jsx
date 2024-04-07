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
                  className="overflow-hidden relative rounded-3xl  shadow-lg cursor-pointer md:h-[14rem] lg:h-[30rem] mb-[5rem]"
                >
                  <div className="h-[80%] l">
                    <img
                      src={photo.urls.regular}
                      alt={photo.alt_description || "No Caption"}
                      className="  h-[100%]  rounded-3xl hover:scale-105 hover:brightness-75 w-[100%] object-cover transition-transform duration-300 ease-in-out"
                    />

                    <p className="p-5 ">{photo.alt_description}</p>
                  </div>
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
