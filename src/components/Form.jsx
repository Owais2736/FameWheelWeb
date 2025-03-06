import React from 'react';

function Form() {
  return (
    <>
      <div className="p-8 font-sans">
        <div className="container mx-auto">
          
          {/** White Background Wrapper **/}
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
              
              {/** Grid Item 1 **/}
              <div className="p-2  rounded-lg">
                <select className="block w-full p-2 border rounded-lg bg-gray-100 text-gray-800 focus:outline-none">
                  <option>Select Make</option>
                  <option>Toyota</option>
                  <option>Honda</option>
                  <option>Suzuki</option>
                  <option>KIA</option>
                  <option>Haval</option>
                </select>
              </div>

              {/** Grid Item 2 **/}
              <div className="p-2  rounded-lg">
                <select className="block w-full p-2 border rounded-lg bg-gray-100 text-gray-800 focus:outline-none">
                  <option>Select City</option>
                  <option>Karachi</option>
                  <option>Lahore</option>
                  <option>Islamabad</option>
                  <option>Peshawar</option>
                  <option>Multan</option>
                </select>
              </div>

              {/** Grid Item 3 **/}
              <div className="p-2  rounded-lg">
                <button className=' w-[80px] lg:w-[120px] h-[38px] rounded-lg  bg-red-600 text-white'>Search</button>
                <button className='w-[100px] sm:w-[120px] text-[12px] sm:text-[14px] lg:text-[18px] md:w-[150px] xl:w-[230px] h-[38px] ml-3 rounded-lg border-2 border-red-200  text-gray-600'>Advanced Search</button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Form;
