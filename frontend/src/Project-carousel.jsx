import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import img1 from "./assets/img4.png";
import img2 from "./assets/img5.png";
import img3 from "./assets/img6.png";

const projects = [
  { id: 1, title: "MODERN HOME DESIGN", img: img1 },
  { id: 2, title: "MODERN HOME DESIGN", img: img2 },
  { id: 3, title: "MODERN HOME DESIGN", img: img3 },
];

function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-black uppercase mb-3">
          OUR PROJECTS
        </h2>
        <p className="text-gray-500 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </p>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-16 bg-black text-white p-4 hover:bg-gray-800 transition rounded-md z-10"
          >
            <FaChevronLeft size={18} />
          </button>

          {/* Slider Container */}
          <div className="w-full overflow-hidden max-w-5xl ">
            <div
              className="flex transition-transform duration-[1500ms] ease-in-out "
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project) => (
                <div key={project.id} className="min-w-full flex justify-center gap-6">
                  {projects.map((item, i) => (
                    <div key={i} className="w-1/3 flex-shrink-0">
                      <div className="relative group overflow-hidden rounded-md shadow-md">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 right-0  bg-opacity-50 py-3 text-white text-sm font-semibold">
                          {item.title}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-16 bg-yellow-400 text-white p-4 hover:bg-yellow-500 transition rounded-md z-10"
          >
            <FaChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProjectsCarousel;
