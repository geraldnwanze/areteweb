import setting from "../../images/icons/setting.svg";
import notificationWithBadge from "../../images/icons/notification-with-badge.svg";
import userAvatar from "../../images/user-avatar.svg";
import avatar1 from "../../images/avatar-1.svg";
import avatar2 from "../../images/avatar-2.svg";
import avatar3 from "../../images/avatar-3.svg";
import avatar4 from "../../images/avatar-4.svg";

const Messages = () => {
    return (
        <div className="p-10 w-[80%]">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-[25px] text-[#1D2939] font-bold mb-5">Messages</h1>
                    <p className="font-[500]">Connect with your Artisians and Applicants </p>
                </div>
                <div className="flex justify-between gap-10">
                    <div className="flex items-center">
                        <button className="bg-[#690068] h-12 rounded-s-2xl p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </button>
                        <input type="text" className="h-12 rounded-e-2xl w-60 p-5 placeholder-[#28263B]" placeholder="search messages" />
                    </div>
                    <div className="h-20 flex border-b-2 justify-end items-center gap-8 px-10 -mt-12">
                        <img src={setting} alt="" className="w-6 h-6" />
                        <img src={notificationWithBadge} alt="" />
                        <div className="bg-[#E3E5E8] h-10 w-[2px]"></div>
                        <img src={userAvatar} alt="" />
                    </div>
                </div>
            </div>
            <div className="flex w-full">
                <div className="w-[35%]">
                    <h1 className="my-5">All Messages</h1>
                    <div className="flex flex-col gap-5">
                        <div className="bg-[#7CD4FD1A] p-5 flex gap-5 w-full rounded-2xl">
                            <div>
                                <img src={avatar1} alt="" />
                            </div>
                            <div>
                                <h4 className="text-[#1A1926] font-[500] mb-2">Jane Wilson</h4>
                                <p className="text-[#637085] text-[14px]">Hi! How are you, Steve?</p>
                            </div>
                        </div>
                        <div className="bg-white p-5 flex gap-5 w-full rounded-2xl">
                            <div>
                                <img src={avatar2} alt="" />
                            </div>
                            <div>
                                <h4 className="text-[#1A1926] font-[500] mb-2">Brandon Pena</h4>
                                <p className="text-[#637085] text-[14px]">How about going somewhere to...</p>
                            </div>
                        </div>
                        <div className="bg-white p-5 flex gap-5 w-full rounded-2xl">
                            <div>
                                <img src={avatar3} alt="" />
                            </div>
                            <div>
                                <h4 className="text-[#1A1926] font-[500] mb-2">Nathan Fox</h4>
                                <p className="text-[#637085] text-[14px]">Hello. We have a meeting with a...</p>
                            </div>
                        </div>
                        <div className="bg-white p-5 flex gap-5 w-full rounded-2xl">
                            <div>
                                <img src={avatar4} alt="" />
                            </div>
                            <div>
                                <h4 className="text-[#1A1926] font-[500] mb-2">Jacob Hawkins</h4>
                                <p className="text-[#637085] text-[14px]">Well done!</p>
                            </div>
                        </div>
                        <div className="bg-white p-5 flex gap-5 w-full rounded-2xl">
                            <div>
                                <img src={avatar4} alt="" />
                            </div>
                            <div>
                                <h4 className="text-[#1A1926] font-[500] mb-2">Jacob Hawkins</h4>
                                <p className="text-[#637085] text-[14px]">Well done!</p>
                            </div>
                        </div>
                        <div className="bg-white p-5 flex gap-5 w-full rounded-2xl">
                            <div>
                                <img src={avatar4} alt="" />
                            </div>
                            <div>
                                <h4 className="text-[#1A1926] font-[500] mb-2">Jacob Hawkins</h4>
                                <p className="text-[#637085] text-[14px]">Well done!</p>
                            </div>
                        </div>
                        <div className="bg-white p-5 flex gap-5 w-full rounded-2xl">
                            <div>
                                <img src={avatar4} alt="" />
                            </div>
                            <div>
                                <h4 className="text-[#1A1926] font-[500] mb-2">Jacob Hawkins</h4>
                                <p className="text-[#637085] text-[14px]">Well done!</p>
                            </div>
                        </div>
                        <div className="bg-white p-5 flex gap-5 w-full rounded-2xl">
                            <div>
                                <img src={avatar4} alt="" />
                            </div>
                            <div>
                                <h4 className="text-[#1A1926] font-[500] mb-2">Jacob Hawkins</h4>
                                <p className="text-[#637085] text-[14px]">Well done!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[55%]"></div>
            </div>
        </div>
    )
}

export default Messages;