import React from "react";
import { FaArrowLeft, FaArrowRight, FaSearch } from "react-icons/fa";
import bannerbg from "./assets/bannerbg.png"
function Home() {
  return (
    <div className="min-h-screen w-full relative font-sans">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-12 py-6 text-black z-20">
        <h1 className="text-2xl font-bold tracking-wide pl-35 font-poppins">VINTAGEFUR</h1>

        <ul className="hidden md:flex space-x-6 text-sm text-[20px]" style={{ fontStretch: '90%' }}>
  <li className="hover:text-gray-600 cursor-pointer">HOME</li>
  <li className="hover:text-gray-600 cursor-pointer">SERVICES</li>
  <li className="hover:text-gray-600 cursor-pointer">ABOUT</li>
  <li className="hover:text-gray-600 cursor-pointer">SHOP</li>
  <li className="hover:text-gray-600 cursor-pointer">CONTACT</li>
</ul>

        <div className="hidden md:flex items-center space-x-4 text-[20px]">
          <FaSearch className="cursor-pointer hover:text-gray-600" />
          <button className="text-sm hover:text-gray-600 pr-30 text-[20px]">LOGIN</button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-xl cursor-pointer">☰</div>
      </nav>

      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden  ">
        {/* Background Image */}
        <img
          src={bannerbg}
          alt="Furniture Interior"
          className="w-full h-full object-cover object-top"
        />

        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-white/10"></div>

        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center text-center px-6 mt-24 md:mt-32  ">
          {/* Move text upward */}
          <div className="mt-16 md:mt-20 ">
          <h2 className="md:text-8xl font-thin text-black relative bottom-18 pt-10 slide">
  FURNITURE
</h2>
            <p className="text-gray-800 text-sm md:text-base mt-4 max-w-2xl relative bottom-18 pb-50">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
          </div>

          {/* Add large space before button */}
          <button className="mt-12 bg-yellow-500 text-white text-sm md:text-base font-semibold px-8 py-3 hover:bg-black transition-all duration-300">
            CONTACT US
          </button>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute inset-y-0 left-12 flex items-center">
          <button className="bg-black text-white p-8 rounded-full hover:bg-amber-300 transition" >
            <a href="Home"></a>
            <FaArrowLeft />
          </button>
        </div>

        <div className="absolute inset-y-0 right-12 flex items-center">
          <button className="bg-black text-white p-8 rounded-full hover:bg-amber-300 transition">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;