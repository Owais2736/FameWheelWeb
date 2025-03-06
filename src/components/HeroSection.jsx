import React from "react";

function HeroSection() {
  return (
    <div
      className="bg-[url('/Images/BannarImage/BannerImage.jpg')] bg-cover bg-center bg-no-repeat 
                 px-6 sm:py-20 py-10 font-[sans-serif] text-white 
                 min-h-[530px] flex items-center justify-center"
    >
      <div className="max-w-screen-xl mx-auto text-center">
        <h1 className="text-5xl max-sm:text-3xl font-extrabold leading-tight mb-6">
          Discover, Buy & Sell Cars in Pakistan
        </h1>
        <p className="text-lg mb-12">Smart Choices, Smooth Rides – Your Trusted Platform</p>
      </div>
    </div>
  );
}

export default HeroSection;
