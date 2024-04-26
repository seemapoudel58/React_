import React, { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { IoSunnySharp } from "react-icons/io5";
import useTheme from "../Context/ThemeContext";



const ThemeButton = () => {

  const { themeMode, lightTheme, darkTheme } = useTheme(); 

  const [ isDarkMode, setIsDarkMode] = useState(false);
  

  const handleTheme = () => { 
    setIsDarkMode(!isDarkMode);
    if(themeMode === 'dark'){
      lightTheme();

    }else {
      darkTheme();
    }

  }

  return (
    <div 
    className="flex float-end text-4xl text-black cursor-pointer hover:scale-105"
    >
      <button
      className="bg-gray-400 rounded-md p-2"
      onClick={handleTheme}>
        {isDarkMode? <IoSunnySharp /> :  <MdDarkMode />}
      </button>
    </div>
  );
};

export default ThemeButton;
