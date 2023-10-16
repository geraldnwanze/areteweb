import { Link, useLocation } from "react-router-dom";
import TopBar from "../../components/TopBar";

const Applicants = () => {
    const location = useLocation();
    const currentUrl = location.pathname;

    return (
        <div className="p-10 w-[80%]">
            <TopBar title='Applicants' description='Add and manage your Business Artisans and their details' />
            <div className="mt-10">
                <div className="flex gap-10">
                    <Link to='/applicants' className={`${currentUrl === '/applicants' && 'bg-[#690068] text-white'} px-5 py-1 rounded-lg text-[15px] font-[700]`}>ALL APPLICANTS</Link>
                    <Link to='/applicants/hired' className={`${currentUrl === '/applicants/hired' && 'bg-[#690068] text-white'} px-5 py-1 rounded-lg text-[15px] font-[700]`}>HIRED</Link>
                    <Link to='/applicants/archived' className={`${currentUrl === '/applicants/archived' && 'bg-[#690068] text-white'} px-5 py-1 rounded-lg text-[15px] font-[700]`}>ARCHIVED</Link>
                </div>
            </div>
        </div>
    )
}

export default Applicants;