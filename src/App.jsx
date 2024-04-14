import { useState, useEffect } from "react";
import "./App.css";
import Header from './Components/header';
import Search from "./Components/search";
import Option from './Components/option';
import Pictures from "./Components/pictures";
import { ACCESS_KEY } from "./utils/config";
import axios from "axios";

function App() {
  const [photoList, setPhotoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState("");
  const[submit, setSubmit] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`)
      .then((response) => {
        setPhotoList(response.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  // For filters
  useEffect(() => {
    // Don't wanna search any image based on filter if there isn't any
    if (!filter) return;

    setLoading(true);
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${filter}&client_id=${ACCESS_KEY}`
      )
      .then((response) => setPhotoList(response.data.results))
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [filter]);
  

 

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
      .then((response) => {
        setPhotoList(response.data.results);
        setSubmit(true);

      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });

    // setValue("");
  };
  useEffect (()=>{
    console.log('value:', value);
    setSubmit(false);
  },[value]);
  return (
    <>
      <Header />
      <Search
        handleChange={handleChange}
        value={value}
        handleSubmit={handleSubmit}
        error={error}
      />
      <Option setFilter={setFilter} />
      <Pictures photoList={photoList} loading={loading} error={error} value ={value} submit = {submit}/>
    </>
  );
}

export default App;
