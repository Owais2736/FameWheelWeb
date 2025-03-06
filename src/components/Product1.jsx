import React from 'react';
import prod from '../Json/Product1.json';

function Product1() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center gap-4 pt-0">
        {prod.map((data) => (
          <div
            key={data.title}
            className="bg-white flex border pl-2 flex-col sm:flex-row items-center shadow-md w-[95%] sm:w-[48%] md:w-[30%] lg:w-[30%] rounded-lg font-[sans-serif] overflow-hidden"
          >
            <div>
              <img src={data.src} alt={data.title} className="w-full sm:w-32 h-auto object-cover" />
            </div>

            <div className="p-4 flex flex-col items-start">
              <h3 className="text-lg font-semibold text-[20px]">{data.title}</h3>
              <p className="mt-1 text-sm text-gray-500 w-[200px] leading-relaxed">{data.description}</p>
              <button
                type="button"
                className="mt-2 py-2  rounded-lg text-red-600 font-bold text-sm tracking-wider  border-red-600  transition"
              >
                Explore More
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Product1;
