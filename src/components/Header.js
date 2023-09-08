const Header = (props) => {
    return (
        <header className="w-full px-10 py-5 bg-[#FFFFFF]">
            <div className="flex justify-between items-center">
                <div>
                    <img src={props.logo} alt="" />
                </div>
                <div className="flex gap-5 text-[#1D2939]">
                    <a href="/" className="text-[#FEBA00] underline underline-offset-8">Home</a>
                    <a href="/">Find Jobs</a>
                    <a href="/">Businesses</a>
                    <a href="/">Artisans</a>
                    <a href="/">Resources</a>
                </div>
                <div className="flex gap-10 items-center">
                    <a href="/">Sign In</a>
                    <a href="/" className="bg-[#6366F1] py-2 px-5 rounded-lg text-white">Sign Up</a>
                </div>
            </div>
        </header>
    )
}

export default Header;