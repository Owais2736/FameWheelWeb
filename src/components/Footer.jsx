import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <footer className="bg-gray-100  pt-5">
        {/* Newsletter Subscription */}
        <div className="max-w-6xl mx-auto bg-white rounded-lg p-6 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">
                Subscribe to our <span className="text-red-600">Newsletter</span>
              </h2>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
              />
              <button className="bg-red-600 text-white px-6 py-2 rounded-r-lg hover:bg-red-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Links (Two Columns on Mobile) */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-600">About Us</a></li>
              <li><a href="#" className="hover:text-red-600">Contact Us</a></li>
              <li><a href="#" className="hover:text-red-600">FAQ's</a></li>
              <li><a href="#" className="hover:text-red-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-red-600">Terms And Conditions</a></li>
              <li><a href="#" className="hover:text-red-600">Refund Policy</a></li>
              <li><a href="#" className="hover:text-red-600">Subscribe To Live Bidding</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Cars By Make</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-600">Jetour Cars For Sale</a></li>
              <li><a href="#" className="hover:text-red-600">Toyota Cars For Sale</a></li>
              <li><a href="#" className="hover:text-red-600">Suzuki Cars For Sale</a></li>
              <li><a href="#" className="hover:text-red-600">Honda Cars For Sale</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Cars By Cities</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-600">Cars In Karachi</a></li>
              <li><a href="#" className="hover:text-red-600">Cars In Faisalabad</a></li>
              <li><a href="#" className="hover:text-red-600">Cars In Sukkur</a></li>
              <li><a href="#" className="hover:text-red-600">Cars In Sahiwal</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Sell On FameWheels</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-600">Sell On Famewheels</a></li>
              <li><a href="#" className="hover:text-red-600">Sell To Famewheels</a></li>
              <li><a href="#" className="hover:text-red-600">Become A Member</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Customer Support</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2">📧</span>
                <a href="mailto:support@famewheels.com" className="hover:text-red-600">
                  support@famewheels.com
                </a>
              </li>
              <li>03001113263</li>
              <li>03201113264</li>
              <li>03008212783</li>
            </ul>

            <div className="mt-6">
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-red-600 hover:text-red-700">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="text-red-600 hover:text-red-700">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="text-red-600 hover:text-red-700">
                  <FaYoutube size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Bottom Footer */}
        <div className="mt-3 inset-x-0 bottom-0 w-full max-w-full bg-red-600 text-center text-white py-2 overflow-hidden">
  <p className="text-sm sm:text-base px-4 whitespace-normal">
    Design and Developed by Fame Business Solutions, Copyright ©2021-2025 Fame Wheels (SMC-Pvt.) Ltd, All Rights Reserved.
  </p>
</div>

      </footer>
    </>
  );
}

export default Footer;
