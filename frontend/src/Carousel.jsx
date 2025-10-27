import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaSearch } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";
import bannerbg from "./assets/bannerbg.png"; // ✅ your imported image

const Carousel = () => {
  const slides = [
    {
      id: 1,
      title: "FURNITURE",
      subtitle:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("right");
  const [isAnimating, setIsAnimating] = useState(true);

  const changeSlide = (index, dir = "right") => {
    setDirection(dir);
    setIsAnimating(false);
    setTimeout(() => {
      setCurrent(index);
      setIsAnimating(true);
    }, 100);
  };

  
  useEffect(() => {
    const timer = setInterval(() => {
      changeSlide((current + 1) % slides.length, "right");
    }, 3000);
    return () => clearInterval(timer);
  }, [current]);

  // ✅ Swipe gestures
  const handlers = useSwipeable({
    onSwipedLeft: () => changeSlide((current + 1) % slides.length, "right"),
    onSwipedRight: () =>
      changeSlide((current - 1 + slides.length) % slides.length, "left"),
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${bannerbg})`,
        backgroundSize: "cover", 
        
      }}
    >
      

      {/* ✅ Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-12 py-6 text-white z-30">
        <h1 className="text-2xl font-bold tracking-wide pl-70 text-black ">VINTAGEFUR</h1>

        <ul
          className="hidden md:flex space-x-8 text-lg font-medium text-black"
          style={{ fontStretch: "90%" }}
        >
          <li className="hover:text-amber-400 cursor-pointer">HOME</li>
          <li className="hover:text-amber-400 cursor-pointer">SERVICES</li>
          <li className="hover:text-amber-400 cursor-pointer">ABOUT</li>
          <li className="hover:text-amber-400 cursor-pointer">SHOP</li>
          <li className="hover:text-amber-400 cursor-pointer">CONTACT</li>
        </ul>

        <div className="hidden md:flex items-center space-x-4 text-lg">
          <FaSearch className="cursor-pointer hover:text-amber-400 text-black" />
          <button className="hover:text-amber-400 pr-70 text-black">LOGIN</button>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden text-2xl cursor-pointer">☰</div>
      </nav>

      {/* ✅ Text Content */}
      <div
        className={`relative z-10 text-center text-white transition-transform duration-700 ease-in-out ${
          isAnimating
            ? "translate-x-0 opacity-100"
            : direction === "right"
            ? "-translate-x-full opacity-0"
            : "translate-x-full opacity-0"
        }`}
      >
        <h2 className=" md:text-8xl  mb-4 font-stretch-normal text-black pt-20 ">
          {slides[current].title}
        </h2>
        <p className=" mb-8 max-w-2xl mx-auto pb-90 text-black ">
          {slides[current].subtitle}
        </p >
        <button className="bg-yellow-500 hover:bg-black text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300">
          CONTACT US
        </button>
      </div>

      {/* ✅ Left Arrow */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={() =>
            changeSlide((current - 1 + slides.length) % slides.length, "left")
          }
          className="bg-amber-300 text-white p-9 rounded-full hover:bg-black transition "
        >
          <FaArrowLeft />
        </button>
      </div>

      {/* ✅ Right Arrow */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 z-20 ">
        <button
          onClick={() => changeSlide((current + 1) % slides.length, "right")}
          className="bg-black text-white p-9 rounded-full hover:bg-amber-300 transition"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
