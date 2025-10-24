import React, { useRef } from "react";

import img4 from './assets/img4.png';
import img5 from './assets/img5.png';
import img6 from './assets/img6.png';

const projects = [
  {
    title: "MODERN HOME DESIGNE",
    img: img4,
    isSpecial: false,
  },
  {
    title: "MODERN HOME DESIGNE",
    img: img5,
    isSpecial: false,
  },
  {
    title: "MODERN HOME DESIGNE",
    img: img6,
    isSpecial: false,
  },
 
];

function Projects() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.9; // smooth partial scroll
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16">
          <h2 className="text-3xl font-normal text-gray-800 uppercase tracking-wide mb-3">
            OUR PROJECTS
          </h2>
          <p className="text-base text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
        </header>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 lg:-left-12 xl:-left-16 bg-black hover:bg-gray-800 text-white p-4 rounded-none flex items-center justify-center transition duration-300 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-scroll scroll-smooth scrollbar-hide py-4"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-80 h-80 rounded overflow-hidden group cursor-pointer shadow-md"
              >
                {/* Image */}
                <img
                  src={project.img}
                  alt={project.title}
                  className={`w-full h-full object-cover transition duration-500 ${
                    project.isSpecial ? "opacity-100" : "group-hover:opacity-70"
                  }`}
                />

                {/* Overlay Button */}
                 <div
    className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500
      ${project.isSpecial
        ? "opacity-100 bg-yellow-500 bg-opacity-20"
        : "opacity-0 group-hover:opacity-100 group-hover:bg-amber-200 group-hover:bg-opacity-90"
    }`}
  >
                  <button className="border-2 border-white text-white font-semibold py-3 px-6 uppercase tracking-wider text-sm hover:bg-white hover:text-black transition duration-300">
                    View More
                  </button>
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center bg-transparent">
                  <h3 className="text-sm font-semibold text-white uppercase bg-opacity-50 py-1 px-2 inline-block">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 lg:-right-12 xl:-right-16 bg-black hover:bg-yellow-600 text-white p-4 rounded-none flex items-center justify-center transition duration-300 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
