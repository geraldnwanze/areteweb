import { useOutletContext } from "react-router-dom";

const Hired = () => {
    const [flag] = useOutletContext();
    return (
        <div className="flex flex-col w-full gap-5 h-[60vh] overflow-auto">
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
                    <div className="text-center text-gray-500 text-base font-semibold font-['Inter'] leading-normal">Details</div>
                    </div>
                    <div className="px-5 py-2 bg-fuchsia-900 rounded-xl justify-center items-center gap-1.5 flex">
                    <div className="w-6 h-6 relative" />
                    <div className="text-justify text-white text-base font-semibold font-['Inter'] leading-normal">Message</div>
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
                    <div className="text-center text-gray-500 text-base font-semibold font-['Inter'] leading-normal">Details</div>
                    </div>
                    <div className="px-5 py-2 bg-fuchsia-900 rounded-xl justify-center items-center gap-1.5 flex">
                    <div className="w-6 h-6 relative" />
                    <div className="text-justify text-white text-base font-semibold font-['Inter'] leading-normal">Message</div>
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
                    <div className="text-center text-gray-500 text-base font-semibold font-['Inter'] leading-normal">Details</div>
                    </div>
                    <div className="px-5 py-2 bg-fuchsia-900 rounded-xl justify-center items-center gap-1.5 flex">
                    <div className="w-6 h-6 relative" />
                    <div className="text-justify text-white text-base font-semibold font-['Inter'] leading-normal">Message</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hired;