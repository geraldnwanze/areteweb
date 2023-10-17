import TopBar from "../../components/TopBar";
import group from "../../images/group.svg";

const Referrals = () => {
    return (
        <div className="p-10 pb-0 w-[80%]">
            <TopBar title='Referrals' description='View al your referrals and and your referral points' />

            <div className="w-1/2 mx-auto flex flex-col gap-5 justify-center">
                <img src={group} alt="" className="" />
                <div className="text-center">
                    <h4 className="text-[25px] font-[700] text-[#1D2939]">Refer a Friend</h4>
                    <p className="font-[500] text-[#667085]">Refer Friends to earn Referral points that can be redeem to pay utility bills and buy Airtime. Copy and share the link below to ge friends to sign up.</p>
                </div>
                <div className="w-full h-14 px-3.5 bg-gray-50 rounded-2xl border border-gray-300 justify-between items-center inline-flex">
                    <div className="h-12 py-3.5 justify-start items-center gap-2 flex">
                        <div className="h-5 justify-start items-start gap-2 flex">
                        <div className="w-96 text-gray-500 text-sm font-normal font-['Inter'] leading-tight">www. Arete.com/mitchellcooper/skdvm’msv=sdvplslvsv/KMCKLO</div>
                        </div>
                    </div>
                    <div className="px-5 py-1.5 bg-fuchsia-900 rounded-md justify-center items-center gap-2 flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                        </svg>

                        <div className="text-center text-white text-lg font-semibold font-['Inter'] leading-7">Copy</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Referrals;