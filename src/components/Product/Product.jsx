import React from 'react';

const Product = ({ img, link }) => {
    return (
        <div className="group relative h-[300px] md:h-[400px] border-2 border-gray-100 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800">
            
            {/* Browser-like Header Bar (ডার্ক মোডে রঙ পরিবর্তন হবে) */}
            <div className="h-8 bg-gray-50 dark:bg-gray-700 border-b border-gray-100 dark:border-gray-600 flex items-center px-3 gap-1.5 z-20 relative">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>

            {/* Image Link with Scroll Effect */}
            <a href={link} target="_blank" rel="noreferrer" className="block w-full h-full overflow-hidden cursor-pointer">
                <img 
                    src={img} 
                    alt="Project" 
                    className="w-full transition-transform duration-[4000ms] ease-linear transform translate-y-0 group-hover:-translate-y-[calc(100%-100%)]" 
                    style={{ objectPosition: 'top' }}
                    onMouseOver={(e) => {
                        const height = e.target.offsetHeight;
                        const containerHeight = e.target.parentElement.offsetHeight;
                        if(height > containerHeight) {
                            e.target.style.transform = `translateY(-${height - containerHeight}px)`;
                        }
                    }}
                    onMouseOut={(e) => {
                        e.target.style.transform = `translateY(0)`;
                    }}
                />
            </a>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                 <div className="bg-white dark:bg-blue-600 dark:text-white text-blue-600 font-bold py-2 px-6 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                     View Project
                 </div>
            </div>
        </div>
    );
};

export default Product;