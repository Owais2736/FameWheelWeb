import React from 'react'

function HeroSection4() {
  return (
    <>
      <div
        className="relative  bg-gray-50 bg-cover bg-center bg-no-repeat 
                 px-6  font-[sans-serif] text-white min-h-[390px] flex items-center justify-center"
      >


        <div className="w-[90%] max-w-screen-xl rounded-xl flex flex-col lg:flex-row items-center p-6 lg:p-12 
                      bg-white border bg-opacity-30 backdrop-blur-md relative z-10">

          {/* Left Content */}
          <div className="lg:w-1/2 flex flex-col justify-center h-full">

            <h1 className="text-3xl text-black font-extrabold leading-tight mb-2">Get the FameWheels Mobile App</h1>
            <p className="leading-tight text-gray-600 text-lg">Download the FameWheels mobile app and experience seamless car buying, selling, and live bidding at your fingertips.</p>
            <div className='flex gap-2'>


              <button className=" w-[130px] lg:w-[200px] h-[50px] hover:text-black rounded-tl-xl rounded-tr-xl rounded-bl-xl mt-6 font-thin text-[16px] bg-red-800 text-white">
                <img src="	https://www.famewheels.com/static/media/google-play-badge.6a0c5cef7b7fe0cbfbec.png" alt="" srcset="" />
              </button>
              <button className="w-[130px] lg:w-[200px] h-[50px] hover:text-black rounded-tl-xl rounded-tr-xl rounded-bl-xl mt-6 font-thin text-[16px] bg-red-800 text-white">
                <img src="		https://www.famewheels.com/static/media/app-store.6529c7629469b5410c27.jpg" alt="" srcset="" />
              </button>
            </div>
          </div>

          {/* Right Image & Button */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-end mt-6 lg:mt-0">
            <img src="https://www.famewheels.com/static/media/mobile-mockup.5d40ce3c99b5f6c12550.png" alt="Car" className="max-w-[300px] h-auto" />

          </div>

        </div>
      </div>


    </>
  )
}

export default HeroSection4
