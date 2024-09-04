import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBell } from "react-icons/fa6";
import profile from "../../assets/profile.png"
export default function Header({ header }) {

  return (
    <div>
      <div className="bg-white">
        <nav className="text-black">
          <div className="max-w-screen-2xl lg:gap-0 gap-6 px-4 py-3 sm:py-5">
                  <div className="flex items-center text-sm gap-6 justify-end">
                    <button className="relative">
                      <FaBell className="h-6 w-6 text-red-150"/>
                      <div className="h-3.5 w-3.5 bg-red-600 absolute -top-1 -right-0 rounded-full border-2 border-white"></div>
                    </button>
                    <img src={profile} alt="" className="h-11 w-11 rounded-full"/>
                  </div>

          </div>
          {/* <Notifications /> */}
        </nav>
      </div>
    </div>
  );
}
