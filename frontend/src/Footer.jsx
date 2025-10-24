import React from 'react';

function Footer() {
  return (
    <footer>
      {/* Top Section: Links and Information (Dark Gray Background) */}
      <div className="bg-neutral-800 py-20 text-white h-109 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Column 1: INFORMATION */}
            <div>
              <h3 className="text-xl font-normal uppercase mb-6 tracking-wide">
                INFORMATION
              </h3>
              <p className="text-sm font-light leading-relaxed text-shadow-white">
                There are many variations of passages of Lorem ipsum available, 
                but the majority have suffered alteration in some form, by injected 
                humour, or randomised words which don't look even slightly 
                believable.
              </p>
            </div>

            {/* Column 2: LET US HELP YOU */}
            <div>
              <h3 className="text-xl font-normal uppercase mb-6 tracking-wide">
                LET US HELP YOU
              </h3>
              <p className="text-sm font-light leading-relaxed  text-shadow-white">
                There are many variations of passages of Lorem ipsum available, 
                but the majority have suffered alteration in some form, by injected 
                humour, or randomised words which don't look even slightly 
                believable.
              </p>
            </div>

            {/* Column 3: USEFUL LINKS */}
            <div>
              <h3 className="text-xl font-normal uppercase mb-6 tracking-wide">
                USEFUL LINKS
              </h3>
              <ul className="space-y-2 text-sm text-shadow-white">
                <li><a href="#" className="hover:text-yellow-500 transition duration-200">About Us</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition duration-200">Careers</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition duration-200">Sell on shopee</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition duration-200">Press & News</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition duration-200">Competitions</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition duration-200">Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Column 4: OUR DESIGN (with Subscribe Input) */}
            <div>
              <h3 className="text-xl font-normal uppercase mb-6 tracking-wide">
                OUR DESIGN
              </h3>
              <p className="text-sm font-light leading-relaxed  text-shadow-white mb-6">
                There are many variations of passages of Lorem ipsum available, 
                but the majority have suffered alteration in some form, by.
              </p>
              
              {/* Subscribe Input and Button */}
              <div className="flex flex-col">
                <div className="relative border-b border-white pb-1">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none"
                  />
                  <button className="absolute right-0 bottom-0 text-white text-sm  uppercase hover:text-yellow-500 transition duration-200 font-bold">
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright (Lighter Gray Background) */}
      <div className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-black">
          2023 All Rights Reserved. Design by Free html Templates Distribution By ThemeWagon
        </div>
      </div>
    </footer>
  );
}

export default Footer;