import React, { useState, useEffect, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ThemeContext } from '../../Context'; // থিম কনটেক্সট ইম্পোর্ট করুন

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    
    // ডার্ক মোড স্টেট চেক করার জন্য
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // ডার্ক মোডের জন্য টেক্সট কালার অ্যাডজাস্ট করা হয়েছে
    const navLinkStyles = ({ isActive }) => {
        return `relative px-4 py-2 text-sm font-bold uppercase tracking-widest transition-all duration-300 group ${
            isActive 
            ? "text-blue-600 dark:text-blue-400" 
            : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
        }`;
    };

    return (
        <nav className={`sticky top-0 z-[100] transition-all duration-500 ${
            scrolled 
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md py-2" 
            : "bg-white dark:bg-gray-900 py-4"
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    
                    {/* Logo Section - ডার্ক মোডে বর্ডার ও টেক্সট সাদা হবে */}
                    <div className="flex-shrink-0">
                        <Link to="/" onClick={closeMobileMenu} className="flex items-center group">
                            <span className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white border-2 border-gray-900 dark:border-white px-2 py-1 group-hover:bg-gray-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-gray-900 transition-all duration-500">
                                SI<span className="text-blue-600 dark:text-blue-400 transition-colors">TAJIN</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-2">
                        {["Home", "About", "Portfolio", "Blog", "Contact"].map((item) => (
                            <NavLink 
                                key={item}
                                to={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                                className={navLinkStyles}
                            >
                                {item}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                            </NavLink>
                        ))}
                    </div>

                    {/* Mobile Menu Button - আইকন কালার ডার্ক মোডে সাদা হবে */}
                    <div className="md:hidden flex items-center">
                        <button 
                            onClick={handleClick}
                            className="text-gray-900 dark:text-white focus:outline-none p-2 transition-transform active:scale-90"
                        >
                            <i className={`fas ${click ? "fa-times" : "fa-bars-staggered"} text-2xl`}></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown - ডার্ক মোড ব্যাকগ্রাউন্ড অ্যাডজাস্ট করা হয়েছে */}
            <div className={`absolute top-full left-0 w-full transition-all duration-500 ease-in-out md:hidden ${
                click ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-5"
            } ${darkMode ? "bg-gray-900/95 border-gray-800" : "bg-white/95 border-gray-100"} backdrop-blur-lg border-t`}>
                <div className="flex flex-col p-6 space-y-4">
                    {["Home", "About", "Portfolio", "Blog", "Contact"].map((item) => (
                        <NavLink 
                            key={item}
                            to={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                            className={navLinkStyles} 
                            onClick={closeMobileMenu}
                        >
                            {item}
                        </NavLink>
                    ))}
                    
                    {/* সোশ্যাল আইকন ডার্ক মোডে */}
                    <div className="flex space-x-5 pt-4 border-t border-gray-100 dark:border-gray-800">
                        <a href="https://github.com/Si-tajin0" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/syful-islam-29882a180/" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;