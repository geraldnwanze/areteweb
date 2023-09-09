import heroImage from "../images/hero-image.png";
import heroVector from "../images/hero-vector.png";

const Hero = () => {
    return (
        <section className="px-10">
            <img src={heroVector} alt="" className="absolute mt-10" />
            <div className="relative flex justify-around">
                <div className="mt-56 px-10">
                    <div className="">
                        <h1 className="text-[52px] text-[#1D2939] font-extrabold leading-[100%]">It’s Easy to Find Your <br /> <span className="text-[#690068]">Dream Job</span></h1>
                        <p className="mt-10 text-[18px]">Each month, more than 3 million job seekers turn to <br /> website in their search for work, making over 140,000 <br /> applications every single day</p>
                        <div className="bg-white h-20 rounded-2xl mt-16 flex items-center justify-between p-5">
                            <div className="flex flex-col gap-2 border-r-2">
                                <label htmlFor="">Select Job Type</label>
                                <input type="text" placeholder="UI /UX Designer" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="">Location</label>
                                <input type="text" placeholder="USA, Colorado" />
                            </div>
                            <div>
                                <button className="bg-[#FEBA00] rounded-lg px-8 py-5 text-white text-[16px] font-[600]">Action</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={heroImage} alt="" className="w-[400%]" />
                </div>
            </div>
        </section>
    )
}

export default Hero;