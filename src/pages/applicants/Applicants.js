import { useOutletContext } from "react-router-dom";
import businessProfileBg from "../../images/business-profile-bg.svg";
import { useState } from "react";
import Carousel from "../../components/Carousel";
import { FaStar } from "react-icons/fa";

const Applicants = () => {
    const [slider, setSlider] = useState(false);
    const [portfolio, setPortfolio] = useState(true);
    const [contractTerms, setContractTerms] = useState(false);
    const [modal, setModal] = useState(false)
    const [flag] = useOutletContext();

    const slides = [
        'https://via.placeholder.com/500x500',
        'https://via.placeholder.com/400x400',
        'https://via.placeholder.com/300x300',
        'https://via.placeholder.com/200x200',
        'https://via.placeholder.com/100x100',
    ];

    const viewDetails = () => {
        setSlider(true);
    }

    const closeDetails = () => {
        if (contractTerms) {
            setContractTerms(false);
            setPortfolio(true);
        } else {
            setSlider(false);
            setPortfolio(true);
            setContractTerms(false);
        }
    }

    const hireArtisan = () => {
        setPortfolio(false);
        setContractTerms(true)
    }

    return (
        <>
            <div className="w-full h-48 px-7 py-6 bg-white rounded-2xl shadow-inner justify-between items-start inline-flex">
                <div className="justify-start items-start gap-5 flex">
                    <img className="w-24 h-24 rounded-full border-4 border-white" src="https://via.placeholder.com/100x100" alt="" />
                    <div className="flex-col justify-start items-start gap-5 inline-flex">
                    <div className="flex-col justify-start items-start gap-5 flex">
                        <div className="flex-col justify-start items-start gap-3 flex">
                        <div className="h-20 flex-col justify-start items-start gap-2 flex">
                            <div className="text-slate-600 text-base font-extrabold font-['Inter'] leading-normal">Nick Rowlings</div>
                            <div className="text-slate-600 text-sm font-medium font-['Inter'] leading-tight">UI UX Designer</div>
                            <div className="justify-start items-start gap-20 inline-flex">
                            <div className="text-slate-600 text-sm font-normal font-['Inter'] leading-tight">Nigeria</div>
                            <div className="text-slate-600 text-sm font-normal font-['Inter'] leading-tight">$150 Earned</div>
                            </div>
                        </div>
                        <div className="w-96 h-4 text-slate-600 text-sm font-medium font-['Inter'] leading-tight">Cover Letter-Hi dear, My name is Nick Rowlings and i’m a 50 years old design with passion for user centric design and....</div>
                        </div>
                    </div>
                    <div className="justify-start items-center gap-2.5 inline-flex">
                        <div className="justify-start items-start gap-2 flex">
                        <img src={flag} alt="" className="w-7 h-5 relative" />
                        <div className="text-center text-slate-700 text-xs font-normal font-['Inter'] leading-tight">English</div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="justify-end items-center gap-4 flex">
                    <div className="px-6 py-2 rounded-xl border border-gray-300 justify-center items-center gap-1.5 flex">
                        <button onClick={viewDetails} className="text-center text-gray-500 text-base font-semibold font-['Inter'] leading-normal">Details</button>
                    </div>
                    <div className="px-6 py-2 bg-fuchsia-900 rounded-xl justify-center items-center gap-1.5 flex">
                    <div className="text-justify text-white text-base font-semibold font-['Inter'] leading-normal">Hire</div>
                    </div>
                </div>
            </div>
            <div className="w-full h-48 px-7 py-6 bg-white rounded-2xl shadow-inner justify-between items-start inline-flex">
                <div className="justify-start items-start gap-5 flex">
                    <img className="w-24 h-24 rounded-full border-4 border-white" src="https://via.placeholder.com/100x100" alt="" />
                    <div className="flex-col justify-start items-start gap-5 inline-flex">
                    <div className="flex-col justify-start items-start gap-5 flex">
                        <div className="flex-col justify-start items-start gap-3 flex">
                        <div className="h-20 flex-col justify-start items-start gap-2 flex">
                            <div className="text-slate-600 text-base font-extrabold font-['Inter'] leading-normal">Nick Rowlings</div>
                            <div className="text-slate-600 text-sm font-medium font-['Inter'] leading-tight">UI UX Designer</div>
                            <div className="justify-start items-start gap-20 inline-flex">
                            <div className="text-slate-600 text-sm font-normal font-['Inter'] leading-tight">Nigeria</div>
                            <div className="text-slate-600 text-sm font-normal font-['Inter'] leading-tight">$150 Earned</div>
                            </div>
                        </div>
                        <div className="w-96 h-4 text-slate-600 text-sm font-medium font-['Inter'] leading-tight">Cover Letter-Hi dear, My name is Nick Rowlings and i’m a 50 years old design with passion for user centric design and....</div>
                        </div>
                    </div>
                    <div className="justify-start items-center gap-2.5 inline-flex">
                        <div className="justify-start items-start gap-2 flex">
                        <img src={flag} alt="" className="w-7 h-5 relative" />
                        <div className="text-center text-slate-700 text-xs font-normal font-['Inter'] leading-tight">English</div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="justify-end items-center gap-4 flex">
                    <div className="px-6 py-2 rounded-xl border border-gray-300 justify-center items-center gap-1.5 flex">
                        <button onClick={viewDetails} className="text-center text-gray-500 text-base font-semibold font-['Inter'] leading-normal">Details</button>
                    </div>
                    <div className="px-6 py-2 bg-fuchsia-900 rounded-xl justify-center items-center gap-1.5 flex">
                    <div className="text-justify text-white text-base font-semibold font-['Inter'] leading-normal">Hire</div>
                    </div>
                </div>
            </div>
            <div className="w-full h-48 px-7 py-6 bg-white rounded-2xl shadow-inner justify-between items-start inline-flex">
                <div className="justify-start items-start gap-5 flex">
                    <img className="w-24 h-24 rounded-full border-4 border-white" src="https://via.placeholder.com/100x100" alt="" />
                    <div className="flex-col justify-start items-start gap-5 inline-flex">
                    <div className="flex-col justify-start items-start gap-5 flex">
                        <div className="flex-col justify-start items-start gap-3 flex">
                        <div className="h-20 flex-col justify-start items-start gap-2 flex">
                            <div className="text-slate-600 text-base font-extrabold font-['Inter'] leading-normal">Nick Rowlings</div>
                            <div className="text-slate-600 text-sm font-medium font-['Inter'] leading-tight">UI UX Designer</div>
                            <div className="justify-start items-start gap-20 inline-flex">
                            <div className="text-slate-600 text-sm font-normal font-['Inter'] leading-tight">Nigeria</div>
                            <div className="text-slate-600 text-sm font-normal font-['Inter'] leading-tight">$150 Earned</div>
                            </div>
                        </div>
                        <div className="w-96 h-4 text-slate-600 text-sm font-medium font-['Inter'] leading-tight">Cover Letter-Hi dear, My name is Nick Rowlings and i’m a 50 years old design with passion for user centric design and....</div>
                        </div>
                    </div>
                    <div className="justify-start items-center gap-2.5 inline-flex">
                        <div className="justify-start items-start gap-2 flex">
                        <img src={flag} alt="" className="w-7 h-5 relative" />
                        <div className="text-center text-slate-700 text-xs font-normal font-['Inter'] leading-tight">English</div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="justify-end items-center gap-4 flex">
                    <div className="px-6 py-2 rounded-xl border border-gray-300 justify-center items-center gap-1.5 flex">
                        <button onClick={viewDetails} className="text-center text-gray-500 text-base font-semibold font-['Inter'] leading-normal">Details</button>
                    </div>
                    <div className="px-6 py-2 bg-fuchsia-900 rounded-xl justify-center items-center gap-1.5 flex">
                    <div className="text-justify text-white text-base font-semibold font-['Inter'] leading-normal">Hire</div>
                    </div>
                </div>
            </div>

            <div className={`${slider ? 'absolute' : 'hidden'} top-0 left-0 bg-blackTransparent w-screen h-screen`}>
                <div className={`absolute w-[70%] top-0 right-0 h-screen overflow-y-scroll bg-white slide-left`}>
                    <div className="">
                        <img src={businessProfileBg} alt="" />
                        <button onClick={closeDetails} className="rounded-full px-3 py-1 flex items-center gap-2 text-[14px] bg-[#FFFFFF66] text-white font-[600] absolute top-10 left-16">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                            <span>Go Back</span>
                        </button>
                    </div>
                    <div className="p-10">
                        <div className="flex justify-around border-b pb-5">
                            <div className="flex flex-col gap-5 -mt-28">
                                <div className="w-36 h-36 rounded-full bg-white p-2">
                                    <img src="https://via.placeholder.com/100x100" alt="" className="h-32 rounded-full" />
                                </div>
                                <button className="text-[#690068] text-[18px] font-[700]">View Profile</button>
                            </div>
                            <div className="flex flex-col gap-5">
                                <h4 className="text-[24px] font-[800] text-[#1D2939]">Nick Rowlings</h4>
                                <p className="text-[14px] text-[#475467] font-[400]">UI UX Designer</p>
                                <p className="text-[14px] text-[#475467] font-[400]">Port Harcourt, Nigeria - 10:34PM local time</p>
                                <p className="text-[14px] text-[#475467] font-[400]">More than 30 hrs a week</p>
                            </div>
                            <div className="flex flex-col justify-between">
                                <div className={`${portfolio ? 'block' : 'hidden'} flex gap-3`}>
                                    <button className="px-5 py-2 border rounded-xl">Decline Request</button>
                                    <button onClick={hireArtisan} className="px-5 py-2 rounded-xl bg-[#690068] text-white">Hire Artisan</button>
                                </div>
                                <div className={`${portfolio ? 'hidden' : 'block'}`}></div>
                                <div className="flex items-center gap-3">
                                    <span>4.7</span>
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" strokeWidth="10" fill="white" />
                                    <span>(12,000 Ratings)</span>
                                </div>
                            </div>
                        </div>
                        <div className={`${portfolio ? 'block' : 'hidden'}`}>
                            <div className="">
                                <h4 className="text-[#101828] text-[20px] font-[700] py-5">Cover Letter</h4>
                                <p className="text-[#1A1926]">I'm Daniel Durent, and my passion lies in the art of creating digital magic. With four years of immersive experience in the world of UI/UX design, I've had the privilege of working on diverse projects across various industries. My mission is to transform complex ideas into elegant, user-centered solutions.</p>
                            </div>
                            <div className="">
                                <h4 className="text-[#101828] text-[20px] font-[700] py-5">Portfolio</h4>
                                <Carousel slides={slides} />
                            </div>
                        </div>
                        <div className={`${contractTerms ? 'block' : 'hidden'}`}>
                            <h4 className="text-[#101828] text-[20px] font-[700] py-5">Contract Terms</h4>
                            <div className="border rounded-xl p-5 flex justify-start gap-[40%]">
                                <div>
                                    <h4 className="text-[#1A1926] font-[600]">Payment Options</h4>
                                    <p className="text-[#1A1926]">Hourly</p>
                                </div>
                                <div className="border-l-2 px-2">
                                    <h4>Pay Per</h4>
                                    <p>$40/hr</p>
                                </div>
                            </div>
                            <div className="flex flex-col w-2/3">
                                <h4 className="text-[#101828] text-[20px] font-[700] py-5">Start Date</h4>
                                <input type="date" name="" className="w-2/3 flex border rounded-xl p-3 bg-gray-200" />
                                <div>
                                    <input type="checkbox" name="" className="my-5 mr-3" /> I Accept Arete’s <a href="/" className="text-[#690068]">User agreement</a> Terms of Client to Artisian relationship 
                                </div>
                                <button onClick={() => {setModal(true)}} className="w-1/3 bg-[#690068] px-5 py-2 rounded-xl text-white">Send Contract</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${modal ? 'absolute' : 'hidden'} top-0 left-0 bg-blackTransparent w-screen h-screen`}>
                <div className="absolute bg-white rounded-xl p-10 w-1/2 justify-center items-center top-[25%] left-[25%]">
                    <h4 className="text-[18px] font-[600] mb-5">Stay Safe</h4>
                    <div className="flex flex-col gap-5">
                        <ul className="text-[14px] list-disc flex flex-col gap-5 px-5">
                            <li>Only Pay Artisians through Arete to ensure Payment Protection</li>
                            <li>Payment Outside Arete violates your <a href="/" className="text-[#690068]">User agreement</a> and could result in Lead Action </li>
                        </ul>
                        <div>
                            <input type="checkbox" name="" className="" /> I understand Arete’s Policies.
                        </div>
                    </div>
                    <div className="flex justify-end gap-5 mt-10">
                        <button onClick={() => {setModal(false)}} className="px-5 py-2 bg-gray-300 rounded-xl">Cancel</button>
                        <button className="px-5 py-2 bg-[#690068] text-white rounded-xl">send Offer</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Applicants;