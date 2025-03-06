import React from 'react';

function PaymentSection() {
  return (

    <div className="max-w-screen-2xl mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
    <div className="p-8 font-sans">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-black mb-8">Our Payment Partners</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img src="	https://www.famewheels.com/static/media/jazzcash.a1d06ec54f1296d58848.png" alt="Partner 1" className="w-full h-20 object-contain" />
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz8BLhb7jrWKB0ZxouP6xMQmXd_5mwYr0aRA&s" alt="Partner 2" className="w-full h-20 object-contain" />
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img src="https://www.famewheels.com/static/media/PayFastLogo.95717d35da940736ed86.png" alt="Partner 3" className="w-full h-20 object-contain" />
          </div>
          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img src="https://www.famewheels.com/static/media/al-habib.a164278ca0ebe4d4b4fc.png" alt="Partner 4" className="w-full h-20 object-contain" />
          </div>
          {/* Card 5 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlF28bsqDGrf1D3L19A_kc4O5Iuw3dkwXq_g&s" alt="Partner 5" className="w-full h-20 object-contain" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default PaymentSection;

