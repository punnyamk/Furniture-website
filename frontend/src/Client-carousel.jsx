import React, { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import img7 from "./assets/img7.png";
import img8 from "./assets/img8.png";

const clients = [
  
{ name: "LOKSANS",
   image: img7,
    text: "ipsum dolor sit amet, consectetur adipiscing elit, sed veniam, quis nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate velit",
   },
 { name: "LOKSANS",
   image: img8, 
   text: "ipsum dolor sit amet, consectetur adipiscing elit, sed veniam, quis nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate velit", 
  },
{ name: "LOKSANS",
   image: img7,
    text: "ipsum dolor sit amet, consectetur adipiscing elit, sed veniam, quis nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate velit",
   },
 { name: "LOKSANS",
   image: img8, 
   text: "ipsum dolor sit amet, consectetur adipiscing elit, sed veniam, quis nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate velit", 
  },
  { name: "LOKSANS",
   image: img7,
    text: "ipsum dolor sit amet, consectetur adipiscing elit, sed veniam, quis nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate velit",
   },
 { name: "LOKSANS",
   image: img8, 
   text: "ipsum dolor sit amet, consectetur adipiscing elit, sed veniam, quis nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate velit", 
  },
  { name: "LOKSANS",
   image: img7,
    text: "ipsum dolor sit amet, consectetur adipiscing elit, sed veniam, quis nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate velit",
   },
 { name: "LOKSANS",
   image: img8, 
   text: "ipsum dolor sit amet, consectetur adipiscing elit, sed veniam, quis nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate velit", 
  },







];

export default function Clients() {
  const [index, setIndex] = useState(0);

  // Total pages = clients.length / 2
  const totalSlides = Math.ceil(clients.length / 2);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-center">
        WHAT OUR CLIENTS SAY
      </h2>
      <p className="text-gray-500 mb-10 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing
      </p>

      {/* Slider Wrapper */}
      <div className="relative w-[1200px] max-w-7xl h-[500px] overflow-hidden flex justify-center items-center">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * 100}%)`,
            width: `${totalSlides * 100}%`,
          }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => {
            const start = slideIndex * 2;
            const pair = clients.slice(start, start + 2);
            return (
              <div
                key={slideIndex}
                className="flex flex-col justify-center items-center w-full space-y-10 flex-shrink-0"
              >
                {pair.map((client, i) => (
                  <div
                    key={i}
                    className={`flex items-center border p-6 md:p-8 gap-6 w-[600px] bg-white shadow-md rounded-md relative ${
                      i === 0 ? "mr-[180px]" : "ml-[210px]"
                    }`}
                  >
                    <div className="relative">
                      <img
                        src={client.image}
                        alt={client.name}
                        className="w-28 h-28 object-cover rounded-md"
                      />
                      <FaQuoteLeft className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 text-yellow-400 text-2xl rounded-full p-1 shadow" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-xl mb-2">{client.name}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {client.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-3 mt-8 pr-160 ">
        {Array.from({ length: totalSlides }).map((_, dot) => (
          <button
            key={dot}
            onClick={() => setIndex(dot)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === dot ? "bg-black scale-110" : "bg-amber-500/90"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
