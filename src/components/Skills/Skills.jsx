import React, { useContext } from "react";
import { ThemeContext } from "../../Context";

const skillCategories = [
  {
    title: "Frontend Architecture",
    skills: [
      {
        name: "TypeScript",
        level: "Advanced",
        icon: "fab fa-js-square text-blue-500",
      },
      {
        name: "Next.js (App Router)",
        level: "Expert",
        icon: "fas fa-bolt text-yellow-500",
      },
      {
        name: "React & Redux",
        level: "Expert",
        icon: "fab fa-react text-blue-400",
      },
      {
        name: "Tailwind / Shadcn",
        level: "Advanced",
        icon: "fas fa-paint-brush text-cyan-400",
      },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      {
        name: "Node.js / Express",
        level: "Advanced",
        icon: "fab fa-node-js text-green-500",
      },
      {
        name: "Prisma ORM",
        level: "Intermediate",
        icon: "fas fa-link text-indigo-500",
      },
      {
        name: "PostgreSQL / MongoDB",
        level: "Advanced",
        icon: "fas fa-database text-blue-600",
      },
      {
        name: "RESTful APIs",
        level: "Expert",
        icon: "fas fa-cloud text-orange-400",
      },
    ],
  },
  {
    title: "CMS & Creative Tools",
    skills: [
      {
        name: "WordPress Architect",
        level: "Expert",
        icon: "fab fa-wordpress text-blue-500",
      },
      {
        name: "Content Creation",
        level: "Advanced",
        icon: "fas fa-video text-pink-500",
      },
      {
        name: "Photography",
        level: "Professional",
        icon: "fas fa-camera text-indigo-400",
      },
      {
        name: "Git & CI/CD",
        level: "Advanced",
        icon: "fab fa-git-alt text-orange-600",
      },
    ],
  },
];

const Skills = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section
      className={`py-24 px-6 md:px-16 lg:px-28 transition-colors duration-500 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm">
            Professional Stack
          </h2>
          <h1
            className={`text-4xl md:text-5xl font-black ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            Technical Proficiencies
          </h1>
          <div className="h-1.5 w-24 bg-blue-600 rounded-full mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 ${
                darkMode
                  ? "bg-gray-800 border-gray-700 shadow-lg shadow-blue-900/10 hover:border-blue-500/30"
                  : "bg-white border-gray-100 shadow-xl hover:shadow-2xl hover:border-blue-100"
              }`}
            >
              <h3
                className={`text-2xl font-black mb-8 border-l-4 border-blue-600 pl-4 ${darkMode ? "text-white" : "text-gray-900"}`}
              >
                {category.title}
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between group cursor-default p-3 rounded-2xl transition-all ${
                      darkMode ? "hover:bg-gray-700/50" : "hover:bg-blue-50/50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                          darkMode
                            ? "bg-gray-700 group-hover:bg-gray-600"
                            : "bg-gray-50 group-hover:bg-white shadow-sm"
                        }`}
                      >
                        <i className={`${skill.icon} text-2xl`}></i>
                      </div>
                      <span
                        className={`font-bold text-lg transition-colors ${darkMode ? "text-gray-300 group-hover:text-white" : "text-gray-700 group-hover:text-blue-600"}`}
                      >
                        {skill.name}
                      </span>
                    </div>

                    {/* Proficiency Level Badge (Appears on Hover) */}
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
