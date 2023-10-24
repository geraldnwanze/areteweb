import { useState } from "react";
import businessProfileBG from "../../images/business-profile-bg.svg";
import businessProfileMap from "../../images/business-profile-map.svg";
import { FaBell, FaBuilding, FaCalendarAlt, FaDollarSign, FaLock, FaMapMarkerAlt, FaRegClock, FaSignOutAlt, FaStar, FaTrash, FaUser } from "react-icons/fa";
import Business from "./Business";
import Profile from "./Profile";
import Security from "./Security";
import Notification from "./Notification";

const BusinessProfile = () => {
    const [businessModal, setBusinessModal] = useState(false);
    const [business, setBusiness] = useState(true);
    const [profile, setProfile] = useState(false);
    const [security, setSecurity] = useState(false);
    const [notification, setNotification] = useState(false);
    const [deleteAccountModal, setDeleteAccountModal] = useState(false);
    const [logoutModal, setLogoutModal] = useState(false);
    const [postedJobs, setPostedJobs] = useState(true);
    const [reviewsAndRatings, setReviewsAndRatings] = useState(false);

    const handleMenu = (tag) => {
        switch (tag) {
            case 'business':
                setBusiness(true);
                setProfile(false);
                setSecurity(false);
                setNotification(false);
                break;
        
            case 'profile':
                setBusiness(false);
                setSecurity(false);
                setNotification(false);
                setProfile(true);
                break;
        
            case 'security':
                setBusiness(false);
                setProfile(false);
                setNotification(false);
                setSecurity(true);
                break;
        
            case 'notification':
                setBusiness(false);
                setProfile(false);
                setSecurity(false);
                setNotification(true);
                break;
            
            default:
                break;
        }
    }

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

            <div className="flex justify-start items-center text-[15px] gap-5 p-10">
                <button onClick={() => {setPostedJobs(true); setReviewsAndRatings(false);}} className={`px-5 py-2 rounded-xl ${postedJobs ? 'bg-[#690068] text-white' : 'bg-transparent'}`}>POSTED JOBS</button>
                <button onClick={() => {setPostedJobs(false); setReviewsAndRatings(true);}} className={`px-5 py-2 rounded-xl ${reviewsAndRatings ? 'bg-[#690068] text-white' : 'bg-transparent'}`}>REVIEWS AND RATINGS</button>
            </div>

            <div className={`w-full flex flex-col gap-5 ${postedJobs ? 'block' : 'hidden'} p-10`}>
                <div className="w-full p-10 bg-white rounded-xl">
                    <h4 className="text-[24px] font-[500]">Junior UI Designer</h4>
                    <div className="flex justify-start items-center gap-20 my-5 text-[14px]">
                        <div className="flex gap-2 items-center">
                            <FaMapMarkerAlt />
                            Madrid
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaRegClock />
                            Madrid
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaDollarSign />
                            Madrid
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaCalendarAlt />
                            Madrid
                        </div>
                    </div>
                    <p>Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.</p>
                </div>
                <div className="w-full p-10 bg-white rounded-xl">
                    <h4 className="text-[24px] font-[500]">Junior UI Designer</h4>
                    <div className="flex justify-start items-center gap-20 my-5 text-[14px]">
                        <div className="flex gap-2 items-center">
                            <FaMapMarkerAlt />
                            Madrid
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaRegClock />
                            Madrid
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaDollarSign />
                            Madrid
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaCalendarAlt />
                            Madrid
                        </div>
                    </div>
                    <p>Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.</p>
                </div>
                <div className="w-full p-10 bg-white rounded-xl">
                    <h4 className="text-[24px] font-[500]">Junior UI Designer</h4>
                    <div className="flex justify-start items-center gap-20 my-5 text-[14px]">
                        <div className="flex gap-2 items-center">
                            <FaMapMarkerAlt />
                            Madrid
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaRegClock />
                            Madrid
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaDollarSign />
                            Madrid
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaCalendarAlt />
                            Madrid
                        </div>
                    </div>
                    <p>Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.</p>
                </div>
            </div>

            <div className={`w-full flex flex-col gap-5 p-10 ${reviewsAndRatings ? 'block' : 'hidden'}`}>
                <div className="py-2 border-y-2 flex items-center gap-3 text-[35px]">
                    <span className="font-[700]">4.7</span>
                    <div className="flex text-yellow-500">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar strokeWidth="10" fill="white" />
                    </div>
                    <span className="text-[20px]">
                        (12,000 Ratings)
                    </span>
                </div>
                <h4 className="text-[24px] font-[700]">Reviews</h4>
                <div className="flex flex-col gap-10">
                    <div className="flex items-center gap-5">
                        <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center">
                            <img src="https://via.placeholder.com/100x100" alt="" className="w-24 h-24 rounded-full" />
                        </div>
                        <div className="flex flex-col gap-5 mt-5">
                            <div className="flex gap-5">
                                <span className="text-xl font-semibold">Brandon James</span>
                                <span className="text-xl">12-11-2019, 11:49PM</span>
                            </div>
                            <p>It’s an honour working with you guys.....I learnt a lot myself and i enjoyed the workflow and i’m looking forward to working more for the company</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center">
                            <img src="https://via.placeholder.com/100x100" alt="" className="w-24 h-24 rounded-full" />
                        </div>
                        <div className="flex flex-col gap-5 mt-5">
                            <div className="flex gap-5">
                                <span className="text-xl font-semibold">Chris bernard</span>
                                <span className="text-xl">12-11-2019, 11:49PM</span>
                            </div>
                            <p>It’s an honour working with you guys.....I learnt a lot myself and i enjoyed the workflow and i’m looking forward to working more for the company</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${businessModal ? 'absolute' : 'hidden'} w-full h-screen top-0 left-0 bg-blackTransparent z-50`}>
                <div className="w-[70vw] h-[80vh] absolute bg-white flex top-[10%] left-[15%] rounded-xl z-0">
                    <div className="w-[25%] h-full rounded-l-xl p-10 flex flex-col justify-between">
                        <div className="text-[#667085] text-[14px]">
                            <h4 className="font-[600] my-10 mt-5 text-[#1D2939]">SETTINGS</h4>
                            <div className="flex flex-col gap-5">
                                <button onClick={() => handleMenu('profile')} className="flex gap-5 items-center">
                                    <FaUser /> Profile
                                </button>
                                <button onClick={() => handleMenu('business')} className="flex gap-5 items-center">
                                    <FaBuilding /> Business
                                </button>
                                <button onClick={() => handleMenu('security')} className="flex gap-5 items-center">
                                    <FaLock /> Security
                                </button>
                                <button onClick={() => handleMenu('notification')} className="flex gap-5 items-center">
                                    <FaBell /> Notification
                                </button>
                            </div>
                        </div>
                        <div className="flex text-[14px] text-[#D92D20]">
                            <div className="flex flex-col gap-5">
                                <button onClick={() => setDeleteAccountModal(true)} className="flex gap-5 items-center">
                                    <FaTrash /> Delete Account
                                </button>
                                <button onClick={() => setLogoutModal(true)} className="flex gap-5 items-center">
                                    <FaSignOutAlt /> Logout
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[75%] h-full bg-[#F2F4F7] rounded-r-xl p-10">
                        { business ? <Business /> : '' }
                        { profile ? <Profile /> : '' }
                        { security ? <Security /> : '' }
                        { notification ? <Notification /> : ''}
                    </div>
                </div>
            </div>

            <div className={`w-full h-screen ${deleteAccountModal ? 'absolute' : 'hidden'} top-0 left-0 bg-blackTransparent`}>
                <div className="w-[40%] absolute p-10 top-[30%] left-[30%] bg-white rounded-xl">
                    <h4 className="text-[18px] text-[#E94D3F] font-[600] mb-5">Delete Account</h4>
                    <p className="text-[14px] text-[#28263B]">By clicking delete, Your business Arete Account would be delete permanently and cannot be recovered. All business Activities would be removed and you wont have access to this account</p>
                    <div className="mt-5 flex flex-col gap-2">
                        <label htmlFor="">Type in password to confirm</label>
                        <input type="text" className="p-2 w-full rounded-xl bg-[#F2F4F7]" placeholder="******" />
                    </div>
                    <div className="flex justify-end items-center gap-5 mt-5 text-[14px]">
                        <button onClick={() => setDeleteAccountModal(false)} className="px-5 py-2 rounded-xl bg-[#F2F4F7]">Cancel</button>
                        <button className="px-5 py-2 rounded-xl bg-[#E94D3F]">Delete</button>
                    </div>
                </div>
            </div>

            <div className={`w-full h-screen ${logoutModal ? 'absolute' : 'hidden'} top-0 left-0 bg-blackTransparent`}>
                <div className="w-[40%] absolute p-10 top-[30%] left-[30%] bg-white rounded-xl">
                    <h4 className="text-[18px] text-[#E94D3F] font-[600] mb-5">Log Out</h4>
                    <p className="text-[14px] text-[#28263B]">Are you sure you want to Log out from your Arete Account?</p>
                    <div className="flex justify-end items-center gap-5 mt-5 text-[14px]">
                        <button onClick={() => setLogoutModal(false)} className="px-5 py-2 rounded-xl bg-[#F2F4F7]">Cancel</button>
                        <button className="px-5 py-2 rounded-xl bg-[#E94D3F]">Log Out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessProfile;