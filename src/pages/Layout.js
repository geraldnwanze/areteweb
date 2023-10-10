import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";

const Layout = () => {
    return (
        <div className="flex">
            <LeftSideBar />
            <RightSideBar />
        </div>
    )
}

export default Layout;
