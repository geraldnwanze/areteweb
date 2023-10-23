import { useState } from "react";
import businessProfileBG from "../../images/business-profile-bg.svg";
import businessProfileMap from "../../images/business-profile-map.svg";
import { FaBell, FaBuilding, FaLock, FaTable, FaUser } from "react-icons/fa";
import Business from "./Business";

const BusinessProfile = () => {
    const [businessModal, setBusinessModal] = useState(false);

    return (
        <div className="w-[80%] h-screen overflow-auto">
            <img src={businessProfileBG} alt="" />
            <div className="flex p-10 justify-between">
                <div className="flex flex-col gap-3 items-center">
                    <div className="w-36 h-36 -mt-28 border-8 border-white rounded-full bg-[#F5F6FA]"></div>
                    <h4 className="text-[#1A1926] text-[20px] font-[800]">Mitchell Cooper</h4>
                    <span className="text-[#637085] text-[11px] font-[600]">Affiliate Marketing</span>
                    <div className="flex gap-2">

                    </div>
                </div>
                <div className="w-[30%] flex flex-col gap-3">
                    <h4 className="text-[#1D2939] text-[18px] font-[700]">Description</h4>
                    <p className="text-[#1A1926] font-[400]">Mitchell Cooper: Leading affiliate marketing firm connecting businesses with affiliates for growth, sales, and success through innovation and transparency.Our mission is to connect businesses with a vast network of affiliates, driving growth, sales, and success for all parties involved</p>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                        <h4 className="text-[#1D2939] text-[18px] font-[700]">Email</h4>
                        <p className="text-[#1A1926] font-[400]">ronald@gmail.com</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="text-[#1D2939] text-[18px] font-[700]">Phone</h4>
                        <p className="text-[#1A1926] font-[400]">+123–4567–8800</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="text-[#1D2939] text-[18px] font-[700]">Website</h4>
                        <p className="text-[#1A1926] font-[400]">www.johnycartman.com</p>
                    </div>
                </div>
                <div>
                    <button onClick={() => {setBusinessModal(true)}} className="bg-[#690068] px-5 py-2 text-white rounded-lg text-[14px] font-[700]">Edit Profile</button>
                </div>
            </div>
            <div className="w-1/2 flex flex-col gap-5 mx-auto">
                <h4 className="text-[18px] text-[#1D2939] font-[700]">Location</h4>
                <img src={businessProfileMap} alt="" />
            </div>

            <div className={`${businessModal ? 'absolute' : 'hidden'} w-full h-screen top-0 left-0 bg-blackTransparent`}>
                <div className="w-[70vw] h-[80vh] absolute bg-white flex top-[10%] left-[15%] rounded-xl">
                    <div className="w-[25%] h-full rounded-l-xl p-10">
                        <div className="text-[#667085] text-[14px]">
                            <h4 className="font-[600] my-10 mt-5 text-[#1D2939]">SETTINGS</h4>
                            <div className="flex flex-col gap-5">
                                <button className="flex gap-5 items-center">
                                    <FaUser /> Profile
                                </button>
                                <button className="flex gap-5 items-center">
                                    <FaBuilding /> Business
                                </button>
                                <button className="flex gap-5 items-center">
                                    <FaLock /> Security
                                </button>
                                <button className="flex gap-5 items-center">
                                    <FaBell /> Notification
                                </button>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="w-[75%] h-full bg-[#F2F4F7] rounded-r-xl p-10">
                        <Business />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessProfile;