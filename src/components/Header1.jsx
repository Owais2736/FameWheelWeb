import React, { useState, useEffect } from "react";

function Header1() {
  const [bgClass, setBgClass] = useState("bg-black bg-opacity-60");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgClass("bg-red-400 bg-opacity-100 shadow-lg");
      } else {
        setBgClass("bg-black bg-opacity-60 shadow-none");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>

      {isMobile ? (
        <div className="absolute top-[20px] left-1/2 transform -translate-x-1/2 w-full h-[70px] flex justify-center items-center bg-white shadow-md z-50">
          <img width={180} height={60} src="Images/header/logo.png" alt="FameWheel Logo" />
        </div>
      ) : (
        <div
          className={`absolute top-[20px] left-1/2 transform -translate-x-1/2 w-[80%] ${bgClass} p-5 text-white flex justify-between items-center transition-all duration-300 rounded-3xl z-50`}
        >

          <div className="flex items-center">
            <img width={190} height={60} src="Images/header/logo.png" alt="Logo" />
          </div>

          <div className="flex items-center gap-7">
            <select className="w-[100px] h-[40px] rounded-lg text-white bg-transparent focus:outline-none">
              <option className="text-black bg-white">Used Cars</option>
              <option className="text-black bg-white">Karachi</option>
              <option className="text-black bg-white">Lahore</option>
              <option className="text-black bg-white">Islamabad</option>
              <option className="text-black bg-white">Peshawar</option>
              <option className="text-black bg-white">Multan</option>
            </select>

            <select className="w-[100px] h-[40px] rounded-lg text-white bg-transparent focus:outline-none">
              <option className="text-black bg-white">New Cars</option>
              <option className="text-black bg-white">Honda</option>
              <option className="text-black bg-white">Toyota</option>
              <option className="text-black bg-white">Suzuki</option>
            </select>

            <select className="w-[100px] h-[40px] rounded-lg text-white bg-transparent focus:outline-none">
              <option className="text-black bg-white">Inspection</option>
              <option className="text-black bg-white">Honda</option>
              <option className="text-black bg-white">Toyota</option>
              <option className="text-black bg-white">Suzuki</option>
            </select>

            <select className="w-[70px] h-[40px] rounded-lg text-white bg-transparent focus:outline-none">
              <option className="text-black bg-white">Bikes</option>
              <option className="text-black bg-white">Yamaha</option>
              <option className="text-black bg-white">Honda</option>
              <option className="text-black bg-white">Suzuki</option>
            </select>

            <button onClick={() => setSidebarOpen(true)} className="text-lg font-semibold cursor-pointer">
              More
            </button>




            <div className="text-lg font-semibold cursor-pointer">Blog</div>


            <select className="w-[130px] h-[40px] bg-red-800 pl-2 rounded-lg text-white bg-transparent focus:outline-none">
              <option className="text-black bg-white">Post Your Ads</option>
              <option className="text-black bg-white">Yamaha</option>
              <option className="text-black bg-white">Honda</option>
              <option className="text-black bg-white">Suzuki</option>
            </select>
          </div>
        </div>
      )}


      {isMobile && (
        <div className="fixed bottom-0 left-0 w-full h-[60px] bg-white flex justify-around items-center shadow-lg z-[9999]">
          <button className="text-gray-700 flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
              <path d="M7.08848 4.76364L6.08847 5.54453C4.57182 6.72887 3.81348 7.32105 3.40674 8.15601C3 8.99097 3 9.95552 3 11.8846V13.9767C3 17.763 3 19.6562 4.17157 20.8325C5.11466 21.7793 6.52043 21.964 9 22V18.0057C9 17.0738 9 16.6078 9.15224 16.2403C9.35523 15.7502 9.74458 15.3609 10.2346 15.1579C10.6022 15.0057 11.0681 15.0057 12 15.0057C12.9319 15.0057 13.3978 15.0057 13.7654 15.1579C14.2554 15.3609 14.6448 15.7502 14.8478 16.2403C15 16.6078 15 17.0738 15 18.0057V22C17.4796 21.964 18.8853 21.7793 19.8284 20.8325C21 19.6562 21 17.763 21 13.9767V11.8846C21 9.95552 21 8.99097 20.5933 8.15601C20.1865 7.32105 19.4282 6.72887 17.9115 5.54453L16.9115 4.76364C14.5521 2.92121 13.3724 2 12 2C10.6276 2 9.44787 2.92121 7.08848 4.76364Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
            </svg>
            <span className="text-xs">Home</span>
          </button>
          <button className="text-gray-700 flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
              <path d="M12 3V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
              <path d="M12 18V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
              <path d="M21 12L18 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
              <path d="M6 12L3 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
              <path d="M18.3635 5.63672L16.2422 7.75804" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
              <path d="M7.75804 16.2422L5.63672 18.3635" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
              <path d="M18.3635 18.3635L16.2422 16.2422" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
              <path d="M7.75804 7.75804L5.63672 5.63672" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
            <span className="text-xs">Find Cars</span>
          </button>
          <button className="text-gray-700 flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
              <path d="M9 15C9 12.1716 9 10.7574 9.87868 9.87868C10.7574 9 12.1716 9 15 9L16 9C18.8284 9 20.2426 9 21.1213 9.87868C22 10.7574 22 12.1716 22 15V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15C12.1716 22 10.7574 22 9.87868 21.1213C9 20.2426 9 18.8284 9 16L9 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16.9999 9C16.9975 6.04291 16.9528 4.51121 16.092 3.46243C15.9258 3.25989 15.7401 3.07418 15.5376 2.90796C14.4312 2 12.7875 2 9.5 2C6.21252 2 4.56878 2 3.46243 2.90796C3.25989 3.07417 3.07418 3.25989 2.90796 3.46243C2 4.56878 2 6.21252 2 9.5C2 12.7875 2 14.4312 2.90796 15.5376C3.07417 15.7401 3.25989 15.9258 3.46243 16.092C4.51121 16.9528 6.04291 16.9975 9 16.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span className="text-xs">My Ads</span>
          </button>
          <button onClick={() => setSidebarOpen(true)} className="text-gray-700 flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
              <path d="M4 12H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
              <path d="M20 6.99972L7.00316 7C5.18197 7 4.27137 7 4.04476 6.38268C3.81814 5.76537 4.46203 5.03884 5.7498 3.58579L6.26896 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
              <path d="M4 17.0003L16.9968 17C18.818 17 19.7286 17 19.9552 17.6173C20.1819 18.2346 19.538 18.9612 18.2502 20.4142L17.731 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
            <span className="text-xs">More</span>
          </button>
        </div>
      )}


      {sidebarOpen && (
        <div className="fixed top-0 left-0 w-[80%] h-screen min-h-screen bg-white shadow-xl z-[10000] transition-transform transform translate-x-0">
          {/* Sidebar Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <img width={150} height={40} src="Images/header/logo.png" alt="FameWheel Logo" />
            <button onClick={() => setSidebarOpen(false)} className="text-gray-700 text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>


          <ul className="p-4 space-y-3">
            <li className="border-b py-2 cursor-pointer">Buy Used Cars</li>
            <li className="border-b py-2 cursor-pointer">Sell Your Car</li>
            <li className="border-b py-2 cursor-pointer">New Car Models</li>
            <li className="border-b py-2 cursor-pointer">Car Reviews</li>
            <li className="border-b py-2 cursor-pointer">Car Insurance</li>
            <li className="border-b py-2 cursor-pointer">Car Financing</li>
            <li className="border-b py-2 cursor-pointer">Compare Cars</li>
            <li className="border-b py-2 cursor-pointer">Car Accessories</li>
            <li className="border-b py-2 cursor-pointer">Car Maintenance Tips</li>
            <li className="border-b py-2 cursor-pointer">Find Car Dealers</li>
          </ul>
        </div>
      )}

    </>
  );
}

export default Header1;
