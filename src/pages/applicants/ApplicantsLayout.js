import { Link, Outlet, useLocation } from "react-router-dom";
import TopBar from "../../components/TopBar";
import ukFlag from "../../images/uk-flag.svg";

const ApplicantsLayout = () => {
    const location = useLocation();
    const currentUrl = location.pathname;

    return (
        <div className="p-10 pb-0 w-[80%]">
            <TopBar title='Applicants' description='Add and manage your Business Artisans and their details' />
            <div className="mt-10">
                <div className="flex gap-10 my-10">
                    <Link to='/applicants' className={`${currentUrl === '/applicants' && 'bg-[#690068] text-white'} px-5 py-1 rounded-lg text-[15px] font-[700]`}>ALL APPLICANTS</Link>
                    <Link to='/applicants/hired' className={`${currentUrl === '/applicants/hired' && 'bg-[#690068] text-white'} px-5 py-1 rounded-lg text-[15px] font-[700]`}>HIRED</Link>
                    <Link to='/applicants/archived' className={`${currentUrl === '/applicants/archived' && 'bg-[#690068] text-white'} px-5 py-1 rounded-lg text-[15px] font-[700]`}>ARCHIVED</Link>
                </div>
                <div className="flex justify-between my-10">
                    <div className="w-[30%]">
                        <input type="text" name="" className="w-full px-10 py-2 rounded-xl focus:outline-0" placeholder="Search Jobs" />
                    </div>
                    <div className="flex gap-5 w-[30%]">
                        <select name="" className="w-[30%] px-5 py-2 shadow-sm rounded-xl">
                            <option value="">sort</option>
                        </select>
                        <select name="" className="w-[70%] px-5 py-2 shadow-sm rounded-xl">
                            <option value="">Filter By</option>
                        </select>
                    </div>
                </div>

                <div className="flex flex-col w-full gap-5 h-[60vh] overflow-auto">
                    <Outlet context={[ukFlag]} />
                </div>
            </div>
        </div>
    )
}

export default ApplicantsLayout;