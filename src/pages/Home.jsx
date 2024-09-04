import { Link, useNavigate } from "react-router-dom";
import Header from "../layouts/partials/header";
import Chart from "../components/Chart";
import { useState } from "react";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineAccountBalanceWallet, MdOutlineTask } from "react-icons/md";
import { RiHistoryFill } from "react-icons/ri";
export default function Home() {
  const [isModal, setisModal] = useState(false)
  const navigate = useNavigate();
  return (
    <div>
      <Header header={"Dashboard"} />
      <div className="max-w-screen-2xl mx-auto bg-white">
        <div className="mx-4 sm:mx-9 my-8 rounded">
          <h1 className="font-semibold text-lg mb-4">Available VIP'S</h1>
          <div className="grid grid-cols-1 gap-4 md:gap-6 xl:grid-cols-3 lg:grid-cols-2 2xl:gap-7">
            <Link className="w-full" >
              <div className="rounded-xl border border-stroke bg-red-110/10 border-red-110 text-black py-4 px-7">
              <div className="p-2 h-10 w-10 text-white rounded-full bg-red-110 flex justify-center items-center">
              <MdOutlineAccountBalanceWallet className="h-5 w-5"/>
              </div>
                <div className="flex justify-between mt-6">
                  <p className="text-lg font-medium text-black">Available Balance</p>
                  <div className="font-medium">
                    <p className="mt-1 text-lg text-red-110 font-bold">100 USDT</p>
                  </div>
                </div>
              
              </div>
            </Link>
            <Link className="w-full" >
              <div className="rounded-xl border border-stroke bg-red-110/10 border-red-110 text-black py-4 px-7">
              <div className="p-2 h-10 w-10 text-white rounded-full bg-red-110 flex justify-center items-center">
              <RiHistoryFill className="h-5 w-5 text-white"/>
              </div>
                <div className="flex justify-between mt-6 items-center">
                  <p className="text-lg font-medium text-black">Transaction History</p>
                 <Link to="wallet"><IoArrowForwardCircleSharp className="text-red-110 h-8 w-8"/></Link> 
                </div>
              
              </div>
            </Link>
            <Link className="w-full" >
              <div className="rounded-xl border border-stroke bg-red-110/10 border-red-110 text-black py-4 px-7">
              <div className="p-2 h-10 w-10 text-white rounded-full bg-red-110 flex justify-center items-center">
              <MdOutlineTask className="h-5 w-5"/>
              </div>
                <div className="flex justify-between mt-6">
                  <p className="text-lg font-medium text-black">Available VIP’s</p>
              
                  <Link to="/vips"><IoArrowForwardCircleSharp className="text-red-110 h-8 w-8"/></Link>
                </div>
              
              </div>
            </Link>
          </div>
          <h1 className="font-semibold text-lg my-16">Your Earnings</h1>

          <Chart />
        </div>
      </div>
      {
        isModal && (
          <div className="overflow-y-auto fixed flex z-50 justify-center items-center w-full inset-0 h-[calc(100%-1rem)] max-h-full bg-black/10">
            <div className="relative p-4 w-full max-w-2xl max-h-full mx-auto">
              <div className="relative bg-white rounded-lg shadow p-6 md:p-16">
                <h3 className="text-xl md:text-2xl font-semibold text-center text-gray-900">
                  Do you want to buy VIP 1?
                </h3>
                <div className="flex flex-col md:flex-row gap-4 justify-between mt-8 md:mt-16 px-4 md:px-24 py-4 md:py-8">
                  <button className="w-full md:w-auto font-semibold">No</button>
                  <a className="w-full md:w-auto text-red-110 font-semibold" href="/vips/payment"> Yes</a>
                </div>
              </div>
            </div>
          </div>
        )
      }

    </div>
  );
}
