import logo from "../images/logo.png";
import dashboard from "../images/icons/dashboard.svg";
import chat from "../images/icons/chat.svg";
import wallet from "../images/icons/wallet.svg";
import users from "../images/icons/users.svg";
import jobs from "../images/icons/jobs.svg";
import company from "../images/icons/company.svg";
import setting from "../images/icons/setting.svg";

const LeftSideBar = () => {
    return (
        <div className="w-80 bg-[#FFFFFF] pl-10">
            <div className="w-full py-8">
                <img src={logo} alt=""/>
            </div>
            <h4 className="my-5 mt-0 text-[18px] text-[#1D2939] font-[500]">MENU</h4>
            <div className="w-4/5 flex flex-col">
                <a href="/" className="bg-[#690068] p-[17px] rounded-[16px] text-white flex gap-[16px]">
                    <img src={dashboard} alt="" />
                    Dashboard
                </a>
                <a href="/" className="p-[17px] rounded-[16px] flex gap-[16px]">
                    <img src={chat} alt="" />
                    Message
                </a>
                <a href="/" className="p-[17px] rounded-[16px] flex gap-[16px]">
                    <img src={wallet} alt="" />
                    Wallet
                </a>
            </div>
            <h4 className="my-5 text-[18px] text-[#1D2939] font-[500]">RECRUITMENT</h4>
            <div className="w-4/5 flex flex-col">
                <a href="/" className="p-[17px] rounded-[16px]  flex gap-[16px]">
                    <img src={jobs} alt="" />
                    Jobs
                </a>
                <a href="/" className="p-[17px] rounded-[16px] flex gap-[16px]">
                    <img src={users} alt="" />
                    Applicants
                </a>
            </div>
            <h4 className="my-5 text-[18px] text-[#1D2939] font-[500]">ORGANIZATION</h4>
            <div className="w-4/5 flex flex-col">
                <a href="/" className="p-[17px] rounded-[16px]  flex gap-[16px]">
                    <img src={company} alt="" />
                    Business Profile
                </a>
                <a href="/" className="p-[17px] rounded-[16px] flex gap-[16px]">
                    <img src={setting} alt="" />
                    Account Setting
                </a>
                <a href="/" className="p-[17px] rounded-[16px] flex gap-[16px]">
                    <img src={jobs} alt="" />
                    Get Help
                </a>
                <a href="/" className="p-[17px] rounded-[16px] flex gap-[16px]">
                    <img src={wallet} alt="" />
                    My Referrals
                </a>
            </div>
        </div>
    )
}

export default LeftSideBar;
