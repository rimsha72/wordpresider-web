import { Link, useNavigate } from "react-router-dom";
import Header from "../layouts/partials/header";
import Chart from "../components/Chart";
import { useEffect, useState } from "react";
import task from "../assets/task.png"
import { IoIosArrowBack, IoMdClose } from "react-icons/io";
export default function Tasks() {
    const [isModal, setisModal] = useState(false)
    const navigate = useNavigate();
    const [paymentCompleted, setPaymentCompleted] = useState(false);
    useEffect(() => {
        const paymentStatus = localStorage.getItem('paymentCompleted');
        if (paymentStatus === 'true') {
            setPaymentCompleted(true);
        }
    }, []);
    return (
        <div>
            <Header header={"Dashboard"} />
            <div className="max-w-screen-2xl mx-auto bg-white">
                <div className="mx-4 sm:mx-9 my-8 rounded">
                    <h1 className="font-semibold text-xl mb-4 flex items-center gap-4">
                        <IoIosArrowBack className="cursor-pointer" onClick={() => navigate('/vips')} /> Tasks
                    </h1>
                    <div className="grid grid-cols-1 gap-4 md:gap-6 xl:grid-cols-3 lg:grid-cols-2 2xl:gap-7 mt-8">
                        <Link className="w-full" to="/vips/tasks/payment" >
                            <div className="rounded-3xl border border-red-110 shadow-lg text-black py-6 px-7">
                                <div className="flex gap-4 items-center w-full">
                                    <div className="border border-red-110 p-6 rounded-2xl bg-red-170 flex justify-center items-center w-1/3 ">
                                        <img src={task} alt="" className="h-12 w-12 object-cover" />
                                    </div>
                                    <div className="w-full">
                                        <div className="flex justify-between items-center w-full border-b pb-3">
                                            <div>
                                                <h1 className="font-medium text-xl">Facebook</h1>
                                                <p className="mt-2 font-medium">1.11 <span className="text-red-110">USDT</span></p>
                                            </div>
                                            <button className="px-4 rounded-full py-2 text-white bg-red-110 text-sm">
                                                Accept
                                            </button>
                                        </div>
                                        <p className="text-xs text-red-180/60 mt-3">Request, Follow, Like</p>

                                    </div>

                                </div>
                            </div>
                        </Link>
                        <Link className="w-full" to="/vips/tasks/payment">
                            <div className="rounded-3xl border border-red-110 shadow-lg text-black py-6 px-7">
                                <div className="flex gap-4 items-center w-full">
                                    <div className="border border-red-110 p-6 rounded-2xl bg-red-170 flex justify-center items-center w-1/3 ">
                                        <img src={task} alt="" className="h-12 w-12 object-cover" />
                                    </div>
                                    <div className="w-full">
                                        <div className="flex justify-between items-center w-full border-b pb-3">
                                            <div>
                                                <h1 className="font-medium text-xl">Facebook</h1>
                                                <p className="mt-2 font-medium">1.11 <span className="text-red-110">USDT</span></p>
                                            </div>
                                            <button className="px-4 rounded-full py-2 text-white bg-red-110 text-sm">
                                                Accept
                                            </button>
                                        </div>
                                        <p className="text-xs text-red-180/60 mt-3">Request, Follow, Like</p>

                                    </div>

                                </div>
                            </div>
                        </Link>
                        <Link className="w-full" to="/vips/tasks/payment">
                            <div className="rounded-3xl border border-red-110 shadow-lg text-black py-6 px-7">
                                <div className="flex gap-4 items-center w-full">
                                    <div className="border border-red-110 p-6 rounded-2xl bg-red-170 flex justify-center items-center w-1/3 ">
                                        <img src={task} alt="" className="h-12 w-12 object-cover" />
                                    </div>
                                    <div className="w-full">
                                        <div className="flex justify-between items-center w-full border-b pb-3">
                                            <div>
                                                <h1 className="font-medium text-xl">Facebook</h1>
                                                <p className="mt-2 font-medium">1.11 <span className="text-red-110">USDT</span></p>
                                            </div>
                                            <button className="px-4 rounded-full py-2 text-white bg-red-110 text-sm">
                                                Accept
                                            </button>
                                        </div>
                                        <p className="text-xs text-red-180/60 mt-3">Request, Follow, Like</p>

                                    </div>

                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            {
                isModal && (
                    <div className="overflow-y-auto fixed flex z-50 justify-center items-center w-full inset-0 h-full bg-black/40">
                        <div className="relative p-4 w-full max-w-2xl max-h-full mx-auto">
                            <div className="relative bg-white rounded-lg shadow p-6 md:p-16">
                                <IoMdClose className="absolute top-4 right-4 h-6 w-6 cursor-pointer" onClick={() => setisModal(false)} />
                                <h3 className="text-xl md:text-2xl font-semibold text-center text-gray-900">
                                    Do you want to buy VIP 1 ?
                                </h3>
                                <div className="flex flex-col md:flex-row gap-4 justify-between mt-8 md:mt-16 px-4 md:px-24 py-4 md:py-8">
                                    <button className="w-full md:w-auto font-semibold" onClick={() => setisModal(false)}>No</button>
                                    <button className="w-full md:w-auto text-red-110 font-semibold" onClick={() => navigate('/vips/payment')}>Yes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    );
}
