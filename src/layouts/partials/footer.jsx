import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import logo from "../../assets/logo.png"
export default function Footer({ header }) {
  const [drop, setDrop] = useState(false);
  const navigate = useNavigate()
 
  return (
    <div>
      <div className="bg-red-120">
        <nav className="text-black">
          <div className="max-w-screen-2xl lg:gap-0 gap-6 px-4 py-3 sm:px-8 sm:py-5 mx-auto">
            <div
              className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1"
              id="navbar-default"
            >
              <div>
                <img src={logo} alt="" className="w-[180px] h-[60px]" />
                <p className="max-w-[284px] mt-3 font-medium text-sm">Clarity gives you the blocks and components you need to create a truly professional website.</p>
              </div>
              <div>
                <ul className="space-y-4 my-6 font-semibold text-sm">
                  <li className="uppercase">Company</li>
                  <li>About</li>
                  <li>Local Service Provider</li>
                  <li>Travel Agencies</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4 my-6 text-sm font-semibold">
                  <li className="uppercase">Help</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div className="my-6">
                <h1 className="font-semibold text-sm">Newsletter</h1>
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full px-2.5 py-3 mt-4 mb-3" placeholder="Enter your email address"  />
                <button className="bg-red-110 px-4 rounded-md text-white py-3 w-full">Subscribe Now</button>
              </div>

            </div>
            <div className="text-center text-xs mt-6 font-medium">
            © Copyright 2022, All Rights Reserved by DUSECA
            </div>
          </div>
          {/* <Notifications /> */}
        </nav>
      </div>
    </div>
  );
}
