import { Outlet } from "react-router-dom";
import LeftSideBar from "../components/LeftSideBar";

const Layout = () => {
    return (
        <div className="flex w-full">
            <LeftSideBar />
                <Outlet />
        </div>
    )
}

export default Layout;
