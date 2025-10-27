import React, { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import img7 from "./assets/img7.png";
import img8 from "./assets/img8.png";

const clients = [
  {
    name: "LOKSANS",
    image: img7,
    text: "ipsum dolor sit amet, consectetur adipiscing elit, sed veniam, quis nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate velit",
  },
  {
    name: "LOKSANS",
    image: img8,
    text: "ipsum dolor sit amet, consectetur adipiscing elit, sed veniam, quis nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate velit",
  },
];

export default function Clients() {
  const [index, setIndex] = useState(1); // start from the right side (second slide)

  // Auto-slide every 4 seconds (reversed direction)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === 0 ? 1 : 0)); // alternate between 1 and 0
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex flex-col items-center  ">
      <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-center">
        WHAT IS SAYS OUR CLIENTS
      </h2>
      <p className="text-gray-500 mb-10 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing
      </p>

      {/* Slider Wrapper */}
      <div className="relative w-[1200px] max-w-7xl h-[500px] overflow-hidden flex justify-center items-center">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(${index * 100 - 100}%)`, // reversed slide direction
            width: "200%", // two slides horizontally
          }}
        >
          {/* First Client */}
          <div className="flex flex-col justify-center items-center w-full space-y-10">
            {/* Client Card 1 */}
            <div className="flex items-center border p-6 md:p-8 gap-6 w-[600px] bg-white shadow-md rounded-md mr-[180px] relative">
              <div className="relative">
                <img
                  src={clients[0].image}
                  alt={clients[0].name}
                  className="w-28 h-28 object-cover rounded-md"
                />
                {/* Icon at bottom center of image */}
                <FaQuoteLeft className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 text-yellow-400 text-2xl rounded-full p-1 shadow" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-xl mb-2">{clients[0].name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {clients[0].text}
                </p>
              </div>
            </div>

            {/* Client Card 2 */}
            <div className="flex items-center border p-6 md:p-8 gap-6 w-[600px] bg-white shadow-md rounded-md ml-[210px] relative">
              <div className="relative">
                <img
                  src={clients[1].image}
                  alt={clients[1].name}
                  className="w-28 h-28 object-cover rounded-md"
                />
                {/* Icon at bottom center of image */}
                <FaQuoteLeft className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 text-yellow-400 text-2xl rounded-full p-1 shadow" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-xl mb-2">{clients[1].name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {clients[1].text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-3 mt-8 mr-190">
        {[0, 1,2,3].map((dot) => (
          <button
            key={dot}
            onClick={() => setIndex(dot)}
            className={`w-4 h-4 rounded-full transition-all duration-600 ${
              index === dot ? "bg-yellow-400 scale-110" : "bg-black/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
