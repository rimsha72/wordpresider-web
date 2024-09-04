import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
export default function Register() {
  const navigate = useNavigate()
  return (
    <div className="">
      <Toaster />
      <div className="relative flex flex-wrap lg:items-center lg:justify-center">

        <div className="w-full px-4 py-12 sm:px-6  lg:w-1/2 lg:px-8 ">
          <div className="bg-white backdrop-blur-md rounded-lg max-w-lg mx-auto lg:px-8 lg:py-8 p-6 border border-red-130 flex flex-col justify-center items-center w-full">

            <form
             
              className="mx-auto mb-0 max-w-lg w-full"
            >
              <h1 className="text-center font-semibold text-3xl">Create Account !</h1>
              <p className="text-red-140 text-sm text-center mt-2">Please enter your credentials to get started.</p>
              <div className="space-y-4 my-6">
              <div>
                  <label className="font-medium text-sm">Full Name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg placeholder:text-red-140 border border-red-130 p-4 pe-12 mt-2 text-sm shadow-sm  outline-none"
                    placeholder="enter full name...o"
                  />
                </div>
                <div>
                  <label className="font-medium text-sm">Email address</label>
                  <input
                    type="email"
                    className="w-full rounded-lg placeholder:text-red-140 border border-red-130 p-4 pe-12 mt-2 text-sm shadow-sm  outline-none"
                    placeholder="enter email address..."
                  />
                </div>
                <div>
                  <label className="font-medium text-sm">Phone no</label>
                  <input
                    type="text"
                    className="w-full rounded-lg placeholder:text-red-140 border border-red-130 p-4 pe-12 mt-2 text-sm shadow-sm  outline-none"
                    placeholder="+92-84984959"
                  />
                </div>
                <div>
                  <label className="font-medium text-sm">Password</label>
                  <input
                    type="password"
                    className="w-full rounded-lg placeholder:text-red-140 border border-red-130 p-4 pe-12 mt-2 text-sm shadow-sm  outline-none"
                    placeholder="**********"
                  />
                </div>
                <div>
                  <label className="font-medium text-sm">Confirm password</label>
                  <input
                    type="password"
                    className="w-full rounded-lg placeholder:text-red-140 border border-red-130 p-4 pe-12 mt-2 text-sm shadow-sm  outline-none"
                    placeholder="**********"
                  />
                </div>
              </div>
         
              <div className="flex items-center">
                <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg " />
                <label for="checked-checkbox" className="ms-2 text-sm text-red-140">Keep me Signed in</label>
              </div>
              <div className="flex items-center justify-end pt-6 flex-col gap-6">
                <a
                  type="submit"
                  href="/invite/login"
                  className="inline-block text-center rounded-xl bg-red-110 w-full px-6 py-4 font-medium text-white"
                >
                  Create Account
                </a>
             
                <a className="font-medium text-sm" href="/invite/login">Already have an account? <span className="text-red-110">login</span></a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
