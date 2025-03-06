import React from 'react';
import prod2 from '../Json/Product2.json';

function Product2() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-4 md:px-10 lg:px-16 xl:px-20">
        
        <h1 className="text-[24px] sm:text-[28px] font-bold mb-6 text-left">
          Browse Cars by Make
        </h1>

        <div className="flex flex-wrap justify-center sm:justify-start gap-4">
          {prod2.map((data) => (
            <div
              key={data.title}
              className="bg-white border p-5 shadow-md rounded-lg font-[sans-serif] overflow-hidden 
              w-[95%] sm:w-[30%] md:w-[22%] lg:w-[14.5%] xl:w-[13%]"
            >
              <div>
                <img src={data.src} alt={data.title} className="w-full h-auto object-cover" />
              </div>

              <div className="p-2 flex flex-col items-center">
                <h3 className="text-[18px] mt-10 text-gray-800">{data.title}</h3>
              </div>
            </div>
          ))}
        </div>

       
        <div className="flex justify-end mt-6 pr-4 md:pr-10 lg:pr-16 xl:pr-5">
          <button className="w-[120px] h-[38px] border border-black rounded-lg hover:bg-black hover:text-white transition">
            Show More
          </button>
        </div>
      </div>
    </>
  );
}

export default Product2;
