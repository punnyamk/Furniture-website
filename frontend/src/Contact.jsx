import React from "react";
import bg1 from './assets/bg1.png'


function Contact() {
  return (
    <section
      className="relative py-24 overflow-hidden flex items-center"
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Yellow overlay for visibility */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 ">
        <h2 className="text-5xl font-semibold text-white uppercase mb-12 ">
          CONTACT US
        </h2>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: Contact Form */}
          <div className="w-full lg:w-3/5">
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-4  border bg-amber-50 border-white text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4  border border-white text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-white bg-amber-50"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-4  border border-white  text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-white  bg-amber-50 "
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full p-4  border border-white  text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-white  bg-amber-50 "
              />

              <button
                type="submit"
                className="border border-white text-white font-bold py-4 px-12 uppercase text-sm tracking-wider hover:bg-white hover:text-yellow-500 transition duration-300 rounded-md"
              >
                SEND
              </button>
            </form>
          </div>

          {/* Right: Map */}
          <div className="w-full lg:w-2/5 rounded-md overflow-hidden shadow-lg border border-gray-200">
            <iframe
              title="Eiffel Tower Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991666453675!2d2.292265915729792!3d48.858370079287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x87d159c36894e20!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1633512345678!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
