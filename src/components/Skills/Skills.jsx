import React, { useContext } from "react";
import { ThemeContext } from "../../Context";

const skillCategories = [
  {
    title: "Frontend Architecture",
    skills: [
      { name: "TypeScript (Advanced)", icon: "fab fa-js-square text-blue-500" },
      {
        name: "Next.js (App Router)",
        icon: "fas fa-bolt text-gray-800 dark:text-white",
      },
      {
        name: "Redux / Context API",
        icon: "fas fa-project-diagram text-purple-500",
      },
      {
        name: "Tailwind / Shadcn UI",
        icon: "fas fa-paint-brush text-cyan-400",
      },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js / Express", icon: "fab fa-node-js text-green-500" },
      { name: "Prisma ORM", icon: "fas fa-link text-indigo-500" },
      { name: "PostgreSQL / SQL", icon: "fas fa-database text-blue-600" },
      { name: "RESTful API Design", icon: "fas fa-cloud text-orange-400" },
    ],
  },
  {
    title: "CMS & Creative Tools",
    skills: [
      { name: "WordPress Architect", icon: "fab fa-wordpress text-blue-500" },
      { name: "Content Creation", icon: "fas fa-video text-pink-500" },
      { name: "Photography", icon: "fas fa-camera text-indigo-400" },
      { name: "Git & CI/CD", icon: "fab fa-git-alt text-orange-600" },
    ],
  },
];

const Skills = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section
      className={`py-20 px-6 md:px-16 lg:px-28 transition-colors duration-500 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">
            Professional Stack
          </h2>
          <h1 className="text-4xl md:text-5xl font-black">
            Technical Proficiencies
          </h1>
          <div className="h-1.5 w-20 bg-blue-600 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl border transition-all hover:shadow-2xl ${darkMode ? "bg-gray-800 border-gray-700 shadow-blue-900/10" : "bg-white border-gray-100 shadow-xl"}`}
            >
              <h3 className="text-xl font-bold mb-8 border-l-4 border-blue-600 pl-4">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 group cursor-default"
                  >
                    <div
                      className={`w-10 h-10 flex items-center justify-center rounded-lg ${darkMode ? "bg-gray-700" : "bg-blue-50"} group-hover:scale-110 transition-transform`}
                    >
                      <i className={`${skill.icon} text-xl`}></i>
                    </div>
                    <span className="font-semibold text-gray-700 dark:text-gray-300">
                      {skill.name}
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
