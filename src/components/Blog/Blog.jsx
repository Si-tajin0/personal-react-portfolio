import React, { useContext } from "react";
import { ThemeContext } from "../../Context";

const blogPosts = [
  {
    id: 1,
    title:
      "Why I Stepped Back to Step Up: My Journey from WordPress to Next.js",
    date: "June 28, 2026",
    readTime: "4 min read",
    excerpt:
      "A few years ago, I found myself in a very comfortable spot building WordPress sites. But as a developer, comfort is often the enemy of growth. Here is why I took a hiatus to master the MERN stack...",
    category: "Career Journey",
  },
  {
    id: 2,
    title: "The Reality of Handling Complex UI: Lessons from Building a PMS",
    date: "July 2, 2026",
    readTime: "3 min read",
    excerpt:
      "When I started building the Sami & Mahi Tower PMS, I thought the hardest part would be the database. Spoiler alert: I was wrong. The real challenge was managing responsive data tables...",
    category: "Development",
  },
];

const Blog = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section
      className={`min-h-screen py-24 px-6 md:px-16 lg:px-28 transition-colors duration-500 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">
            Insights & Thoughts
          </h2>
          <h1
            className={`text-4xl md:text-5xl font-black ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            My Latest Articles
          </h1>
          <div className="h-1.5 w-20 bg-blue-600 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className={`p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 ${darkMode ? "bg-gray-800 border-gray-700 hover:border-blue-500/50 shadow-lg" : "bg-white border-gray-100 hover:shadow-2xl"}`}
            >
              <div className="flex justify-between items-center mb-6">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider rounded-lg">
                  {post.category}
                </span>
                <span className="text-sm text-gray-400 font-medium">
                  {post.readTime}
                </span>
              </div>
              <h2
                className={`text-2xl font-black mb-4 leading-tight ${darkMode ? "text-white" : "text-gray-900"}`}
              >
                {post.title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex justify-between items-center border-t border-gray-100 dark:border-gray-700 pt-6">
                <span className="text-sm font-bold text-gray-400">
                  {post.date}
                </span>
                <button className="text-blue-600 dark:text-blue-400 font-bold hover:underline flex items-center gap-2">
                  Read Article <i className="fas fa-arrow-right text-sm"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
