import React, { useContext } from "react";
import photographer from "../../img/photograp.JPG";
import { ThemeContext } from "../../Context";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section
      className="relative py-24 px-6 md:px-16 lg:px-28 bg-white dark:bg-gray-900 transition-colors duration-500 overflow-hidden"
      id="about"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-[120px] opacity-50"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        {/* Left Side: Creative Image Box */}
        <div className="flex-1 relative group w-full max-w-md lg:max-w-none mx-auto">
          {/* Decorative Background Frame */}
          <div className="absolute -top-6 -left-6 w-full h-full border-4 border-blue-600/30 dark:border-blue-500/30 rounded-3xl z-0 transform transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>

          {/* Main Image */}
          <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl dark:shadow-blue-900/20">
            <img
              src={photographer}
              alt="Syful Islam - About Me"
              className="w-full h-[450px] lg:h-[600px] object-cover transition-transform duration-[7000ms] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Floating Badge (Skill/Quality Focus instead of Experience) */}
          <div className="absolute -bottom-8 -right-4 md:-right-8 z-20 bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 flex items-center gap-4 animate-bounce-slow">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/40 text-blue-600 rounded-full">
              <i className="fas fa-code text-xl"></i>
            </div>
            <div>
              <h3 className="text-xl font-black text-gray-900 dark:text-white leading-none">
                Clean Code
              </h3>
              <p className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-1">
                Architecture
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Professional Story */}
        <div className="flex-1 space-y-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-12 h-[2px] bg-blue-600"></span>
              <h4 className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm">
                Discover My Story
              </h4>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
              A blend of <span className="text-blue-600">Logic</span> &{" "}
              <span className="text-blue-600">Creativity</span>
            </h2>
          </div>

          <div className="space-y-5 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            <p>
              I am a{" "}
              <span className="text-gray-900 dark:text-white font-bold">
                Full Stack Web Developer
              </span>{" "}
              with a foundation in architecting high-converting WordPress
              websites. That experience naturally evolved into a deep passion
              for software engineering and building complex custom applications.
            </p>
            <p>
              Driven by a continuous desire to build better, I focus on
              developing high-performance, scalable digital experiences using{" "}
              <span className="text-gray-900 dark:text-white font-semibold">
                Next.js, TypeScript, and MongoDB
              </span>
              . I bridge the gap between robust backend logic and intuitive user
              interfaces.
            </p>
            <p className="italic border-l-4 border-gray-300 dark:border-gray-700 pl-4 text-gray-500">
              "Beyond the terminal, I am an avid Photographer and Content
              Creator. I believe that writing clean code and capturing perfect
              moments share the same core principle:{" "}
              <span className="text-gray-900 dark:text-white font-bold">
                attention to detail.
              </span>
              "
            </p>
          </div>

          {/* Quick Highlights (No Course or Experience mentioned) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6">
            <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:-translate-y-1 transition-transform">
              <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-1">
                50+
              </h3>
              <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                Web Projects
              </p>
            </div>
            <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:-translate-y-1 transition-transform">
              <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-1">
                100%
              </h3>
              <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                Client Success
              </p>
            </div>
            <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:-translate-y-1 transition-transform col-span-2 md:col-span-1">
              <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-1">
                MERN
              </h3>
              <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                Core Stack
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
