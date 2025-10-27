import React from "react";
import { FaArrowLeft, FaArrowRight, FaSearch } from "react-icons/fa";
import bannerbg from "./assets/bannerbg.png";
import Carousel from "./Carousel";

function Home() {
  return (
    // <div className="min-h-screen w-full relative font-sans overflow-hidden">
    //   {/* Navbar */}
    //   <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-12 py-6 text-black z-20">
    //     <h1 className="text-2xl font-bold tracking-wide font-poppins">
    //       VINTAGEFUR
    //     </h1>

    //     <ul
    //       className="hidden md:flex space-x-6 text-sm text-[20px]"
    //       style={{ fontStretch: "90%" }}
    //     >
    //       <li className="hover:text-gray-600 cursor-pointer">HOME</li>
    //       <li className="hover:text-gray-600 cursor-pointer">SERVICES</li>
    //       <li className="hover:text-gray-600 cursor-pointer">ABOUT</li>
    //       <li className="hover:text-gray-600 cursor-pointer">SHOP</li>
    //       <li className="hover:text-gray-600 cursor-pointer">CONTACT</li>
    //     </ul>

    //     <div className="hidden md:flex items-center space-x-4 text-[20px]">
    //       <FaSearch className="cursor-pointer hover:text-gray-600" />
    //       <button className="text-sm hover:text-gray-600 text-[20px]">
    //         LOGIN
    //       </button>
    //     </div>

    //     {/* Mobile Menu Icon */}
    //     <div className="md:hidden text-xl cursor-pointer">☰</div>
    //   </nav>

    //   {/* Hero Section */}
    //   <div className="relative w-full h-screen overflow-hidden">
    //     {/* Background Image */}
    //     <img
    //       src={bannerbg}
    //       alt="Furniture Interior"
    //       className="w-full h-full object-cover object-top"
    //     />

    //     {/* Overlay */}
    //     <div className="absolute inset-0 bg-white/10"></div>

    //     {/* Hero Content */}
       <Carousel/>

    //     Navigation Arrows
    //     <div className="absolute inset-y-0 left-12 flex items-center">
    //       <button className="bg-black text-white p-8 rounded-full hover:bg-amber-300 transition">
    //         <FaArrowLeft />
    //       </button>
    //     </div>

    //     <div className="absolute inset-y-0 right-12 flex items-center">
    //       <button className="bg-black text-white p-8 rounded-full hover:bg-amber-300 transition">
    //         <FaArrowRight />
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Home;
