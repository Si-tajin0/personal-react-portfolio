import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProjectDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state?.project;

  // পেজ ওপেন হলে অটোমেটিক উপরে চলে যাবে
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // যদি সরাসরি ইউআরএল হিট করে এবং প্রজেক্ট না পায়
  if (!project)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">
          Project Not Found
        </h2>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg"
        >
          Go Back Home
        </button>
      </div>
    );

  return (
    <section className="min-h-screen py-16 px-6 md:px-16 lg:px-28 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 text-gray-500 dark:text-gray-400 font-bold flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-x-2 transition-transform"
        >
          <i className="fas fa-arrow-left"></i> Back to Portfolio
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Sticky Project Image */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-24 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 h-fit">
              {/* Browser top for styling */}
              <div className="h-8 bg-gray-100 dark:bg-gray-800 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <img
                src={project.img}
                alt={project.title}
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* Right: Detailed Content */}
          <div className="lg:col-span-7 space-y-10">
            {/* Header Section */}
            <div className="space-y-4">
              <div className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-widest rounded-full">
                My Role: System Architect & Full Stack Developer
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-tight">
                {project.title}
              </h1>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech?.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-bold rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
                  >
                    <i className="fas fa-code text-blue-500 mr-1.5"></i>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Overview */}
            <div className="space-y-4 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-black text-gray-900 dark:text-white flex items-center gap-2">
                <i className="fas fa-info-circle text-blue-600"></i> Project
                Overview
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Features (Grid List) */}
            <div className="space-y-4">
              <h3 className="text-xl font-black text-gray-900 dark:text-white border-l-4 border-blue-600 pl-3">
                Key Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features?.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-2xl border border-gray-50 dark:border-gray-700/50 shadow-sm"
                  >
                    <i className="fas fa-check-circle text-green-500 mt-1"></i>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges & Solutions */}
            <div className="grid grid-cols-1 gap-6">
              <div className="p-6 md:p-8 bg-red-50 dark:bg-red-900/10 rounded-3xl border border-red-100 dark:border-red-900/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-500 opacity-5 rounded-bl-full"></div>
                <h4 className="font-black text-red-600 dark:text-red-400 mb-3 uppercase tracking-widest text-xs flex items-center gap-2">
                  <i className="fas fa-exclamation-triangle"></i> The Challenges
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed relative z-10">
                  {project.challenges}
                </p>
              </div>

              <div className="p-6 md:p-8 bg-green-50 dark:bg-green-900/10 rounded-3xl border border-green-100 dark:border-green-900/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-500 opacity-5 rounded-bl-full"></div>
                <h4 className="font-black text-green-600 dark:text-green-400 mb-3 uppercase tracking-widest text-xs flex items-center gap-2">
                  <i className="fas fa-lightbulb"></i> The Solutions
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed relative z-10">
                  {project.solutions}
                </p>
              </div>
            </div>

            {/* Large Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 pb-20">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-blue-600 text-white text-center py-5 rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-blue-600/30 hover:bg-blue-700 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1"
              >
                <i className="fas fa-external-link-alt"></i> Live Preview
              </a>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-gray-900 dark:bg-gray-800 border-2 border-gray-900 dark:border-gray-700 text-white text-center py-5 rounded-2xl font-black text-lg hover:bg-black dark:hover:bg-gray-700 transition-all flex items-center justify-center gap-3 shadow-lg transform hover:-translate-y-1"
                >
                  <i className="fab fa-github text-2xl"></i> Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
