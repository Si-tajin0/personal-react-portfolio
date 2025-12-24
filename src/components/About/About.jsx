import React, { useContext } from 'react';
import Award from '../../img/award.png';
import photographer from '../../img/photograp.JPG';
import { ThemeContext } from "../../Context"; // Context ইম্পোর্ট করুন

const About = () => {
    // ডার্ক মোড ভ্যালু পাওয়ার জন্য
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <section 
            className="py-20 px-6 md:px-16 lg:px-28 flex flex-col md:flex-row items-center gap-12 lg:gap-20 transition-colors duration-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white" 
            id="about"
        >
            
            {/* Left Side: Image Gallery Style */}
            <div className="flex-1 relative group w-full max-w-md md:max-w-none">
                {/* Decorative Background Card (ডার্ক মোডে রঙ পরিবর্তন হবে) */}
                <div className="absolute -top-6 -left-6 w-full h-full bg-blue-600 dark:bg-blue-500 rounded-2xl z-0 transform transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 duration-500 opacity-20 md:opacity-100"></div>
                
                {/* Main Image Container */}
                <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl dark:shadow-blue-900/20 border-4 border-white dark:border-gray-800">
                    <img 
                        src={photographer} 
                        className="w-full h-[400px] md:h-[550px] object-cover transform transition-transform duration-700 group-hover:scale-110" 
                        alt="Syful Islam" 
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-blue-900/10 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
            </div>

            {/* Right Side: Content Box */}
            <div className="flex-1 space-y-6">
                <div className="space-y-2">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
                        About Me
                    </h1>
                    <div className="h-1.5 w-20 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400">
                    Hey, I'm an Independent Curious Developer.
                </h3>

                <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg leading-relaxed">
                    Have a look through some of my projects. Need help with an upcoming project or an application? 
                    I specialize in creating interactive digital experiences that are both beautiful and functional. 
                    Learn a bit more about me and then consider hiring me.
                </p>

                {/* Award Section (ডার্ক মোড ফ্রেন্ডলি কার্ড) */}
                <div className="flex items-center gap-5 p-5 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
                    <div className="flex-shrink-0 bg-white dark:bg-gray-700 p-2 rounded-xl">
                        <img 
                            src={Award} 
                            alt="Award" 
                            className="w-16 h-16 md:w-20 md:h-20 object-contain" 
                        />
                    </div>
                    <div className="space-y-1">
                        <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 leading-tight">
                            International Design Awards 2021
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                            Recognized for excellence in UI/UX and Creative Development.
                        </p>
                    </div>
                </div>

                {/* Hire Me CTA */}
                <div className="pt-4">
                    <a 
                        href="#contact" 
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 font-bold hover:underline gap-2 group transition-all"
                    >
                        Let's build something together
                        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;