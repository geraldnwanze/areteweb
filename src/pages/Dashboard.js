import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";

const Dashboard = () => {
    return (
        <div className="flex w-full">
            <LeftSideBar />
            <div className="w-[55%]">
                <h1>Dashboard</h1>
            </div>
            <RightSideBar />
        </div>
    )
}

export default Dashboard;
