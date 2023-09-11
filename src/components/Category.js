import photoshop from "../images/Photoshop.svg";
import logoAdp from "../images/logo-adp.svg";
import illustrator from "../images/Illustrator.svg";
import gmail from "../images/Gmail.svg";

const Category = () => {
    return (
        <section className="mt-32">
            <div className="text-center">
                <h1 className="text-[45px] text-[#1D2939] font-bold">Browse Categories</h1>
                <p className="text-[18px] text-[#667085]">Find your desired Job, based on this Categories that have been created according to popular <br /> client and company demands. Over 800+ new jobs available.</p>
            </div>
            <div className="mt-32 flex px-32 justify-between">
                <div className="flex flex-col gap-10">
                    <div className="shadow-2xl rounded-lg p-5 w-[279px] h-[157px]">
                        <img src={photoshop} alt="" className="h-16" />
                        <h1>Graphic Designer</h1>
                        <p>28 Jobs</p>
                    </div>
                    <div className="shadow-2xl rounded-lg p-5 w-[279px] h-[157px]">
                        <img src={photoshop} alt="" className="h-16" />
                        <h1>Graphic Designer</h1>
                        <p>28 Jobs</p>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <div className="shadow-2xl rounded-lg p-5 w-[279px] h-[157px]">
                        <img src={photoshop} alt="" className="h-16" />
                        <h1>Graphic Designer</h1>
                        <p>28 Jobs</p>
                    </div>
                    <div className="shadow-2xl rounded-lg p-5 w-[279px] h-[157px]">
                        <img src={logoAdp} alt="" className="h-12 mb-5" />
                        <h1>HR Manager</h1>
                        <p>28 Jobs available</p>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <div className="shadow-2xl rounded-lg p-5 w-[279px] h-[157px]">
                        <img src={illustrator} alt="" className="h-16" />
                        <h1>Brand Designer</h1>
                        <p>28 Jobs available</p>
                    </div>
                    <div className="shadow-2xl rounded-lg p-5 w-[279px] h-[157px]">
                        <img src={logoAdp} alt="" className="h-12 mb-5" />
                        <h1>HR Manager</h1>
                        <p>28 Jobs available</p>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <div className="shadow-2xl rounded-lg p-5 w-[279px] h-[157px]">
                        <img src={gmail} alt="" className="h-16" />
                        <h1>Frontend Developer</h1>
                        <p>28 Jobs</p>
                    </div>
                    <div className="shadow-2xl rounded-lg p-5 w-[279px] h-[157px]">
                        <img src={gmail} alt="" className="h-16" />
                        <h1>Frontend Developer</h1>
                        <p>28 Jobs</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Category;