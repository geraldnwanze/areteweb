import logo from "../images/logo.png";
import Header from "../components/Header";
import Hero from "../components/Hero";

const LandingPage = () => {
    return (
        <>
            <Header logo={logo} />
            <Hero  />
        </>
    )
}

export default LandingPage;