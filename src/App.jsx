import { useEffect, useState } from "react";

import axios from "axios";

import Search from "./Components/Search";
import Header from "./Components/Header";
import Footer from './Components/Footer'
import Option from "./Components/Option";
import { ACCESS_KEY } from "./utils/config";
import Pictures from "./Components/Pictures";
import ThemeButton from "./Components/ThemeButton";

import { ThemeProvider } from './context/ThemeContext'

import "./App.css";

const App = () => {
  const [photoList, setPhotoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState("");
  const [submit, setSubmit] = useState(false);
  const [click, setClick] = useState(false);
  const [pages, setPages] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

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
        `https://api.unsplash.com/search/photos?page=${pages}&per_page=12&query=${filter}&client_id=${ACCESS_KEY}`
      )
      .then((response) => {
        setPhotoList(response.data.results);
        setTotalPages(response.data.total_pages);
        setClick(true);
        setSubmit(false);
        // setPages(1);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [filter, pages]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    setLoading(true);

    // if there's no search text then return or do nothing
    if (!value.trim()) return;

    axios
      .get(
        `https://api.unsplash.com/search/photos?page=${pages}&per_page=12&query=${value}&client_id=${ACCESS_KEY}`
      )
      .then((response) => {
        setPhotoList(response.data.results);
        setTotalPages(response.data.total_pages);
        setSubmit(true);
        setClick(false);
        // console.log('searchClicked:', click);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });

    // setValue("");
  };

  useEffect(() => {
    handleSubmit();
  }, [pages]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
    setPages(1);
  };

  useEffect(() => {
    // console.log('value:', value);
    setSubmit(false);
    // setClick(false);
  }, [value]);

  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <ThemeButton />
      <Header />
      <Search
        handleChange={handleChange}
        value={value}
        handleFormSubmit={handleFormSubmit}
        error={error}
      />
      <Option
        setFilter={setFilter}
        setClick={setClick}
        setSubmit={setSubmit}
        setValue={setValue}
        setPages={setPages}
      />
      <Pictures
        photoList={photoList}
        loading={loading}
        error={error}
        value={value}
        submit={submit}
        click={click}
        filter={filter}
      />
      <Footer pages={pages} totalPages={totalPages} setPages={setPages} />
    </ThemeProvider>
  );
};

export default App;
