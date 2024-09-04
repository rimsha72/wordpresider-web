import { Link, useNavigate } from "react-router-dom";
import Header from "../layouts/partials/header";
import { useState } from "react";

export default function AccountDetails() {
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

  return (
    <div>
      <Header header={"Dashboard"} />
      <div className="max-w-screen-2xl mx-auto bg-white">
        <div className="mx-4 sm:mx-9 my-8 rounded">
          <h1 className="font-semibold text-xl mb-4 flex items-center gap-4">
            Personal Info
          </h1>
          <div className="py-6 flex flex-col">
            <label className="font-medium text-sm">Name</label>
            <input
              type="text"
              value="Leaon"
              className="w-full lg:w-1/2 placeholder:text-red-140 border-b  border-red-130 py-4 pe-12 mt-2 text-sm outline-none"
              placeholder="Leaon"
            />
          </div>
          <div className="flex flex-col mt-3">
            <label className="font-medium text-sm">Email</label>
            <input
              type="text"
              value="leaon@gmail.com"
              className="w-full lg:w-1/2 placeholder:text-red-140 border-b  border-red-130 py-4 pe-12 mt-2 text-sm outline-none"
              placeholder="leaon@gmail.com"
            />
          </div>
          <div className="flex flex-col pt-9">
            <label className="font-medium text-sm">Phone numbers</label>
            <input
              type="text"
              value="92-48239483943"
              className="w-full lg:w-1/2 placeholder:text-red-140 border-b  border-red-130 py-4 pe-12 mt-2 text-sm outline-none"
              placeholder="92-48239483943"
            />
          </div>
        </div>
      </div>

    </div>
  );
}
