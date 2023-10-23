import { FaCamera, FaCheck } from "react-icons/fa";

const Profile = () => {
    return (
        <div className="h-full overflow-auto">
            <h4 className="text-[24px] font-[700]">Profile Settings</h4>
            <div className="flex flex-col mt-10 gap-5">
                <div className="flex flex-col gap-5 justify-center items-center mb-10">
                    <div className="w-48 h-48 rounded-full border border-dashed bg-gray-200 border-gray-700 flex items-center justify-center">
                        <div className="w-20 h-20 bg-gray-400 rounded-full flex justify-center items-center">
                            <FaCamera className="text-3xl" />
                        </div>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="">First Name</label>
                        <input type="text" className="rounded-lg p-2 w-full" placeholder="Michael" />
                    </div>
                    <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="">Last Name</label>
                        <input type="text" className="rounded-lg p-2 w-full" placeholder="Francis" />
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="">Phone Number</label>
                        <input type="text" className="rounded-lg p-2 w-full" placeholder="Michael" />
                    </div>
                    <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="">Email</label>
                        <input type="email" name="" className="rounded-lg p-2 w-full" placeholder="Mitchellcooper@gmail.com" />
                    </div>
                </div>
                <button className="w-1/6 px-5 py-2 bg-[#690068] rounded-lg text-white flex items-center gap-5"><FaCheck /> Save</button>
            </div>
        </div>
    )
}

export default Profile;