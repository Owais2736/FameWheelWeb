import React from 'react'

function HeroSection3() {
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

            <h1 className="text-3xl text-black font-extrabold leading-tight mb-2">Famewheels Car Inspection</h1>
            <p className="leading-tight text-gray-600 text-lg">Get a professional and reliable car inspection service with FameWheels across major cities like Karachi, Lahore, and Islamabad. Your trusted partner for used car evaluations in Pakistan.</p>
            <button className="w-[250px] h-[50px] hover:text-black rounded-tl-xl rounded-tr-xl rounded-bl-xl mt-6 font-thin text-[16px] bg-red-800 text-white">
              GET YOUR CAR INSPECTED
            </button>
          </div>

          {/* Right Image & Button */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-end mt-6 lg:mt-0">
            <img src="https://www.famewheels.com/static/media/inspection-new-vector.651e03543d0c30cd2e0c.png" alt="Car" className="max-w-[300px] h-auto" />

          </div>

        </div>
      </div>

    </>
  )
}

export default HeroSection3
