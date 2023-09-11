import logo from "../images/logo.png";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Category from "../components/Category";
import AfterCategory from "../components/AfterCategory";

const LandingPage = () => {
    return (
        <>
            <Header logo={logo} />
            <Hero  />
            <Category  />
            <AfterCategory  />
        </>
    )
}

export default LandingPage;