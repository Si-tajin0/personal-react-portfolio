import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ item }) => {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/project/${item.id}`, { state: { project: item } });
  };

  return (
    <div className="group flex flex-col h-[420px] rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800/50 shadow-sm hover:shadow-2xl dark:hover:shadow-blue-900/20 transition-all duration-500">
      {/* Browser Header Bar */}
      <div className="h-8 bg-gray-50 dark:bg-gray-900/50 flex items-center px-4 gap-2 flex-shrink-0 border-b border-gray-100 dark:border-gray-800">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
      </div>

      {/* Project Image - Clickable */}
      <div
        className="relative h-48 overflow-hidden cursor-pointer"
        onClick={handleDetails}
      >
        <img
          src={item.img}
          alt={item.title}
          className="w-full transition-transform duration-[6000ms] ease-linear transform translate-y-0 group-hover:-translate-y-[calc(100%-192px)]"
        />
        {/* Image Hover Overlay */}
        <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-white text-blue-600 px-4 py-2 rounded-full font-bold text-xs shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all">
            Click for Case Study
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <h3
            className="text-gray-900 dark:text-white font-black text-lg mb-3 line-clamp-1"
            title={item.title}
          >
            {item.title}
          </h3>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {item.tech?.slice(0, 3).map((t, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold rounded-md border border-blue-100 dark:border-blue-800/50"
              >
                {t}
              </span>
            ))}
            {item.tech?.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-[10px] font-bold rounded-md">
                +{item.tech.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Professional Action Buttons */}
        <div className="flex items-center gap-2 mt-2">
          {/* View Details Button (Primary) */}
          <button
            onClick={handleDetails}
            className="flex-1 bg-gray-900 dark:bg-gray-700 text-white py-2.5 rounded-xl text-xs font-bold hover:bg-black dark:hover:bg-gray-600 transition-all shadow-md active:scale-95"
          >
            Case Study
          </button>

          {/* Live Demo Button */}
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="flex-1 bg-blue-600 text-white py-2.5 rounded-xl text-xs font-bold text-center hover:bg-blue-700 transition-all shadow-md active:scale-95 flex items-center justify-center gap-1.5"
          >
            <i className="fas fa-external-link-alt text-[10px]"></i> Live
          </a>

          {/* GitHub Button (Only if available) */}
          {item.github && (
            <a
              href={item.github}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all shadow-sm active:scale-95"
              title="Source Code"
            >
              <i className="fab fa-github text-sm"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
