import TopBar from "../../components/TopBar";

const Notifications = () => {
    return (
        <div className="w-[80%] p-10">
            <TopBar title='Notifications' />
            <div className="flex justify-between">
                <span>Recents</span>
                <button>Clear all</button>
            </div>
            <div className="w-full flex flex-col gap-10 py-10">
                <div className="w-full h-20 rounded-3xl flex-col justify-start items-start gap-5 inline-flex">
                    <div className="self-stretch justify-start items-start gap-8 inline-flex">
                        <div className="w-16 h-16 bg-sky-200 rounded-full flex-col justify-center items-center gap-3.5 inline-flex">
                            <div className="w-9 h-10 relative">
                            </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                            <div className="self-stretch"><span className="text-gray-900 text-xl font-normal font-['Inter']">The Job you applied for “Senior UI/UX designer needed” was </span><span className="text-gray-900 text-xl font-semibold font-['Inter']">Declined</span></div>
                            <div className="justify-start items-center gap-5 inline-flex">
                                <div className="text-slate-500 text-xl font-normal font-['Inter'] leading-10">Yesterday</div>
                                <div className="w-3 h-3 bg-zinc-300 rounded-full" />
                                <div className="text-slate-500 text-xl font-normal font-['Inter'] leading-10">11:34pm</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-20 rounded-3xl flex-col justify-start items-start gap-5 inline-flex">
                    <div className="self-stretch justify-start items-start gap-8 inline-flex">
                        <div className="w-16 h-16 bg-sky-200 rounded-full flex-col justify-center items-center gap-3.5 inline-flex">
                            <div className="w-9 h-10 relative">
                            </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                            <div className="self-stretch"><span className="text-gray-900 text-xl font-normal font-['Inter']">The Job you applied for “Senior UI/UX designer needed” was </span><span className="text-gray-900 text-xl font-semibold font-['Inter']">Declined</span></div>
                            <div className="justify-start items-center gap-5 inline-flex">
                                <div className="text-slate-500 text-xl font-normal font-['Inter'] leading-10">Yesterday</div>
                                <div className="w-3 h-3 bg-zinc-300 rounded-full" />
                                <div className="text-slate-500 text-xl font-normal font-['Inter'] leading-10">11:34pm</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-20 rounded-3xl flex-col justify-start items-start gap-5 inline-flex">
                    <div className="self-stretch justify-start items-start gap-8 inline-flex">
                        <div className="w-16 h-16 bg-sky-200 rounded-full flex-col justify-center items-center gap-3.5 inline-flex">
                            <div className="w-9 h-10 relative">
                            </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                            <div className="self-stretch"><span className="text-gray-900 text-xl font-normal font-['Inter']">Vera Clinton approved payment for the milestone</span></div>
                            <div className="justify-start items-center gap-5 inline-flex">
                                <div className="text-slate-500 text-xl font-normal font-['Inter'] leading-10">Yesterday</div>
                                <div className="w-3 h-3 bg-zinc-300 rounded-full" />
                                <div className="text-slate-500 text-xl font-normal font-['Inter'] leading-10">11:34pm</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-20 rounded-3xl flex-col justify-start items-start gap-5 inline-flex">
                    <div className="self-stretch justify-start items-start gap-8 inline-flex">
                        <div className="w-16 h-16 bg-sky-200 rounded-full flex-col justify-center items-center gap-3.5 inline-flex">
                            <div className="w-9 h-10 relative">
                            </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                            <div className="self-stretch"><span className="text-gray-900 text-xl font-normal font-['Inter']">Vera Clinton approved payment for the milestone</span></div>
                            <div className="justify-start items-center gap-5 inline-flex">
                                <div className="text-slate-500 text-xl font-normal font-['Inter'] leading-10">Yesterday</div>
                                <div className="w-3 h-3 bg-zinc-300 rounded-full" />
                                <div className="text-slate-500 text-xl font-normal font-['Inter'] leading-10">11:34pm</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-20 rounded-3xl flex-col justify-start items-start gap-5 inline-flex">
                    <div className="self-stretch justify-start items-start gap-8 inline-flex">
                        <div className="w-16 h-16 bg-sky-200 rounded-full flex-col justify-center items-center gap-3.5 inline-flex">
                            <div className="w-9 h-10 relative">
                            </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                            <div className="self-stretch"><span className="text-gray-900 text-xl font-normal font-['Inter']">Vera Clinton approved payment for the milestone</span></div>
                            <div className="justify-start items-center gap-5 inline-flex">
                                <div className="text-slate-500 text-xl font-normal font-['Inter'] leading-10">Yesterday</div>
                                <div className="w-3 h-3 bg-zinc-300 rounded-full" />
                                <div className="text-slate-500 text-xl font-normal font-['Inter'] leading-10">11:34pm</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notifications;