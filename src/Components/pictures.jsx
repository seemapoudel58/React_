import React from "react";

const Pictures = ({ photoList }) => {
  return (
    <div>
      <h3 className="mt-[1rem] text-3xl font-semibold">Pictures</h3>
      {photoList.map((photo, index) => {
        return (
          <div key={index}>
            <img src={photo.urls.regular} />
          </div>
        );
      })}
    </div>
  );
};

export default Pictures;
