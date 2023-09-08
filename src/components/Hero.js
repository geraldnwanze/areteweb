import heroImage from "../images/hero-image.png";

const Hero = () => {
    return (
        <section className="px-10">
            <div className="flex justify-around">
                <div>
                    <div className="p-32">
                        <h1 className="text-[52px] text-[#1D2939] font-extrabold">It’s Easy to Find Your <span className="text-[#690068]">Dream Job</span></h1>
                        <p>Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day</p>
                    </div>
                </div>
                <div>
                    <img src={heroImage} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero;