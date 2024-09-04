import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
export default function NewPassword() {
  const navigate = useNavigate();


  return (
    <div className="">
      <Toaster />
      <div className="relative flex flex-wrap lg:items-center lg:justify-center">

        <div className="w-full px-4 py-12 sm:px-6  lg:w-1/2 lg:px-8 ">
          <div className="bg-white backdrop-blur-md rounded-lg max-w-lg mx-auto lg:px-8 lg:py-16 p-6 border border-red-130 flex flex-col justify-center items-center w-full">

            <form

              className="mx-auto mb-0 max-w-lg w-full"
            >
              <h1 className="text-center font-semibold text-3xl">Set your new password</h1>
              <p className="text-red-140 text-sm text-center mt-2">Choose your new password for your account with minimum 8 character.</p>
              <div className="space-y-4 my-6">
                <div>
                  <label className="font-medium text-sm">Password</label>
                  <input
                    type="password"
                    className="w-full rounded-lg placeholder:text-red-140 border border-red-130 p-4 pe-12 mt-2 text-sm shadow-sm  outline-none"
                    placeholder="enter password"
                  />
                </div>
                <div>
                  <label className="font-medium text-sm">Repeat password</label>
                  <input
                    type="password"
                    className="w-full rounded-lg placeholder:text-red-140 border border-red-130 p-4 pe-12 mt-2 text-sm shadow-sm  outline-none"
                    placeholder="Repeat password"
                  />
                </div>

              </div>

              <div className="flex items-center justify-end pt-6 flex-col gap-6">
                <a
                  type="submit"
                  href="/invite/login"
                  className="inline-block text-center rounded-xl bg-red-110 w-full px-6 py-4 font-medium text-white"
                >
                  Confirm
                </a>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
