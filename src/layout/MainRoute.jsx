import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const MainRoute = () => {
    return (
        <>
            <div className="mx-10 my-5">
                <Header></Header>
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default MainRoute;