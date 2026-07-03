import React, { useContext } from "react";
import img from "../../img/my-img.png";
import { ThemeContext } from "../../Context";

const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-28 bg-white dark:bg-gray-900 transition-colors duration-500 overflow-hidden pt-10 md:pt-0">
      {/* Background Decor */}
      <div className="absolute top-0 left-[-5%] w-72 h-72 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-[100px] opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-[120px] opacity-30"></div>

      {/* Left Side: Content */}
      <div className="flex-1 z-10 space-y-6 text-center md:text-left mt-10 md:mt-0">
        <div className="space-y-1">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="w-10 h-[3px] bg-blue-600 rounded-full"></span>
            <h2 className="text-blue-600 dark:text-blue-400 font-bold tracking-[0.3em] uppercase text-xs">
              Available for Full Stack Roles
            </h2>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tighter">
            Syful <span className="text-blue-600">Islam</span>
          </h1>
        </div>

        {/* Animated Role Slider */}
        <div className="h-10 md:h-12 overflow-hidden relative">
          <div className="animate-text-slide flex flex-col items-start">
            <span className="h-10 md:h-12 flex items-center text-xl md:text-3xl font-bold text-gray-600 dark:text-gray-400">
              Full Stack Web Developer
            </span>
            <span className="h-10 md:h-12 flex items-center text-xl md:text-3xl font-bold text-blue-600">
              MERN Stack Specialist
            </span>
            <span className="h-10 md:h-12 flex items-center text-xl md:text-3xl font-bold text-indigo-500">
              WordPress Architect
            </span>
            <span className="h-10 md:h-12 flex items-center text-xl md:text-3xl font-bold text-pink-600">
              Creative Content Creator
            </span>
            <span className="h-10 md:h-12 flex items-center text-xl md:text-3xl font-bold text-teal-500">
              Professional Photographer
            </span>
            <span className="h-10 md:h-12 flex items-center text-xl md:text-3xl font-bold text-gray-600 dark:text-gray-400">
              Full Stack Web Developer
            </span>
          </div>
        </div>

        <p className="max-w-md text-gray-500 dark:text-gray-400 text-base md:text-lg leading-relaxed mx-auto md:mx-0 font-medium">
          Building scalable applications with high-end tech stacks. Bridging the
          gap between complex backend logic and pixel-perfect UI.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
          <a
            href="#portfolio"
            className="px-8 py-3.5 bg-gray-900 dark:bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all transform hover:-translate-y-1"
          >
            View Work
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-8 py-3.5 border-2 border-gray-900 dark:border-gray-600 text-gray-900 dark:text-white font-bold rounded-xl hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all transform hover:-translate-y-1 flex items-center gap-2"
          >
            <i className="fas fa-download"></i> Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center md:justify-start gap-6 pt-8">
          <a
            href="https://github.com/Si-tajin0"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <i className="fab fa-github text-xl"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <i className="fab fa-linkedin-in text-xl"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <i className="fab fa-instagram text-xl"></i>
          </a>
        </div>
      </div>

      {/* Right Side: EXTREME LARGE Image with Database & Cloud icons */}
      <div className="flex-1 relative flex justify-center items-end self-end h-full mt-16 md:mt-0">
        {/* Background Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 md:w-[500px] md:h-[500px] lg:w-[750px] lg:h-[750px] bg-blue-600 rounded-full opacity-5 blur-[100px]"></div>

        {/* Tech Icons - ছবির চারপাশে ছড়িয়ে দেওয়া হয়েছে */}

        {/* 1. TypeScript (Top Left) */}
        <div className="absolute top-10 left-0 md:top-20 md:left-4 z-30 animate-bounce hidden sm:flex w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl items-center justify-center border border-gray-100 dark:border-gray-700 transform -rotate-12">
          <span className="text-blue-500 font-black text-2xl">TS</span>
        </div>

        {/* 2. React (Mid Left) */}
        <div className="absolute top-1/3 -left-10 md:-left-6 z-30 animate-pulse hidden lg:flex w-14 h-14 bg-white dark:bg-gray-800 rounded-2xl shadow-xl items-center justify-center border border-gray-100 dark:border-gray-700">
          <i className="fab fa-react text-blue-400 text-3xl"></i>
        </div>

        {/* 3. MongoDB (Bottom Left) */}
        <div className="absolute bottom-40 left-0 md:left-10 z-30 animate-bounce hidden md:flex w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl items-center justify-center border border-gray-100 dark:border-gray-700">
          <i className="fas fa-database text-green-500 text-3xl"></i>
        </div>

        {/* 4. JavaScript (Top Right) */}
        <div className="absolute top-20 right-0 md:top-24 md:right-10 z-30 animate-pulse hidden sm:flex w-14 h-14 bg-white dark:bg-gray-800 rounded-2xl shadow-xl items-center justify-center border border-gray-100 dark:border-gray-700 transform rotate-12">
          <i className="fab fa-js text-yellow-400 text-3xl"></i>
        </div>

        {/* 5. Firebase (Mid Right) */}
        <div className="absolute top-1/2 -right-8 md:-right-4 z-30 animate-bounce hidden lg:flex w-14 h-14 bg-white dark:bg-gray-800 rounded-2xl shadow-xl items-center justify-center border border-gray-100 dark:border-gray-700">
          <i className="fas fa-fire text-orange-500 text-3xl"></i>
        </div>

        {/* 6. WordPress (Bottom Right) */}
        <div className="absolute bottom-52 right-0 md:right-10 z-30 animate-pulse hidden md:flex w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl items-center justify-center border border-gray-100 dark:border-gray-700">
          <i className="fab fa-wordpress text-blue-500 text-3xl"></i>
        </div>

        {/* 7. Redux/Next.js Logic (Far Top Center) */}
        <div className="absolute -top-10 left-1/2 z-30 hidden xl:flex bg-white dark:bg-gray-800 p-2 px-4 rounded-full shadow-2xl border border-blue-100 dark:border-gray-700">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
            Next.js & Redux
          </span>
        </div>

        {/* Profile Image (MAX SIZE) */}
        <img
          src={img}
          alt="Syful Islam"
          className="relative z-20 w-full max-w-[400px] md:max-w-2xl lg:max-w-3xl xl:max-w-[850px] object-contain block m-0 p-0 transform transition-transform duration-700"
          style={{
            filter: darkMode
              ? "drop-shadow(10px 10px 60px rgba(0,0,0,0.6))"
              : "drop-shadow(10px 10px 40px rgba(0,0,0,0.1))",
            marginBottom: "-1px",
          }}
        />
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] font-black tracking-[0.3em] uppercase dark:text-white">
          Scroll
        </span>
        <div className="animate-bounce">
          <i className="fas fa-chevron-down text-blue-600 text-xl"></i>
        </div>
      </div>

      <style jsx>{`
        @keyframes text-slide {
          0%,
          15% {
            transform: translateY(0);
          }
          20%,
          35% {
            transform: translateY(-40px);
          }
          40%,
          55% {
            transform: translateY(-80px);
          }
          60%,
          75% {
            transform: translateY(-120px);
          }
          80%,
          95% {
            transform: translateY(-160px);
          }
          100% {
            transform: translateY(0);
          }
        }
        @media (min-width: 768px) {
          @keyframes text-slide {
            0%,
            15% {
              transform: translateY(0);
            }
            20%,
            35% {
              transform: translateY(-48px);
            }
            40%,
            55% {
              transform: translateY(-96px);
            }
            60%,
            75% {
              transform: translateY(-144px);
            }
            80%,
            95% {
              transform: translateY(-192px);
            }
            100% {
              transform: translateY(0);
            }
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
