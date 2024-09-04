import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import coin from "../assets/coin.png"
import toast, { Toaster } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
export default function Login({ setAuthenticated }) {
  const navigate = useNavigate();
  return (
    <div className="">
      <Toaster />
      <div className="relative flex flex-wrap lg:items-center lg:justify-center">

        <div className="w-full px-4 py-12 sm:px-6  lg:w-1/2 lg:px-8 ">
          <div className="bg-white backdrop-blur-md rounded-lg max-w-lg mx-auto lg:px-8 lg:py-8 p-6 border border-red-130 flex flex-col justify-center items-center w-full">
            <img src={coin} alt="" className="w-[145px] h-[145px]" />
            <form
             
              className="mx-auto mb-0 mt-8 max-w-lg w-full"
            >
              <h1 className="text-center font-semibold text-2xl">Login now</h1>
              <p className="text-red-140 text-sm text-center mt-2">Please enter your credentials to get started.</p>
              <div className="py-6">
                <label className="font-medium text-sm">Email or phone no</label>
                <input
                  type="email"
                  className="w-full rounded-lg placeholder:text-red-140 border border-red-130 p-4 pe-12 mt-2 text-sm shadow-sm  outline-none"
                  placeholder="Email or phone no"
                />
              </div>
              <div>
                <label className="font-medium text-sm">Password</label>
                <input
                  type="password"
                  className="w-full rounded-lg placeholder:text-red-140 border border-red-130 p-4 pe-12 mt-2 text-sm shadow-sm  outline-none"
                  placeholder="enter password"
                />
              </div>
              <div className="flex justify-end my-3">
                <a className="text-sm text-red-110" href="/invite/forget-password">Forget Password?</a>
              </div>
              <div className="flex items-center">
                <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg " />
                <label for="checked-checkbox" className="ms-2 text-sm text-red-140">Keep me Signed in</label>
              </div>
              <div className="flex items-center justify-end pt-6 flex-col gap-6">
                <a
                  type="submit"
                  onClick={()=>navigate('/')}
                  className="inline-block rounded-xl text-center bg-red-110 w-full px-6 py-4 font-medium text-white"
                >
                  Login
                </a>
                <p className="text-sm">or login with</p>
                <button
                  type="submit"
                  className="gap-2 rounded-xl flex text-sm justify-center  border border-red-130 w-full px-6 py-3 text-black"
                >
                  <FcGoogle className="w-6 h-6" /> Sign in with Google
                </button>
                <a className="font-medium text-sm" href="/invite/register">Create an account</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
