import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/header'
import Search from './Components/search'
import Option from './Components/option'
import Pictures from  './Components/pictures'
import { ACCESS_KEY } from './Components/config'
import axios from 'axios';

function App() {

  const[photoList,  setPhotoList] = useState([]);

  useEffect(() =>{

    axios
    .get(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`)
    .then(response => setPhotoList(response.data));
  },[]);

  



  return (
    <>
      <Header />
      <Search />
      <Option />
      <Pictures  photoList = {photoList} />
      
    </>
  )
}

export default App
