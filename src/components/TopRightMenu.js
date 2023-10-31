import { FaGear } from "react-icons/fa6";
import { FaArrowRight, FaBell, FaDotCircle, FaLock, FaSignOutAlt, FaUser, FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const TopRightMenu = () => {
    const [notificationPopUp, setNotificationPopUp] = useState(false);
    const [profilePopUp, setProfilePopUp] = useState(false);

    return (
        <>
            <div className="h-20 flex border-b-2 justify-end items-center gap-8 px-10 -mt-12">
            <button>
                <FaGear />
            </button>
            <button className="cursor-pointer" onClick={() => setNotificationPopUp(prev => !prev)}>
                <FaBell />
            </button>
            <div className="bg-[#E3E5E8] h-10 w-[2px]"></div>
            <button >
                <FaUserCircle className="text-3xl" onClick={() => setProfilePopUp(prev => !prev)} />
            </button>
        </div>

        <div className={`${notificationPopUp ? 'absolute' : 'hidden'} top-20 right-32 p-5 py-2 w-[35%] rounded-xl bg-white`}>
            <div className="flex justify-between py-2 border-b-2">
                <span className="text-[18px] font-[600]">Notifications</span>
                <span className="text-[#690068]">Clear all</span>
            </div>
            <div className="flex flex-col gap-5 py-5">
                <div className="w-full flex gap-5">
                    <img src="https://via.placeholder.com/100x100" alt="" className="rounded-full w-16 h-16" />
                    <div className="w-full flex flex-col justify-center gap-3">
                        <span className="text-sm text-[#1A1926] font-[600]">Judith Black <span className="font-[400]">applied for your Job posting “Product Designer to design B2B & B2C product”</span></span>
                        <span className="flex items-center gap-3 text-xs text-[#637085]">Yesterday <FaDotCircle /> 11:34pm</span>
                    </div>
                </div>
                <div className="w-full flex gap-5">
                    <img src="https://via.placeholder.com/100x100" alt="" className="rounded-full w-16 h-16" />
                    <div className="w-full flex flex-col justify-center gap-3">
                        <span className="text-sm text-[#1A1926] font-[600]">Steven Jake <span className="font-[400]">applied for your Job posting “Product Designer to design B2B & B2C product”</span></span>
                        <span className="flex items-center gap-3 text-xs text-[#637085]">Yesterday <FaDotCircle /> 11:34pm</span>
                    </div>
                </div>
                <div className="w-full flex gap-5">
                    <img src="https://via.placeholder.com/100x100" alt="" className="rounded-full w-16 h-16" />
                    <div className="w-full flex flex-col justify-center gap-3">
                        <span className="text-sm text-[#1A1926] font-[600]">Judith Black <span className="font-[400]">applied for your Job posting “Product Designer to design B2B & B2C product”</span></span>
                        <span className="flex items-center gap-3 text-xs text-[#637085]">Yesterday <FaDotCircle /> 11:34pm</span>
                    </div>
                </div>
                <div className="w-full flex gap-5">
                    <img src="https://via.placeholder.com/100x100" alt="" className="rounded-full w-16 h-16" />
                    <div className="w-full flex flex-col justify-center gap-3">
                        <span className="text-sm text-[#1A1926] font-[600]">Judith Black <span className="font-[400]">applied for your Job posting “Product Designer to design B2B & B2C product”</span></span>
                        <span className="flex items-center gap-3 text-xs text-[#637085]">Yesterday <FaDotCircle /> 11:34pm</span>
                    </div>
                </div>
            </div>
            <div className="border-y-2 py-2 flex justify-center items-center">
                <Link to='/notifications' className="flex items-center gap-3 text-[#690068]">View all <FaArrowRight /> </Link>
            </div>
        </div>

        <div className={`${profilePopUp ? 'absolute' : 'hidden'} top-20 right-20 p-5 w-[20%] rounded-xl bg-white`}>
            <div className="flex flex-col gap-5 w-full">
                <div className="flex flex-col gap-5 border-b-2 pb-5 items-start">
                    <button className="flex gap-5 items-center">
                        <FaUser />
                        My Profile
                    </button>
                    <button className="flex gap-5 items-center">
                        <FaUser />
                        My Plan
                    </button>
                </div>
                <div className="flex flex-col gap-5 border-b-2 pb-5 items-start">
                    <button className="flex gap-5 items-center">
                        <FaGear />
                        Settings
                    </button>
                    <button className="flex gap-5 items-center">
                        <FaLock />
                        Lock Screen
                    </button>
                </div>
                <div className="flex flex-col items-start">
                    <button className="flex gap-5 items-center">
                        <FaSignOutAlt />
                        Logout
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default TopRightMenu;