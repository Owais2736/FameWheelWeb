import React, { useState } from 'react';
import prod4 from '../Json/Product3Cat.json';
import prod3 from '../Json/Product3.json';

function Product3() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
      <div className="font-sans p-4">
        {/* Heading Above Tabs */}
        <h1 className="text-[20px] sm:text-[28px] font-bold mb-6 text-left">
        Browse Used Cars by Category
        </h1>

        {/* Tabs */}
        <ul className="flex border-b">
          <li 
            className={`tab text-[15px] py-2.5 px-5 cursor-pointer ${
              activeTab === 'home' ? 'text-red-900 font-bold border-b-2 border-red-900' : 'text-gray-600 font-semibold border-b-2 border-transparent'
            }`}
            onClick={() => setActiveTab('home')}
          >
            By City
          </li>
          <li 
            className={`tab text-[15px] py-2.5 px-5 cursor-pointer ${
              activeTab === 'setting' ? 'text-red-900 font-bold border-b-2 border-red-900' : 'text-gray-600 font-semibold border-b-2 border-transparent'
            }`}
            onClick={() => setActiveTab('setting')}
          >
            By Category
          </li>
        </ul>

        {/* Content Section */}
        <div className="w-full mt-8">
          {activeTab === 'home' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {prod3.map((data) => (
                <div
                  key={data.title}
                  className="bg-white border p-5 shadow-md rounded-lg font-[sans-serif] overflow-hidden"
                >
                  <div>
                    <img src={data.src} alt={data.title} className="w-full h-[100px] object-cover" />
                  </div>
                  <div className="p-2 flex flex-col items-center">
                    <h3 className="text-[18px] mt-3 text-gray-800">{data.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'setting' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {prod4.map((data) => (
                <div
                  key={data.title}
                  className="bg-white border p-5 shadow-md rounded-lg font-[sans-serif] overflow-hidden"
                >
                  <div>
                    <img src={data.src} alt={data.title} className="w-full h-auto object-cover" />
                  </div>
                  <div className="p-2 flex flex-col items-center">
                    <h3 className="text-[18px] mt-3 text-gray-800">{data.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product3;
