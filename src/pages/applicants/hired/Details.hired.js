import { FaDotCircle, FaUserCircle } from "react-icons/fa";
import TopBar from "../../../components/TopBar";
import TopRightMenu from "../../../components/TopRightMenu";

const Details = () => {
    return (
        <div className="w-[80%]">
            <div className="w-full bg-white p-10 px-5 pb-5">
                <div className="flex justify-between border-b-2 pb-5">
                    <div className="flex flex-col gap-5">
                        <h4 className="text-[24px] font-[700]">Product Designer for designing B2B & B2C Products for JVzoo</h4>
                        <p className="flex items-center gap-5 text-[#667085]">
                            <span>Posted 15 May 2020</span>
                            <FaDotCircle />
                            <span>2  roles</span>
                            <FaDotCircle />
                            <span>Full Time</span>
                        </p>
                    </div>
                    <TopRightMenu />
                </div>
                <div className="flex items-center justify-between pt-2 px-10">
                    <div className="flex items-center gap-10 font-[600] text-[#667085]">
                        <button>Job Details</button>
                        <button>Featured Files and Images</button>
                        <button>Milestone</button>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaUserCircle className="text-5xl" />
                        <div className="flex flex-col">
                            <span className="font-[700]">Mitchell Cooper</span>
                            <span className="text-[12px]">UI IX Designer</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-10 flex gap-10">
                <div className="bg-white p-5 w-[70%]"></div>
                <div className="w-[30%] p-5 bg-blue-800 rounded-lg">
                    <h4 className="text-white mb-3 font-[700]">Duration</h4>
                    <button className="p-3 bg-white rounded-xl w-full mb-10">3 Months</button>
                    <h4 className="text-white mb-3 font-[700]">Salary Range</h4>
                    <button className="p-3 bg-white rounded-xl w-full">$8000 - $15000 <span>weekly</span></button>
                </div>
            </div>
        </div>
    )
}

export default Details;