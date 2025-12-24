import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 bg-white overflow-hidden relative">
            
            {/* Background Decorative Circles */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-60"></div>

            {/* Visual Icon Section */}
            <div className="relative mb-8">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-25 animate-pulse"></div>
                <div className="relative bg-white p-8 rounded-full shadow-2xl border border-gray-100">
                    <i className="fas fa-pen-nib text-5xl text-blue-600 animate-bounce"></i>
                </div>
            </div>

            {/* Text Content */}
            <div className="text-center space-y-4 z-10">
                <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
                    Our Blog is <span className="text-blue-600 italic">Coming Soon</span>
                </h1>
                
                <div className="h-1.5 w-24 bg-blue-600 rounded-full mx-auto"></div>
                
                <p className="max-w-md mx-auto text-gray-500 text-lg md:text-xl leading-relaxed">
                    I'm currently working on some exciting articles about web development, UI/UX design, and technology. Stay tuned!
                </p>
            </div>

            {/* Back to Home Button */}
            <div className="mt-12">
                <Link 
                    to="/home" 
                    className="flex items-center gap-2 px-8 py-3 bg-gray-900 text-white font-bold rounded-full hover:bg-blue-600 transition-all duration-300 shadow-xl transform hover:-translate-y-1"
                >
                    <i className="fas fa-arrow-left"></i>
                    Back to Home
                </Link>
            </div>

            {/* Progress Bar (Decorative) */}
            <div className="mt-16 w-full max-w-xs bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full w-[65%] animate-pulse"></div>
            </div>
            <p className="mt-2 text-xs text-gray-400 font-mono">Loading Creativity 65%</p>

        </section>
    );
};

export default Blog;