import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import logo from "../../assets/logo.png"
export default function Navbar({ header }) {
  const [drop, setDrop] = useState(false);
  const navigate = useNavigate()
  
  return (
    <div>
      <div className="bg-red-120">
        <nav className="text-black">
          <div className="max-w-screen-2xl lg:gap-0 gap-6 px-4 py-3 sm:px-8 sm:py-5 mx-auto">
            <div
              className="flex justify-between items-center"
              id="navbar-default"
            >
              <div>
                <img src={logo} alt="" className="w-[180px] h-[60px]" />
              </div>
              <div className="flex gap-2 text-sm">
                <button className="border border-gray-300 px-4 rounded-md text-black py-2" onClick={()=>navigate('/login')}>Sign In</button>
                <button className="bg-red-110 px-4 rounded-md text-white py-2" onClick={()=>navigate('/register')}>Sign Up</button>
              </div>

            </div>
          </div>
          {/* <Notifications /> */}
        </nav>
      </div>
    </div>
  );
}
