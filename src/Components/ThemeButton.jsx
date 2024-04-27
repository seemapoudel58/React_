// ThemeButton.js
import { MdDarkMode } from "react-icons/md";
import { IoSunnySharp } from "react-icons/io5";
import useTheme from "../context/ThemeContext";

const ThemeButton = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  console.log("THEME MODE ", themeMode);

  // Remove the useState for isDarkMode since it will be managed by themeMode

  const handleTheme = () => {
    if (themeMode === "dark") {
      lightTheme();
    } else {
      darkTheme();
    }
  };

  return (
    <div className="flex float-end text-4xl text-black cursor-pointer hover:scale-105">
      <button className="bg-gray-400 rounded-md p-2" onClick={handleTheme}>
        {themeMode === "dark" ? <IoSunnySharp /> : <MdDarkMode />}
      </button>
    </div>
  );
};

export default ThemeButton;
