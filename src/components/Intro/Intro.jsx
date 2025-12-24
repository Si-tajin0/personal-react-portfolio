import React, { useContext } from 'react'; // ১. এখানে useContext যোগ করা হয়েছে
import img from '../../img/my-img.png';
import { ThemeContext } from "../../Context"; // ২. এখানে ThemeContext ইম্পোর্ট করা হয়েছে

const Intro = () => {
    // ৩. ডার্ক মোড ভ্যালু পাওয়ার জন্য এই দুই লাইন যোগ করা হয়েছে
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <section className="relative w-full h-screen md:min-h-screen flex flex-col md:flex-row items-stretch px-6 md:px-16 lg:px-28 transition-colors duration-500 overflow-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            
            {/* Background Decorative Element */}
            <div className="absolute top-[-10%] left-[-5%] w-72 h-72 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-60"></div>

            {/* Left Side: Content Box */}
            <div className="flex-1 flex flex-col justify-start md:justify-center z-10 pt-12 md:pt-0 space-y-5 md:space-y-7">
                <div className="space-y-0">
                    <h2 className="text-lg md:text-xl font-medium text-blue-600 dark:text-blue-400 tracking-wide">
                        Hello, I'm
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-gray-900 dark:text-white">
                        Syful <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400">Islam</span>
                    </h1>
                </div>

                {/* Animated Titles Section */}
                <div className="relative h-10 md:h-14 overflow-hidden">
                    <div className="animate-text-slide flex flex-col items-start">
                        <span className="h-10 md:h-14 flex items-center text-2xl md:text-4xl font-bold text-gray-700 dark:text-gray-300">Full Stack Developer</span>
                        <span className="h-10 md:h-14 flex items-center text-2xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">UI/UX Designer</span>
                        <span className="h-10 md:h-14 flex items-center text-2xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400">Content Creator</span>
                        <span className="h-10 md:h-14 flex items-center text-2xl md:text-4xl font-bold text-purple-600 dark:text-purple-400">Photographer</span>
                        <span className="h-10 md:h-14 flex items-center text-2xl md:text-4xl font-bold text-gray-700 dark:text-gray-300">Full Stack Developer</span>
                    </div>
                </div>

                <p className="max-w-md text-gray-500 dark:text-gray-400 text-base md:text-lg leading-relaxed border-l-4 border-blue-600 pl-4 py-1">
                    I build high-end, interactive digital experiences with a focus on clean code and user-centric design.
                </p>

                {/* Action Buttons */}
                <div className="flex items-center space-x-4 pt-4">
                    <a 
                        href="#resume-link" 
                        className="px-8 py-3.5 bg-gray-900 dark:bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-blue-200 transform hover:-translate-y-1"
                    >
                        Download CV
                    </a>
                    <div className="hidden sm:block h-0.5 w-12 bg-gray-300 dark:bg-gray-700"></div>
                </div>
            </div>

            {/* Right Side: Image Section */}
            <div className="flex-1 relative flex justify-center items-end self-end">
                <div className="absolute bottom-[-20px] md:bottom-[-40px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px] bg-gradient-to-tr from-blue-600 to-indigo-400 rounded-full opacity-10 dark:opacity-5"></div>
                
                <div className="absolute bottom-0 right-0 w-full h-[70%] bg-blue-600 dark:bg-blue-700 clip-path-hero opacity-100 hidden md:block" 
                     style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }}>
                </div>
                
                <img 
                    src={img} 
                    alt="Syful Islam" 
                    className="relative z-20 w-full max-w-[350px] md:max-w-xl lg:max-w-2xl xl:max-w-3xl object-contain block m-0 p-0 transform transition-transform duration-700 hover:scale-[1.02]" 
                    style={{ 
                        filter: darkMode ? 'drop-shadow(10px 10px 30px rgba(0,0,0,0.5))' : 'drop-shadow(10px 10px 30px rgba(0,0,0,0.1))',
                        marginBottom: '-2px',
                        display: 'block'
                    }} 
                />
            </div>

            <style jsx>{`
                @keyframes text-slide {
                    0%, 15% { transform: translateY(0); }
                    20%, 35% { transform: translateY(-40px); }
                    40%, 55% { transform: translateY(-80px); }
                    60%, 75% { transform: translateY(-120px); }
                    80%, 95% { transform: translateY(-160px); }
                    100% { transform: translateY(0); }
                }
                @media (min-width: 768px) {
                    @keyframes text-slide {
                        0%, 15% { transform: translateY(0); }
                        20%, 35% { transform: translateY(-56px); }
                        40%, 55% { transform: translateY(-112px); }
                        60%, 75% { transform: translateY(-168px); }
                        80%, 95% { transform: translateY(-224px); }
                        100% { transform: translateY(0); }
                    }
                }
                .animate-text-slide {
                    animation: text-slide 12s infinite cubic-bezier(0.83, 0, 0.17, 1);
                }
            `}</style>
        </section>
    );
};

export default Intro;