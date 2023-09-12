import photoshop from "../images/Photoshop.svg";
import logoAdp from "../images/logo-adp.svg";
import illustrator from "../images/Illustrator.svg";
import gmail from "../images/Gmail.svg";

const Category = () => {
    return (
        <div className="w-[1440px] h-[843px] relative bg-white">
  <div className="w-[676px] h-[196px] left-[-76px] top-[280px] absolute rounded-[50px] border border-gray-200" />
  <div className="w-[676px] h-[196px] left-[874px] top-[560px] absolute rounded-[50px] border border-gray-200" />
  <div className="left-[82px] top-[133px] absolute flex-col justify-start items-center gap-20 inline-flex">
    <div className="h-[140px] flex-col justify-start items-center gap-7 flex">
      <div className="text-slate-800 text-[45px] font-normal leading-[56px]">Browse Categories</div>
      <div className="self-stretch text-center text-gray-500 text-lg font-normal leading-7">Find your desired Job, based on this Categories that have been created according to popular client and company demands. Over 800+ new jobs available.</div>
    </div>
    <div className="w-[1276px] h-[355px] relative">
      <div className="w-[1208px] left-[34px] top-0 absolute justify-start items-start gap-[30px] inline-flex">
        <div className="w-[279.50px] h-[157px] relative bg-white rounded-[10px] shadow shadow-inner">
          <div className="left-[24px] top-[23px] absolute flex-col justify-start items-start gap-2 inline-flex">
          <img src={photoshop} alt="" />
            <div className="text-slate-600 text-base font-bold leading-normal">Graphic Designer</div>
            <div className="text-slate-600 text-sm font-medium leading-tight">28 Jobs</div>
          </div>
        </div>
        <div className="w-[279.50px] h-[157px] relative bg-white rounded-[10px] shadow shadow-inner">
          <div className="left-[24px] top-[23px] absolute flex-col justify-start items-start gap-2 inline-flex">
          <img src={photoshop} alt="" />
            <div className="text-slate-600 text-base font-bold leading-normal">Graphic Designer</div>
            <div className="text-slate-600 text-sm font-medium leading-tight">28 Jobs</div>
          </div>
        </div>
        <div className="w-[279.50px] h-[157px] relative bg-white rounded-[10px] shadow shadow-inner">
          <div className="left-[24px] top-[24px] absolute flex-col justify-start items-start gap-2 inline-flex">
          <img src={illustrator} alt="" />
            <div className="text-slate-600 text-base font-bold leading-normal">Brand Designer</div>
            <div className="text-slate-600 text-sm font-medium leading-tight">28 Jobs available</div>
          </div>
        </div>
        <div className="w-[279.50px] h-[157px] relative bg-white rounded-[10px] shadow shadow-inner">
          <div className="w-[155px] left-[24px] top-[22px] absolute flex-col justify-start items-start gap-2.5 inline-flex">
          <img src={gmail} alt="" />
            <div className="text-slate-600 text-base font-bold leading-normal">Frontend Developer</div>
            <div className="text-slate-600 text-sm font-medium leading-tight">15 Jobs</div>
          </div>
        </div>
      </div>
      <div className="w-[1208px] left-[34px] top-[186px] absolute justify-start items-start gap-[30px] inline-flex">
        <div className="w-[279.50px] h-[157px] relative bg-white rounded-[10px] shadow shadow-inner">
          <div className="left-[24px] top-[23px] absolute flex-col justify-start items-start gap-2 inline-flex">
          <img src={photoshop} alt="" />
            <div className="text-slate-600 text-base font-bold leading-normal">Graphic Designer</div>
            <div className="text-slate-600 text-sm font-medium leading-tight">28 Jobs</div>
          </div>
        </div>
        <div className="w-[279.50px] h-[157px] relative bg-white rounded-[10px] shadow shadow-inner">
          <div className="w-[117px] left-[24px] top-[24px] absolute flex-col justify-between items-start gap-2 inline-flex">
          <img src={logoAdp} alt="" />
            <div className="text-slate-600 text-base font-bold leading-normal">HR Manager</div>
            <div className="text-slate-600 text-sm font-medium leading-tight">28 Jobs available</div>
          </div>
        </div>
        <div className="w-[279.50px] h-[157px] relative bg-white rounded-[10px] shadow shadow-inner">
          <div className="w-[117px] left-[24px] top-[24px] absolute flex-col justify-between items-start gap-2 inline-flex">
          <img src={logoAdp} alt="" />
            <div className="text-slate-600 text-base font-bold leading-normal">HR Manager</div>
            <div className="text-slate-600 text-sm font-medium leading-tight">28 Jobs available</div>
          </div>
        </div>
        <div className="w-[279.50px] h-[157px] relative bg-white rounded-[10px] shadow shadow-inner">
          <div className="w-[155px] left-[24px] top-[22px] absolute flex-col justify-start items-start gap-2.5 inline-flex">
          <img src={gmail} alt="" />
            <div className="text-slate-600 text-base font-bold leading-normal">Frontend Developer</div>
            <div className="text-slate-600 text-sm font-medium leading-tight">15 Jobs</div>
          </div>
        </div>
      </div>
      <div className="w-[60px] h-[60px] p-2.5 left-[1216px] top-[146px] absolute bg-slate-50 rounded-[100px] flex-col justify-center items-center gap-2.5 inline-flex">
        <div className="w-2 h-4 relative origin-top-left rotate-180" />
      </div>
      <div className="w-[60px] h-[60px] p-2.5 left-0 top-[146px] absolute bg-slate-50 rounded-[100px] flex-col justify-center items-center gap-2.5 inline-flex">
        <div className="w-2 h-4 relative" />
      </div>
    </div>
  </div>
</div>
    );
}

export default Category;