import { Link, useNavigate } from "react-router-dom";
import Header from "../layouts/partials/header";
import Chart from "../components/Chart";
import profile from "../assets/profile.png"
import profile1 from "../assets/profile1.png"
import profile2 from "../assets/profile2.png"
import task from "../assets/task.png"
export default function InviteFriends() {


    return (
        <div>
            <Header header={"Dashboard"} />
            <div className="max-w-screen-2xl mx-auto bg-white">
                <div className="mx-4 sm:mx-9 my-8 rounded">
                    <h1 className="font-semibold text-2xl mb-4 gap-4">
                        Invite Friend
                    </h1>

                    <form class="max-w-md">
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" class="block w-full placeholder:text-black p-4 ps-10 text-sm text-black border border-red-110 rounded-lg bg-red-110/10 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search here ..." required />
                        </div>
                    </form>

                    <div className="grid grid-cols-1 gap-8 md:gap-6 lg:w-2/3 2xl:gap-7 mt-12">
                        <Link className="w-full" >
                            <div className="flex gap-4 items-center w-full justify-between">
                                <div className="flex gap-4 items-center w-full">
                                    <img src={profile} alt="" className="h-12 w-12 object-cover" />
                                    <div>
                                        <h1 className="text-lg font-medium">Melsia Smith</h1>
                                        <p className="text-gray-400 text-sm">+(406)555-0120 </p>
                                    </div>
                                </div>

                                <div className="">

                                    <button className="px-14 rounded-xl py-3.5 text-white bg-red-110 text-sm">
                                        Invite
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link className="w-full" >
                            <div className="flex gap-4 items-center w-full justify-between">
                                <div className="flex gap-4 items-center w-full">
                                    <img src={profile1} alt="" className="h-12 w-12 object-cover" />
                                    <div>
                                        <h1 className="text-lg font-medium">Melsia Smith</h1>
                                        <p className="text-gray-400 text-sm">+(406)555-0120 </p>
                                    </div>
                                </div>

                                <div className="">

                                    <button className="px-12 rounded-xl py-3.5 border-red-110 border text-red-110 text-sm">
                                        Invited
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link className="w-full" >
                            <div className="flex gap-4 items-center w-full justify-between">
                                <div className="flex gap-4 items-center w-full">
                                    <img src={profile} alt="" className="h-12 w-12 object-cover" />
                                    <div>
                                        <h1 className="text-lg font-medium">Melsia Smith</h1>
                                        <p className="text-gray-400 text-sm">+(406)555-0120 </p>
                                    </div>
                                </div>

                                <div className="">

                                    <button className="px-14 rounded-xl py-3.5 text-white bg-red-110 text-sm">
                                        Invite
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link className="w-full" >
                            <div className="flex gap-4 items-center w-full justify-between">
                                <div className="flex gap-4 items-center w-full">
                                    <img src={profile1} alt="" className="h-12 w-12 object-cover" />
                                    <div>
                                        <h1 className="text-lg font-medium">Melsia Smith</h1>
                                        <p className="text-gray-400 text-sm">+(406)555-0120 </p>
                                    </div>
                                </div>

                                <div className="">

                                    <button className="px-12 rounded-xl py-3.5 border-red-110 border text-red-110 text-sm">
                                        Invited
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link className="w-full" >
                            <div className="flex gap-4 items-center w-full justify-between">
                                <div className="flex gap-4 items-center w-full">
                                    <img src={profile} alt="" className="h-12 w-12 object-cover" />
                                    <div>
                                        <h1 className="text-lg font-medium">Melsia Smith</h1>
                                        <p className="text-gray-400 text-sm">+(406)555-0120 </p>
                                    </div>
                                </div>

                                <div className="">

                                    <button className="px-14 rounded-xl py-3.5 text-white bg-red-110 text-sm">
                                        Invite
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link className="w-full" >
                            <div className="flex gap-4 items-center w-full justify-between">
                                <div className="flex gap-4 items-center w-full">
                                    <img src={profile2} alt="" className="h-12 w-12 object-cover" />
                                    <div>
                                        <h1 className="text-lg font-medium">Melsia Smith</h1>
                                        <p className="text-gray-400 text-sm">+(406)555-0120 </p>
                                    </div>
                                </div>

                                <div className="">

                                    <button className="px-12 rounded-xl py-3.5 border-red-110 border text-red-110 text-sm">
                                        Invited
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link className="w-full" >
                            <div className="flex gap-4 items-center w-full justify-between">
                                <div className="flex gap-4 items-center w-full">
                                    <img src={profile} alt="" className="h-12 w-12 object-cover" />
                                    <div>
                                        <h1 className="text-lg font-medium">Melsia Smith</h1>
                                        <p className="text-gray-400 text-sm">+(406)555-0120 </p>
                                    </div>
                                </div>

                                <div className="">

                                    <button className="px-14 rounded-xl py-3.5 text-white bg-red-110 text-sm">
                                        Invite
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link className="w-full" >
                            <div className="flex gap-4 items-center w-full justify-between">
                                <div className="flex gap-4 items-center w-full">
                                    <img src={profile2} alt="" className="h-12 w-12 object-cover" />
                                    <div>
                                        <h1 className="text-lg font-medium">Melsia Smith</h1>
                                        <p className="text-gray-400 text-sm">+(406)555-0120 </p>
                                    </div>
                                </div>

                                <div className="">

                                    <button className="px-12 rounded-xl py-3.5 border-red-110 border text-red-110 text-sm">
                                        Invited
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    );
}
