import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const MainRoute = () => {
    return (
        <>
            <div className="">
                <Header></Header>
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default MainRoute;

// https://i.ibb.co/5TDYcs8/Rectangle-4281.png