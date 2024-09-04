import { Link, useNavigate } from "react-router-dom";
import Header from "../layouts/partials/header";
import success from "../assets/success.png";
import coin from "../assets/coin.png";
import { useState } from "react";
import { IoIosArrowBack, IoMdClose } from "react-icons/io";
import { IoCameraOutline } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";

export default function TaskPayment() {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleSubmit = () => {
    toast.success("Completed");
    
    setTimeout(() => {
        navigate('/vips/tasks');
    }, 500); 
}


  return (
    <div>
      <Header header={"Dashboard"} />
      <div className="max-w-screen-2xl mx-auto bg-white">
        <Toaster />
        <div className="mx-4 sm:mx-9 my-8 rounded">
          <h1 className="font-semibold text-xl mb-4 flex items-center gap-4">
            <IoIosArrowBack className="cursor-pointer" onClick={() => navigate('/vips')} /> Payment
          </h1>
          <div className="flex justify-center flex-col items-center">
            <img src={coin} alt="" className="w-[200px] h-[200px]" />
            <div className="border border-red-110 rounded-3xl p-6 max-w-screen-sm w-full">
              <h1 className="text-xl font-semibold text-start">Upload Screenshot</h1>
              <div className="flex gap-8 items-center">
                <label className="h-44 w-44 flex justify-center items-center bg-red-160 mt-6 cursor-pointer rounded-lg">
                  {selectedImage ? (
                    <img src={selectedImage} alt="Selected" className="h-full w-full object-cover" />
                  ) : (
                    <IoCameraOutline className="h-7 w-7 text-gray-500" />
                  )}
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                </label>
                <div>
                  <h1 className="text-lg font-medium">Unit Price</h1>
                  <h1 className="text-base font-medium text-red-110">100 USDT</h1>
                </div>
              </div>

            </div>


            <button
              className={`w-full max-w-xl border border-red-110 py-3 px-4 text-red-110 rounded-xl mt-16 ${selectedImage ? "bg-red-110 text-white" : "bg-white"}`}
              disabled={!selectedImage}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

   
    </div>
  );
}
