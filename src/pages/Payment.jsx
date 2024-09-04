import { Link, useNavigate } from "react-router-dom";
import Header from "../layouts/partials/header";
import success from "../assets/success.png";
import qr from "../assets/qr.png";
import { useState } from "react";
import { IoIosArrowBack, IoMdClose } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa6";
import { IoCameraOutline } from "react-icons/io5";

export default function Payment() {
  const [isModal, setisModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handlePaymentSubmission = () => {
    // Mark payment as complete by setting a flag in localStorage
    localStorage.setItem("paymentCompleted", "true");
    setisModal(true); 
    // navigate('/vips')
  };

  return (
    <div>
      <Header header={"Dashboard"} />
      <div className="max-w-screen-2xl mx-auto bg-white">
        <div className="mx-4 sm:mx-9 my-8 rounded">
          <h1 className="font-semibold text-xl mb-4 flex items-center gap-4">
            <IoIosArrowBack className="cursor-pointer" onClick={() => navigate('/vips')} /> Deposit USDT
          </h1>
          <div className="flex justify-center flex-col items-center">
            <img src={qr} alt="" className="lg:h-[450px] lg:w-[499px]" />
            <p className="text-center font-medium text-lg">Scan me</p>
            <div className="bg-red-110 rounded-3xl p-6 max-w-2xl w-full my-8">
              <div className="space-y-2 border-b pb-6">
                <h1 className="text-xl text-white">Network</h1>
                <p className="text-lg text-black">Tron(TRC30)</p>
                <p className="text-lg text-white">Contact Information ****</p>
              </div>
              <div className="space-y-2 mt-6">
                <div className="flex justify-between">
                  <h1 className="text-xl text-white">Deposit Address</h1>
                  <FaRegCopy className="text-white h-5 w-5" />
                </div>
                <p className="text-lg text-black">TLsqjdkfnknnQJjd</p>
              </div>
            </div>
            <h1 className="text-xl font-semibold text-start">Upload Screenshot</h1>

            {/* Upload Button */}
            <label className="h-44 w-64 flex justify-center items-center bg-red-160 mt-6 cursor-pointer">
              {selectedImage ? (
                <img src={selectedImage} alt="Selected" className="h-full w-full object-cover" />
              ) : (
                <IoCameraOutline className="h-7 w-7 text-gray-500" />
              )}
              <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
            </label>

            {/* Submit Payment */}
            <button
              onClick={handlePaymentSubmission}
              className={`w-full max-w-xl border border-red-110 py-3 px-4 text-red-110 rounded-xl mt-16 ${selectedImage ? "bg-red-110 text-white" : "bg-white"}`}
              disabled={!selectedImage}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {
        isModal && (
          <div className="overflow-y-auto fixed flex z-50 justify-center items-center w-full inset-0 h-[calc(100%-1rem)] max-h-full bg-black/10">
            <div className="relative p-4 w-full max-w-2xl max-h-full mx-auto">
              <div className="relative bg-white rounded-lg shadow p-6 md:p-20 flex flex-col justify-center items-center">
                <IoMdClose className="absolute top-4 right-4 h-6 w-6 cursor-pointer text-black" onClick={() => setisModal(false)} />
                <img src={success} alt="" className="w-[171px] h-[151px]" />
                <h3 className="text-base md:text-lg text-center text-red-110 mt-6 max-w-[470px]">
                  You have successfully submitted your payment receipt for review. You will receive a notification soon.
                </h3>
                <div className="flex justify-end mt-6 items-end">
                  <button className="border border-red-110 px-24 py-2 rounded-md text-red-110" onClick={()=>navigate('/vips')}>Next</button>
                </div>
              </div>
              
            </div>
          </div>
        )
      }
    </div>
  );
}
