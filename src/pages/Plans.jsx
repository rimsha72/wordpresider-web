import { Link, useNavigate } from "react-router-dom";
import Header from "../layouts/partials/header";
import Chart from "../components/Chart";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
export default function Plans() {
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
                    {paymentCompleted ? (
                        <>
                            {/* Current Status Section */}
                            <h1 className="font-semibold text-lg mb-4">Current Status</h1>
                            <div className="grid grid-cols-1 gap-4 md:gap-6 xl:grid-cols-3 lg:grid-cols-2 2xl:gap-7">
                                <Link className="w-full" >
                                    <div className="rounded-xl border border-stroke bg-red-190 text-white py-4 px-7">
                                        <div className="flex justify-between">
                                            <p className="text-2xl font-medium">VIP 1</p>
                                            <div className="font-medium">
                                                <p>3 tasks</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-end mt-6" >
                                            <Link to="/vips/tasks">
                                                <button className="px-8 py-1 rounded-full bg-white text-black font-medium">Task</button>
                                            </Link>

                                        </div>
                                    </div>
                                </Link>
                            </div>

                            {/* Available VIP's Section */}
                            <h1 className="font-semibold text-lg my-4">Available VIP'S</h1>
                            <div className="grid grid-cols-1 gap-4 md:gap-6 xl:grid-cols-3 lg:grid-cols-2 2xl:gap-7">
                                <Link className="w-full" >
                                    <div className="rounded-xl border border-stroke bg-red-110 text-white py-4 px-7">
                                        <div className="flex justify-between">
                                            <p className="text-2xl font-medium">VIP 1</p>
                                            <div className="font-medium">
                                                <p>3 tasks</p>
                                                <p className="mt-1 text-lg">100 USDT</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-6">
                                            <p className="text-sm">per task <span className="text-base font-medium ml-2">1.11 USDT</span></p>
                                            <button className="px-8 py-1 rounded-full bg-white text-black font-medium" onClick={() => setisModal(true)}>Buy</button>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="w-full" >
                                    <div className="rounded-xl border border-stroke bg-red-110 text-white py-4 px-7">
                                        <div className="flex justify-between">
                                            <p className="text-2xl font-medium">VIP 2</p>
                                            <div className="font-medium">
                                                <p>7 tasks</p>
                                                <p className="mt-1 text-lg">350 USDT</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-6">
                                            <p className="text-sm">per task <span className="text-base font-medium ml-2">1.66 USDT</span></p>
                                            <button className="px-8 py-1 rounded-full bg-white text-black font-medium" onClick={() => setisModal(true)}>Buy </button>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="w-full" >
                                    <div className="rounded-xl border border-stroke bg-red-110 text-white py-4 px-7">
                                        <div className="flex justify-between">
                                            <p className="text-2xl font-medium">VIP 3</p>
                                            <div className="font-medium">
                                                <p>12 tasks</p>
                                                <p className="mt-1 text-lg">1000 USDT</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-6">
                                            <p className="text-sm">per task <span className="text-base font-medium ml-2">2.77 USDT</span></p>
                                            <button className="px-8 py-1 rounded-full bg-white text-black font-medium" onClick={() => setisModal(true)}>Buy</button>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="w-full" >
                                    <div className="rounded-xl border border-stroke bg-red-110 text-white py-4 px-7">
                                        <div className="flex justify-between">
                                            <p className="text-2xl font-medium">VIP 4</p>
                                            <div className="font-medium">
                                                <p>20 tasks</p>
                                                <p className="mt-1 text-lg">2500 USDT</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-6">
                                            <p className="text-sm">per task <span className="text-base font-medium ml-2">3.33 USDT</span></p>
                                            <button className="px-8 py-1 rounded-full bg-white text-black font-medium" onClick={() => setisModal(true)}>Buy</button>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="w-full" >
                                    <div className="rounded-xl border border-stroke bg-red-110 text-white py-4 px-7">
                                        <div className="flex justify-between">
                                            <p className="text-2xl font-medium">VIP 5</p>
                                            <div className="font-medium">
                                                <p>25 tasks</p>
                                                <p className="mt-1 text-lg">5000 USDT</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-6">
                                            <p className="text-sm">per task <span className="text-base font-medium ml-2">6.66 USDT</span></p>
                                            <button className="px-8 py-1 rounded-full bg-white text-black font-medium" onClick={() => setisModal(true)}>Buy</button>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="w-full" >
                                    <div className="rounded-xl border border-stroke bg-red-110 text-white py-4 px-7">
                                        <div className="flex justify-between">
                                            <p className="text-2xl font-medium">VIP 6</p>
                                            <div className="font-medium">
                                                <p>30 tasks</p>
                                                <p className="mt-1 text-lg">10000 USDT</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-6">
                                            <p className="text-sm">per task <span className="text-base font-medium ml-2">11.11 USDT</span></p>
                                            <button className="px-8 py-1 rounded-full bg-white text-black font-medium" onClick={() => setisModal(true)}>Buy</button>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="w-full" >
                                    <div className="rounded-xl border border-stroke bg-red-110 text-white py-4 px-7">
                                        <div className="flex justify-between">
                                            <p className="text-2xl font-medium">VIP 7</p>
                                            <div className="font-medium">
                                                <p>35 tasks</p>
                                                <p className="mt-1 text-lg">20000 USDT</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-6">
                                            <p className="text-sm">per task <span className="text-base font-medium ml-2">19.00 USDT</span></p>
                                            <button className="px-8 py-1 rounded-full bg-white text-black font-medium" onClick={() => setisModal(true)}>Buy</button>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="w-full" >
                                    <div className="rounded-xl border border-stroke bg-red-110 text-white py-4 px-7">
                                        <div className="flex justify-between">
                                            <p className="text-2xl font-medium">VIP 8</p>
                                            <div className="font-medium">
                                                <p>40 tasks</p>
                                                <p className="mt-1 text-lg">30000 USDT</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-6">
                                            <p className="text-sm">per task <span className="text-base font-medium ml-2">25.00 USDT</span></p>
                                            <button className="px-8 py-1 rounded-full bg-white text-black font-medium" onClick={() => setisModal(true)}>Buy</button>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </>
                    ) : (
                        <>
                            <h1 className="font-semibold text-lg my-4">Available VIP'S</h1>
                            <div className="grid grid-cols-1 gap-4 md:gap-6 xl:grid-cols-3 lg:grid-cols-2 2xl:gap-7">
                                <Link className="w-full" >
                                    <div className="rounded-xl border border-stroke bg-red-110 text-white py-4 px-7">
                                        <div className="flex justify-between">
                                            <p className="text-2xl font-medium">VIP 1</p>
                                            <div className="font-medium">
                                                <p>3 tasks</p>
                                                <p className="mt-1 text-lg">100 USDT</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-6">
                                            <p className="text-sm">per task <span className="text-base font-medium ml-2">1.11 USDT</span></p>
                                            <button className="px-8 py-1 rounded-full bg-white text-black font-medium" onClick={() => setisModal(true)}>Buy</button>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="w-full" >
                                    <div className="rounded-xl border border-stroke bg-red-110 text-white py-4 px-7">
                                        <div className="flex justify-between">
                                            <p className="text-2xl font-medium">VIP 2</p>
                                            <div className="font-medium">
                                                <p>7 tasks</p>
                                                <p className="mt-1 text-lg">350 USDT</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-6">
                                            <p className="text-sm">per task <span className="text-base font-medium ml-2">1.66 USDT</span></p>
                                            <button className="px-8 py-1 rounded-full bg-white text-black font-medium" onClick={() => setisModal(true)}>Buy </button>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="w-full" >
                                    <div className="rounded-xl border border-stroke bg-red-110 text-white py-4 px-7">
                                        <div className="flex justify-between">
                                            <p className="text-2xl font-medium">VIP 3</p>
                                            <div className="font-medium">
                                                <p>12 tasks</p>
                                                <p className="mt-1 text-lg">1000 USDT</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-6">
                                            <p className="text-sm">per task <span className="text-base font-medium ml-2">2.77 USDT</span></p>
                                            <button className="px-8 py-1 rounded-full bg-white text-black font-medium" onClick={() => setisModal(true)}>Buy</button>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="w-full" >
                                    <div className="rounded-xl border border-stroke bg-red-110 text-white py-4 px-7">
                                        <div className="flex justify-between">
                                            <p className="text-2xl font-medium">VIP 4</p>
                                            <div className="font-medium">
                                                <p>20 tasks</p>
                                                <p className="mt-1 text-lg">2500 USDT</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-6">
                                            <p className="text-sm">per task <span className="text-base font-medium ml-2">3.33 USDT</span></p>
                                            <button className="px-8 py-1 rounded-full bg-white text-black font-medium" onClick={() => setisModal(true)}>Buy</button>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="w-full" >
                                    <div className="rounded-xl border border-stroke bg-red-110 text-white py-4 px-7">
                                        <div className="flex justify-between">
                                            <p className="text-2xl font-medium">VIP 5</p>
                                            <div className="font-medium">
                                                <p>25 tasks</p>
                                                <p className="mt-1 text-lg">5000 USDT</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-6">
                                            <p className="text-sm">per task <span className="text-base font-medium ml-2">6.66 USDT</span></p>
                                            <button className="px-8 py-1 rounded-full bg-white text-black font-medium" onClick={() => setisModal(true)}>Buy</button>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="w-full" >
                                    <div className="rounded-xl border border-stroke bg-red-110 text-white py-4 px-7">
                                        <div className="flex justify-between">
                                            <p className="text-2xl font-medium">VIP 6</p>
                                            <div className="font-medium">
                                                <p>30 tasks</p>
                                                <p className="mt-1 text-lg">10000 USDT</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-6">
                                            <p className="text-sm">per task <span className="text-base font-medium ml-2">11.11 USDT</span></p>
                                            <button className="px-8 py-1 rounded-full bg-white text-black font-medium" onClick={() => setisModal(true)}>Buy</button>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="w-full" >
                                    <div className="rounded-xl border border-stroke bg-red-110 text-white py-4 px-7">
                                        <div className="flex justify-between">
                                            <p className="text-2xl font-medium">VIP 7</p>
                                            <div className="font-medium">
                                                <p>35 tasks</p>
                                                <p className="mt-1 text-lg">20000 USDT</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-6">
                                            <p className="text-sm">per task <span className="text-base font-medium ml-2">19.00 USDT</span></p>
                                            <button className="px-8 py-1 rounded-full bg-white text-black font-medium" onClick={() => setisModal(true)}>Buy</button>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="w-full" >
                                    <div className="rounded-xl border border-stroke bg-red-110 text-white py-4 px-7">
                                        <div className="flex justify-between">
                                            <p className="text-2xl font-medium">VIP 8</p>
                                            <div className="font-medium">
                                                <p>40 tasks</p>
                                                <p className="mt-1 text-lg">30000 USDT</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-6">
                                            <p className="text-sm">per task <span className="text-base font-medium ml-2">25.00 USDT</span></p>
                                            <button className="px-8 py-1 rounded-full bg-white text-black font-medium" onClick={() => setisModal(true)}>Buy</button>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                        </>

                    )}

                    {/* <h1 className="font-semibold text-lg my-8">Your Earnings</h1> */}

                    {/* <Chart /> */}
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
