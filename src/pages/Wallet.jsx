import { Link, useNavigate } from "react-router-dom";
import Header from "../layouts/partials/header";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";

export default function Wallet() {
  const [isModal, setisModal] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <Header header={"Dashboard"} />
      <div className="max-w-screen-2xl mx-auto bg-white">
        <div className="mx-4 sm:mx-9 my-8 rounded">
          <h1 className="font-semibold text-xl mb-4 flex items-center gap-4">
            Wallet
          </h1>
          <div className="flex lg:flex-row gap-8 flex-col mt-6">
            <div className="lg:w-1/3 full bg-gray-100 rounded-3xl py-5">
              <div className="px-6 border-b pb-6 border-gray-300">
                <h1 className="text-2xl font-bold">Current Balance</h1>
                <p className="text-xl font-medium mt-2">300 <span className="text-red-110">USDT</span></p>
              </div>
              <div className="px-6 border-b py-6 border-gray-300 flex justify-between items-center">
                <div>
                  <h1 className="text-xl">12.50 USDT</h1>
                  <p className="text-[#ADADAD]">Friday,22-02-2024</p>
                </div>
                <button className="bg-red-110 px-7 py-2 text-white rounded-lg">Debit</button>
              </div>
              <div className="px-6 border-b py-6 border-gray-300 flex justify-between items-center">
                <div>
                  <h1 className="text-xl">12.50 USDT</h1>
                  <p className="text-[#ADADAD]">Friday,22-02-2024</p>
                </div>
                <button className="bg-red-110 px-7 py-2 text-white rounded-lg">Debit</button>
              </div>
              <div className="px-6 border-b py-6 border-gray-300 flex justify-between items-center">
                <div>
                  <h1 className="text-xl">12.50 USDT</h1>
                  <p className="text-[#ADADAD]">Friday,22-02-2024</p>
                </div>
                <button className="bg-red-110 px-7 py-2 text-white rounded-lg">Debit</button>
              </div>
              <div className="px-6 border-b py-6 border-gray-300 flex justify-between items-center">
                <div>
                  <h1 className="text-xl">12.50 USDT</h1>
                  <p className="text-[#ADADAD]">Friday,22-02-2024</p>
                </div>
                <button className="bg-red-110 px-7 py-2 text-white rounded-lg">Debit</button>
              </div>
              <div className="px-6 border-b py-6 border-gray-300 flex justify-between items-center">
                <div>
                  <h1 className="text-xl">12.50 USDT</h1>
                  <p className="text-[#ADADAD]">Friday,22-02-2024</p>
                </div>
                <button className="bg-red-110 px-7 py-2 text-white rounded-lg">Debit</button>
              </div>
              <div className="px-6 py-6 border-gray-300 flex justify-between items-center">
                <div>
                  <h1 className="text-xl">12.50 USDT</h1>
                  <p className="text-[#ADADAD]">Friday,22-02-2024</p>
                </div>
                <button className="bg-red-110 px-7 py-2 text-white rounded-lg">Debit</button>
              </div>
            </div>
            <div className="lg:w-2/3 w-full bg-gray-100 rounded-3xl py-5">
              <h1 className="text-2xl font-bold lg:px-12 px-4">Payment details</h1>
              <div className="bg-red-110/10 border border-red-110 p-6 lg:w-1/2 lg:mx-12 mx-4 rounded-3xl my-6">
                <h1 className="text-xl font-medium">Available balance</h1>
                <p className="text-2xl font-semibold mt-2 text-red-110">300 USDT</p>
              </div>
              <div className="bg-red-110/10 border border-red-110 p-6 lg:w-1/2 lg:mx-12 mx-4 rounded-3xl my-6">
                <h1 className="text-xl font-medium">Maximum Balance</h1>
                <p className="text-2xl font-semibold mt-2 text-red-110">200 USDT</p>
              </div>
              <div className="space-y-2 border-b pb-6 lg:px-12 px-4 font-medium">
                <h1 className="text-lg text-red-110">Network</h1>
                <p className="text-lg text-black">Tron(TRC30)</p>
                <p className="text-lg text-red-110">Contact Information ****</p>
              </div>
              <div className="space-y-2 mt-6 lg:px-12 px-4 font-medium">
                <div className="flex justify-between">
                  <h1 className="text-lg text-red-110">Deposit Address</h1>
                  <FaRegCopy className="text-red-110 h-5 w-5" />
                </div>
                <p className="text-lg text-black">TLsqjdkfnknnQJjd</p>
              </div>
              <div className="lg:px-12 px-4">
                <input
                  type="text"
                  className="w-full lg:w-1/2 text-lg placeholder:text-red-110 border-b text-red-110 font-medium border-red-110 bg-transparent py-4 pe-12 mt-2 outline-none"
                  placeholder="Amount"
                />
              </div>
              <div className="lg:mx-12 mx-4 lg:w-1/2">
                <button className="w-full bg-red-110 rounded-xl py-3 text-white mt-6">
                  Cash Withdraw
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
