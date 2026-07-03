import React, { useContext } from "react";
import photographer from "../../img/photograp.JPG"; // আপনার ছবি
import { ThemeContext } from "../../Context";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section
      className="py-24 px-6 md:px-16 lg:px-28 bg-gray-50 dark:bg-gray-800 transition-colors duration-500"
      id="about"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        {/* Left Side: Creative Image Box */}
        <div className="flex-1 relative group">
          {/* Decorative Background Frame */}
          <div className="absolute -top-6 -left-6 w-full h-full border-4 border-blue-600 rounded-2xl z-0 transform transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>

          <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={photographer}
              alt="Syful Islam - About Me"
              className="w-full h-[450px] md:h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </div>

        {/* Right Side: Professional Story */}
        <div className="flex-1 space-y-8">
          <div className="space-y-3">
            <h4 className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm">
              Discover My Story
            </h4>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
              About Me
            </h2>
            <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
          </div>

          <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            <p>
              I am a{" "}
              <span className="text-gray-900 dark:text-white font-bold">
                Full Stack Web Developer
              </span>{" "}
              with a strong background in WordPress Architecture. My journey
              began with crafting high-converting business websites, which
              evolved into a passion for building complex, scalable custom
              applications.
            </p>
            <p>
              After taking a focused hiatus to sharpen my skills, I have
              returned to the industry with a mastery of{" "}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                modern web standards
              </span>
              . I am currently deep-diving into advanced technologies like{" "}
              <span className="text-gray-900 dark:text-white font-semibold">
                Next.js, TypeScript, and Redux
              </span>{" "}
              to create seamless digital experiences.
            </p>
            <p>
              When I'm not writing code, you'll find me capturing stories
              through my{" "}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                camera lens
              </span>{" "}
              or creating content that bridges the gap between technology and
              everyday life.
            </p>
          </div>

          {/* Quick Highlights (Stats) */}
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="p-4 bg-white dark:bg-gray-700 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600">
              <h3 className="text-3xl font-black text-blue-600">50+</h3>
              <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase">
                WordPress Sites
              </p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-700 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600">
              <h3 className="text-3xl font-black text-blue-600">MERN</h3>
              <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase">
                Core Expertise
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
