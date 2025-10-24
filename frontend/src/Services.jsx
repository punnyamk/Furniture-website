import React from 'react';
import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import icon3 from './assets/icon3.png';
import icon4 from './assets/icon4.png';

const serviceCardsData = [
  {
    title: "FURNITURES",
    description: "There are many variations of passages of Lorem Ipsum available, but the",
    icon: icon1,
  },
  {
    title: "OFFICE",
    description: "There are many variations of passages of Lorem Ipsum available, but the",
    icon: icon2,
  },
  {
    title: "HOME",
    description: "There are many variations of passages of Lorem Ipsum available, but the",
    icon: icon3,
  },
  {
    title: "BADROOM",
    description: "There are many variations of passages of Lorem Ipsum available, but the",
    icon: icon4,
  },
];

function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Title and Subtitle */}
        <header className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-wide text-gray-800 uppercase mb-2">
            OUR SERVICES
          </h2>
          <p className="text-lg text-gray-500">
            There are many variations of passages of Lorem Ipsum
          </p>
        </header>

        {/* Service Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCardsData.map((service, index) => (
            <div
              key={index}
              className="text-center p-2 bg-white "
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 uppercase mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Read More Button */}
              <button
                className="bg-yellow-500 hover:bg-black text-white font-bold py-3 px-8 rounded-sm uppercase text-sm transition duration-300"
                onClick={() => console.log(`Navigating to ${service.title}`)}
              >
                READ MORE
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
