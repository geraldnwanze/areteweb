import logo from "../images/logo.png";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Category from "../components/Category";
import AfterCategory from "../components/AfterCategory";
import JobsOfTheDay from "../components/JobsOfTheDay";
import AfterJob from "../components/AfterJobs";
import TopRecruiters from "../components/TopRecruiters";
import DownloadApp from "../components/DownloadApp";
import Testimony from "../components/Testimony";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

const LandingPage = () => {
    return (
        <>
            <Header logo={logo} />
            <Hero />
            <Category />
            <AfterCategory />
            <JobsOfTheDay />
            <AfterJob />
            <TopRecruiters />
            <DownloadApp />
            <Testimony />
            <Blog />
            <Footer />
        </>
    )
}

export default LandingPage;