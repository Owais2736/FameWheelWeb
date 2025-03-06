import React, { useState } from "react";
import prod5 from "../Json/Product5.json";
import prod6 from "../Json/Product52.json";

function Product5() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="max-w-screen-2xl mx-auto px-6 md:px-6 lg:px-10 xl:px-16">
      <div className="font-sans p-4">
        {/* Heading */}
        <h1 className="text-[18px] sm:text-[24px] font-bold mb-5 text-left">
          Browse Used Cars in UAE by Category
        </h1>

        {/* Tabs */}
        <ul className="flex border-b">
          <li
            className={`tab text-[14px] sm:text-[15px] py-2 px-4 cursor-pointer ${
              activeTab === "home"
                ? "text-red-900 font-bold border-b-2 border-red-900"
                : "text-gray-600 font-semibold border-b-2 border-transparent"
            }`}
            onClick={() => setActiveTab("home")}
          >
            Transmission
          </li>
          <li
            className={`tab text-[14px] sm:text-[15px] py-2 px-4 cursor-pointer ${
              activeTab === "setting"
                ? "text-red-900 font-bold border-b-2 border-red-900"
                : "text-gray-600 font-semibold border-b-2 border-transparent"
            }`}
            onClick={() => setActiveTab("setting")}
          >
            Fuel Type
          </li>
        </ul>

        {/* Content Section */}
        <div className="w-full mt-6">
          {activeTab === "home" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {prod6.map((data) => (
                <div
                  key={data.title}
                  className="bg-white border p-3 shadow-md rounded-lg overflow-hidden"
                >
                  <img
                    src={data.src}
                    alt={data.title}
                    className="w-full rounded-lg h-[90px] md:h-[100px] object-cover"
                  />
                  <h3 className="text-[14px] sm:text-[16px] mt-2 text-gray-800 text-center">
                    {data.title}
                  </h3>
                </div>
              ))}
            </div>
          )}

          {activeTab === "setting" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {prod5.map((data) => (
                <div
                  key={data.title}
                  className="bg-white border p-3 shadow-md rounded-lg overflow-hidden"
                >
                  <img
                    src={data.src}
                    alt={data.title}
                    className="w-full rounded-lg h-[90px] md:h-[100px] object-cover"
                  />
                  <h3 className="text-[14px] sm:text-[16px] mt-2 text-gray-800 text-center">
                    {data.title}
                  </h3>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product5;
