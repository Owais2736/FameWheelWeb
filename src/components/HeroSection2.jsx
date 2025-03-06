import React from 'react';

function HeroSection2() {
  return (
    <div 
      className="relative bg-[url('/Images/BannarImage/hero2.png')] bg-black bg-cover bg-center bg-no-repeat 
                 px-6 sm:py-20 py-10 font-[sans-serif] text-white min-h-[450px] flex items-center justify-center"
    >
      {/* 🔹 Top Heading Above Blur Div */}
      <h2 className="absolute top-6 mt-4 text-2xl sm:text-3xl font-bold text-center">
      FameWheels Car Suggest
      </h2>

      <div className="w-[90%] max-w-screen-xl rounded-xl flex flex-col lg:flex-row items-center p-6 lg:p-12 
                      bg-gray-800 bg-opacity-30 backdrop-blur-md relative z-10">
        
        {/* Left Content */}
        <div className="lg:w-1/2 flex flex-col justify-center h-full">
          <p className="text-[26px] leading-tight">Not Sure,</p>
          <h1 className="text-3xl font-extrabold leading-tight mb-2">Which car to buy?</h1>
          <p className="leading-tight text-lg">Let us help you find the dream car</p>
        </div>

        {/* Right Image & Button */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-end mt-6 lg:mt-0">
          <img src="/Images/BannarImage/hero3.png" alt="Car" className="max-w-full h-auto" />
          <button className="w-[220px] h-[50px] hover:text-blue-900 rounded-tl-xl rounded-tr-xl rounded-bl-xl mt-6 font-thin text-[16px] bg-white text-black">
            Show Me Best Car
          </button>
        </div>

      </div>
    </div>
  );
}

export default HeroSection2;
