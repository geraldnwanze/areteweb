import favicon from "../images/icons/favicon.svg";
import setting from "../images/icons/setting.svg";

const RightSideBar = () => {
    return (
        <div className="w-[25%] bg-[#FFFFFF]">
          <div className="h-20 flex border-b-2">
            <img src={setting} alt="" />
          </div>
          <div className="overflow-auto">
            <div className="flex flex-col pt-10 gap-3">
              <div className="rounded-full border-2 w-48 h-48 p-5 mx-auto">
                <img src={favicon} alt="" className="w-32 h-32 mx-auto" />
              </div>
              <h4 className="text-center text-[18px] font-[600]">Mitchell Cooper</h4>
              <button className="bg-[#E3E5E8] rounded-lg py-2 px-5 w-3/5 mx-auto">View Business Profile</button>
            </div>
            <div className="px-10 pt-5">
              <h4 className="text-[18px] font-[600] my-5">Recent Messages</h4>
              <div className="flex flex-col gap-5">
                <div className="bg-[#F2F4F7] w-full py-4 px-2 rounded-xl flex gap-3">
                  <img src={favicon} alt="" />
                  <div className="">
                    <h4 className="text-sm">Olivia Rhye</h4>
                    <p className="text-xs">When is the meeting we are having</p>
                  </div>
                </div>
                <div className="bg-[#F2F4F7] w-full py-4 px-2 rounded-xl flex gap-3">
                  <img src={favicon} alt="" />
                  <div className="">
                    <h4 className="text-sm">Bryan James</h4>
                    <p className="text-xs">When is the meeting we are having</p>
                  </div>
                </div>
              </div>

              <h4 className="text-[18px] font-[600] my-5">Recent Added Jobs</h4>
              <div className="flex flex-col gap-5">
                <div className="bg-[#F2F4F7] w-full py-4 px-4 rounded-xl">
                    <h4 className="text-sm font-[600] mb-2">Product Designer</h4>
                    <p className="text-xs">When is the meeting we are having</p>
                </div>
                <div className="bg-[#F2F4F7] w-full py-4 px-4 rounded-xl">
                    <h4 className="text-sm font-[600] mb-2">Front End Developer</h4>
                    <p className="text-xs">When is the meeting we are having</p>
                </div>
                <div className="bg-[#F2F4F7] w-full py-4 px-4 rounded-xl">
                    <h4 className="text-sm font-[600] mb-2">Copy Writer</h4>
                    <p className="text-xs">When is the meeting we are having</p>
                </div>
                <div className="bg-[#F2F4F7] w-full py-4 px-4 rounded-xl">
                    <h4 className="text-sm font-[600] mb-2">Logo Designer</h4>
                    <p className="text-xs">When is the meeting we are having</p>
                </div>
                <div className="bg-[#F2F4F7] w-full py-4 px-4 rounded-xl">
                    <h4 className="text-sm font-[600] mb-2">Product Designer</h4>
                    <p className="text-xs">When is the meeting we are having</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default RightSideBar;