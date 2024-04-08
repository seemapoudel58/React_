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
  const [loading, setLoading] = useState(false);
  const[error, setError] = useState(null);
  const [value, setValue] = useState("");

  useEffect(() => {
<<<<<<< Updated upstream
    setLoading(true); 
    const delay = setTimeout(() => {
      axios
        .get(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`)
        .then((response) => {
          setPhotoList(response.data);
          setLoading(false); 
        })
    }, 2000);
  
    return () => clearTimeout(delay);
=======
    setLoading(true);
    axios
      .get('http://abc.com')
      .then((response) => {
        setPhotoList(response.data);
        // if(!response.ok){
        //   throw Error(response.statusText);
        // }
      })
      .catch((error) => {
       console.log(error.message);
       setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  }, []);
  
  const handleChange = (e) => {

    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    // if there's no search text then return or do nothing
    if (!value.trim()) return;

    axios
      .get(
        `http://abc${value}&client_id=${ACCESS_KEY}`
      )
<<<<<<< Updated upstream
      .then((response) => setPhotoList(response.data.results));
    setLoading(false);
=======
      .then((response) => setPhotoList(response.data.results))
      .catch((error) => {
        console.error( error.message);
        setError(error);
      })
      .finally(()=>{
        setLoading(false);
      })
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    setValue("");
  };

  return (
    <>
      <Header />
      <Search
        handleChange={handleChange}
        value={value}
        handleSubmit={handleSubmit}
      />
      {/* <Option /> */}
      <Pictures photoList={photoList} loading={loading} error= {error} />
    </>
  );
}

export default App;
