import { FaCamera, FaCheck } from "react-icons/fa";

const Business = () => {
    return (
        <div className="h-full overflow-auto">
            <h4 className="text-[24px] font-[700]">Business</h4>
            <div className="flex flex-col mt-10 gap-5">
                <div className="flex flex-col gap-5 justify-center items-center mb-10">
                    <div className="w-48 h-48 rounded-full border border-dashed bg-gray-200 border-gray-700 flex items-center justify-center">
                        <div className="w-20 h-20 bg-gray-400 rounded-full flex justify-center items-center">
                            <FaCamera className="text-3xl" />
                        </div>
                    </div>
                    <h4 className="text-[24px] font-[700]">Logo</h4>
                </div>
                <div className="flex gap-5">
                    <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="">Business Name</label>
                        <input type="text" className="rounded-lg p-2 w-full" placeholder="Michael" />
                    </div>
                    <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="">Business Category</label>
                        <select type="text" className="rounded-lg p-2 w-full" >
                            <option value="">Affiliate Marketing</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="">Business Description</label>
                    <textarea name="" className="w-full rounded-lg p-2" rows="5" placeholder="+123456789"></textarea>
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
                <div className="flex gap-5">
                    <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="">Latitude</label>
                        <input type="text" className="rounded-lg p-2 w-full"  />
                    </div>
                    <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="">Longitude</label>
                        <input type="text" name="" className="rounded-lg p-2 w-full"  />
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="">Website</label>
                        <input type="url" className="rounded-lg p-2 w-full" placeholder="www.mitchellcooper.ng/org" />
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="">Facebook</label>
                        <input type="text" className="rounded-lg p-2 w-full" placeholder="Add facebook profile link" />
                    </div>
                    <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="">Instagram</label>
                        <input type="text" name="" className="rounded-lg p-2 w-full" placeholder="Add instagram profile link" />
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="">Linkedin</label>
                        <input type="text" className="rounded-lg p-2 w-full" placeholder="Add linkedin profile link" />
                    </div>
                    <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="">Twitter</label>
                        <input type="text" name="" className="rounded-lg p-2 w-full" placeholder="Add twitter profile link" />
                    </div>
                </div>
                <button className="w-1/6 px-5 py-2 bg-[#690068] rounded-lg text-white flex items-center gap-5"><FaCheck /> Save</button>
            </div>
        </div>
    )
}

export default Business;