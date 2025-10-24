import React from "react";
import img7 from "./assets/img7.png";
import img8 from "./assets/img8.png";
import quoteicon from './assets/quoteicon.png'


export default function ClientsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-semibold uppercase text-gray-900 mb-3">
          WHAT IS SAYS OUR CLIENTS
        </h1>
        <p className="text-gray-600 mb-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </p>

       <div className="flex flex-col justify-center gap-8">
  {/* Left (First) box */}
  <div className="border border-gray-400 p-6 md:p-8 w-160 text-left flex items-center gap-6 rounded-sm">
    <div className="relative w-32 h-28 flex-shrink-0">
      <img
        src={img7}
        alt="client1"
        className="w-full h-full object-cover rounded-sm"
      />
      <img
        src={quoteicon}
        alt="quote"
        className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-6 h-6"
      />
    </div>
    <div>
      <h2 className="text-lg font-semibold uppercase text-gray-800">LOKSANS</h2>
      <p className="text-gray-600 text-[15px] leading-relaxed mt-1">
        ipsum dolor sit amet, consectetur adipiscing elit, sed veniam,
        quis nostrud exercitation ullamco laboris nisi ut reprehenderit
        in voluptate velit
      </p>
    </div>
  </div>

  {/* Right (Second) box below the first one */}
  <div className="border border-gray-400 p-6 md:p-8 text-left flex items-center gap-6 rounded-sm w-160 transform translate-x-[380px]">

    <div className="relative w-32 h-28 flex-shrink-0">
      <img
        src={img8}
        alt="client2"
        className="w-full h-full object-cover rounded-sm"
      />
      <img
        src={quoteicon}
        alt="quote"
        className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-6 h-6"
      />
    </div>
    <div className="w-100">
      <h2 className="text-lg font-semibold uppercase text-gray-800">LOKSANS</h2>
      <p className="text-gray-600 text-[15px] leading-relaxed mt-1">
        ipsum dolor sit amet, consectetur adipiscing elit, sed veniam,
        quis nostrud exercitation ullamco laboris nisi ut reprehenderit
        in voluptate velit
      </p>
    </div>
  </div>
</div>


        {/* Dots */}
        <div className="flex justify-center mt-14 gap-3 -ml-[850px] -mt-[220px]">
  <span className="w-4 h-4 bg-yellow-400 rounded-full"></span>
  <span className="w-4 h-4 bg-black rounded-full"></span>
  <span className="w-4 h-4 bg-yellow-400 rounded-full"></span>
  <span className="w-4 h-4 bg-yellow-400 rounded-full"></span>
</div>


      </div>
    </section>
  );
}
