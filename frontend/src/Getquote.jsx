import React from 'react';

import bg1 from './assets/bg1.png'


function Getquote() {

  const backgroundStyle = {
    backgroundImage: `url(${bg1})`, // <-- CORRECTED: Use template literal or string concatenation
  };

  return (
    <section className="relative py-24 overflow-hidden">
      
      {/* 1. Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={backgroundStyle} // <-- CORRECTED: Pass the style object
      >
        {/* This div holds the image */}
      </div>
      
      {/* 2. Yellow Overlay Layer (The "Filter" Effect) */}
      {/* This layer gives the entire section the signature dark-yellow/orange tint */}
      <div 
        className="absolute inset-0  opacity-80" // Tailwind classes for the color and darkness
      >
      </div>
      
      {/* 3. Content Container (Ensure content is relative/z-10 to float above the background) */}
      <div className="relative  mx-auto  text-center text-white w-full">
        
        {/* Main Title */}
        <h2 className="text-4xl font-normal tracking-wide uppercase mb-3">
          WHO WE ARE ?
        </h2>
        
        {/* Subtitle */}
        <p className="text-sm font-light uppercase tracking-widest mb-10 opacity-80">
          DESIGNERS & INNOVATORS
        </p>

        {/* Description Text */}
        <p className="text-lg leading-relaxed mb-12 w-[1197px] mx-auto text-left">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
</p>


        {/* Button */}
        <button
  className="
    bg-black 
    text-white 
    font-bold 
    py-4 
    px-12 
    uppercase 
    text-sm 
    tracking-wider 
    
    transition 
    duration-300
    hover:bg-white 
    hover:text-black
    rounded-[10px]
  "
  onClick={() => console.log('Get A Quote button clicked')}
>
  GET A QUOTE
</button>

      </div>
    </section>
  );
}

export default Getquote;