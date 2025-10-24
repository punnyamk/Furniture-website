import React from 'react';
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'

// Data for the two furniture gallery items
const furnitureItems = [
  {
    imageSrc: img2,
    altText: 'Modern white kitchen with wooden island and bar stools',
    title: 'TEMPOR INCIDIDUNT UT LABORE ET DOLORE',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
  },
  {
    imageSrc: img3,
    altText: 'Close-up of a modern black kitchen sink and faucet',
    title: 'TEMPOR INCIDIDUNT UT LABORE ET DOLORE',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
  },
];

function Furniture() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <header className="text-center mb-12">
          <h2 className="text-3xl font-normal tracking-wide text-gray-800 uppercase mb-2">
            OUR FURNITURES
          </h2>
          <p className="text-lg text-gray-500">
            There are many variations of passages of Lorem Ipsum
          </p>
        </header>

        {/* Gallery Grid */}
        <div className="flex flex-col lg:flex-row justify-center gap-8">
          {furnitureItems.map((item, index) => (
            <div key={index} className="w-full lg:w-1/2 max-w-lg mx-auto">
              
              {/* Image Container */}
              <div className="mb-6 overflow-hidden">
                {/* The image in the original design appears slightly wider than the text below it.
                  We use rounded-sm for subtle edges and h-auto to maintain aspect ratio.
                */}
                <img 
                  src={item.imageSrc} 
                  alt={item.altText} 
                  className="w-full h-auto object-cover rounded-sm"
                />
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-yellow-300 uppercase tracking-wider mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-base text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Furniture;