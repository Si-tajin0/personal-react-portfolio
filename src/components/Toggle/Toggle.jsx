import React, { useContext } from 'react';
import { ThemeContext } from "../../Context";

const Toggle = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleClick = () => {
        theme.dispatch({ type: "TOGGLE" })
    }

    return (
        <div 
            onClick={handleClick}
            className={`fixed top-5 right-5 z-[100] w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-all duration-500 shadow-inner ${
                darkMode ? 'bg-gray-800' : 'bg-blue-100'
            }`}
        >
            {/* Sun Icon */}
            <div className={`absolute left-1.5 transition-opacity duration-500 ${darkMode ? 'opacity-30' : 'opacity-100'}`}>
                <i className="fas fa-sun text-yellow-500 text-sm"></i>
            </div>

            {/* Moon Icon */}
            <div className={`absolute right-1.5 transition-opacity duration-500 ${darkMode ? 'opacity-100' : 'opacity-30'}`}>
                <i className="fas fa-moon text-blue-200 text-sm"></i>
            </div>

            {/* Moving Button (Thumb) */}
            <div 
                className={`w-6 h-6 rounded-full shadow-md transform transition-transform duration-500 flex items-center justify-center ${
                    darkMode 
                        ? 'translate-x-8 bg-blue-500' 
                        : 'translate-x-0 bg-white'
                }`}
            >
                {/* Thumb এর ভেতর ছোট একটি গ্লো ইফেক্ট */}
                <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-blue-200' : 'bg-yellow-200'} blur-[1px]`}></div>
            </div>
            
            {/* হোভার ইফেক্ট (Outer Ring) */}
            <div className="absolute inset-0 rounded-full border-2 border-transparent hover:border-blue-400/30 transition-all duration-300"></div>
        </div>
    );
};

export default Toggle;