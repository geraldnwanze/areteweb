import { useState } from "react";

const Notification = () => {
    const [pushNotification, setPushNotification] = useState(false);
    const [emailNotification, setEmailNotification] = useState(false);

    return (
        <div className="h-full overflow-auto">
            <h4 className="text-[24px] font-[700]">Notification</h4>
            <h4 className="text-[20px] mt-5 mb-5">Push Notification</h4>
            <p className="text-[14px] text-[#475467]">Choose your Notification option to get notified when you are not logged in on Arete</p>
            <div className="w-2/3 flex justify-between mt-5">
                <span className="text-[#1A1926]">Enable Push Notification</span>
                <div className=" flex items-center justify-center overflow-hidden">
                    <div className="flex">
                        <label class="inline-flex relative items-center mr-5 cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={pushNotification}
                                readOnly
                            />
                            <div
                                onClick={() => {
                                    setPushNotification(!pushNotification);
                                }}
                                className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:[#690068]  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#690068]"
                            ></div>
                        </label>
                    </div>
                </div>
            </div>
            <div className="w-2/3 flex justify-between mt-5">
                <span className="text-[#1A1926]">Email Notification</span>
                <div className=" flex items-center justify-center overflow-hidden">
                    <div className="flex">
                        <label class="inline-flex relative items-center mr-5 cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={emailNotification}
                                readOnly
                            />
                            <div
                                onClick={() => {
                                    setEmailNotification(!emailNotification);
                                }}
                                className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:[#690068]  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#690068]"
                            ></div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notification;