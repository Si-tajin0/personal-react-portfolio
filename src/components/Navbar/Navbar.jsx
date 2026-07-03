import React, { useState, useEffect, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { ThemeContext } from "../../Context";
import Toggle from "../Toggle/Toggle";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkStyles = ({ isActive }) => {
    return `relative px-2 py-1 text-xs lg:text-sm font-bold uppercase tracking-widest transition-all duration-300 group ${
      isActive
        ? "text-blue-600 dark:text-blue-400"
        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
    }`;
  };

  return (
    <nav
      className={`sticky top-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-2"
          : "bg-white dark:bg-gray-900 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* justify-between ব্যবহার করা হয়েছে যাতে আইটেমগুলো দুই পাশে ছড়িয়ে থাকে */}
        <div className="flex justify-between items-center h-14">
          {/* 1. বাম দিকে লোগো */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="flex items-center group"
            >
              <span className="text-xl md:text-2xl font-black tracking-tighter text-gray-900 dark:text-white border-[3px] border-gray-900 dark:border-white px-2 py-0.5 group-hover:bg-gray-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-gray-900 transition-all duration-500">
                SI
                <span className="text-blue-600 dark:text-blue-400">TAJIN</span>
              </span>
            </Link>
          </div>

          {/* 2. মাঝখানে ডেস্কটপ মেনু */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {["Home", "About", "Portfolio", "Blog", "Contact"].map((item) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={navLinkStyles}
              >
                {item}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full`}
                ></span>
              </NavLink>
            ))}
          </div>

          {/* 3. ডান দিকে টগল বাটন এবং মোবাইল আইকন */}
          <div className="flex items-center gap-4">
            {/* ডেস্কটপ টগল */}
            <div className="hidden md:block">
              <Toggle />
            </div>

            {/* মোবাইল মেনু বাটন ও টগল */}
            <div className="md:hidden flex items-center gap-3">
              <Toggle />
              <button
                onClick={handleClick}
                className="text-gray-900 dark:text-white focus:outline-none p-2"
              >
                <i
                  className={`fas ${click ? "fa-times" : "fa-bars-staggered"} text-xl`}
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-full left-0 w-full transition-all duration-500 ease-in-out md:hidden ${
          click
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-5"
        } ${darkMode ? "bg-gray-900/98 border-gray-800" : "bg-white/98 border-gray-100"} backdrop-blur-xl border-t`}
      >
        <div className="flex flex-col p-8 space-y-6 text-center">
          {["Home", "About", "Portfolio", "Blog", "Contact"].map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-lg font-bold uppercase tracking-widest text-gray-800 dark:text-gray-200"
              onClick={closeMobileMenu}
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
