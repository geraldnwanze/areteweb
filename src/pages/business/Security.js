import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const Security = () => {
    const [twoStepAuth, setTwoStepAuth] = useState(false);

    return (
        <div className="h-full overflow-auto">
            <h4 className="text-[24px] font-[700]">Security</h4>
            <h4 className="text-[20px] mt-5 mb-5">Change Password</h4>
            <p className="text-[14px] text-[#475467]">If you suspect unauthorized Login you can also Turn on Two steps Authentication below for extra Layer of security</p>
            <div className="flex gap-5 mt-5">
                <div className="w-1/2 flex flex-col gap-2">
                    <label htmlFor="">Current Password</label>
                    <input type="password" name="" className="p-2 rounded-xl" placeholder="******" />
                </div>
                <div className="w-1/2 flex flex-col gap-2">
                    <label htmlFor="">New Password</label>
                    <input type="password" name="" className="p-2 rounded-xl" placeholder="******" />
                </div>
            </div>
            <div className="flex gap-5 mt-5">
                <div className="w-1/2 flex flex-col gap-2">
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="" className="p-2 rounded-xl" placeholder="******" />
                </div>
            </div>
            <h4 className="text-[20px] mt-5 mb-5">Two Steps Authentication</h4>
            <p className="text-[14px] text-[#475467]">Recieve a code in your Email when you want to Login to your Account</p>
            <div className="w-2/3 flex justify-between mt-5">
                <span className="text-[#1A1926]">Enable Two Steps Authentication</span>
                <div className=" flex items-center justify-center overflow-hidden">
                    <div className="flex">
                        <label class="inline-flex relative items-center mr-5 cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={twoStepAuth}
                                readOnly
                            />
                            <div
                                onClick={() => {
                                    setTwoStepAuth(!twoStepAuth);
                                }}
                                className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:[#690068]  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#690068]"
                            ></div>
                        </label>
                    </div>
                </div>
            </div>
            <button className="w-1/6 px-5 py-2 bg-[#690068] rounded-lg text-white flex items-center gap-5 mt-10"><FaCheck /> Save</button>
        </div>
    )
}

export default Security;