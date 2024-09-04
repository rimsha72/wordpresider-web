
import { RiCloseFill } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import { useState } from 'react'
import { TiHome } from "react-icons/ti";
import { PiUsers, PiUsersBold, PiWallet } from "react-icons/pi";
import { AiOutlineUser, AiOutlineUsergroupAdd } from "react-icons/ai";
import { CiLogout, } from "react-icons/ci";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { GoHistory } from "react-icons/go";
import { CiMoneyCheck1 } from "react-icons/ci";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import logo from "../../assets/logo.png"
export default function Sidebar() {
  const [showMenue, setShowMenue] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setShowMenue(false);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };
  return (
    <>
      <div className='bg-white'>
        <button type="button" onClick={e => setShowMenue(true)} className="flex items-center p-2 ml-3 border-0 text-sm text-red-110 rounded-lg lg:hidden">
          <span className="sr-only">Open sidebar</span>
          <svg className="w-6  h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
        </button>
      </div>

      <aside className={`fixed font-poppins top-0 left-0 z-40 w-64 bg-white h-screen ${showMenue ? null : `hidden`} lg:block`} aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto font-sans">
          {showMenue &&
            <button className='float-right text-xl text-red-110 ' onClick={e => setShowMenue(false)}>
              <RiCloseFill />
            </button>
          }
          <ul className="space-y-4 font-normal text-sm">
            <li className='py-3 pb-6'>
              <Link to='/dashboard' className="flex items-center justify-center py-2 px-5 rounded-lg">
                <img src={logo} alt='....' className='object-cover drop-shadow-lg w-[140px]' />
              </Link>
            </li>
            <li onClick={e => setShowMenue(pre => false)}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center py-3 px-5 bg-black/5 rounded-2xl text-black font-semibold"
                    : "flex items-center py-3 px-5 text-black rounded-lg hover:bg-white bg-white hover:font-medium"
                }
              >
                {({ isActive }) => (
                  <>
                  <div   className={` ${isActive ? "bg-white p-2 rounded-xl " : "text-black"
                        }`}>
                  <TiHome
                      className={`h-6 w-6 ${isActive ? "text-red-110 " : "text-black"
                        }`}
                    />
                  </div>
                   
                    <span className="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
                  </>
                )}
              </NavLink>

            </li>
            <li onClick={e => setShowMenue(pre => false)}>
              <NavLink
                to="/vips"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center py-3 px-5 bg-black/5 rounded-2xl text-black font-semibold"
                    : "flex items-center py-3 px-5 text-black rounded-lg hover:bg-white bg-white hover:font-medium"
                }
              >
                {({ isActive }) => (
                  <>
                  <div   className={` ${isActive ? "bg-white p-2 rounded-xl " : "text-black"
                        }`}>
                  <TiHome
                      className={`h-6 w-6 ${isActive ? "text-red-110 " : "text-black"
                        }`}
                    />
                  </div>
                   
                    <span className="flex-1 ml-3 whitespace-nowrap">Available VIP's</span>
                  </>
                )}
              </NavLink>

            </li>
            <li onClick={e => setShowMenue(pre => false)}>
              <NavLink
                to="/account"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center py-3 px-5 bg-black/5 rounded-2xl text-black font-semibold"
                    : "flex items-center py-3 px-5 text-black rounded-lg hover:bg-white bg-white hover:font-medium"
                }
              >
                {({ isActive }) => (
                  <>
                  <div   className={` ${isActive ? "bg-white p-2 rounded-xl " : "text-black"
                        }`}>
                  <AiOutlineUser 
                      className={`h-6 w-6 ${isActive ? "text-red-110 " : "text-black"
                        }`}
                    />
                  </div>
                   
                    <span className="flex-1 ml-3 whitespace-nowrap">Account details</span>
                  </>
                )}
              </NavLink>

            </li>
            <li onClick={e => setShowMenue(pre => false)}>
              <NavLink
                to="/wallet"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center py-3 px-5 bg-black/5 rounded-2xl text-black font-semibold"
                    : "flex items-center py-3 px-5 text-black rounded-lg hover:bg-white bg-white hover:font-medium"
                }
              >
                {({ isActive }) => (
                  <>
                  <div   className={` ${isActive ? "bg-white p-2 rounded-xl " : "text-black"
                        }`}>
                  <PiWallet 
                      className={`h-6 w-6 ${isActive ? "text-red-110 " : "text-black"
                        }`}
                    />
                  </div>
                   
                    <span className="flex-1 ml-3 whitespace-nowrap">Wallet</span>
                  </>
                )}
              </NavLink>

            </li>
            <li onClick={e => setShowMenue(pre => false)}>
              <NavLink
                to="/history"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center py-3 px-5 bg-black/5 rounded-2xl text-black font-semibold"
                    : "flex items-center py-3 px-5 text-black rounded-lg hover:bg-white bg-white hover:font-medium"
                }
              >
                {({ isActive }) => (
                  <>
                  <div   className={` ${isActive ? "bg-white p-2 rounded-xl " : "text-black"
                        }`}>
                  <GoHistory 
                      className={`h-6 w-6 ${isActive ? "text-red-110 " : "text-black"
                        }`}
                    />
                  </div>
                   
                    <span className="flex-1 ml-3 whitespace-nowrap">Task History</span>
                  </>
                )}
              </NavLink>

            </li>
            {/* <li onClick={e => setShowMenue(pre => false)}>
              <NavLink
                to="/earning"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center py-3 px-5 bg-black/5 rounded-2xl text-black font-semibold"
                    : "flex items-center py-3 px-5 text-black rounded-lg hover:bg-white bg-white hover:font-medium"
                }
              >
                {({ isActive }) => (
                  <>
                  <div   className={` ${isActive ? "bg-white p-2 rounded-xl " : "text-black"
                        }`}>
                  <CiMoneyCheck1 
                      className={`h-6 w-6 ${isActive ? "text-red-110 " : "text-black"
                        }`}
                    />
                  </div>
                   
                    <span className="flex-1 ml-3 whitespace-nowrap">Earning</span>
                  </>
                )}
              </NavLink>

            </li> */}
            <li onClick={e => setShowMenue(pre => false)}>
              <NavLink
                to="/invite-friends"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center py-3 px-5 bg-black/5 rounded-2xl text-black font-semibold"
                    : "flex items-center py-3 px-5 text-black rounded-lg hover:bg-white bg-white hover:font-medium"
                }
              >
                {({ isActive }) => (
                  <>
                  <div   className={` ${isActive ? "bg-white p-2 rounded-xl " : "text-black"
                        }`}>
                  <PiUsers 
                      className={`h-6 w-6 ${isActive ? "text-red-110 " : "text-black"
                        }`}
                    />
                  </div>
                   
                    <span className="flex-1 ml-3 whitespace-nowrap">Invite Friends</span>
                  </>
                )}
              </NavLink>

            </li>
            <li onClick={e => setShowMenue(pre => false)}>
              <NavLink
                to="/terms-conditions"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center py-3 px-5 bg-black/5 rounded-2xl text-black font-semibold"
                    : "flex items-center py-3 px-5 text-black rounded-lg hover:bg-white bg-white hover:font-medium"
                }
              >
                {({ isActive }) => (
                  <>
                  <div   className={` ${isActive ? "bg-white p-2 rounded-xl " : "text-black"
                        }`}>
                  <HiOutlineShieldCheck 
                      className={`h-6 w-6 ${isActive ? "text-red-110 " : "text-black"
                        }`}
                    />
                  </div>
                   
                    <span className="flex-1 ml-3 whitespace-nowrap">Terms and Conditions</span>
                  </>
                )}
              </NavLink>

            </li>
            <li onClick={e => setShowMenue(pre => false)}>
              <NavLink
                to="/team"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center py-3 px-5 bg-black/5 rounded-2xl text-black font-semibold"
                    : "flex items-center py-3 px-5 text-black rounded-lg hover:bg-white bg-white hover:font-medium"
                }
              >
                {({ isActive }) => (
                  <>
                  <div   className={` ${isActive ? "bg-white p-2 rounded-xl " : "text-black"
                        }`}>
                  <AiOutlineUsergroupAdd 
                      className={`h-6 w-6 ${isActive ? "text-red-110 " : "text-black"
                        }`}
                    />
                  </div>
                   
                    <span className="flex-1 ml-3 whitespace-nowrap">My Team</span>
                  </>
                )}
              </NavLink>

            </li>
       
          </ul>

        </div>
      </aside>

    </>
  )
}
