import React from 'react';
import prod4 from '../Json/Product4.json';

function Product4() {
  return (
    <>

      <div className="text-center mt-6">
        <h2 className="text-gray-800 text-4xl font-bold">Featured Used Cars</h2>
      </div>

      {/* Carousel Container */}
      <div id="carouselExampleControls" className="carousel slide mt-6 z-0 relative" data-bs-ride="carousel">
        <div className="carousel-inner ">

          {/* First Carousel Item */}
          <div className="carousel-item  active">
            <div className="max-w-5xl  mx-auto ">
              <div className="grid grid-rows-2  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {prod4.map((data, index) => (
                  <div key={index} className="bg-gray-200 p-2  border rounded-lg shadow-md">
                    <img
                      src={data.src}
                      className=" h-40 w-full object-cover rounded-lg"
                      alt={data.title}
                    />

                    <div className="mt-2 mb-1  bg-white  rounded-lg pt-2 min-h-[80px] pl-2">
                      <h4 className="text-md font-semibold">{data.title}</h4>
                      <p className="text-sm mt-2">{data.price}</p>
                      <div className="flex gap-1 items-center text-xs">
                        <div className='flex gap-1 ml-[-5px] items-center'>
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" color="red" fill="red">
                              <path d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z" stroke="currentColor" stroke-width="1.5" />
                              <path d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z" stroke="currentColor" stroke-width="1.5" />
                            </svg>
                          </div>
                          <div>{data.location}</div>

                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second Carousel Item */}
          <div className=" carousel-item">
            <div className="max-w-5xl mx-auto px-4">
              <div className="grid grid-rows-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {prod4.map((data, index) => (
                  <div key={index} className="bg-gray-200 p-2 border rounded-lg shadow-md">
                    <img
                      src={data.src}
                      className="w-full h-40 object-cover rounded-lg"
                      alt={data.title}
                    />
                    <div className="mt-2 mb-1  bg-white  rounded-lg pt-2 min-h-[80px] pl-2">
                      <h4 className="text-md font-semibold">{data.title}</h4>
                      <p className="text-sm mt-2">{data.price}</p>
                      <div className="flex gap-1 items-center text-xs">
                        <div className='flex gap-1 ml-[-5px] items-center'>
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" color="red" fill="red">
                              <path d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z" stroke="currentColor" stroke-width="1.5" />
                              <path d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z" stroke="currentColor" stroke-width="1.5" />
                            </svg>
                          </div>
                          <div>{data.location}</div>

                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Carousel Buttons */}
        <button
          className="carousel-control-prev absolute top-1/2 left-0 transform -translate-y-1/2"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
            style={{ filter: 'invert(1)' }} // Makes arrow black
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next absolute top-1/2 right-0 transform -translate-y-1/2"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
            style={{ filter: 'invert(1)' }} // Makes arrow black
          ></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>
    </>
  );
}

export default Product4;
