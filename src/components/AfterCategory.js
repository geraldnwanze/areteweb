import map from "../images/Map.svg";
import china from "../images/china.svg";
import flag from "../images/flag.svg";
import uk from "../images/uk.svg";
import flag2 from "../images/flag-2.svg";
import pakistan from "../images/pakistan.svg";
import flag3 from "../images/flag-3.svg";
import flag1 from "../images/flag-1.svg";
import usa from "../images/usa.svg";

const AfterCategory = () => {
    return (
      <div className="w-[1440px] h-[821.25px] relative">
        <div className="w-[1440px] h-[821.25px] left-0 top-0 absolute bg-gradient-to-t from-white to-white backdrop-blur-[30px]" />
        <div className="w-[1200px] h-[476.24px] left-[119.99px] top-[255px] absolute">
          <img src={map} alt="" />
        </div>
        <div className="w-[947.25px] h-[330px] left-[263.25px] top-[294.75px] absolute">
          <div className="w-[68.25px] h-[68.25px] left-0 top-[84px] absolute">
            <div className="w-[68.25px] h-[68.25px] left-0 top-0 absolute bg-white rounded-full shadow" />
            <img className="w-[51px] h-[51px] left-[9px] top-[8.25px] absolute rounded-full" src={china} alt="" />
          </div>
          <div className="w-[68.25px] h-[68.25px] left-[183px] top-[214.50px] absolute">
            <div className="w-[68.25px] h-[68.25px] left-0 top-0 absolute bg-white rounded-full shadow" />
            <img className="w-[51px] h-[51px] left-[9px] top-[8.25px] absolute rounded-full" src={flag} alt="" />
          </div>
          <div className="w-[68.25px] h-[68.25px] left-[442.50px] top-[69.75px] absolute">
            <div className="w-[68.25px] h-[68.25px] left-0 top-0 absolute bg-white rounded-full shadow" />
            <img className="w-[51px] h-[51px] left-[9px] top-[8.25px] absolute rounded-full" src={uk} alt="" />
          </div>
          <div className="w-[68.25px] h-[68.25px] left-[703.50px] top-[108px] absolute">
            <div className="w-[68.25px] h-[68.25px] left-0 top-0 absolute bg-white rounded-full shadow" />
            <img className="w-[51px] h-[51px] left-[9px] top-[8.25px] absolute rounded-full" src={flag2} alt="" />
          </div>
          <div className="w-[68.25px] h-[68.25px] left-[870px] top-[57px] absolute">
            <div className="w-[68.25px] h-[68.25px] left-0 top-0 absolute bg-white rounded-full shadow" />
            <img className="w-[51px] h-[51px] left-[9px] top-[8.25px] absolute rounded-full" src={pakistan} alt="" />
          </div>
          <div className="w-[68.25px] h-[68.25px] left-[879px] top-[261.75px] absolute">
            <div className="w-[68.25px] h-[68.25px] left-0 top-0 absolute bg-white rounded-full shadow" />
            <img className="w-[51px] h-[51px] left-[9px] top-[8.25px] absolute rounded-full" src={flag3} alt="" />
          </div>
          <div className="w-[68.25px] h-[68.25px] left-[528.75px] top-[228.75px] absolute">
            <div className="w-[68.25px] h-[68.25px] left-0 top-0 absolute bg-white rounded-full shadow" />
            <img className="w-[51px] h-[51px] left-[9px] top-[8.25px] absolute rounded-full" src={flag1} alt="" />
          </div>
          <div className="w-[68.25px] h-[68.25px] left-[271.50px] top-0 absolute">
            <div className="w-[68.25px] h-[68.25px] left-0 top-0 absolute bg-white rounded-full shadow" />
            <img className="w-[51px] h-[51px] left-[9px] top-[8.25px] absolute rounded-full" src={usa} alt="" />
          </div>
        </div>
        <div className="w-[882px] left-[279px] top-[90px] absolute text-center text-slate-700 text-[32px] font-semibold leading-10">Get Jobs from any part of the world by  simply signin up and posting your resume</div>
      </div>
    );
}

export default AfterCategory;