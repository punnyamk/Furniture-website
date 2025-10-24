import React from 'react';
import img1 from './assets/img1.png'

function About() {
  return (
    <section className="bg-yellow-500 py-20 h-150"> {/* Main section with yellow background and padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section: Text Content */}
        <div className="lg:w-1/2 text-white text-center lg:text-left mb-10 lg:mb-0 pr-0 lg:pr-10">
          <h2 className="text-4xl font-semibold mb-6 ">
            ABOUT US
          </h2>
          <p className="text-lg leading-relaxed mb-8 pt-10">
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. There are many variations of passages of Lorem Ipsum
            available, but the majority have
          </p>
          <button
            className="
              bg-gray-800 
              hover:bg-gray-900 
              text-white 
              font-bold 
              py-3 
              px-8 
              rounded-sm 
              uppercase 
              text-sm 
              transition 
              duration-300
            "
            onClick={() => console.log('Read More About Us clicked')}
          >
            READ MORE
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img 
            src={img1}
            alt="Wooden baby crib / cradle"
            className="max-w-full h-auto object-cover"
            style={{ maxWidth: '600px' }} // Added inline style to mimic the image size/proportion
          />
        </div>
      </div>
    </section>
  );
}

export default About;