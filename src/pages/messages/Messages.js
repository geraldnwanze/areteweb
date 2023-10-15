import setting from "../../images/icons/setting.svg";
import notificationWithBadge from "../../images/icons/notification-with-badge.svg";
import userAvatar from "../../images/user-avatar.svg";
import avatar1 from "../../images/avatar-1.svg";
import avatar2 from "../../images/avatar-2.svg";
import avatar3 from "../../images/avatar-3.svg";
import avatar4 from "../../images/avatar-4.svg";
import messagePic from "../../images/message-pic.svg";
import today from "../../images/today.svg";

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
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
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
            <div className="flex w-full gap-10">
                <div className="w-[35%] h-[80vh] overflow-auto">
                    <h1 className="my-5">All Messages</h1>
                    <div className="flex flex-col gap-2">
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
                <div className="w-[65%]">
                    <div className="flex bg-white w-full p-5 mt-10 rounded-t-lg justify-between items-center">
                        <div className="flex gap-8 items-center">
                            <img src={userAvatar} alt="" />
                            <h4>Ads for team socials</h4>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                        </svg>

                    </div>
                    <div className="bg-[#7CD4FD1A] w-full p-5">
                        <div className="flex gap-5 my-10 items-center">
                            <img src={avatar1} alt="" />
                            <div>
                                <div className="flex gap-3 items-center mb-3">
                                    <h4 className="font-[500]">Jane Wilson</h4>
                                    <span className="text-[14px] text-[#637085]">10:43</span>
                                </div>
                                <p className="text-[#28263B] text-[12px] bg-white rounded-xl p-2">Hi Jacob and Brandon, any progress on the project?</p>
                            </div>
                        </div>
                        <div className="flex gap-5 my-10 justify-end">
                            <div>
                                <div className="flex gap-3 items-center mb-3 justify-end">
                                    <h4 className="font-[500]">You</h4>
                                    <span className="text-[14px] text-[#637085]">10:43</span>
                                </div>
                                <div className="text-[#28263B] text-[12px] bg-white rounded-xl p-2">
                                    <p>
                                        Hi Jane! Yes.
                                    </p>
                                    <p>
                                        Hi Jane! Yes. I just finished developing the Chat template
                                    </p>
                                    <img src={messagePic} alt="" />
                                </div>
                            </div>
                            <img src={avatar4} alt="" />
                        </div>
                        <img src={today} alt="" />
                        <div className="flex gap-5 my-10">
                            <img src={avatar1} alt="" />
                            <div>
                                <div className="flex gap-3 items-center mb-3">
                                    <h4 className="font-[500]">Jane Wilson</h4>
                                    <span className="text-[14px] text-[#637085]">10:43</span>
                                </div>
                                <p className="text-[#28263B] text-[12px] bg-white rounded-xl p-2">Hi Jacob and Brandon, any progress on the project?</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Messages;