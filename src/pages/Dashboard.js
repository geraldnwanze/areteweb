import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import statistics from "../images/statistics.svg";
import activityApplicants from "../images/activity-applicants.svg";

const Dashboard = () => {
    return (
        <div className="flex w-full">
            <LeftSideBar />
            <div className="w-[57%] p-8 h-screen overflow-auto">
                <div className="flex justify-between items-center py-5">
                    <div>
                        <h1 className="text-[25px] text-[#1D2939] font-[600] mb-5">Dashboard</h1>
                        <p className="font-[500] text-[#667085]">Welcome to your employer dashboard</p>
                    </div>
                    <div>
                        <button className="bg-[#690068] py-[8px] px-[20px] text-[18px] rounded font-[600] text-white flex gap-3 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 font-[900]">
                                <path fillRule="evenodd" d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z" clipRule="evenodd" />
                            </svg>
                            <span>Post Job</span>
                        </button>
                    </div>
                </div>

                <div className="flex gap-[3%] my-5">
                    <div className="bg-white rounded-xl px-8 py-5 flex gap-3 justify-center">
                        <div className="w-16 h-16 border-2 shadow rounded-full p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                                <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                                <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-[20px] mb-2">51</h4>
                            <p className="text-[14px] -mb-2 pb-0">Total Jobs</p>
                            <span className="text-[10px] text-[#667085] my-0 py-0">(All status included)</span>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl px-8 py-5 flex gap-3 justify-center">
                        <div className="w-16 h-16 border-2 shadow rounded-full p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                                <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                                <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-[20px] mb-2">51</h4>
                            <p className="text-[14px] -mb-2 pb-0">Total Jobs</p>
                            <span className="text-[10px] text-[#667085] my-0 py-0">(All status included)</span>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl px-8 py-5 flex gap-3 justify-center">
                        <div className="w-16 h-16 border-2 shadow rounded-full p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                                <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                                <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-[20px] mb-2">51</h4>
                            <p className="text-[14px] -mb-2 pb-0">Total Jobs</p>
                            <span className="text-[10px] text-[#667085] my-0 py-0">(All status included)</span>
                        </div>
                    </div>
                </div>
                <img src={statistics} alt="" className="my-5" />
                <img src={activityApplicants} alt="" />
            </div>
            <RightSideBar />
        </div>
    )
}

export default Dashboard;
