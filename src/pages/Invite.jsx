import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import coin from "../assets/coin.png";
import toast, { Toaster } from "react-hot-toast";

export default function Invite({ setAuthenticated }) {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setAuthenticated(true);
    navigate("/");
  };

  return (
    <div className="">
      <Toaster />
      <div className="relative flex flex-wrap lg:items-center lg:justify-center">
        <div className="w-full px-4 py-12 sm:px-6  lg:w-1/2 lg:px-8 ">
          <div className="bg-white backdrop-blur-md rounded-lg max-w-lg mx-auto lg:px-8 lg:py-8 p-6 border border-red-130 flex flex-col justify-center items-center w-full">
            <img src={coin} alt="" className="w-[145px] h-[145px]" />
            <form
              onSubmit={handleSubmit}
              className="mx-auto mb-0 mt-8 max-w-lg space-y-6 w-full"
            >
              <div>
                <label className="font-medium">Invite</label>
                <input
                  type="text"
                  className="w-full rounded-lg placeholder:text-red-140 border border-red-130 p-4 pe-12 mt-2 text-sm shadow-sm  outline-none"
                  placeholder="23455677"
                />
              </div>

              <div className="flex items-center justify-end pt-20 flex-col gap-6">
                <button
                 onClick={handleSubmit}
                  className="inline-block text-center rounded-xl bg-red-110 w-full px-6 py-4 font-medium text-white"
                >
                  Join
                </button>
                <a
                  href="/invite/login"
                  className="inline-block text-center rounded-xl border border-red-110 w-full px-6 py-4 font-medium text-black"
                >
                  Skip
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
