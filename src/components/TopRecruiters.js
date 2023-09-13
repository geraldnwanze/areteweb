import facebook from "../images/facebook.svg";
import mozilla from "../images/mozilla.svg"
import instagram from "../images/instagram.svg";
import star from "../images/star.svg";
import halfStar from "../images/half-star.svg";
import location from "../images/location.svg";

const TopRecruiters = () => {
    return (
      <div className="w-[1440px] h-[1368px] relative bg-white">
      <div className="left-[112px] top-[178px] absolute flex-col justify-start items-center gap-20 inline-flex">
        <div className="h-[140px] flex-col justify-start items-center gap-7 flex">
          <div><span className="text-slate-800 text-[45px] font-normal font-['Gilroy-Black'] leading-[56px]">Top</span><span className="text-fuchsia-900 text-[45px] font-normal font-['Gilroy-Black'] leading-[56px]"> Recruiters</span></div>
          <div className="self-stretch text-center text-gray-500 text-lg font-normal font-['Inter'] leading-7">Discover your next career move, freelance gig, or internship from your dream recruiters and businesses all over the World.</div>
        </div>
        <div className="flex-col justify-start items-start gap-10 flex">
          <div className="w-[1208px] justify-start items-start gap-[30px] inline-flex">
            <div className="grow shrink basis-0 p-[30px] bg-white rounded-[14px] shadow shadow-inner flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="flex-col justify-start items-start gap-7 flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="w-[60px] h-[60px] relative">
                    <img src={facebook} alt="" />
                  </div>
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="text-slate-600 text-[17px] font-bold font-['Inter'] leading-7">Facebook Inc.</div>
                  </div>
                </div>
                <div className="justify-start items-center gap-[15px] inline-flex">
                  <div className="justify-start items-start gap-[8.15px] flex">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={halfStar} alt="" className="-mt-[2px]" />
                  </div>
                  <div className="text-slate-600 text-sm font-normal font-['Inter'] leading-tight">(23)</div>
                </div>
                <div className="w-[228px] justify-between items-start inline-flex">
                  <div className="justify-start items-start gap-2 flex">
                    <img src={location} alt="" />
                    <div className="text-slate-600 text-sm font-medium font-['Inter'] leading-tight">USA</div>
                  </div>
                  <div className="text-slate-600 text-sm font-normal font-['Inter'] leading-tight">1 Opening Job</div>
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 p-[30px] bg-white rounded-[14px] shadow shadow-inner flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="flex-col justify-start items-start gap-7 flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="w-[60px] h-[60px] relative">
                    <img src={facebook} alt="" />
                  </div>
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="text-slate-600 text-[17px] font-bold font-['Inter'] leading-7">Facebook Inc.</div>
                  </div>
                </div>
                <div className="justify-start items-center gap-[15px] inline-flex">
                  <div className="justify-start items-start gap-[8.15px] flex">
                  <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={halfStar} alt="" className="-mt-[2px]" />
                  </div>
                  <div className="text-slate-600 text-sm font-normal font-['Inter'] leading-tight">(23)</div>
                </div>
                <div className="w-[228px] justify-between items-start inline-flex">
                  <div className="justify-start items-start gap-2 flex">
                    <img src={location} alt="" />
                    <div className="text-slate-600 text-sm font-medium font-['Inter'] leading-tight">USA</div>
                  </div>
                  <div className="text-slate-600 text-sm font-normal font-['Inter'] leading-tight">1 Opening Job</div>
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 p-[30px] bg-white rounded-[14px] shadow shadow-inner flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="flex-col justify-start items-start gap-7 flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <img src={mozilla} alt="" />
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="text-slate-600 text-lg font-bold font-['Inter'] leading-7">Mozila FireFox</div>
                  </div>
                </div>
                <div className="justify-start items-center gap-[15px] inline-flex">
                  <div className="justify-start items-start gap-[8.15px] flex">
                  <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={halfStar} alt="" className="-mt-[2px]" />
                  </div>
                  <div className="text-slate-600 text-sm font-normal font-['Inter'] leading-tight">(23)</div>
                </div>
                <div className="w-[228px] justify-between items-start inline-flex">
                  <div className="justify-start items-start gap-2 flex">
                    <img src={location} alt="" />
                    <div className="text-slate-600 text-sm font-medium font-['Inter'] leading-tight">USA</div>
                  </div>
                  <div className="text-slate-600 text-sm font-normal font-['Inter'] leading-tight">1 Opening Job</div>
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 p-[30px] bg-white rounded-[14px] shadow shadow-inner flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="flex-col justify-start items-start gap-7 flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <img src={instagram} alt="" />
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="text-slate-600 text-lg font-bold font-['Inter'] leading-7">Instagram</div>
                  </div>
                </div>
                <div className="justify-start items-center gap-[15px] inline-flex">
                  <div className="justify-start items-start gap-[8.15px] flex">
                  <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={halfStar} alt="" className="-mt-[2px]" />
                  </div>
                  <div className="text-slate-600 text-sm font-normal font-['Inter'] leading-tight">(23)</div>
                </div>
                <div className="w-[228px] justify-between items-start inline-flex">
                  <div className="justify-start items-start gap-2 flex">
                    <img src={location} alt="" />
                    <div className="text-slate-600 text-sm font-medium font-['Inter'] leading-tight">USA</div>
                  </div>
                  <div className="text-slate-600 text-sm font-normal font-['Inter'] leading-tight">1 Opening Job</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1208px] justify-start items-start gap-[30px] inline-flex">
            <div className="grow shrink basis-0 p-[30px] bg-white rounded-[14px] shadow shadow-inner flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="flex-col justify-start items-start gap-7 flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="w-[60px] h-[60px] relative">
                    <img src={facebook} alt="" />
                  </div>
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="text-slate-600 text-[17px] font-bold font-['Inter'] leading-7">Facebook Inc.</div>
                  </div>
                </div>
                <div className="justify-start items-center gap-[15px] inline-flex">
                  <div className="justify-start items-start gap-[8.15px] flex">
                  <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={halfStar} alt="" className="-mt-[2px]" />
                  </div>
                  <div className="text-slate-600 text-sm font-normal font-['Inter'] leading-tight">(23)</div>
                </div>
                <div className="w-[228px] justify-between items-start inline-flex">
                  <div className="justify-start items-start gap-2 flex">
                    <img src={location} alt="" />
                    <div className="text-slate-600 text-sm font-medium font-['Inter'] leading-tight">USA</div>
                  </div>
                  <div className="text-slate-600 text-sm font-normal font-['Inter'] leading-tight">1 Opening Job</div>
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 p-[30px] bg-white rounded-[14px] shadow shadow-inner flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="flex-col justify-start items-start gap-7 flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="w-[60px] h-[60px] relative">
                    <img src={facebook} alt="" />
                  </div>
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="text-slate-600 text-[17px] font-bold font-['Inter'] leading-7">Facebook Inc.</div>
                  </div>
                </div>
                <div className="justify-start items-center gap-[15px] inline-flex">
                  <div className="justify-start items-start gap-[8.15px] flex">
                  <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={halfStar} alt="" className="-mt-[2px]" />
                  </div>
                  <div className="text-slate-600 text-sm font-normal font-['Inter'] leading-tight">(23)</div>
                </div>
                <div className="w-[228px] justify-between items-start inline-flex">
                  <div className="justify-start items-start gap-2 flex">
                    <img src={location} alt="" />
                    <div className="text-slate-600 text-sm font-medium font-['Inter'] leading-tight">USA</div>
                  </div>
                  <div className="text-slate-600 text-sm font-normal font-['Inter'] leading-tight">1 Opening Job</div>
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 p-[30px] bg-white rounded-[14px] shadow shadow-inner flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="flex-col justify-start items-start gap-7 flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <img src={mozilla} alt="" />
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="text-slate-600 text-lg font-bold font-['Inter'] leading-7">Mozila FireFox</div>
                  </div>
                </div>
                <div className="justify-start items-center gap-[15px] inline-flex">
                  <div className="justify-start items-start gap-[8.15px] flex">
                  <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={halfStar} alt="" className="-mt-[2px]" />
                  </div>
                  <div className="text-slate-600 text-sm font-normal font-['Inter'] leading-tight">(23)</div>
                </div>
                <div className="w-[228px] justify-between items-start inline-flex">
                  <div className="justify-start items-start gap-2 flex">
                    <img src={location} alt="" />
                    <div className="text-slate-600 text-sm font-medium font-['Inter'] leading-tight">USA</div>
                  </div>
                  <div className="text-slate-600 text-sm font-normal font-['Inter'] leading-tight">1 Opening Job</div>
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 p-[30px] bg-white rounded-[14px] shadow shadow-inner flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="flex-col justify-start items-start gap-7 flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <img src={instagram} alt="" />
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="text-slate-600 text-lg font-bold font-['Inter'] leading-7">Instagram</div>
                  </div>
                </div>
                <div className="justify-start items-center gap-[15px] inline-flex">
                  <div className="justify-start items-start gap-[8.15px] flex">
                  <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={halfStar} alt="" className="-mt-[2px]" />
                  </div>
                  <div className="text-slate-600 text-sm font-normal font-['Inter'] leading-tight">(23)</div>
                </div>
                <div className="w-[228px] justify-between items-start inline-flex">
                  <div className="justify-start items-start gap-2 flex">
                    <img src={location} alt="" />
                    <div className="text-slate-600 text-sm font-medium font-['Inter'] leading-tight">USA</div>
                  </div>
                  <div className="text-slate-600 text-sm font-normal font-['Inter'] leading-tight">1 Opening Job</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1208px] justify-start items-start gap-[30px] inline-flex">
            <div className="grow shrink basis-0 p-[30px] bg-white rounded-[14px] shadow shadow-inner flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="flex-col justify-start items-start gap-7 flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="w-[60px] h-[60px] relative">
                    <img src={facebook} alt="" />
                  </div>
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="text-slate-600 text-[17px] font-bold font-['Inter'] leading-7">Facebook Inc.</div>
                  </div>
                </div>
                <div className="justify-start items-center gap-[15px] inline-flex">
                  <div className="justify-start items-start gap-[8.15px] flex">
                  <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={halfStar} alt="" className="-mt-[2px]" />
                  </div>
                  <div className="text-slate-600 text-sm font-normal font-['Inter'] leading-tight">(23)</div>
                </div>
                <div className="w-[228px] justify-between items-start inline-flex">
                  <div className="justify-start items-start gap-2 flex">
                    <img src={location} alt="" />
                    <div className="text-slate-600 text-sm font-medium font-['Inter'] leading-tight">USA</div>
                  </div>
                  <div className="text-slate-600 text-sm font-normal font-['Inter'] leading-tight">1 Opening Job</div>
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 p-[30px] bg-white rounded-[14px] shadow shadow-inner flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="flex-col justify-start items-start gap-7 flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="w-[60px] h-[60px] relative">
                    <img src={facebook} alt="" />
                  </div>
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="text-slate-600 text-[17px] font-bold font-['Inter'] leading-7">Facebook Inc.</div>
                  </div>
                </div>
                <div className="justify-start items-center gap-[15px] inline-flex">
                  <div className="justify-start items-start gap-[8.15px] flex">
                  <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={halfStar} alt="" className="-mt-[2px]" />
                  </div>
                  <div className="text-slate-600 text-sm font-normal font-['Inter'] leading-tight">(23)</div>
                </div>
                <div className="w-[228px] justify-between items-start inline-flex">
                  <div className="justify-start items-start gap-2 flex">
                    <img src={location} alt="" />
                    <div className="text-slate-600 text-sm font-medium font-['Inter'] leading-tight">USA</div>
                  </div>
                  <div className="text-slate-600 text-sm font-normal font-['Inter'] leading-tight">1 Opening Job</div>
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 p-[30px] bg-white rounded-[14px] shadow shadow-inner flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="flex-col justify-start items-start gap-7 flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <img src={mozilla} alt="" />
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="text-slate-600 text-lg font-bold font-['Inter'] leading-7">Mozila FireFox</div>
                  </div>
                </div>
                <div className="justify-start items-center gap-[15px] inline-flex">
                  <div className="justify-start items-start gap-[8.15px] flex">
                  <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={halfStar} alt="" className="-mt-[2px]" />
                  </div>
                  <div className="text-slate-600 text-sm font-normal font-['Inter'] leading-tight">(23)</div>
                </div>
                <div className="w-[228px] justify-between items-start inline-flex">
                  <div className="justify-start items-start gap-2 flex">
                    <img src={location} alt="" />
                    <div className="text-slate-600 text-sm font-medium font-['Inter'] leading-tight">USA</div>
                  </div>
                  <div className="text-slate-600 text-sm font-normal font-['Inter'] leading-tight">1 Opening Job</div>
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 p-[30px] bg-white rounded-[14px] shadow shadow-inner flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="flex-col justify-start items-start gap-7 flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <img src={instagram} alt="" />
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="text-slate-600 text-lg font-bold font-['Inter'] leading-7">Instagram</div>
                  </div>
                </div>
                <div className="justify-start items-center gap-[15px] inline-flex">
                  <div className="justify-start items-start gap-[8.15px] flex">
                  <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={halfStar} alt="" className="-mt-[2px]" />
                  </div>
                  <div className="text-slate-600 text-sm font-normal font-['Inter'] leading-tight">(23)</div>
                </div>
                <div className="w-[228px] justify-between items-start inline-flex">
                  <div className="justify-start items-start gap-2 flex">
                    <img src={location} alt="" />
                    <div className="text-slate-600 text-sm font-medium font-['Inter'] leading-tight">USA</div>
                  </div>
                  <div className="text-slate-600 text-sm font-normal font-['Inter'] leading-tight">1 Opening Job</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1440px] h-20 left-0 top-[-2.25px] absolute bg-gray-900">
        <div className="left-[112px] top-[24px] absolute text-white text-xl font-semibold font-['Inter'] leading-7">Enroll as a Business on Arete to get professional Artisians to work as your business artisians</div>
        <div className="left-[1114px] top-[20.25px] absolute justify-end items-center gap-4 inline-flex">
          <div className="px-6 py-2 rounded-xl border border-gray-300 justify-center items-center gap-1.5 flex">
            <div className="text-center text-gray-100 text-base font-semibold font-['Inter'] leading-normal">Details</div>
          </div>
          <div className="w-[92px] px-6 py-2 bg-fuchsia-900 rounded-xl justify-center items-center gap-1.5 flex">
            <div className="text-justify text-white text-base font-semibold font-['Inter'] leading-normal">Enroll</div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default TopRecruiters;