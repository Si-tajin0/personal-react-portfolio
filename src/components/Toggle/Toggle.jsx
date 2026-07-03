import React, { useContext } from "react";
import { ThemeContext } from "../../Context";

const Toggle = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    /* এখানে fixed এবং top/right সরিয়ে দেওয়া হয়েছে */
    <div
      onClick={handleClick}
      className={`relative w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-all duration-500 shadow-inner ${
        darkMode
          ? "bg-gray-800 border border-gray-700"
          : "bg-blue-100 border border-blue-200"
      }`}
    >
      {/* Sun Icon */}
      <div
        className={`absolute left-1 transition-opacity duration-500 ${darkMode ? "opacity-30" : "opacity-100"}`}
      >
        <i className="fas fa-sun text-yellow-500 text-[10px]"></i>
      </div>

      {/* Moon Icon */}
      <div
        className={`absolute right-1 transition-opacity duration-500 ${darkMode ? "opacity-100" : "opacity-30"}`}
      >
        <i className="fas fa-moon text-blue-300 text-[10px]"></i>
      </div>

      {/* Moving Thumb */}
      <div
        className={`w-5 h-5 rounded-full shadow-md transform transition-transform duration-500 flex items-center justify-center ${
          darkMode ? "translate-x-7 bg-blue-500" : "translate-x-0 bg-white"
        }`}
      >
        <div
          className={`w-1.5 h-1.5 rounded-full ${darkMode ? "bg-blue-200" : "bg-yellow-200"} blur-[1px]`}
        ></div>
      </div>
    </div>
  );
};

export default Toggle;
