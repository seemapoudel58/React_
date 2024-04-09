import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/header";
import Search from "./Components/search";
import Option from "./Components/option";
import Pictures from "./Components/pictures";
import { ACCESS_KEY } from "./Components/config";
import axios from "axios";

function App() {
  const [photoList, setPhotoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const[error, setError] = useState(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    setLoading(true);

    axios
      .get(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`)
      .then((response) => {
        setPhotoList(response.data);
      })
      .catch((error)=>{
        setError(error.message);
      })
      .finally(() => setLoading(false));
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
        `https://api.unsplash.com/search/photos?page=1&query=${value}&client_id=${ACCESS_KEY}`
      )
      .then((response) => setPhotoList(response.data.results))
      .catch((error)=>{
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });

    setValue("");
  };

  const officePhotos = (e)=>{
    e.preventDefault();
    setLoading(true);
    axios.get('https://api.unsplash.com/search/photos?page=1&query=office')
    .then((response) => setPhotoList(response.data.result))
    .catch((error)=>{
      setError(error.message);
    })
    .finally(()=>{
      setLoading(false);
    })


    
  

  }

  return (
    <>
      <Header />
      <Search
        handleChange={handleChange}
        value={value}
        handleSubmit={handleSubmit}
        error ={error}
      />
      <Option office = {officePhotos} />
      <Pictures photoList={photoList} loading={loading} error= {error} />
    </>
  );
}

export default App;
