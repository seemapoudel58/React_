import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/header";
import Search from "./Components/search";
// import Option from "./Components/option";
import Pictures from "./Components/pictures";
import { ACCESS_KEY } from "./Components/config";
import axios from "axios";

function App() {
  const [photoList, setPhotoList] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`)
      .then((response) => setPhotoList(response.data));
  }, []);

  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // const serachImage = () =>{
  //   const filteredImage = photoList.filter((image) =>{
  //     image.alt_description =
  //     image.alt_description=== null? 'No Caption': image.alt_descritpion;
  //     return image.alt_description;

  //   })
  //   setPhotoList(filteredImage);
  // }

  return (
    <>
      <Header />
      <Search handleChange={handleChange} value={value} />
      {/* <Option /> */}
      <Pictures photoList={photoList} />
    </>
  );
}

export default App;
