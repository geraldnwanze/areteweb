import setting from "../images/icons/setting.svg";
import notificationWithBadge from "../images/icons/notification-with-badge.svg";
import userAvatar from "../images/user-avatar.svg";
import { useLocation } from "react-router-dom";

const TopBar = ({title, description}) => {
    const location = useLocation();
    const currentUrl = location.pathname;

    return (
        <div className="flex justify-between">
                <div>
                    <h1 className="text-[25px] text-[#1D2939] font-bold mb-5"> {title} </h1>
                    <p className="font-[500]"> {description} </p>
                </div>
                <div className="flex justify-between gap-10">
                    {
                        currentUrl === '/messages'
                        &&
                        <div className="flex items-center">
                            <button className="bg-[#690068] h-12 rounded-s-2xl p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </button>
                            <input type="text" className="h-12 rounded-e-2xl w-60 p-5 placeholder-[#28263B]" placeholder="search messages" />
                        </div>
                    }
                    <div className="h-20 flex border-b-2 justify-end items-center gap-8 px-10 -mt-12">
                        <img src={setting} alt="" className="w-6 h-6" />
                        <img src={notificationWithBadge} alt="" />
                        <div className="bg-[#E3E5E8] h-10 w-[2px]"></div>
                        <img src={userAvatar} alt="" />
                    </div>
                </div>
            </div>
    )
}

export default TopBar;