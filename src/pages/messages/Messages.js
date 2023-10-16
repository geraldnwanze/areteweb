import TopBar from "../../components/TopBar";
import avatar1 from "../../images/avatar-1.svg";
import avatar2 from "../../images/avatar-2.svg";
import avatar3 from "../../images/avatar-3.svg";
import avatar4 from "../../images/avatar-4.svg";
import messagePic from "../../images/message-pic.svg";
import today from "../../images/today.svg";
import userAvatar from "../../images/user-avatar.svg";

const Messages = () => {
    return (
        <div className="p-10 w-[80%]">
            <TopBar title='Messages' description='Connect with your Artisans and Applicants' />
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
                    <div className="bg-[#f2f2f2] w-full px-5 py-2 h-[58vh] overflow-auto">
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
                        <div className="w-full px-5 bg-[#f2f2f2]">
                            <div className="p-2 py-3 rounded-xl border-2 bg-transparent border-[#690068] flex gap-2 items-center">
                                <img src={avatar4} alt="" className="h-8" />
                                <input type="text" className="bg-transparent w-[70%] focus:outline-0" />
                                <div className="bg-white p-2 rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-gray-500">
                                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div className="bg-white p-2 rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-500">
                                        <path fillRule="evenodd" d="M18.97 3.659a2.25 2.25 0 00-3.182 0l-10.94 10.94a3.75 3.75 0 105.304 5.303l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a5.25 5.25 0 11-7.424-7.424l10.939-10.94a3.75 3.75 0 115.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 015.91 15.66l7.81-7.81a.75.75 0 011.061 1.06l-7.81 7.81a.75.75 0 001.054 1.068L18.97 6.84a2.25 2.25 0 000-3.182z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="bg-[#FEBA00] p-2 rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white -rotate-45">
                                        <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                </div>

            </div>
        </div>
    )
}

export default Messages;