import logo from "../images/logo.png";
import dashboard from "../images/icons/dashboard.svg";
import chat from "../images/icons/chat.svg";
import wallet from "../images/icons/wallet.svg";
import users from "../images/icons/users.svg";
import jobs from "../images/icons/jobs.svg";
import company from "../images/icons/company.svg";
import setting from "../images/icons/setting.svg";
import { Link, useLocation } from "react-router-dom";

const LeftSideBar = () => {
    const location = useLocation();
    const currentUrl = location.pathname;

    return (
        <div className="w-[20%] bg-[#FFFFFF] pl-10 h-screen">
            <div className="w-full py-8">
                <img src={logo} alt=""/>
            </div>
            <h4 className="my-5 mt-0 text-[18px] text-[#1D2939] font-[500]">MENU</h4>
            <div className="w-4/5 flex flex-col">
                <Link to='/' className={`p-[17px] rounded-[16px] flex gap-[16px] ${currentUrl === '/' ? 'bg-[#690068] text-white' : ''}`}>
                    <img src={dashboard} alt="" />
                    Dashboard
                </Link>
                <Link to='/messages' className={`p-[17px] rounded-[16px] flex gap-[16px] ${currentUrl === '/messages' ? 'bg-[#690068] text-white' : ''}`}>
                    <img src={chat} alt="" />
                    Messages
                </Link>
                <Link to='' className="p-[17px] rounded-[16px] flex gap-[16px]">
                    <img src={wallet} alt="" />
                    Wallet
                </Link>
            </div>
            <h4 className="my-5 text-[18px] text-[#1D2939] font-[500]">RECRUITMENT</h4>
            <div className="w-4/5 flex flex-col">
                <Link to='' className="p-[17px] rounded-[16px]  flex gap-[16px]">
                    <img src={jobs} alt="" />
                    Jobs
                </Link>
                <Link to='' className="p-[17px] rounded-[16px] flex gap-[16px]">
                    <img src={users} alt="" />
                    Applicants
                </Link>
            </div>
            <h4 className="my-5 text-[18px] text-[#1D2939] font-[500]">ORGANIZATION</h4>
            <div className="w-4/5 flex flex-col">
                <Link to='' className="p-[17px] rounded-[16px]  flex gap-[16px]">
                    <img src={company} alt="" />
                    Business Profile
                </Link>
                <Link to='' className="p-[17px] rounded-[16px] flex gap-[16px]">
                    <img src={setting} alt="" />
                    Account Setting
                </Link>
                <Link to='' className="p-[17px] rounded-[16px] flex gap-[16px]">
                    <img src={jobs} alt="" />
                    Get Help
                </Link>
                <Link to='' className="p-[17px] rounded-[16px] flex gap-[16px]">
                    <img src={wallet} alt="" />
                    My Referrals
                </Link>
            </div>
        </div>
    )
}

export default LeftSideBar;
